import { config } from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
config();

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

async function sendConfirmationEmail() {
  const to = 'michaelcongtran@gmail.com';
  const name = 'Michael';
  
  const mailOptions = {
    from: process.env.VITE_EMAIL_FROM || 'Contractor Growth Systems <growth@bdcteam.pro>',
    to,
    subject: 'Welcome to Contractor Growth Systems Mailing List',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Welcome to Our Mailing List!</h1>
        <p>Hello ${name},</p>
        <p>Thank you for subscribing to the Contractor Growth Systems mailing list. We're excited to share valuable insights and updates with you!</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">What to Expect</h2>
          <ul style="list-style-type: none; padding-left: 0;">
            <li style="margin-bottom: 8px;">📈 Latest industry trends and insights</li>
            <li style="margin-bottom: 8px;">💡 Exclusive tips for contractor growth</li>
            <li style="margin-bottom: 8px;">🎯 Special offers and promotions</li>
            <li style="margin-bottom: 8px;">📊 Success stories from our community</li>
          </ul>
        </div>
        
        <p>You can manage your subscription preferences or unsubscribe at any time by clicking the link at the bottom of our emails.</p>
        <p>Best regards,<br>The Contractor Growth Systems Team</p>
      </div>
    `,
  };
  
  try {
    console.log('Attempting to send email...');
    console.log('SMTP Configuration:', {
      host: process.env.VITE_EMAIL_SERVER_HOST,
      port: process.env.VITE_EMAIL_SERVER_PORT,
      secure: process.env.VITE_EMAIL_SERVER_PORT === '465',
      user: process.env.VITE_EMAIL_SERVER_USER,
      pass: process.env.VITE_EMAIL_SERVER_PASSWORD ? '****' : '[not set]'
    });
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

// Execute the function
sendConfirmationEmail()
  .then(result => {
    if (result.success) {
      console.log('Email test completed successfully');
    } else {
      console.error('Email test failed:', result.error);
    }
    process.exit(0);
  })
  .catch(err => {
    console.error('Unexpected error:', err);
    process.exit(1);
  }); 