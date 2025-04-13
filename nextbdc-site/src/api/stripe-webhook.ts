import Stripe from 'stripe';
import { 
  sendOrderConfirmationEmail, 
  sendSubscriptionWelcomeEmail,
  sendSubscriptionUpdateEmail,
  sendSubscriptionCancelledEmail,
  sendPaymentConfirmationEmail,
  sendPaymentFailureEmail 
} from '../services/email';
import type { Request, Response } from 'express';

// Initialize Stripe with your secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16' as Stripe.LatestApiVersion, // Cast to LatestApiVersion type
});

// Webhook handler function (adapted for Express Request/Response types)
export async function handleStripeWebhook(req: Request, res: Response) {
  const signature = req.headers['stripe-signature'] as string | undefined;
  
  if (!signature) {
    return res.status(400).send('Missing stripe-signature header');
  }
  
  let event: Stripe.Event;
  try {
    // Get the raw body (Express needs body-parser middleware for this)
    const rawBody = req.rawBody as Buffer; // Assumes rawBody is available via middleware
    if (!rawBody) {
      return res.status(400).send('Webhook error: Raw body missing. Ensure body-parser is configured correctly.');
    }
    
    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || '' // Use webhook secret from env
    );
    
  } catch (err: unknown) {
    console.error(`Webhook signature verification failed: ${err instanceof Error ? err.message : String(err)}`);
    return res.status(400).send(`Webhook Error: ${err instanceof Error ? err.message : String(err)}`);
  }
  
  // Handle different event types
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log(`Checkout Session ${session.id} completed!`);
        
        // Retrieve customer details if available
        if (session.customer && typeof session.customer === 'string') {
          const customer = await stripe.customers.retrieve(session.customer);
          
          if (!('deleted' in customer)) {
            const customerName = customer.name || 'Customer';
            const customerEmail = customer.email;
            
            // Retrieve the line items for the session
            const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
            
            // Format items for the email
            const items = lineItems.data.map(item => {
              return `${item.description || 'Product'} - $${(item.amount_total || 0) / 100}`;
            });
            
            // Get payment intent to retrieve payment method details
            if (session.payment_intent && typeof session.payment_intent === 'string') {
              const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent);
              const paymentMethod = paymentIntent.payment_method_types?.[0] || 'card';
              
              // Send order confirmation email
              if (customerEmail) {
                await sendOrderConfirmationEmail(
                  customerEmail,
                  customerName,
                  {
                    orderId: session.id,
                    amount: (session.amount_total || 0) / 100,
                    items,
                    paymentMethod
                  }
                );
              }
            } else {
              // Fall back to simpler order confirmation if payment intent isn't available
              if (customerEmail) {
                await sendOrderConfirmationEmail(
                  customerEmail,
                  customerName,
                  {
                    orderId: session.id,
                    amount: (session.amount_total || 0) / 100,
                    items
                  }
                );
              }
            }
          }
        } else if (session.customer_email) {
          // If we only have the customer email but not the customer object
          const customerName = 'Customer'; // Default name
          const items = ['Bootcamp Registration']; // Default item
          
          await sendOrderConfirmationEmail(
            session.customer_email,
            customerName,
            {
              orderId: session.id,
              amount: (session.amount_total || 0) / 100,
              items
            }
          );
        }
        
        break;
      }
      
      case 'customer.subscription.created': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log(`Subscription ${subscription.id} created`);
        
        // Get customer details
        if (subscription.customer && typeof subscription.customer === 'string') {
          const customer = await stripe.customers.retrieve(subscription.customer);
          
          if (!('deleted' in customer) && customer.email) {
            // Determine the plan name from the subscription
            const plan = subscription.items.data[0]?.price.nickname || 'Premium';
            
            // Send welcome email for new subscription
            await sendSubscriptionWelcomeEmail(
              customer.email,
              customer.name || 'Customer',
              plan
            );
          }
        }
        
        break;
      }
      
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log(`Subscription ${subscription.id} updated`);
        
        // Get customer details
        if (subscription.customer && typeof subscription.customer === 'string') {
          const customer = await stripe.customers.retrieve(subscription.customer);
          
          if (!('deleted' in customer) && customer.email) {
            // Determine the plan name from the subscription
            const plan = subscription.items.data[0]?.price.nickname || 'Premium';
            
            // Send subscription update email
            await sendSubscriptionUpdateEmail(
              customer.email,
              customer.name || 'Customer',
              plan,
              'updated'
            );
          }
        }
        
        break;
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log(`Subscription ${subscription.id} deleted`);
        
        // Get customer details
        if (subscription.customer && typeof subscription.customer === 'string') {
          const customer = await stripe.customers.retrieve(subscription.customer);
          
          if (!('deleted' in customer) && customer.email) {
            // Send cancellation email
            await sendSubscriptionCancelledEmail(
              customer.email,
              customer.name || 'Customer'
            );
          }
        }
        
        break;
      }
      
      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log(`Invoice ${invoice.id} paid!`);
        
        // Get customer details
        if (invoice.customer && typeof invoice.customer === 'string') {
          const customer = await stripe.customers.retrieve(invoice.customer);
          
          if (!('deleted' in customer) && customer.email) {
            // Ensure invoice.id is defined
            const invoiceId = invoice.id || `inv_${Date.now()}`;
            
            // Send payment confirmation email
            await sendPaymentConfirmationEmail(
              customer.email,
              customer.name || 'Customer',
              (invoice.amount_paid || 0) / 100,
              invoiceId
            );
          }
        }
        
        break;
      }
      
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log(`Invoice ${invoice.id} payment failed.`);
        
        // Get customer details
        if (invoice.customer && typeof invoice.customer === 'string') {
          const customer = await stripe.customers.retrieve(invoice.customer);
          
          if (!('deleted' in customer) && customer.email) {
            // Ensure invoice.id is defined
            const invoiceId = invoice.id || `inv_${Date.now()}`;
            
            // Send payment failure email
            await sendPaymentFailureEmail(
              customer.email,
              customer.name || 'Customer',
              (invoice.amount_due || 0) / 100,
              invoiceId
            );
          }
        }
        
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

// Augment Express Request type to include rawBody
declare global {
  namespace Express {
    interface Request {
      rawBody?: Buffer;
    }
  }
} 