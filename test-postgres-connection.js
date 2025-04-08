import dotenv from 'dotenv';
import pg from 'pg';
import net from 'node:net';
const { Pool } = pg;

// Initialize environment variables
dotenv.config();

// Log database configuration
console.log('=== PostgreSQL Database Configuration ===');
console.log('Host:', process.env.VITE_DB_HOST);
console.log('Database:', process.env.VITE_DB_NAME);
console.log('User:', process.env.VITE_DB_USER);
console.log('Password length:', process.env.VITE_DB_PASSWORD?.length || 0);
console.log('Default PostgreSQL port: 5432');

// First test basic TCP connection
console.log('\n=== Testing TCP Connection ===');
console.log(`Attempting to connect to ${process.env.VITE_DB_HOST}:5432...`);

const client = net.createConnection({
  host: process.env.VITE_DB_HOST,
  port: 5432,
  timeout: 5000
});

client.on('connect', () => {
  console.log('TCP connection successful! Port 5432 is reachable.');
  client.end();
  testPostgresConnection();
});

client.on('timeout', () => {
  console.error('TCP connection timed out after 5000ms.');
  console.error('This suggests the PostgreSQL port may be blocked or the service is not running.');
  client.destroy();
  process.exit(1);
});

client.on('error', (err) => {
  console.error(`TCP connection error: ${err.message}`);
  console.error('This could indicate network issues, firewall restrictions, or the PostgreSQL server is not running.');
  process.exit(1);
});

// Test actual PostgreSQL connection
async function testPostgresConnection() {
  console.log('\n=== Testing PostgreSQL Connection ===');
  
  const pool = new Pool({
    host: process.env.VITE_DB_HOST,
    database: process.env.VITE_DB_NAME,
    user: process.env.VITE_DB_USER,
    password: process.env.VITE_DB_PASSWORD,
    port: 5432,
    connectionTimeoutMillis: 10000,
  });

  try {
    console.log('Attempting to connect to PostgreSQL database...');
    const client = await pool.connect();
    console.log('PostgreSQL connection successful!');
    
    const result = await client.query('SELECT current_database() as db_name');
    console.log(`Connected to database: ${result.rows[0].db_name}`);
    
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      LIMIT 10
    `);
    
    if (tablesResult.rows.length > 0) {
      console.log('Tables in database:');
      tablesResult.rows.forEach(row => console.log(`- ${row.table_name}`));
    } else {
      console.log('No tables found in the public schema.');
    }
    
    client.release();
    await pool.end();
    console.log('Connection test completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('PostgreSQL connection error:', error.message);
    try {
      await pool.end();
    } catch (endError) {
      // Ignore errors during pool end
    }
    process.exit(1);
  }
} 