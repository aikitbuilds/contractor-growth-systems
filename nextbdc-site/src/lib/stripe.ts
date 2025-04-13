import { loadStripe } from '@stripe/stripe-js';

// Use Vite's way of accessing environment variables
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  console.error('VITE_STRIPE_PUBLISHABLE_KEY is not set in .env file.');
  // Optionally throw an error or handle this case appropriately
  // throw new Error('Missing Stripe Publishable Key');
}

// Initialize Stripe.js with the publishable key
export const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null; 