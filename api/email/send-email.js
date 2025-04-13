import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { to, subject, message } = req.body;

  if (!to) {
    return res.status(400).json({ success: false, error: 'Recipient email is required' });
  }

  try {
    // Create a transporter with SMTP config from env vars
    const transporter = nodemailer.createTransport({
      host: process.env.VITE_EMAIL_SERVER_HOST,
      port: parseInt(process.env.VITE_EMAIL_SERVER_PORT, 10),
      secure: process.env.VITE_EMAIL_SERVER_PORT === '465',
      auth: {
        user: process.env.VITE_EMAIL_SERVER_USER,
        pass: process.env.VITE_EMAIL_SERVER_PASSWORD,
      },
    });

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
} 