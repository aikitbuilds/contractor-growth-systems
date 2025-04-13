import express from 'express';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
// PDF generation is disabled for deployment simplicity
// import puppeteer from 'puppeteer';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

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
  res.status(503).json({
    success: false,
    message: 'PDF generation is temporarily disabled on this deployment'
  });
});

// API endpoint to send PDF via email
app.post('/api/email-pdf', async (req, res) => {
  res.status(503).json({
    success: false,
    message: 'PDF email functionality is temporarily disabled on this deployment'
  });
});

// Redirect the old route to the new one
app.get('/project-dashboard', (req, res) => {
  res.redirect('/bdc-dashboard');
});

// Start the server
app.listen(port, () => {
  console.log(`Contractor Growth Systems Dashboard server running at http://localhost:${port}/bdc-dashboard`);
});

// API endpoint for waitlist submissions 
app.post('/api/waitlist-submit', async (req, res) => {
  try {
    const { name, email, company, phone, tier, message, urgency } = req.body;
    
    if (!name || !email || !tier) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and tier are required'
      });
    }
    
    // Create email transport with environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.VITE_EMAIL_SERVER_HOST || 'smtp.gmail.com',
      port: Number.parseInt(process.env.VITE_EMAIL_SERVER_PORT || '587', 10),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.VITE_EMAIL_SERVER_USER || 'growth@bdcteam.pro',
        pass: process.env.VITE_EMAIL_SERVER_PASSWORD // Make sure this is set in your .env file
      }
    });
    
    // Format date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    
    // Set up email content
    const mailOptions = {
      from: process.env.VITE_EMAIL_FROM || 'growth@bdcteam.pro',
      to: process.env.VITE_EMAIL_TO || 'growth@bdcteam.pro', // Send to yourself by default
      subject: `SaaS Waitlist Request - ${tier}`,
      html: `
        <h2>New Waitlist Submission - ${tier}</h2>
        <p><strong>Date:</strong> ${formattedDate} ${formattedTime}</p>
        <p><strong>Urgency:</strong> ${urgency || 'waiting list for saas'}</p>
        <hr>
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr>
        <h3>Desired Tier:</h3>
        <p>${tier}</p>
        <hr>
        <h3>Additional Message:</h3>
        <p>${message || 'No additional message provided.'}</p>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Also save to a file for backup (optional)
    const submissionPath = join(__dirname, 'waitlist-submissions.json');
    let submissions = [];
    
    try {
      const existingData = readFileSync(submissionPath, 'utf8');
      submissions = JSON.parse(existingData);
    } catch (error) {
      // File doesn't exist or is invalid JSON, starting with empty array
    }
    
    submissions.push({
      id: Date.now(),
      date: now.toISOString(),
      name,
      email,
      company,
      phone,
      tier,
      message,
      urgency: urgency || 'waiting list for saas'
    });
    
    writeFileSync(submissionPath, JSON.stringify(submissions, null, 2));
    
    // Return success
    res.json({
      success: true,
      message: 'Your information has been submitted successfully. We will notify you when a spot becomes available.'
    });
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    res.status(500).json({
      success: false,
      message: `Failed to process waitlist submission: ${error.message}`
    });
  }
}); 