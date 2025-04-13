import Stripe from 'stripe';
import type { Request, Response } from 'express'; // Import Express types

// Define Product IDs (replace with your actual Stripe Product IDs)
// const PRODUCT_IDS = { // Commented out as unused for now
//   early_bird: 'prod_YOUR_EARLY_BIRD_PRODUCT_ID', 
//   standard: 'prod_YOUR_STANDARD_PRODUCT_ID',
//   upsell: 'prod_YOUR_UPSELL_PRODUCT_ID',
// };

// Define Price IDs (replace with your actual Stripe Price IDs)
const PRICE_IDS = {
  early_bird: process.env.STRIPE_PRICE_ID_EARLY_BIRD || 'price_DEFAULT_EARLY_BIRD', 
  standard: process.env.STRIPE_PRICE_ID_STANDARD || 'price_DEFAULT_STANDARD', 
  upsell: process.env.STRIPE_PRICE_ID_UPSELL || 'price_DEFAULT_UPSELL',
  ai_starter: process.env.STRIPE_PRICE_ID_AI_STARTER || 'price_DEFAULT_AI_STARTER',
  ai_pro: process.env.STRIPE_PRICE_ID_AI_PRO || 'price_DEFAULT_AI_PRO',
  ai_enterprise: process.env.STRIPE_PRICE_ID_AI_ENTERPRISE || 'price_DEFAULT_AI_ENTERPRISE',
};

// Initialize Stripe with your secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16' as Stripe.LatestApiVersion, // Cast to LatestApiVersion type
  typescript: true, // Required for proper type checking
});

// Express handler to create a Stripe Checkout Session
export async function createCheckoutSession(req: Request, res: Response) { // Use Express types
  const { plan = 'early_bird', includeUpsell = false } = req.body;

  const successUrl = `${process.env.APP_URL || 'http://localhost:5173'}/payment-success?session_id={CHECKOUT_SESSION_ID}`;
  let cancelUrl: string;
  
  // Determine cancel URL based on plan type
  if (plan.startsWith('ai_')) {
    cancelUrl = `${process.env.APP_URL || 'http://localhost:5173'}/solar-ai-assistant`;
  } else {
    cancelUrl = `${process.env.APP_URL || 'http://localhost:5173'}/checkout?plan=${plan === 'standard' ? 'standard' : 'early'}`;
  }

  try {
    // Validate plan
    const validPlans = ['early_bird', 'standard', 'ai_starter', 'ai_pro', 'ai_enterprise'];
    if (!validPlans.includes(plan)) {
      return res.status(400).json({ error: 'Invalid plan specified.' });
    }

    // Determine the main product and price
    let mainPriceId: string;
    
    // Select the appropriate price ID based on the plan
    if (plan.startsWith('ai_')) {
      mainPriceId = PRICE_IDS[plan as keyof typeof PRICE_IDS];
    } else {
      mainPriceId = plan === 'standard' ? PRICE_IDS.standard : PRICE_IDS.early_bird;
    }
    
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        price: mainPriceId,
        quantity: 1,
      },
    ];

    // Add upsell item if included (only for bootcamp plans)
    if (includeUpsell && !plan.startsWith('ai_')) {
      lineItems.push({
        price: PRICE_IDS.upsell,
        quantity: 1,
      });
    }

    // Create the Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment', // Use 'payment' for one-time purchases
      success_url: successUrl,
      cancel_url: cancelUrl,
      // Automatically collect billing address (optional)
      // billing_address_collection: 'required',
      // Automatically collect phone number (optional)
      // phone_number_collection: {
      //   enabled: true,
      // },
      // Allow promo codes
      allow_promotion_codes: true,
    });

    if (!session.url) {
      return res.status(500).json({ error: 'Could not create Stripe Checkout session.' });
    }

    // Return the session ID and URL to the client
    res.status(200).json({ sessionId: session.id, url: session.url });

  } catch (error: unknown) { // Type error as unknown
    console.error('Error creating Stripe Checkout Session:', error);
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: `Internal Server Error: ${message}` });
  }
} 