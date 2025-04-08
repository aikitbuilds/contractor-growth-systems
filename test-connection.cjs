// Load environment variables from .env file
require('dotenv').config();

// Log database configuration 
console.log('=== Database Configuration ===');
console.log('Host:', process.env.VITE_DB_HOST);
console.log('User:', process.env.VITE_DB_USER);
console.log('Database:', process.env.VITE_DB_NAME);
console.log('Password length:', process.env.VITE_DB_PASSWORD ? process.env.VITE_DB_PASSWORD.length : 0);

// Test TCP connection to MySQL port
console.log('\n=== Testing TCP connection ===');
const net = require('net');

const client = new net.Socket();
const timeout = 5000;

// Set timeout
client.setTimeout(timeout);

console.log(`Connecting to ${process.env.VITE_DB_HOST}:3306...`);

// Handle events
client.on('connect', function() {
  console.log('SUCCESS: TCP connection established to port 3306');
  client.destroy();
  process.exit(0);
});

client.on('timeout', function() {
  console.error('ERROR: Connection timed out after', timeout, 'ms');
  client.destroy();
  process.exit(1);
});

client.on('error', function(err) {
  console.error('ERROR:', err.message);
  process.exit(1);
});

// Attempt connection
try {
  client.connect(3306, process.env.VITE_DB_HOST);
} catch (e) {
  console.error('ERROR during connect attempt:', e.message);
  process.exit(1);
} 