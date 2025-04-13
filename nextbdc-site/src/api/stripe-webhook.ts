import Stripe from 'stripe';
// TODO: Implement or copy email service
// import { sendOrderConfirmationEmail, sendEmail } from '../../services/email';

// Initialize Stripe with your secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16', // Use a fixed API version
});

// Webhook handler function (adapted for Express Request/Response types)
export async function handleStripeWebhook(req: any, res: any) { // Using 'any' for simplicity, refine later
  const signature = req.headers['stripe-signature'];
  
  if (!signature) {
    return res.status(400).send('Missing stripe-signature header');
  }
  
  let event: Stripe.Event;
  try {
    // Get the raw body (Express needs body-parser middleware for this)
    const rawBody = req.rawBody; // Assumes rawBody is available via middleware
    if (!rawBody) {
      return res.status(400).send('Webhook error: Raw body missing. Ensure body-parser is configured correctly.');
    }
    
    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || '' // Use webhook secret from env
    );
    
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  
  // Handle different event types
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log(`Checkout Session ${session.id} completed!`);
        
        // Retrieve customer details (if needed)
        // const customer = session.customer as string;
        // const customerData = await stripe.customers.retrieve(customer);
        
        // TODO: Fulfill the order (e.g., grant access, update database)

        // TODO: Send order confirmation email (if email service is set up)
        // if (session.customer_email) {
        //   await sendOrderConfirmationEmail(/* details */);
        // }
        
        break;
      }
      
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log(`Subscription ${subscription.id} event: ${event.type}`);
        // TODO: Update user subscription status in your database
        // TODO: Send relevant subscription notification email
        break;
      }
      
      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log(`Invoice ${invoice.id} paid!`);
        // TODO: Send payment confirmation email
        break;
      }
      
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log(`Invoice ${invoice.id} payment failed.`);
        // TODO: Notify customer about payment failure
        break;
      }
      
      // ... handle other event types as needed
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
    
    // Return a 200 response to acknowledge receipt of the event
    res.status(200).json({ received: true });

  } catch (error) {
    console.error('Error handling webhook event:', error);
    res.status(500).json({ error: 'Internal server error handling webhook' });
  }
} 