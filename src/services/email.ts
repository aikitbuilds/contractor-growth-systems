import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: import.meta.env.VITE_EMAIL_SERVER_HOST || 'smtp.gmail.com',
  port: Number.parseInt(import.meta.env.VITE_EMAIL_SERVER_PORT || '587', 10),
  secure: import.meta.env.VITE_EMAIL_SERVER_PORT === '465',
  auth: {
    user: import.meta.env.VITE_EMAIL_SERVER_USER || 'growth@bdcteam.pro',
    pass: import.meta.env.VITE_EMAIL_SERVER_PASSWORD || '',
  },
});

// Interface for order details
interface OrderDetails {
  orderId: string;
  amount: number;
  items: string[];
}

// Function to send order confirmation email
export async function sendOrderConfirmationEmail(
  to: string,
  name: string,
  orderDetails: OrderDetails
) {
  const { orderId, amount, items } = orderDetails;
  
  const mailOptions = {
    from: import.meta.env.VITE_EMAIL_FROM || 'Contractor Growth Systems <growth@bdcteam.pro>',
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

// Function to send welcome email
export async function sendWelcomeEmail(to: string, name: string) {
  const mailOptions = {
    from: import.meta.env.VITE_EMAIL_FROM || 'Contractor Growth Systems <growth@bdcteam.pro>',
    to,
    subject: 'Welcome to Contractor Growth Systems!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Welcome to Contractor Growth Systems!</h1>
        <p>Hello ${name},</p>
        <p>We're thrilled to have you join our community of successful contractors!</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">Getting Started</h2>
          <p>Here are some resources to help you get the most out of our platform:</p>
          <ul>
            <li>Check out our <a href="https://contractorgrowthsystems.com/resources">Resources page</a> for helpful guides and articles</li>
            <li>Join our <a href="https://contractorgrowthsystems.com/community">Community forum</a> to connect with other contractors</li>
            <li>Explore our <a href="https://contractorgrowthsystems.com/courses">Courses</a> to enhance your skills</li>
          </ul>
        </div>
        
        <p>If you have any questions or need assistance, our support team is here to help!</p>
        <p>Best regards,<br>The Contractor Growth Systems Team</p>
      </div>
    `,
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Welcome email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
}

// Function to send password reset email
export async function sendPasswordResetEmail(to: string, resetToken: string) {
  const resetUrl = `${import.meta.env.VITE_APP_URL || 'https://contractorgrowthsystems.com'}/reset-password?token=${resetToken}`;
  
  const mailOptions = {
    from: import.meta.env.VITE_EMAIL_FROM || 'Contractor Growth Systems <growth@bdcteam.pro>',
    to,
    subject: 'Password Reset Request',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Password Reset Request</h1>
        <p>Hello,</p>
        <p>We received a request to reset your password for your Contractor Growth Systems account.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <a href="${resetUrl}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold;">Reset Password</a>
        </div>
        
        <p>If you didn't request this password reset, you can safely ignore this email.</p>
        <p>This link will expire in 1 hour for security reasons.</p>
        <p>Best regards,<br>The Contractor Growth Systems Team</p>
      </div>
    `,
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Password reset email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw error;
  }
}

// Function to send custom email
export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  const mailOptions = {
    from: import.meta.env.VITE_EMAIL_FROM || 'Contractor Growth Systems <growth@bdcteam.pro>',
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