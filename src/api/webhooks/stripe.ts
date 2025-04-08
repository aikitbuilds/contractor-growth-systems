import Stripe from 'stripe';
import { sendOrderConfirmationEmail, sendEmail } from '../../services/email';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

// Webhook handler function
export async function handleStripeWebhook(req: Request) {
  const signature = req.headers.get('stripe-signature');
  
  if (!signature) {
    return new Response('Missing stripe-signature header', { status: 400 });
  }
  
  try {
    // Get the raw body as text
    const rawBody = await req.text();
    
    // Verify the webhook signature
    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    );
    
    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        // Get customer details
        const customer = session.customer as string;
        const customerData = await stripe.customers.retrieve(customer);
        
        // Get line items
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
        const items = lineItems.data.map(item => item.description || 'Unknown item');
        
        // Send order confirmation email
        await sendOrderConfirmationEmail(
          session.customer_email || '',
          customerData.name || 'Valued Customer',
          {
            orderId: session.id,
            amount: session.amount_total ? session.amount_total / 100 : 0,
            items,
          }
        );
        
        break;
      }
      
      case 'customer.subscription.created': {
        const subscription = event.data.object as Stripe.Subscription;
        const customer = await stripe.customers.retrieve(subscription.customer as string);
        
        // Send welcome email for new subscription
        await sendEmail({
          to: customer.email || '',
          subject: 'Welcome to Your Subscription!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #2563eb;">Welcome to Your Subscription!</h1>
              <p>Hello ${customer.name || 'Valued Customer'},</p>
              <p>Thank you for subscribing to our service. We're excited to have you on board!</p>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="color: #1f2937; margin-top: 0;">Subscription Details</h2>
                <p><strong>Plan:</strong> ${subscription.items.data[0]?.price.nickname || 'Premium Plan'}</p>
                <p><strong>Status:</strong> Active</p>
                <p><strong>Next Billing Date:</strong> ${new Date(subscription.current_period_end * 1000).toLocaleDateString()}</p>
              </div>
              
              <p>You now have access to all our premium features. If you have any questions, our support team is here to help!</p>
              <p>Best regards,<br>The Contractor Growth Systems Team</p>
            </div>
          `,
        });
        
        break;
      }
      
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        const customer = await stripe.customers.retrieve(subscription.customer as string);
        
        // Send subscription update email
        await sendEmail({
          to: customer.email || '',
          subject: 'Your Subscription Has Been Updated',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #2563eb;">Subscription Update</h1>
              <p>Hello ${customer.name || 'Valued Customer'},</p>
              <p>Your subscription has been updated successfully.</p>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="color: #1f2937; margin-top: 0;">Updated Subscription Details</h2>
                <p><strong>Plan:</strong> ${subscription.items.data[0]?.price.nickname || 'Premium Plan'}</p>
                <p><strong>Status:</strong> ${subscription.status}</p>
                <p><strong>Next Billing Date:</strong> ${new Date(subscription.current_period_end * 1000).toLocaleDateString()}</p>
              </div>
              
              <p>If you have any questions about your subscription, please don't hesitate to contact our support team.</p>
              <p>Best regards,<br>The Contractor Growth Systems Team</p>
            </div>
          `,
        });
        
        break;
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        const customer = await stripe.customers.retrieve(subscription.customer as string);
        
        // Send subscription cancellation email
        await sendEmail({
          to: customer.email || '',
          subject: 'Your Subscription Has Been Cancelled',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #2563eb;">Subscription Cancelled</h1>
              <p>Hello ${customer.name || 'Valued Customer'},</p>
              <p>We're sorry to see you go. Your subscription has been cancelled as requested.</p>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="color: #1f2937; margin-top: 0;">Cancellation Details</h2>
                <p><strong>Plan:</strong> ${subscription.items.data[0]?.price.nickname || 'Premium Plan'}</p>
                <p><strong>Cancellation Date:</strong> ${new Date().toLocaleDateString()}</p>
              </div>
              
              <p>If you change your mind, you can reactivate your subscription at any time by logging into your account.</p>
              <p>We hope to see you again soon!</p>
              <p>Best regards,<br>The Contractor Growth Systems Team</p>
            </div>
          `,
        });
        
        break;
      }
      
      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice;
        const customer = await stripe.customers.retrieve(invoice.customer as string);
        
        // Send payment confirmation email
        await sendEmail({
          to: customer.email || '',
          subject: 'Payment Received - Thank You!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #2563eb;">Payment Received</h1>
              <p>Hello ${customer.name || 'Valued Customer'},</p>
              <p>Thank you for your payment. We've received your payment successfully.</p>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="color: #1f2937; margin-top: 0;">Payment Details</h2>
                <p><strong>Invoice Number:</strong> ${invoice.number || invoice.id}</p>
                <p><strong>Amount Paid:</strong> $${(invoice.amount_paid / 100).toFixed(2)}</p>
                <p><strong>Payment Date:</strong> ${new Date(invoice.status_transitions.paid_at! * 1000).toLocaleDateString()}</p>
              </div>
              
              <p>Your payment has been processed successfully. Thank you for your continued support!</p>
              <p>Best regards,<br>The Contractor Growth Systems Team</p>
            </div>
          `,
        });
        
        break;
      }
      
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const customer = await stripe.customers.retrieve(invoice.customer as string);
        
        // Send payment failure notification email
        await sendEmail({
          to: customer.email || '',
          subject: 'Payment Failed - Action Required',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #dc2626;">Payment Failed</h1>
              <p>Hello ${customer.name || 'Valued Customer'},</p>
              <p>We were unable to process your payment for your recent invoice.</p>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="color: #1f2937; margin-top: 0;">Invoice Details</h2>
                <p><strong>Invoice Number:</strong> ${invoice.number || invoice.id}</p>
                <p><strong>Amount Due:</strong> $${(invoice.amount_due / 100).toFixed(2)}</p>
                <p><strong>Due Date:</strong> ${new Date(invoice.due_date! * 1000).toLocaleDateString()}</p>
              </div>
              
              <p>To ensure uninterrupted service, please update your payment information as soon as possible.</p>
              <p>You can update your payment method by logging into your account or clicking the button below:</p>
              
              <div style="text-align: center; margin: 20px 0;">
                <a href="${process.env.APP_URL || 'https://contractorgrowthsystems.com'}/account/billing" 
                   style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold;">
                  Update Payment Method
                </a>
              </div>
              
              <p>If you need assistance, our support team is here to help!</p>
              <p>Best regards,<br>The Contractor Growth Systems Team</p>
            </div>
          `,
        });
        
        break;
      }
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
    
    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response(
      JSON.stringify({ error: 'Webhook handler failed' }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
} 