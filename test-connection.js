import dotenv from 'dotenv';
import { createConnection } from 'node:net';

// Initialize environment variables
dotenv.config();

// Log essential configuration
console.log('=== Database Configuration ===');
console.log('Host:', process.env.VITE_DB_HOST);
console.log('User:', process.env.VITE_DB_USER);
console.log('Database:', process.env.VITE_DB_NAME);
console.log(`Password Length: ${process.env.VITE_DB_PASSWORD?.length || 0}`);

// Check if MySQL port is open
console.log('\n=== Testing TCP Connection to MySQL port ===');
console.log(`Connecting to ${process.env.VITE_DB_HOST}:3306...`);

const client = createConnection({
  host: process.env.VITE_DB_HOST,
  port: 3306,
  timeout: 5000
});

client.on('connect', () => {
  console.log('SUCCESS: TCP connection established to port 3306');
  client.end();
  process.exit(0);
});

client.on('timeout', () => {
  console.error('ERROR: Connection timed out - port 3306 is not responding');
  client.destroy();
  process.exit(1);
});

client.on('error', (err) => {
  console.error('ERROR: Failed to connect -', err.message);
  process.exit(1);
}); 