import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.VITE_EMAIL_SERVER_HOST || 'smtp.gmail.com',
  port: Number.parseInt(process.env.VITE_EMAIL_SERVER_PORT || '587', 10),
  secure: process.env.VITE_EMAIL_SERVER_PORT === '465',
  auth: {
    user: process.env.VITE_EMAIL_SERVER_USER || 'growth@bdcteam.pro',
    pass: process.env.VITE_EMAIL_SERVER_PASSWORD || '',
  },
});

// Interface for order details
interface OrderDetails {
  orderId: string;
  amount: number;
  items: string[];
  paymentMethod?: string;
}

// Function to send order confirmation email
export async function sendOrderConfirmationEmail(
  to: string,
  name: string,
  orderDetails: OrderDetails
) {
  const { orderId, amount, items, paymentMethod } = orderDetails;
  
  const mailOptions = {
    from: process.env.VITE_EMAIL_FROM || 'Contractor Growth Systems <growth@bdcteam.pro>',
    to,
    subject: 'Order Confirmation - Contractor Growth Systems',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Order Confirmation</h1>
        <p>Hello ${name},</p>
        <p>Thank you for your order! We're excited to have you on board.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">Order Details</h2>
          <p><strong>Order ID:</strong> ${orderId}</p>
          <p><strong>Total Amount:</strong> $${amount.toFixed(2)}</p>
          ${paymentMethod ? `<p><strong>Payment Method:</strong> ${paymentMethod}</p>` : ''}
          
          <h3 style="color: #1f2937;">Items Ordered:</h3>
          <ul style="list-style-type: none; padding-left: 0;">
            ${items.map(item => `<li style="margin-bottom: 8px;">${item}</li>`).join('')}
          </ul>
        </div>
        
        <p>If you have any questions about your order, please don't hesitate to contact our support team.</p>
        <p>Best regards,<br>The Contractor Growth Systems Team</p>
      </div>
    `,
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Order confirmation email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
    throw error;
  }
}

// Function to send welcome email for new subscriptions
export async function sendSubscriptionWelcomeEmail(to: string, name: string, planName: string) {
  const mailOptions = {
    from: process.env.VITE_EMAIL_FROM || 'Contractor Growth Systems <growth@bdcteam.pro>',
    to,
    subject: 'Welcome to Your Contractor Growth Systems Subscription!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Welcome to Contractor Growth Systems!</h1>
        <p>Hello ${name},</p>
        <p>Thank you for subscribing to our ${planName} plan! We're thrilled to have you as a member.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">Getting Started</h2>
          <p>Here are some resources to help you get the most out of your subscription:</p>
          <ul>
            <li>Check out our <a href="https://contractorgrowthsystems.com/resources">Resources page</a> for helpful guides</li>
            <li>Join our <a href="https://contractorgrowthsystems.com/community">Community forum</a> to connect with other contractors</li>
            <li>Access your premium content at <a href="https://contractorgrowthsystems.com/dashboard">Your Dashboard</a></li>
          </ul>
        </div>
        
        <p>If you have any questions or need assistance, our support team is here to help!</p>
        <p>Best regards,<br>The Contractor Growth Systems Team</p>
      </div>
    `,
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Subscription welcome email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending subscription welcome email:', error);
    throw error;
  }
}

// Function to send subscription update email
export async function sendSubscriptionUpdateEmail(to: string, name: string, planName: string, changeType: string) {
  const mailOptions = {
    from: process.env.VITE_EMAIL_FROM || 'Contractor Growth Systems <growth@bdcteam.pro>',
    to,
    subject: 'Your Subscription Has Been Updated - Contractor Growth Systems',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Subscription Update</h1>
        <p>Hello ${name},</p>
        <p>Your subscription has been ${changeType}. You are now on the ${planName} plan.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">Next Steps</h2>
          <p>Here's what you need to know about your updated subscription:</p>
          <ul>
            <li>You can view your subscription details in <a href="https://contractorgrowthsystems.com/account">your account</a></li>
            <li>Your next billing date may have changed</li>
            <li>You now have access to ${planName} features</li>
          </ul>
        </div>
        
        <p>If you have any questions or concerns about these changes, please contact our support team.</p>
        <p>Best regards,<br>The Contractor Growth Systems Team</p>
      </div>
    `,
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Subscription update email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending subscription update email:', error);
    throw error;
  }
}

// Function to send subscription cancellation email
export async function sendSubscriptionCancelledEmail(to: string, name: string) {
  const mailOptions = {
    from: process.env.VITE_EMAIL_FROM || 'Contractor Growth Systems <growth@bdcteam.pro>',
    to,
    subject: 'Your Subscription Has Been Cancelled - Contractor Growth Systems',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Subscription Cancelled</h1>
        <p>Hello ${name},</p>
        <p>We're sorry to see you go. Your subscription to Contractor Growth Systems has been cancelled.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">What This Means</h2>
          <p>Here's what you need to know:</p>
          <ul>
            <li>You'll continue to have access until the end of your current billing period</li>
            <li>You won't be charged again</li>
            <li>You can resubscribe at any time</li>
          </ul>
        </div>
        
        <p>We'd love to hear your feedback on why you decided to cancel. Your input helps us improve our services.</p>
        <p>Best regards,<br>The Contractor Growth Systems Team</p>
      </div>
    `,
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Subscription cancellation email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending subscription cancellation email:', error);
    throw error;
  }
}

// Function to send payment confirmation email
export async function sendPaymentConfirmationEmail(to: string, name: string, amount: number, invoiceId: string) {
  const mailOptions = {
    from: process.env.VITE_EMAIL_FROM || 'Contractor Growth Systems <growth@bdcteam.pro>',
    to,
    subject: 'Payment Confirmation - Contractor Growth Systems',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Payment Confirmation</h1>
        <p>Hello ${name},</p>
        <p>We've received your payment of $${amount.toFixed(2)}. Thank you!</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">Payment Details</h2>
          <p><strong>Invoice ID:</strong> ${invoiceId}</p>
          <p><strong>Amount:</strong> $${amount.toFixed(2)}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <p>You can view your payment history and invoices in <a href="https://contractorgrowthsystems.com/account">your account</a>.</p>
        <p>Best regards,<br>The Contractor Growth Systems Team</p>
      </div>
    `,
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Payment confirmation email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending payment confirmation email:', error);
    throw error;
  }
}

// Function to send payment failure email
export async function sendPaymentFailureEmail(to: string, name: string, amount: number, invoiceId: string) {
  const mailOptions = {
    from: process.env.VITE_EMAIL_FROM || 'Contractor Growth Systems <growth@bdcteam.pro>',
    to,
    subject: 'Payment Failed - Action Required - Contractor Growth Systems',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #e11d48;">Payment Failed</h1>
        <p>Hello ${name},</p>
        <p>We were unable to process your payment of $${amount.toFixed(2)}.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">Payment Details</h2>
          <p><strong>Invoice ID:</strong> ${invoiceId}</p>
          <p><strong>Amount:</strong> $${amount.toFixed(2)}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div style="background-color: #fee2e2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #e11d48;">
          <h2 style="color: #1f2937; margin-top: 0;">Action Required</h2>
          <p>Please update your payment information as soon as possible to avoid any interruption to your service:</p>
          <p><a href="https://contractorgrowthsystems.com/account/billing" style="display: inline-block; background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Update Payment Method</a></p>
        </div>
        
        <p>If you need assistance, please contact our support team.</p>
        <p>Best regards,<br>The Contractor Growth Systems Team</p>
      </div>
    `,
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Payment failure email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending payment failure email:', error);
    throw error;
  }
}

// Generic function to send custom email
export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  const mailOptions = {
    from: process.env.VITE_EMAIL_FROM || 'Contractor Growth Systems <growth@bdcteam.pro>',
    to,
    subject,
    html,
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
} 