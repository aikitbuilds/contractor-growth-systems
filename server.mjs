import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Serve static files
app.use(express.static('dist'));

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.VITE_EMAIL_SERVER_HOST,
    port: Number.parseInt(process.env.VITE_EMAIL_SERVER_PORT, 10),
    secure: process.env.VITE_EMAIL_SERVER_PORT === '465',
    auth: {
      user: process.env.VITE_EMAIL_SERVER_USER,
      pass: process.env.VITE_EMAIL_SERVER_PASSWORD,
    },
  });
};

// API Routes

// Create Stripe Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  const { priceId, successUrl, cancelUrl } = req.body;
  
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
    
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Stripe webhook handler
app.post('/api/webhooks/stripe', async (req, res) => {
  let event;
  
  try {
    const sig = req.headers['stripe-signature'];
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }
  
  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed':
        // Payment was successful
        console.log('Checkout session completed:', event.data.object);
        // Fulfill the order
        break;
      case 'payment_intent.succeeded':
        // Payment succeeded
        console.log('Payment succeeded:', event.data.object);
        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}`);
    }
    
    res.json({ received: true });
  } catch (error) {
    console.error(`Error handling ${event.type}:`, error);
    res.status(500).json({ error: error.message });
  }
});

// Email API endpoint
app.post('/api/send-email', async (req, res) => {
  const { to, subject, message } = req.body;

  if (!to) {
    return res.status(400).json({ success: false, error: 'Recipient email is required' });
  }

  try {
    const transporter = createTransporter();

    // Send the email
    const info = await transporter.sendMail({
      from: `"BDC Team" <${process.env.VITE_EMAIL_FROM}>`,
      to,
      subject: subject || 'Test Email from BDC',
      text: message || 'This is a test email from BDC.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #034694;">Billion Dollar Contractor</h2>
          <p>${message || 'This is a test email from BDC.'}</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #666;">
              This is a test confirmation email from Billion Dollar Contractor.
              <br />
              Contact us: 1-888-850-2095 | PO Box 322, Seaside OR 97138
            </p>
          </div>
        </div>
      `,
    });

    console.log('Email sent successfully:', info.messageId);
    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// GHL API endpoint
app.post('/api/ghl/create-contact', async (req, res) => {
  const { firstName, lastName, email, phone, companyName } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ 
      success: false, 
      error: 'First name, last name, and email are required' 
    });
  }

  try {
    // Prepare contact data for GHL
    const contactData = {
      firstName,
      lastName,
      email,
      phone,
      companyName,
      source: "BDC Website Test"
    };

    // Make API call to GHL
    const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GHL_API_KEY}`
      },
      body: JSON.stringify(contactData)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error creating contact in GHL');
    }

    console.log('GHL contact created successfully:', data.id);
    return res.status(200).json({ 
      success: true, 
      contactId: data.id, 
      message: 'Contact created successfully in GHL' 
    });
  } catch (error) {
    console.error('Error creating GHL contact:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message || 'Error creating contact in GHL' 
    });
  }
});

// Fallback route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 