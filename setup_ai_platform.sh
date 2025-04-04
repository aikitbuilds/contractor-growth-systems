#!/bin/bash

echo "===== PHASE 2: DATABASE SETUP ====="
sudo -u postgres psql << EOL
CREATE USER ai_platform_user WITH PASSWORD 'AI_platform_2025!';
CREATE DATABASE ai_platform_db;
GRANT ALL PRIVILEGES ON DATABASE ai_platform_db TO ai_platform_user;
EOL

echo "===== PHASE 3: CORE PROJECT STRUCTURE ====="
sudo mkdir -p /var/www/ai_platform/backend /var/www/ai_platform/frontend
sudo chown -R admin:admin /var/www/ai_platform
cd /var/www/ai_platform/backend

echo "===== Setting up Node.js project ====="
npm init -y
npm install fastify socket.io pg dotenv axios

echo "===== Creating server.js ====="
cat > server.js << 'EOCONTENT'
require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const { Server } = require('socket.io');
const { Client } = require('pg');

// Get port from environment or use default
const PORT = process.env.BACKEND_PORT || 3001;

// Database connection
const createDbClient = () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });
  return client;
};

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
  try {
    const client = createDbClient();
    await client.connect();
    await client.query('SELECT NOW()');
    await client.end();
    
    return { 
      status: 'healthy',
      services: {
        api: 'up',
        database: 'up'
      },
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    fastify.log.error(error);
    return reply
      .code(500)
      .send({ 
        status: 'unhealthy',
        services: {
          api: 'up',
          database: 'down'
        },
        error: error.message,
        timestamp: new Date().toISOString()
      });
  }
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
EOCONTENT

echo "===== Creating .env file ====="
cat > .env << 'EOCONTENT'
DATABASE_URL=postgresql://ai_platform_user:AI_platform_2025!@localhost:5432/ai_platform_db
BACKEND_PORT=3001
EOCONTENT

echo "===== Creating .gitignore ====="
cat > .gitignore << 'EOCONTENT'
node_modules
.env
.DS_Store
EOCONTENT

echo "===== PHASE 4: MEMORY BANK SETUP ====="
mkdir .memorybank
touch .memorybank/projectbrief.md .memorybank/productContext.md .memorybank/activeContext.md .memorybank/systemPatterns.md .memorybank/techContext.md .memorybank/progress.md

echo "===== PHASE 5: NGINX CONFIGURATION ====="
sudo bash -c 'cat > /etc/nginx/sites-available/ai_platform << EOF
server {
    listen 80;
    server_name server1.aininjas.pro;

    # API Endpoints
    location /api/ {
        proxy_pass http://localhost:3001/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    # WebSocket Support
    location /socket.io/ {
        proxy_pass http://localhost:3001/socket.io/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    # Frontend (placeholder for now)
    location / {
        # Will serve frontend static files once built
        root /var/www/ai_platform/frontend/dist;
        try_files \$uri \$uri/ /index.html;
    }
}
EOF'

# Enable site and restart Nginx
sudo ln -sf /etc/nginx/sites-available/ai_platform /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

echo "===== PHASE 7: RUNNING BACKEND WITH PM2 ====="
cd /var/www/ai_platform/backend
pm2 start server.js --name ai-platform-backend
pm2 save
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u admin --hp /home/admin

echo "===== SETUP COMPLETE ====="
echo "Server setup is now complete!"
echo "Backend is running at http://server1.aininjas.pro/api/" 