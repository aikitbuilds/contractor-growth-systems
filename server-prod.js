// server-prod.js - Express server for production
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Determine the correct path to the dist directory
// When running from dist-server/server.js, we need to go up one level
const distPath = resolve(__dirname, '..', 'dist');
console.log('Serving static files from:', distPath);

// Serve static files from the dist directory
app.use(express.static(distPath));

// Health check endpoint for Render
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// API endpoints can be added here

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  const indexPath = join(distPath, 'index.html');
  console.log('Serving fallback index.html from:', indexPath);
  res.sendFile(indexPath);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 