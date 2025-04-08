import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

// Load .env file
dotenv.config();

async function testConnection() {
  console.log('Testing database connection...');
  
  // Log the connection details
  console.log(`Host: ${process.env.VITE_DB_HOST}`);
  console.log(`Database: ${process.env.VITE_DB_NAME}`);
  console.log(`User: ${process.env.VITE_DB_USER}`);
  console.log(`Password length: ${process.env.VITE_DB_PASSWORD ? process.env.VITE_DB_PASSWORD.length : 0}`);

  try {
    // Create a connection
    const connection = await mysql.createConnection({
      host: process.env.VITE_DB_HOST,
      user: process.env.VITE_DB_USER,
      password: process.env.VITE_DB_PASSWORD
    });
    
    console.log('Connected to MySQL server successfully!');
    
    // Create database if it doesn't exist
    const dbName = process.env.VITE_DB_NAME;
    console.log(`Creating database ${dbName} if it doesn't exist...`);
    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
    
    // Use the database
    console.log(`Switching to database ${dbName}...`);
    await connection.execute(`USE ${dbName}`);
    
    // Create test table
    console.log('Creating test table...');
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS test_table (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Insert test data
    console.log('Inserting test data...');
    const result = await connection.execute('INSERT INTO test_table (name) VALUES (?)', ['Test entry']);
    console.log('Inserted row:', result[0].insertId);
    
    // Query test data
    console.log('Querying test data...');
    const [rows] = await connection.execute('SELECT * FROM test_table');
    console.log('Query result:', JSON.stringify(rows, null, 2));
    
    // Close connection
    await connection.end();
    console.log('Connection closed.');
    
    return true;
  } catch (error) {
    console.error('Error testing database connection:');
    console.error(error);
    return false;
  }
}

// Run the test
testConnection()
  .then(success => {
    console.log(`Database test ${success ? 'succeeded' : 'failed'}.`);
    process.exit(success ? 0 : 1);
  })
  .catch(error => {
    console.error('Unexpected error:', error);
    process.exit(1);
  }); 