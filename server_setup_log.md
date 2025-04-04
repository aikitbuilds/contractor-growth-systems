# AI Platform Server Setup Log

## Server Information
- Server: 159.198.65.230 (server1.aininjas.pro)
- OS: Ubuntu 20.04.6 LTS

## Completed Tasks

### User Setup
- Created admin user with SSH key authentication
- Key: `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIExiGSRZrD5QQ+mH09ZLT/i1fJL4zd25uMLIM1813fmI aikit@aikitbuilds`
- Added admin to sudo group

### Software Installation
- Updated system packages
- Installed:
  - Git
  - Nginx
  - Node.js
  - npm
  - PM2
  - curl
  - ufw (firewall)

### Firewall Configuration
- Allowed OpenSSH
- Allowed Nginx Full
- Enabled UFW

## Next Steps for AI Platform Setup

### 1. Create Project Directory Structure
```bash
sudo mkdir -p /var/www/ai_platform/{backend,frontend}
sudo chown -R admin:admin /var/www/ai_platform
```

### 2. Set Up Backend
```bash
cd /var/www/ai_platform/backend
npm init -y
npm install fastify socket.io dotenv axios
```

### 3. Create Server.js File
Create a file at `/var/www/ai_platform/backend/server.js` with basic Fastify server setup:
```javascript
require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const { Server } = require('socket.io');

// Get port from environment or use default
const PORT = process.env.BACKEND_PORT || 3001;

// Socket.io setup
const io = new Server(fastify.server, {
  cors: {
    origin: '*'
  }
});

// Socket.io event handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// API Routes
fastify.get('/', async (request, reply) => {
  return { status: 'ok', message: 'AI Platform Backend API is running' };
});

// Health check endpoint
fastify.get('/health', async (request, reply) => {
  return { status: 'healthy' };
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
```

### 4. Create .env File
```bash
echo "BACKEND_PORT=3001" > .env
```

### 5. Create Memory Bank Structure
```bash
mkdir -p .memorybank
touch .memorybank/projectbrief.md .memorybank/productContext.md .memorybank/activeContext.md .memorybank/systemPatterns.md .memorybank/techContext.md .memorybank/progress.md
```

### 6. Configure Nginx
Create a file at `/etc/nginx/sites-available/ai_platform` with:
```nginx
server {
    listen 80;
    server_name server1.aininjas.pro;

    # API Endpoints
    location /api/ {
        proxy_pass http://localhost:3001/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # WebSocket Support
    location /socket.io/ {
        proxy_pass http://localhost:3001/socket.io/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Frontend (placeholder for now)
    location / {
        # Will serve frontend static files once built
        root /var/www/ai_platform/frontend/dist;
        try_files $uri $uri/ /index.html;
    }
}
```

Then enable the site:
```bash
sudo ln -sf /etc/nginx/sites-available/ai_platform /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 7. Set Up PM2 for Backend
```bash
cd /var/www/ai_platform/backend
pm2 start server.js --name ai-platform-backend
pm2 save
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u admin --hp /home/admin
```

## Troubleshooting

If encountering SSH connection issues:
- Verify SSH key permissions: `chmod 600 ~/.ssh/authorized_keys`
- Check SSH daemon configuration: `sudo nano /etc/ssh/sshd_config`
- Ensure `PubkeyAuthentication yes` is uncommented
- Restart SSH service: `sudo systemctl restart sshd` 