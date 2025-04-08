import { NextApiRequest, NextApiResponse } from 'next';
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { to, subject, html, name } = req.body;

    // Validate required fields
    if (!to || !subject || !html) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Send email
    const mailOptions = {
      from: process.env.VITE_EMAIL_FROM || 'Contractor Growth Systems <growth@bdcteam.pro>',
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : String(error)
    });
  }
} 