import pg from 'pg';
import { Submission } from './submission';

/**
 * Database Connection Configuration
 * 
 * For development: Use SSH tunnel to connect to the remote database
 * - Set up SSH tunnel using: ssh -L 5432:localhost:5432 ssh_username@ssh_host
 * - Connect to localhost:5432 which forwards to the remote PostgreSQL server
 * 
 * For production: Connect directly to localhost since the app and DB are on the same server
 * - No SSH tunnel needed, direct connection to localhost:5432
 */

// Database connection config
const dbConfig = {
  host: import.meta.env.VITE_DB_HOST,
  database: import.meta.env.VITE_DB_NAME,
  user: import.meta.env.VITE_DB_USER,
  password: import.meta.env.VITE_DB_PASSWORD,
  port: parseInt(import.meta.env.VITE_DB_PORT || '5432'),
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
  // Additional options for stability
  connectionTimeoutMillis: 10000,
  ssl: import.meta.env.VITE_DB_SSL === 'true' ? { rejectUnauthorized: false } : false
};

// Log connection details (for debugging, mask sensitive info in production)
console.log('Database connection config:', {
  host: dbConfig.host,
  database: dbConfig.database,
  user: dbConfig.user,
  password: dbConfig.password ? '****' : null,
  port: dbConfig.port,
  ssl: dbConfig.ssl ? 'enabled' : 'disabled'
});

// Create a connection pool
const pool = new pg.Pool(dbConfig);

// Handle pool errors
pool.on('error', (err: Error) => {
  console.error('Unexpected error on idle PostgreSQL client', err);
});

// Initialize database by creating tables if they don't exist
export async function initDatabase() {
  const client = await pool.connect();
  try {
    // Create submissions table
    await client.query(`
      CREATE TABLE IF NOT EXISTS submissions (
        id VARCHAR(50) PRIMARY KEY,
        type VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        name VARCHAR(255),
        message TEXT,
        phone VARCHAR(50),
        company VARCHAR(255),
        resource_id VARCHAR(255),
        resource_name VARCHAR(255),
        course_id VARCHAR(255),
        course_name VARCHAR(255),
        interests TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        email_sent BOOLEAN DEFAULT FALSE,
        email_id VARCHAR(255)
      )
    `);
    
    console.log('Database initialized successfully');
    return true;
  } catch (error) {
    console.error('Error initializing database:', error);
    return false;
  } finally {
    client.release();
  }
}

// Save a submission to the database
export async function saveSubmission(submission: Submission): Promise<Submission> {
  const client = await pool.connect();
  try {
    const id = submission.id || `sub_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const createdAt = submission.createdAt || new Date();
    
    // Prepare values based on submission type
    const values: Record<string, any> = {
      id,
      type: submission.type,
      email: submission.email,
      name: submission.name || null,
      created_at: createdAt,
      email_sent: submission.emailSent || false,
      email_id: submission.emailId || null
    };
    
    // Add type-specific fields
    switch(submission.type) {
      case 'contact':
        if ('message' in submission) values.message = submission.message;
        if ('phone' in submission) values.phone = submission.phone;
        if ('company' in submission) values.company = submission.company;
        break;
        
      case 'resource_download':
        if ('resourceId' in submission) values.resource_id = submission.resourceId;
        if ('resourceName' in submission) values.resource_name = submission.resourceName;
        break;
        
      case 'course_interest':
        if ('courseId' in submission) values.course_id = submission.courseId;
        if ('courseName' in submission) values.course_name = submission.courseName;
        break;
        
      case 'newsletter':
        if ('interests' in submission && Array.isArray(submission.interests)) {
          values.interests = submission.interests.join(',');
        }
        break;
    }
    
    // Build the SQL query dynamically
    const columns = Object.keys(values);
    const placeholders = Object.keys(values).map((_, index) => `$${index + 1}`).join(', ');
    
    // Insert the submission
    await client.query(
      `INSERT INTO submissions (${columns.map(key => `"${key}"`).join(', ')}) VALUES (${placeholders})`,
      Object.values(values)
    );
    
    // Return the saved submission with id and createdAt
    return {
      ...submission,
      id,
      createdAt
    };
  } catch (error) {
    console.error('Error saving submission to database:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Update a submission in the database
export async function updateSubmission(id: string, updates: Partial<Submission>): Promise<boolean> {
  const client = await pool.connect();
  try {
    // Skip if no updates
    if (Object.keys(updates).length === 0) return true;
    
    // Convert camelCase keys to snake_case for database columns
    const dbUpdates: Record<string, any> = {};
    for (const [key, value] of Object.entries(updates)) {
      const dbKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      dbUpdates[dbKey] = value;
    }
    
    // Prepare SET clause
    const keys = Object.keys(dbUpdates);
    const setClause = keys.map((key, index) => `"${key}" = $${index + 1}`).join(', ');
    
    // Parameters: update values followed by id
    const values = [...Object.values(dbUpdates), id];
    
    // Update the submission
    await client.query(
      `UPDATE submissions SET ${setClause} WHERE id = $${values.length}`,
      values
    );
    
    return true;
  } catch (error) {
    console.error('Error updating submission in database:', error);
    return false;
  } finally {
    client.release();
  }
}

// Get all submissions from the database
export async function getAllSubmissions(): Promise<Submission[]> {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM submissions ORDER BY created_at DESC');
    
    // Convert the rows to Submission objects
    return result.rows.map(row => formatSubmissionFromDb(row));
  } catch (error) {
    console.error('Error getting submissions from database:', error);
    return [];
  } finally {
    client.release();
  }
}

// Get submissions by email
export async function getSubmissionsByEmail(email: string): Promise<Submission[]> {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'SELECT * FROM submissions WHERE email = $1 ORDER BY created_at DESC',
      [email]
    );
    
    // Convert the rows to Submission objects
    return result.rows.map(row => formatSubmissionFromDb(row));
  } catch (error) {
    console.error('Error getting submissions from database:', error);
    return [];
  } finally {
    client.release();
  }
}

// Helper function to convert database row to Submission object
function formatSubmissionFromDb(row: any): Submission {
  // Base submission properties
  const submission: Record<string, any> = {
    id: row.id,
    type: row.type,
    email: row.email,
    name: row.name,
    createdAt: row.created_at,
    emailSent: Boolean(row.email_sent),
    emailId: row.email_id
  };
  
  // Add type-specific properties
  switch(row.type) {
    case 'contact':
      if (row.message) submission.message = row.message;
      if (row.phone) submission.phone = row.phone;
      if (row.company) submission.company = row.company;
      break;
      
    case 'resource_download':
      if (row.resource_id) submission.resourceId = row.resource_id;
      if (row.resource_name) submission.resourceName = row.resource_name;
      break;
      
    case 'course_interest':
      if (row.course_id) submission.courseId = row.course_id;
      if (row.course_name) submission.courseName = row.course_name;
      break;
      
    case 'newsletter':
      if (row.interests) submission.interests = row.interests.split(',');
      break;
  }
  
  return submission as Submission;
}

// Export the database initialization
export default {
  init: initDatabase,
  saveSubmission,
  updateSubmission,
  getAllSubmissions,
  getSubmissionsByEmail
}; 