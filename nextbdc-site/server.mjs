import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { handleStripeWebhook } from './src/api/stripe-webhook.js';
import { createCheckoutSession } from './src/api/create-checkout-session.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001; // Use port 3001 for backend

// --- Middleware --- 

// Enable CORS for all origins (adjust for production)
app.use(cors());

// Special middleware for Stripe webhook: needs raw body
app.post('/api/stripe-webhook', 
  express.raw({ type: 'application/json' }), // Read raw body for webhook verification
  (req, res) => {
    // Attach raw body to request object for handler
    req.rawBody = req.body;
    handleStripeWebhook(req, res);
  }
);

// General JSON body parsing for other routes
app.use(express.json());

// --- API Routes --- 

app.post('/api/create-checkout-session', createCheckoutSession);

// --- Server Start --- 

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
}); 