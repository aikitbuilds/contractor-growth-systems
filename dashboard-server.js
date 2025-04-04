import express from 'express';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import nodemailer from 'nodemailer';

const app = express();
const port = 3001;

// Get current directory (equivalent to __dirname in CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = new URL('.', import.meta.url).pathname.replace(/^\/[a-zA-Z]:/, '');

// Dashboard file name
const DASHBOARD_FILE = 'BDC-dashboard.md';

// Middleware for JSON parsing
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Main dashboard route
app.get('/bdc-dashboard', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'bdc-dashboard.html'));
});

// Also serve dashboard.html at root path for iframe access
app.get('/dashboard.html', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'dashboard.html'));
});

// API endpoint to get dashboard content
app.get('/api/dashboard-content', (req, res) => {
  try {
    const boardPath = join(__dirname, 'public', DASHBOARD_FILE);
    const boardContent = readFileSync(boardPath, 'utf8');
    res.send(boardContent);
  } catch (error) {
    console.error('Error reading dashboard file:', error);
    res.status(500).send('Error loading dashboard content');
  }
});

// API endpoint to synchronize the board
app.get('/api/sync-board', (req, res) => {
  try {
    // Here you would typically pull the latest data from a source
    // For now, we'll just return success
    res.json({
      success: true,
      message: 'Contractor Growth Systems Dashboard synchronized successfully'
    });
  } catch (error) {
    console.error('Error syncing dashboard:', error);
    res.status(500).json({
      success: false,
      message: `Failed to sync Contractor Growth Systems dashboard: ${error.message}`
    });
  }
});

// API endpoint to update task status
app.post('/api/update-task', (req, res) => {
  try {
    const { taskId, completed } = req.body;
    
    if (!taskId) {
      return res.status(400).json({
        success: false,
        message: 'Task ID is required'
      });
    }
    
    // Read the dashboard file
    const boardPath = join(__dirname, 'public', DASHBOARD_FILE);
    const boardContent = readFileSync(boardPath, 'utf8');
    
    // Find and update the task status - fixed regex to match our format
    const taskRegex = new RegExp(`- \\[([ x])\\] ${taskId}(:|\\:)? `, 'gm');
    const updatedContent = boardContent.replace(taskRegex, `- [${completed ? 'x' : ' '}] ${taskId}: `);
    
    // Write the changes back to the file
    writeFileSync(boardPath, updatedContent);
    
    res.json({
      success: true,
      message: `Task ${taskId} ${completed ? 'completed' : 'reopened'}`
    });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({
      success: false,
      message: `Failed to update task: ${error.message}`
    });
  }
});

// API endpoint to add a new feature request
app.post('/api/add-feature', (req, res) => {
  try {
    const { featureDescription } = req.body;
    
    if (!featureDescription) {
      return res.status(400).json({
        success: false,
        message: 'Feature description is required'
      });
    }
    
    // Read the dashboard file
    const boardPath = join(__dirname, 'public', DASHBOARD_FILE);
    const boardContent = readFileSync(boardPath, 'utf8');
    
    // Find the Active Tasks section
    const activeTasksRegex = /## 📋 Active Tasks\s+\n([\s\S]*?)(?=\n##|$)/;
    const activeTasksMatch = boardContent.match(activeTasksRegex);
    
    if (!activeTasksMatch) {
      return res.status(500).json({
        success: false,
        message: 'Could not find Active Tasks section'
      });
    }
    
    // Get the current list of tasks
    const activeTasks = activeTasksMatch[1].trim().split('\n');
    
    // Generate a new task ID based on the highest existing one
    let highestTaskId = 0;
    
    // Use for...of instead of forEach
    for (const task of activeTasks) {
      const taskIdMatch = task.match(/- \[[ x]\] (\d+):/);
      if (taskIdMatch) {
        // Use Number.parseInt instead of parseInt
        const taskId = Number.parseInt(taskIdMatch[1], 10);
        if (taskId > highestTaskId) {
          highestTaskId = taskId;
        }
      }
    }
    
    const newTaskId = highestTaskId + 1;
    
    // Create a new task entry
    const newTask = `- [ ] ${newTaskId}: ${featureDescription}`;
    
    // Replace the active tasks section with updated content
    const newActiveTasksSection = `## 📋 Active Tasks\n\n${activeTasksMatch[1]}\n${newTask}`;
    const updatedContent = boardContent.replace(activeTasksRegex, newActiveTasksSection);
    
    // Write the changes back to the file
    writeFileSync(boardPath, updatedContent);
    
    res.json({
      success: true,
      message: `New feature added as task ${newTaskId}`,
      taskId: newTaskId
    });
  } catch (error) {
    console.error('Error adding feature:', error);
    res.status(500).json({
      success: false,
      message: `Failed to add feature: ${error.message}`
    });
  }
});

// API endpoint to get daily summary
app.get('/api/daily-summary', (req, res) => {
  try {
    // Extract daily summary from dashboard file
    const boardPath = join(__dirname, 'public', DASHBOARD_FILE);
    const boardContent = readFileSync(boardPath, 'utf8');
    
    // Find the Significant Changes Log section
    const changeLogMatch = boardContent.match(/## 📝 Significant Changes Log\s+([\s\S]*?)(?=##|$)/);
    
    if (!changeLogMatch) {
      return res.json({
        success: true,
        dailySummary: []
      });
    }
    
    const changeLogContent = changeLogMatch[1].trim();
    const dateBlocks = changeLogContent.split(/### \d{4}-\d{2}-\d{2}/);
    const dates = changeLogContent.match(/### (\d{4}-\d{2}-\d{2})/g) || [];
    
    const dailySummary = [];
    
    // Skip the first element which is empty
    for (let i = 1; i < dateBlocks.length; i++) {
      const entries = dateBlocks[i]
        .split(/\n-\s+/)
        .filter(entry => entry.trim())
        .map(entry => entry.trim());
      
      // Format date from yyyy-mm-dd to Month dd, yyyy
      const dateMatch = dates[i-1].match(/### (\d{4})-(\d{2})-(\d{2})/);
      if (dateMatch) {
        const [_, year, month, day] = dateMatch;
        const date = new Date(year, month - 1, day);
        const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        
        dailySummary.push({
          date: formattedDate,
          entries
        });
      }
    }
    
    res.json({
      success: true,
      dailySummary
    });
  } catch (error) {
    console.error('Error loading daily summary:', error);
    res.status(500).json({
      success: false,
      message: `Failed to load daily summary: ${error.message}`
    });
  }
});

// API endpoint to generate PDF
app.post('/api/generate-pdf', async (req, res) => {
  try {
    // Launch a browser instance
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    // Create a new page
    const page = await browser.newPage();
    
    // Get the server URL
    const serverUrl = `http://localhost:${port}/bdc-dashboard`;
    
    // Navigate to the dashboard page
    await page.goto(serverUrl, { waitUntil: 'networkidle2' });
    
    // Wait for content to load
    await page.waitForSelector('.dashboard', { visible: true });
    await page.waitForSelector('#dashboard-content:not(.loading)', { visible: true });
    
    // Hide buttons that shouldn't be in PDF
    await page.addStyleTag({
      content: `
        .sync-button, .share-button, .notification { display: none !important; }
        @page { margin: 1cm; }
        body { -webkit-print-color-adjust: exact; }
      `
    });
    
    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '1cm',
        right: '1cm',
        bottom: '1cm',
        left: '1cm'
      }
    });
    
    // Close the browser
    await browser.close();
    
    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Contractor_Growth_Systems_Dashboard.pdf');
    
    // Send the PDF
    res.send(pdfBuffer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({
      success: false,
      message: `Failed to generate PDF: ${error.message}`
    });
  }
});

// API endpoint to send PDF via email
app.post('/api/email-pdf', async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }
    
    // Launch a browser instance
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    // Create a new page
    const page = await browser.newPage();
    
    // Get the server URL
    const serverUrl = `http://localhost:${port}/bdc-dashboard`;
    
    // Navigate to the dashboard page
    await page.goto(serverUrl, { waitUntil: 'networkidle2' });
    
    // Wait for content to load
    await page.waitForSelector('.dashboard', { visible: true });
    await page.waitForSelector('#dashboard-content:not(.loading)', { visible: true });
    
    // Hide buttons that shouldn't be in PDF
    await page.addStyleTag({
      content: `
        .sync-button, .share-button, .notification { display: none !important; }
        @page { margin: 1cm; }
        body { -webkit-print-color-adjust: exact; }
      `
    });
    
    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '1cm',
        right: '1cm',
        bottom: '1cm',
        left: '1cm'
      }
    });
    
    // Close the browser
    await browser.close();
    
    // Create email transporter - usually you would use environment variables for these
    // but for the sake of this demo, we'll use a temporary test account via Ethereal
    const testAccount = await nodemailer.createTestAccount();
    
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
    
    // Send email
    const info = await transporter.sendMail({
      from: '"Contractor Growth Systems" <dashboard@contractorgrowth.systems>',
      to: email,
      subject: subject || 'Contractor Growth Systems Dashboard Report',
      text: message || 'Please find attached the latest dashboard report.',
      attachments: [
        {
          filename: `Contractor_Growth_Systems_Dashboard_${new Date().toISOString().split('T')[0]}.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    });
    
    console.log("Email sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
    res.json({
      success: true,
      message: 'Email sent successfully',
      previewUrl: nodemailer.getTestMessageUrl(info)
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: `Failed to send email: ${error.message}`
    });
  }
});

// Redirect the old route to the new one
app.get('/project-dashboard', (req, res) => {
  res.redirect('/bdc-dashboard');
});

// Start the server
app.listen(port, () => {
  console.log(`Contractor Growth Systems Dashboard server running at http://localhost:${port}/bdc-dashboard`);
}); 