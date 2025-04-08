// Load environment variables
require('dotenv').config();
const mysql = require('mysql2/promise');

// Database connection config
const dbConfig = {
  host: process.env.VITE_DB_HOST,
  user: process.env.VITE_DB_USER,
  password: process.env.VITE_DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

async function initializeDatabase() {
  try {
    console.log('Connecting to MySQL server...');
    console.log(`Host: ${dbConfig.host}`);
    console.log(`User: ${dbConfig.user}`);
    
    // First connect without specifying a database
    const connection = await mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.user,
      password: dbConfig.password
    });
    
    // Create database if it doesn't exist
    const dbName = process.env.VITE_DB_NAME;
    console.log(`Creating database ${dbName} if it doesn't exist...`);
    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
    
    // Use the database
    console.log(`Using database ${dbName}...`);
    await connection.execute(`USE ${dbName}`);
    
    // Create submissions table
    console.log('Creating submissions table if it doesn\'t exist...');
    await connection.execute(`
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
    
    console.log('Database initialization completed successfully!');
    
    // Close the connection
    await connection.end();
    console.log('Database connection closed.');
    
    return true;
  } catch (error) {
    console.error('Error initializing database:', error);
    console.error(error.stack);
    return false;
  }
}

// Run the initialization
initializeDatabase()
  .then((success) => {
    if (success) {
      console.log('Database setup was successful.');
      process.exit(0);
    } else {
      console.error('Database setup failed.');
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error('Unexpected error during database setup:', error);
    process.exit(1);
  }); 