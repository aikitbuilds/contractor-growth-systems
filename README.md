# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ceb76ad4-4d25-4fab-9f9f-4c13f1062f4b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ceb76ad4-4d25-4fab-9f9f-4c13f1062f4b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start both the development server and dashboard server.
# On Windows:
start-all.bat

# On macOS/Linux:
chmod +x start-all.sh  # Make the script executable (one-time)
./start-all.sh

# Or start them separately:
# Development server for the React app
npm run dev
# Dashboard server for the project dashboard
node dashboard-server.js
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Project Dashboard Integration

This project includes an integrated Project Dashboard that displays project progress, tasks, and other project management information. The dashboard is built using HTML, JavaScript, and CSS and is served by a separate Express server.

To access the dashboard:
1. Start both servers (see above)
2. Visit http://localhost:5173/project-dashboard in your browser
3. The dashboard will be displayed within the main application

For direct access to the standalone dashboard, visit http://localhost:3001/bdc-dashboard

### Dashboard Features
- Task tracking with interactive checkboxes
- Project overview with visual diagrams
- AI recommendations and insights
- Daily activity summaries
- Tech stack information
- **PDF Generation & Sharing**: Save and share the dashboard as a PDF document via email

### Dashboard PDF & Sharing Features

The dashboard includes PDF generation and email sharing capabilities:

- **Save as PDF**: Generate a PDF version of the current dashboard state
- **Email Sharing**: Send the dashboard PDF to clients or team members
- **Custom Messaging**: Add personalized text when sharing via email

To use these features:
1. Click the green share button in the bottom-right corner of the dashboard
2. Choose "Download PDF" to save locally, or "Email PDF" to share via email
3. If emailing, fill in the recipient's email address and optional message

For more details, see the dashboard-sharing.md file.

### Dashboard Data
Dashboard data is stored in the `public/BOARD.md` Markdown file. You can edit this file to update the project status, add tasks, or modify other information displayed on the dashboard.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ceb76ad4-4d25-4fab-9f9f-4c13f1062f4b) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
