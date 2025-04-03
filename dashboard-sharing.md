# Dashboard Sharing Functionality

The Contractor Growth Systems Dashboard includes PDF generation and sharing capabilities. This feature allows users to save the current state of the dashboard as a PDF and share it with others via email.

## Features

### 1. PDF Generation

- **Technology**: Uses Puppeteer (headless Chrome) to generate high-quality PDFs
- **Content**: Captures the entire dashboard including task lists, progress charts, and visualizations
- **Format**: Generates an A4-sized PDF with proper margins and formatting
- **Styling**: Maintains colors and styling from the web dashboard

### 2. Email Sharing

- **Recipients**: Send to one or multiple email addresses
- **Customization**: Customize email subject and message
- **Attachments**: The dashboard PDF is automatically attached to the email
- **Preview**: For demonstration purposes, uses Ethereal for email testing (provides a preview URL)

## How to Use

1. **Access the Dashboard**: Navigate to the dashboard page
2. **Click Share Button**: Click the green share button (📤) in the bottom right corner
3. **Choose an Option**:
   - **Download PDF**: Save a local copy of the dashboard
   - **Email PDF**: Send the dashboard to others via email
4. **Email Form** (if selected):
   - Enter recipient email address
   - Customize subject (optional)
   - Add a personalized message (optional)
   - Click "Send Email"

## Implementation Details

### Server Endpoints

- `POST /api/generate-pdf`: Generates and returns a PDF of the dashboard
- `POST /api/email-pdf`: Generates a PDF and sends it via email

### Technologies Used

- **Puppeteer**: Headless Chrome browser for PDF generation
- **Nodemailer**: Email sending functionality
- **Express**: API endpoints and server functionality

## Configuration

To configure email settings for production use, edit the `dashboard-server.js` file:

1. Replace the Ethereal test account with your SMTP server details:

```javascript
const transporter = nodemailer.createTransport({
  host: "your-smtp-server.com",
  port: 587,
  secure: false, // true for port 465
  auth: {
    user: "your-email@example.com",
    pass: "your-password",
  },
});
```

2. Update the sender email address:

```javascript
from: '"Your Company Name" <no-reply@yourcompany.com>',
```

## Security Considerations

- The current implementation uses temporary test email accounts for demonstration
- For production use, consider:
  - Using environment variables for email credentials
  - Implementing rate limiting to prevent abuse
  - Adding authentication to the sharing feature 