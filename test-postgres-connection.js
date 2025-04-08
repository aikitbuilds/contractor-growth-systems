import dotenv from 'dotenv';
import pg from 'pg';
import net from 'node:net';
const { Pool } = pg;

// Initialize environment variables
dotenv.config();

/**
 * PostgreSQL Connection Test with SSH Tunnel
 * This script tests connection to PostgreSQL through an SSH tunnel.
 * 
 * Before running this script:
 * 1. Make sure you have set up an SSH tunnel using:
 *    ssh -L 5432:localhost:5432 your_ssh_username@your_ssh_server -p 22
 * 2. Verify your .env file has the correct database credentials
 */

console.log('=== PostgreSQL SSH Tunnel Connection Test ===');
console.log('Configuration:');
console.log(`Host: ${process.env.VITE_DB_HOST}`);
console.log(`Database: ${process.env.VITE_DB_NAME}`);
console.log(`User: ${process.env.VITE_DB_USER}`);
console.log(`Password: ${'*'.repeat(process.env.VITE_DB_PASSWORD?.length || 0)}`);
console.log(`Port: ${process.env.VITE_DB_PORT || 5432}`);
console.log(`SSL: ${process.env.VITE_DB_SSL === 'true' ? 'Enabled' : 'Disabled'}`);

// First test basic TCP connection to verify SSH tunnel
console.log('\n=== Step 1: Testing TCP Connection (SSH Tunnel) ===');
console.log(`Attempting to connect to ${process.env.VITE_DB_HOST}:${process.env.VITE_DB_PORT || 5432}...`);

const client = net.createConnection({
  host: process.env.VITE_DB_HOST,
  port: parseInt(process.env.VITE_DB_PORT || '5432'),
  timeout: 5000
});

client.on('connect', () => {
  console.log(`✅ TCP connection successful! Port ${process.env.VITE_DB_PORT || 5432} is reachable.`);
  console.log('This indicates your SSH tunnel is working correctly.');
  client.end();
  // Move to next test after successful TCP connection
  testPostgresConnection();
});

client.on('timeout', () => {
  console.error('❌ TCP connection timed out after 5000ms.');
  console.error('\nPossible issues:');
  console.error('1. SSH tunnel is not active or not configured correctly');
  console.error('2. The PostgreSQL service on the server is not running');
  console.error('3. Firewall restrictions are blocking the connection');
  
  console.error('\n💡 SSH Tunnel Setup Reminder:');
  console.error('Run this command in a separate terminal window:');
  console.error('ssh -L 5432:localhost:5432 your_ssh_username@your_ssh_server -p 22');
  console.error('Keep the SSH tunnel running while testing or using the application.');
  client.destroy();
  process.exit(1);
});

client.on('error', (err) => {
  console.error(`❌ TCP connection error: ${err.message}`);
  
  if (err.code === 'ECONNREFUSED') {
    console.error('\nConnection refused. Possible causes:');
    console.error('1. SSH tunnel is not running');
    console.error('2. Local PostgreSQL is already using port 5432 - try a different local port');
    console.error('3. The .env file has incorrect host or port configuration');
  } else {
    console.error('\nPossible issues:');
    console.error('1. Network connectivity problems');
    console.error('2. SSH tunnel configuration errors');
    console.error('3. PostgreSQL server is not running on the remote server');
  }
  
  console.error('\n💡 See SSH-TUNNEL-SETUP.md for detailed instructions');
  process.exit(1);
});

// Test PostgreSQL connection through SSH tunnel
async function testPostgresConnection() {
  console.log('\n=== Step 2: Testing PostgreSQL Connection ===');
  
  // Configure connection with values from .env file
  const pool = new Pool({
    host: process.env.VITE_DB_HOST,
    database: process.env.VITE_DB_NAME,
    user: process.env.VITE_DB_USER,
    password: process.env.VITE_DB_PASSWORD,
    port: parseInt(process.env.VITE_DB_PORT || '5432'),
    connectionTimeoutMillis: 10000,
    ssl: process.env.VITE_DB_SSL === 'true' ? { rejectUnauthorized: false } : false
  });

  try {
    console.log('Attempting to connect to PostgreSQL database through the SSH tunnel...');
    const dbClient = await pool.connect();
    console.log('✅ PostgreSQL connection successful!');
    
    // Get basic connection info
    const result = await dbClient.query('SELECT current_database() as db_name, current_user as user_name, version() as version');
    console.log('\n=== Connection Details ===');
    console.log(`Connected to database: ${result.rows[0].db_name}`);
    console.log(`Connected as user: ${result.rows[0].user_name}`);
    console.log(`PostgreSQL version: ${result.rows[0].version.split(',')[0]}`);
    
    // Try to list tables
    try {
      const tablesResult = await dbClient.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
        ORDER BY table_name
        LIMIT 10
      `);
      
      if (tablesResult.rows.length > 0) {
        console.log('\n=== Tables in Database ===');
        for (const row of tablesResult.rows) {
          console.log(`- ${row.table_name}`);
        }
      } else {
        console.log('\nNo tables found in the public schema.');
      }
    } catch (schemaError) {
      console.error('Could not retrieve table list:', schemaError.message);
    }
    
    // Clean up connections
    dbClient.release();
    await pool.end();
    
    console.log('\n🎉 Success! Your SSH tunnel and PostgreSQL connection are working.');
    console.log('You can now run the application and it will connect to the remote database through the SSH tunnel.');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ PostgreSQL connection error:', error.message);
    
    // Provide specific advice based on the error
    if (error.message.includes('password authentication failed')) {
      console.error('\nAuthentication Error: Check your database username and password in the .env file.');
    } else if (error.message.includes('connect ECONNREFUSED')) {
      console.error('\nConnection Refused: Make sure your SSH tunnel is running and properly forwarding port 5432.');
    } else if (error.message.includes('database') && error.message.includes('does not exist')) {
      console.error('\nDatabase Not Found: The specified database name does not exist on the server.');
    } else if (error.message.includes('role') && error.message.includes('does not exist')) {
      console.error('\nUser Not Found: The specified database user does not exist on the server.');
    }
    
    console.error('\n💡 SSH Tunnel Reminder:');
    console.error('Remember that you need an active SSH tunnel to connect to the database during development.');
    console.error('1. Set up the SSH tunnel using: ssh -L 5432:localhost:5432 your_ssh_username@your_ssh_server');
    console.error('2. Keep the SSH tunnel running while you use the application');
    console.error('3. See SSH-TUNNEL-SETUP.md for detailed instructions');
    
    try {
      await pool.end();
    } catch (endError) {
      // Ignore errors during pool end
    }
    process.exit(1);
  }
} 