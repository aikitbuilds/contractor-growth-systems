# BDC Dashboard Email System Setup Guide

## Overview

This system automatically emails the BDC Project Dashboard to clients and team members on a regular schedule (Mondays, Wednesdays, and Fridays at 7:00 AM). The email includes:

1. A PDF version of the dashboard for easy viewing and printing
2. A summary of recent project activities
3. Links to the BDC website

## Configuration

### Email Settings

The system is configured to use the following email account:

- **Server**: solarsales.pro
- **Username**: mail@solarsales.pro
- **Password**: s~p)]!8&Dcjo
- **Port**: 465 (SSL/TLS)

### Recipients

The system is configured to send emails to:

- **Client**: Steve (steve@billiondollarcontractor.com)
- **Test/CC**: Michael (michaelcongtran@gmail.com)

You can update the recipient list in `dashboard-mailer.js`:

```javascript
const RECIPIENTS = [
  'steve@billiondollarcontractor.com', // Client email
  'michaelcongtran@gmail.com' // Test recipient & CC
];
```

For initial testing, the system is set to only send to Michael's email:

```javascript
const TEST_MODE = true;
const TEST_RECIPIENTS = ['michaelcongtran@gmail.com'];
```

Once testing is complete, set `TEST_MODE = false` to begin sending to all recipients.

## Running the System

### Prerequisites

1. Make sure Node.js is installed on your server
2. Install required packages:
   ```
   npm install nodemailer node-cron puppeteer --save
   ```

### Starting the Mailer Service

1. Make sure the dashboard server is running first:
   ```
   node dashboard-server.js
   ```

2. In a separate terminal, start the email scheduler:
   ```
   node dashboard-mailer.js
   ```

3. The service will log when emails are sent and display any errors

### Running as a Service

For production, it's recommended to run both the dashboard server and mailer as system services:

1. For Windows, use NSSM (Non-Sucking Service Manager)
2. For Linux, create systemd service files

## Testing

To test the email system without waiting for the scheduled time:

1. Run the script: `node dashboard-mailer.js`
2. Check that the email is received with the PDF attachment
3. The script is currently configured to send a test email immediately upon startup

## Troubleshooting

If emails are not being sent:

1. Check that the dashboard server is running on port 3001
2. Verify that `public/BDC-dashboard.md` exists and is properly formatted
3. Ensure the email credentials are correct
4. Check server firewall settings (port 465 should be open for outgoing traffic)
5. Look for errors in the console output

## Security Notes

1. This script contains email credentials - keep it secure and don't commit it to public repositories
2. Consider using environment variables for sensitive information
3. Regularly update the email password

## Maintenance

1. Monitor disk space - PDF generation can use temporary storage
2. Check logs regularly for any errors
3. Update recipient list as team members change 