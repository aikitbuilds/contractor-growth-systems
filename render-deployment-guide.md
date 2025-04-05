# Render Deployment Guide & Troubleshooting

## Current Configuration

### .render.yaml
```yaml
services:
  - type: web
    name: contractor-growth-systems
    env: node
    buildCommand: apt-get update && apt-get install -y build-essential python3 node-gyp && bun install && npm run build && mkdir -p dist-server && cp server-prod.js dist-server/server.js && echo '{"type":"module"}' > dist-server/package.json
    startCommand: npm start
```

### .node-version
```
18.19.0
```

### .npmrc
```
legacy-peer-deps=true
engine-strict=false
omit=optional
```

### bunfig.toml
```toml
[install]
optional = false

[install.cache]
dir = ".bun"
```

### package.json (relevant portions)
```json
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "preinstall": "npm install -g node-gyp",
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview",
    "start": "node dist-server/server.js",
    "start:dashboard": "node dashboard-server.js",
    "start:all": "concurrently \"npm run dev\" \"npm run start:dashboard\""
  },
  // Dependencies removed for brevity
}
```

### server-prod.js
```javascript
// server-prod.js - Express server for production
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(join(__dirname, 'dist')));

// API endpoints can be added here

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Deployment Issues Encountered

### 1. Missing node-gyp

```
/usr/bin/bash: line 1: node-gyp: command not found
error: install script from "cpu-features" exited with 127
```

This error occurred because the build process needed node-gyp to compile native dependencies, particularly from the puppeteer package.

### 2. Incompatible Fastify Plugin

```
{"level":50,"time":1743859478466,"pid":36224,"hostname":"aikitbuilds","err":{"type":"FastifyError","message":"fastify-plugin: @fastify/static - expected '5.x' fastify version, '4.29.0' is installed"
```

This error occurred when trying to use the @fastify/static plugin with an incompatible version of Fastify.

### 3. ES Modules vs CommonJS Confusion

The package.json has `"type": "module"` but some server files were using CommonJS syntax with `require()`.

## Solutions Attempted

1. **Created Configuration Files for Render:**
   - Added .render.yaml, .node-version, .npmrc, and bunfig.toml

2. **Removed Problematic Dependencies:**
   - Removed puppeteer from package.json
   - Disabled PDF generation functionality in dashboard-server.js

3. **Changed Server Implementation:**
   - Created a dedicated server-prod.js file using Express.js for production
   - Updated package.json start script to use the new server

4. **Added Build Commands in Render.yaml:**
   - Added commands to install native build tools
   - Added step to create proper Node.js ES module configuration

## Next Steps for Successful Deployment

1. **Consider Using a Different Platform:**
   - Vercel, Netlify, or GitHub Pages might be easier for a purely frontend application
   - Heroku or Railway for applications needing backend capabilities

2. **Alternative Configurations to Try:**
   - Use a Docker-based deployment on Render instead of the managed Node service
   - Create a Dockerfile to fully control the build environment

3. **Split Frontend and Backend:**
   - Deploy static frontend separately from the backend API
   - Use Netlify/Vercel for frontend and Render for backend only

4. **Simplify the Codebase:**
   - Eliminate all native dependencies (puppeteer, etc.)
   - Refactor to be a pure Node.js/Express application without Bun

## Local Development Instructions

1. **Run local development server:**
   ```
   npm run dev
   ```

2. **Build for production:**
   ```
   npm run build
   ```

3. **Preview production build:**
   ```
   npm run preview
   ```

4. **Run dashboard server:**
   ```
   npm run start:dashboard
   ```

5. **Run all services concurrently:**
   ```
   npm run start:all
   ``` 