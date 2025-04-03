# BDC Dashboard Email System Setup Guide

## Overview

This system automatically emails the BDC Project Dashboard to clients and team members on a regular schedule (Mondays, Wednesdays, and Fridays at 7:00 AM). The email includes:

1. A PDF version of the dashboard for easy viewing and printing
2. A summary of recent project activities and critical tasks
3. Links to the SolarSales.pro website
4. A section letting recipients know they can reply with questions or requests

## Environment Setup

### Required Files

The system requires these key files:

- **Dashboard Content File (BDC-dashboard.md)**: Located at `public/BDC-dashboard.md` - This is the critical file that contains all dashboard content including:
  - Project tasks and their completion status
  - Website flow diagrams
  - AI recommendations
  - Significant changes log (updates and project history)
  - This file is the source of truth for all dashboard information and should be updated regularly

- **Dashboard Server**: `dashboard-server.js` - Serves the interactive dashboard webpage and handles API requests
- **Dashboard Mailer**: `dashboard-mailer.js` - The main script that generates and sends the emails
- **Email Setup Guide**: `dashboard-email-setup.md` - This documentation file

### Output Files

The system generates these files during operation:

- **PDF Dashboard**: `BDC-Dashboard.pdf` - Temporary file created for email attachment
- **Email Requests Log**: `email-requests.md` - Log of email replies and requests

### Important Note About the Dashboard Content File

The `BDC-dashboard.md` file is the central component of the entire system:
- All updates to project status should be made in this file
- The email system extracts information from this file to generate reports
- All project logs and history are maintained in this file
- Task tracking and status updates are stored here

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

## Email Reply Processing

The system is set up to handle email replies from recipients:

1. Users are informed they can reply directly to the email with questions or requests
2. The system periodically checks for email replies
3. All requests are logged to a file named `email-requests.md`
4. Administrators can review and process these requests

To implement the full email reply handling system:

1. Install the node-imap package: `npm install node-imap --save`
2. Set up proper IMAP connection parameters in the script
3. Configure the reply monitoring job frequency as needed

## Running the System

### Prerequisites

1. Make sure Node.js is installed on your server
2. Install required packages:
   ```
   npm install nodemailer node-cron puppeteer marked --save
   ```

### Starting the Mailer Service

1. Run the email scheduler:
   ```
   node dashboard-mailer.js
   ```

2. The service will log when emails are sent and display any errors

### Starting the Dashboard Server (Optional)

If you want to serve the interactive dashboard website:

1. Run the dashboard server:
   ```
   node dashboard-server.js
   ```

2. Access the dashboard at http://localhost:3001/bdc-dashboard

### Running as a Service

For production, it's recommended to run the mailer as a system service:

1. For Windows, use NSSM (Non-Sucking Service Manager)
2. For Linux, create systemd service files

## Testing

To test the email system without waiting for the scheduled time:

1. Run the script: `node dashboard-mailer.js --run-now`
2. Check that the email is received with the PDF attachment
3. The script is currently configured to send a test email immediately upon startup

To test the reply handling functionality:

1. Run the script with: `node dashboard-mailer.js --check-replies`
2. This will check for any new replies and log them to the requests file

## Troubleshooting

If emails are not being sent:

1. Verify that the email credentials are correct
2. Ensure the dashboard markdown file exists at `public/BDC-dashboard.md`
3. Check server firewall settings (port 465 should be open for outgoing traffic)
4. Look for errors in the console output

## Security Notes

1. This script contains email credentials - keep it secure and don't commit it to public repositories
2. Consider using environment variables for sensitive information
3. Regularly update the email password

## Maintenance

1. Monitor disk space - PDF generation can use temporary storage
2. Check the request log regularly for new requests
3. Update recipient list as team members change
4. Regularly update the BDC-dashboard.md file with new project information 