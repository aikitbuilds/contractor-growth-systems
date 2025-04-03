import nodemailer from 'nodemailer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cron from 'node-cron';
import puppeteer from 'puppeteer';
import { marked } from 'marked';
import { CronJob } from 'cron';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
// Fixed directory path for Windows
const __dirname = process.platform === 'win32' 
  ? path.resolve().replace(/\\/g, '/') 
  : new URL('.', import.meta.url).pathname;

// Constants
const SCHEDULE = '0 7 * * 1,3,5'; // Monday, Wednesday, Friday at 7:00 AM
const TEST_MODE = true; // Set to false for production
const OUTPUT_DIR = path.join(process.cwd());
const DASHBOARD_FILE = path.join(OUTPUT_DIR, 'board.md');
const PDF_FILE = path.join(OUTPUT_DIR, 'BDC-Dashboard.pdf');
const WEBSITE_URL = 'https://www.solarsales.pro';
const EMAIL_CONFIG = {
  host: 'solarsales.pro',
  port: 465,
  secure: true,
  auth: {
    user: 'mail@solarsales.pro', 
    pass: 's~p)]!8&Dcjo'
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  }
};
const REQUESTS_LOG_FILE = path.join(OUTPUT_DIR, 'email-requests.md');

// Email recipients
const RECIPIENTS = [
  'steve@billiondollarcontractor.com', // Client email
  'michaelcongtran@gmail.com' // Test recipient & CC
];

// For initial testing, only send to test email
const TEST_RECIPIENTS = ['michaelcongtran@gmail.com'];

// Create email transporter
const transporter = nodemailer.createTransport(EMAIL_CONFIG);

// Function to generate dashboard PDF using direct HTML
async function generateDashboardPDF() {
  try {
    // Instead of relying on the web dashboard, create an HTML email directly
    // Read the BDC-dashboard.md file
    const boardPath = path.join(__dirname, 'public', 'BDC-dashboard.md');
    const markdownContent = fs.readFileSync(boardPath, 'utf8');
    
    // Convert markdown to HTML
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>BDC Dashboard</title>
        <style>
          body { 
            font-family: Arial, sans-serif;
            max-width: 1000px; 
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
          }
          h1, h2, h3 { color: #2563eb; margin-top: 20px; }
          ul { padding-left: 20px; }
          code { background: #f3f4f6; padding: 2px 5px; border-radius: 3px; }
          pre { background: #f3f4f6; padding: 10px; border-radius: 3px; overflow: auto; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f3f4f6; }
          .container { margin-top: 30px; }
          
          /* Checkbox styling */
          .task-item { 
            display: flex;
            align-items: flex-start;
            margin-bottom: 8px;
          }
          .checkbox {
            margin-right: 8px;
            width: 16px;
            height: 16px;
            border: 1px solid #ccc;
            display: inline-block;
            text-align: center;
            line-height: 16px;
          }
          .checked {
            background-color: #4CAF50;
            color: white;
          }
          
          /* Flowchart styling */
          .flowchart {
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
            width: 100%;
            overflow: auto;
          }
          .flowchart-content {
            font-family: monospace;
            white-space: pre;
            line-height: 1.6;
          }
          .node {
            font-weight: bold;
            margin-bottom: 6px;
          }
          .arrow {
            color: #666;
            margin-right: 5px;
          }
          .active-node {
            color: #2563eb;
          }
          .completed-node {
            color: #10b981;
          }
          .pending-node {
            color: #f59e0b;
          }
          .flowchart h3 {
            margin-top: 0;
            color: #2563eb;
            margin-bottom: 15px;
          }
        </style>
      </head>
      <body>
        <div id="content">
          ${processMarkdown(markdownContent)}
        </div>
      </body>
      </html>
    `;
    
    // Skip the file creation and use the HTML content directly
    const browser = await puppeteer.launch({ 
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });
    const page = await browser.newPage();
    
    // Set the HTML content directly instead of loading a file
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    const pdfPath = path.join(__dirname, 'BDC-Dashboard.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      }
    });
    
    await browser.close();
    console.log('PDF generation completed successfully');
    
    return pdfPath;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

// Process markdown and handle task checkboxes
function processMarkdown(markdown) {
  // Handle the flowchart diagram specifically first
  let processedMarkdown = markdown;
  
  // Extract flowchart content
  const flowchartMatch = markdown.match(/```mermaid\n([\s\S]*?)\n```/);
  if (flowchartMatch?.[1]) {
    const flowchartContent = flowchartMatch[1];
    
    // Format the flowchart content to be more visually structured
    const formattedFlowchart = formatFlowchart(flowchartContent);
    
    // Create a visual representation of the flowchart
    const visualFlowchart = `
    <div class="flowchart">
      <h3>Website Flow Diagram</h3>
      <div class="flowchart-content">
${formattedFlowchart}
      </div>
    </div>`;
    
    // Replace the mermaid code block with our visual representation
    processedMarkdown = processedMarkdown.replace(/```mermaid\n[\s\S]*?\n```/, visualFlowchart);
  }
  
  // Handle checkboxes in markdown
  processedMarkdown = processedMarkdown.replace(/- \[([ x])\] (\w+[\d:]*)(.*)/g, (match, check, taskId, text) => {
    const isChecked = check === 'x';
    return `<div class="task-item">
      <span class="checkbox ${isChecked ? 'checked' : ''}">${isChecked ? '✓' : ''}</span>
      <span><strong>${taskId}</strong>${text}</span>
    </div>`;
  });
  
  // Convert markdown to HTML
  return marked(processedMarkdown);
}

// Function to format flowchart content
function formatFlowchart(flowchartContent) {
  // Extract nodes and connections from flowchart content
  const lines = flowchartContent.trim().split('\n');
  
  // Process each line to add styling
  const formattedLines = lines.map(line => {
    // Skip empty lines and comments
    if (!line.trim() || line.trim().startsWith('%')) {
      return line;
    }
    
    // Handle flowchart TD line
    if (line.includes('flowchart TD')) {
      return `<span class="node active-node">flowchart TD</span>`;
    }
    
    // Handle node definitions with arrows (A --> B)
    if (line.includes('-->')) {
      const parts = line.split('-->').map(p => p.trim());
      if (parts.length === 2) {
        return `<span class="node">${parts[0]}</span> <span class="arrow">--></span> <span class="node">${parts[1]}</span>`;
      }
    }
    
    // Handle class definitions
    if (line.includes('classDef')) {
      const status = line.includes('completed') ? 'completed-node' : 
                     line.includes('active') ? 'active-node' : 
                     line.includes('pending') ? 'pending-node' : '';
      
      return `<span class="node ${status}">${line}</span>`;
    }
    
    // Handle class declarations
    if (line.includes('class')) {
      return `<span class="node">${line}</span>`;
    }
    
    // Default formatting
    return `<span>${line}</span>`;
  });
  
  return formattedLines.join('\n');
}

// Function to send dashboard email using markdown directly 
async function sendDashboardEmail() {
  console.log('Starting email generation process...');
  
  try {
    // Generate PDF version of dashboard
    const pdfPath = await generateDashboardPDF();
    console.log('PDF generated successfully at:', pdfPath);
    
    // Get today's date for email subject
    const today = new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    // Get the dashboard MD content for the email body
    const boardPath = path.join(__dirname, 'public', 'BDC-dashboard.md');
    const dashboardMD = fs.readFileSync(boardPath, 'utf8');
    
    // Process markdown for email body
    const emailHTML = processEmailSummary(dashboardMD);
    
    // Create email message
    const mailOptions = {
      from: 'BDC Project <mail@solarsales.pro>',
      to: TEST_MODE ? TEST_RECIPIENTS.join(', ') : RECIPIENTS.join(', '),
      subject: `BDC Project Dashboard Update - ${today}`,
      text: `Here is the latest BDC Project Dashboard as of ${today}.\n\nThis is an automated email sent on Mondays, Wednesdays, and Fridays.`,
      html: emailHTML,
      attachments: [
        {
          filename: 'BDC-Dashboard.pdf',
          path: pdfPath
        }
      ]
    };
    
    console.log('Sending email to:', TEST_MODE ? TEST_RECIPIENTS.join(', ') : RECIPIENTS.join(', '));
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Dashboard email sent: ${info.messageId}`);
    console.log(`Sent to: ${TEST_MODE ? `TEST MODE - ${TEST_RECIPIENTS.join(', ')}` : RECIPIENTS.join(', ')}`);
    
    // Clean up files
    fs.unlinkSync(pdfPath);
    console.log('Successfully sent dashboard email and cleaned up temporary files');
  } catch (error) {
    console.error('Error sending dashboard email:', error);
  }
}

// Function to create a nice-looking email summary
function processEmailSummary(markdown) {
  // Extract recent activity
  let recentActivity = '<li>No recent activity found</li>';
  const activityMatch = markdown.match(/### 2023-04-01\n(- .*\n)+/);
  if (activityMatch) {
    recentActivity = activityMatch[0]
      .split('\n')
      .filter(line => line.startsWith('- '))
      .map(line => `<li>${line.substring(2)}</li>`)
      .join('');
  }
  
  // Extract critical tasks
  let criticalTasks = '<li>No critical tasks found</li>';
  const criticalMatch = markdown.match(/## ⚠️ Critical Tasks\s+\n([\s\S]*?)(?=\n##|$)/);
  if (criticalMatch) {
    criticalTasks = criticalMatch[1]
      .trim()
      .split('\n')
      .filter(line => line.startsWith('- '))
      .map(line => {
        const checkboxMatch = line.match(/- \[([ x])\] (\w+[\d:]*)(.*)/);
        if (checkboxMatch) {
          const [_, checked, taskId, text] = checkboxMatch;
          const isChecked = checked === 'x';
          return `<li style="margin-bottom: 8px;">
            <span style="display: inline-block; width: 16px; height: 16px; border: 1px solid #ccc; text-align: center; line-height: 16px; margin-right: 8px; ${isChecked ? 'background-color: #4CAF50; color: white;' : ''}">${isChecked ? '✓' : ''}</span>
            <strong>${taskId}</strong>${text}
          </li>`;
        }
        return `<li>${line.substring(2)}</li>`;
      })
      .join('');
  }
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.6;">
      <h2 style="color: #2563eb;">BDC Project Dashboard</h2>
      
      <p>Hello ${TEST_MODE ? 'Michael' : 'Steve'},</p>
      
      <p>Here is the latest project dashboard as of <strong>${new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}</strong>.</p>
      
      <p>This is an automated email that provides updates on the Billion Dollar Contractor project status. Please find the complete dashboard attached as a PDF for easy viewing and printing.</p>
      
      <div style="margin: 20px 0; padding: 15px; border-left: 4px solid #2563eb; background-color: #f3f9ff;">
        <h3 style="color: #2563eb; margin-top: 0;">Critical Tasks</h3>
        <ul style="padding-left: 10px; list-style-type: none;">
          ${criticalTasks}
        </ul>
      </div>
      
      <div style="margin: 20px 0; padding: 15px; border-left: 4px solid #10b981; background-color: #f0fdf4;">
        <h3 style="color: #10b981; margin-top: 0;">Recent Activity</h3>
        <ul>
          ${recentActivity}
        </ul>
      </div>
      
      <p style="margin-top: 30px;">
        <a href="${WEBSITE_URL}" 
           style="display: inline-block; background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
          Visit SolarSales.pro
        </a>
      </p>
      
      <div style="margin: 30px 0; padding: 15px; border: 1px solid #cbd5e1; border-radius: 5px; background-color: #f8fafc;">
        <p style="margin-top: 0;"><strong>Need something specific?</strong></p>
        <p>If you want more specific information or have any requests, simply reply to this email and we'll process your request.</p>
      </div>
      
      <p style="color: #6b7280; font-size: 0.9em; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
        This automated email is sent on Mondays, Wednesdays, and Fridays at 7:00 AM.
      </p>
    </div>
  `;
}

// Schedule emails for Monday, Wednesday, and Friday at 7am
cron.schedule('0 7 * * 1,3,5', () => {
  console.log('Running scheduled dashboard email task');
  sendDashboardEmail();
});

console.log('Dashboard mailer scheduled for Mondays, Wednesdays, and Fridays at 7:00 AM');

// For testing - send immediately
console.log('Sending test email now...');
sendDashboardEmail();

/**
 * Check for email replies and log them as requests
 */
async function checkEmailReplies() {
  console.log('Checking for email replies...');
  
  try {
    // Create an IMAP connection
    const imapConfig = {
      user: EMAIL_CONFIG.user,
      password: EMAIL_CONFIG.pass,
      host: EMAIL_CONFIG.host,
      port: 993, // IMAP port
      tls: true,
      tlsOptions: { rejectUnauthorized: false }
    };
    
    // Note: This is a placeholder for actual IMAP implementation
    // In a real implementation, you would use a library like node-imap
    // For demonstration, we'll just log that this function would check emails
    
    console.log('Email reply checking is configured but not fully implemented.');
    console.log('To implement email reply processing:');
    console.log('1. Install node-imap: npm install node-imap');
    console.log('2. Connect to the inbox and search for reply emails');
    console.log('3. Extract message bodies and save to the requests log file');
    
    // Sample code for logging a request (would be triggered by actual emails)
    const sampleRequest = {
      date: new Date().toISOString(),
      from: 'sample@example.com',
      subject: 'Sample Request',
      body: 'This is a sample request that would be logged.'
    };
    
    await logEmailRequest(sampleRequest);
    
    console.log('Email reply checking complete.');
  } catch (error) {
    console.error('Error checking email replies:', error);
  }
}

/**
 * Log an email request to the requests file
 */
async function logEmailRequest(request) {
  try {
    let existingContent = '';
    
    // Check if the file exists and read its content
    if (fs.existsSync(REQUESTS_LOG_FILE)) {
      existingContent = await fs.promises.readFile(REQUESTS_LOG_FILE, 'utf8');
    } else {
      // Initialize file with header
      existingContent = '# Email Requests Log\n\n';
    }
    
    // Format the new request using a single template literal
    const requestEntry = `## Request on ${new Date(request.date).toLocaleString()}\n\n- **From:** ${request.from}\n- **Subject:** ${request.subject}\n- **Status:** Pending\n\n### Message\n\n${request.body}\n\n---\n\n`;
    
    // Add the new request to the top of the file after the header
    const updatedContent = existingContent.replace(/# Email Requests Log\n\n/, 
      `# Email Requests Log\n\n${requestEntry}`);
    
    // Write the updated content back to the file
    await fs.promises.writeFile(REQUESTS_LOG_FILE, updatedContent, 'utf8');
    
    console.log(`Request from ${request.from} logged successfully.`);
  } catch (error) {
    console.error('Error logging email request:', error);
  }
}

// Main execution
if (import.meta.url === import.meta.main) {
  if (process.argv.includes('--run-now')) {
    console.log('Running dashboard mailer immediately...');
    sendDashboardEmail();
  } else if (process.argv.includes('--check-replies')) {
    console.log('Checking for email replies...');
    checkEmailReplies();
  } else {
    console.log(`Dashboard mailer scheduled for ${SCHEDULE} (Mondays, Wednesdays, and Fridays at 7:00 AM)`);
    const job = new CronJob(SCHEDULE, sendDashboardEmail);
    job.start();
    console.log('Scheduler started.');
    
    // Also set up a job to check for replies every 2 hours
    const replyCheckJob = new CronJob('0 */2 * * *', checkEmailReplies);
    replyCheckJob.start();
    console.log('Email reply checking scheduled for every 2 hours.');
  }
} else {
  // When imported as a module
  console.log('Dashboard mailer module loaded.');
} 