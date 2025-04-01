const express = require('express');
const fs = require('fs');
const path = require('path');

// Color constants for better console visibility
const COLORS = {
  GREEN: '\x1b[42m\x1b[30m%s\x1b[0m', // Green background with black text
  RED: '\x1b[41m\x1b[37m%s\x1b[0m',   // Red background with white text
  BLUE: '\x1b[44m\x1b[37m%s\x1b[0m',  // Blue background with white text
  YELLOW: '\x1b[43m\x1b[30m%s\x1b[0m' // Yellow background with black text
};

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// API endpoint to sync the dashboard with BOARD.md
app.get('/api/sync-board', (req, res) => {
  try {
    const boardContent = fs.readFileSync(path.join(__dirname, 'BOARD.md'), 'utf8');
    fs.writeFileSync(path.join(__dirname, 'public', 'BOARD.md'), boardContent);
    console.log(COLORS.GREEN, ' ✓ DASHBOARD SYNCED SUCCESSFULLY - READY FOR USE ');
    res.json({ success: true, message: 'Dashboard synchronized successfully', timestamp: new Date() });
  } catch (error) {
    console.error(COLORS.RED, ` ✗ ERROR SYNCING DASHBOARD: ${error.message} `);
    res.status(500).json({ success: false, message: error.message });
  }
});

// API endpoint to update task status
app.post('/api/update-task', (req, res) => {
  try {
    const { taskId, completed } = req.body;
    if (!taskId) {
      return res.status(400).json({ success: false, message: 'Task ID is required' });
    }
    
    let boardContent = fs.readFileSync(path.join(__dirname, 'BOARD.md'), 'utf8');
    
    // Update task status based on ID
    let regex;
    if (taskId.startsWith('B')) {
      // Backlog item
      regex = new RegExp(`- \\[([ x])\\] (${taskId})\\s`, 'g');
      boardContent = boardContent.replace(regex, `- [${completed ? 'x' : ' '}] $2 `);
    } else if (taskId.startsWith('A')) {
      // AI recommendation
      regex = new RegExp(`- \\[([ x])\\] (${taskId})\\s`, 'g');
      boardContent = boardContent.replace(regex, `- [${completed ? 'x' : ' '}] $2 `);
      
      // Log AI recommendation task selection for the server to act on
      if (completed) {
        console.log(COLORS.GREEN, ` ACTION REQUIRED: AI RECOMMENDATION ${taskId} SELECTED `);
        console.log(COLORS.GREEN, ` WAITING FOR CONFIRMATION TO IMPLEMENT THIS RECOMMENDATION `);
      } else {
        console.log(COLORS.RED, ` ACTION DECLINED: AI RECOMMENDATION ${taskId} UNSELECTED `);
      }
    } else if (/^\d+$/.test(taskId)) {
      // Main task
      regex = new RegExp(`- \\[([ x])\\] (${taskId}\\.)`, 'g');
      boardContent = boardContent.replace(regex, `- [${completed ? 'x' : ' '}] $2`);
    } else if (/^\d+[a-z]$/.test(taskId)) {
      // Subtask
      regex = new RegExp(`  - \\[([ x])\\] (${taskId}\\.)`, 'g');
      boardContent = boardContent.replace(regex, `  - [${completed ? 'x' : ' '}] $2`);
    }
    
    fs.writeFileSync(path.join(__dirname, 'BOARD.md'), boardContent);
    fs.writeFileSync(path.join(__dirname, 'public', 'BOARD.md'), boardContent);
    
    // Add entry to daily log if completing a task
    if (completed) {
      appendToDailyLog(taskId);
    }
    
    res.json({ success: true, message: 'Task updated successfully', timestamp: new Date() });
  } catch (error) {
    console.error(COLORS.RED, ` ✗ ERROR UPDATING TASK: ${error.message} `);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Function to append completed task to daily log
function appendToDailyLog(taskId) {
  try {
    const today = new Date();
    const dateString = today.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    const timeString = today.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
    
    let boardContent = fs.readFileSync(path.join(__dirname, 'BOARD.md'), 'utf8');
    
    // Check if today's date is already in the daily log
    const dailyLogSection = boardContent.match(/## Daily Log\s+\n([\s\S]*?)(?=\n##|$)/);
    const todaySection = dailyLogSection && dailyLogSection[0].match(new RegExp(`### ${dateString}\\s+\\n([\\s\\S]*?)(?=\\n###|$)`));
    
    if (todaySection) {
      // Today's section exists, append to it
      const updatedTodaySection = todaySection[0] + `- ${timeString} - Completed task: ${taskId}\n`;
      boardContent = boardContent.replace(todaySection[0], updatedTodaySection);
    } else if (dailyLogSection) {
      // Daily log section exists, but not today's date
      const updatedDailyLog = `## Daily Log\n\n### ${dateString}\n- ${timeString} - Completed task: ${taskId}\n\n` + 
                               dailyLogSection[0].replace('## Daily Log\n\n', '');
      boardContent = boardContent.replace(dailyLogSection[0], updatedDailyLog);
    } else {
      // No daily log section exists yet
      boardContent += `\n\n## Daily Log\n\n### ${dateString}\n- ${timeString} - Completed task: ${taskId}\n`;
    }
    
    fs.writeFileSync(path.join(__dirname, 'BOARD.md'), boardContent);
    fs.writeFileSync(path.join(__dirname, 'public', 'BOARD.md'), boardContent);
    
    console.log(COLORS.BLUE, ` ℹ DAILY LOG UPDATED: Task ${taskId} completed at ${timeString} `);
    
  } catch (error) {
    console.error(COLORS.RED, ` ✗ ERROR UPDATING DAILY LOG: ${error.message} `);
  }
}

// API endpoint to get daily activity summary
app.get('/api/daily-summary', (req, res) => {
  try {
    const boardContent = fs.readFileSync(path.join(__dirname, 'BOARD.md'), 'utf8');
    
    // Extract the daily log section
    const dailyLogSection = boardContent.match(/## Daily Log\s+\n([\s\S]*?)(?=\n##|$)/);
    
    if (!dailyLogSection) {
      return res.json({ success: true, dailySummary: [] });
    }
    
    // Parse entries by date
    const dateRegex = /### ([^\n]+)\n([\s\S]*?)(?=\n###|$)/g;
    const dailySummary = [];
    
    let match;
    while ((match = dateRegex.exec(dailyLogSection[0])) !== null) {
      const date = match[1];
      const entries = match[2].trim()
        .split('\n')
        .filter(entry => entry.trim() !== '')
        .map(entry => entry.trim());
      
      dailySummary.push({ date, entries });
    }
    
    res.json({ success: true, dailySummary });
  } catch (error) {
    console.error(COLORS.RED, ` ✗ ERROR FETCHING DAILY SUMMARY: ${error.message} `);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Redirect root to dashboard
app.get('/', (req, res) => {
  res.redirect('/dashboard.html');
});

// Start server
app.listen(PORT, () => {
  console.log(COLORS.GREEN, ` ✓ DASHBOARD SERVER RUNNING AT http://localhost:${PORT} `);
  console.log(COLORS.GREEN, ` ✓ VIEW YOUR DASHBOARD AT http://localhost:${PORT}/dashboard.html `);
});

// Initial sync of BOARD.md to public folder
try {
  const boardContent = fs.readFileSync(path.join(__dirname, 'BOARD.md'), 'utf8');
  fs.writeFileSync(path.join(__dirname, 'public', 'BOARD.md'), boardContent);
  console.log(COLORS.GREEN, ' ✓ INITIAL DASHBOARD SYNC COMPLETED ');
} catch (error) {
  console.error(COLORS.RED, ` ✗ ERROR DURING INITIAL SYNC: ${error.message} `);
} 