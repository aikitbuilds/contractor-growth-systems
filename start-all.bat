@echo off
echo Starting the Contractor Growth Systems servers...

echo.
echo Starting the Dashboard server on port 3001...
start cmd /k "node dashboard-server.js"

echo.
echo Starting the development server...
start cmd /k "npm run dev"

echo.
echo Servers started. You can access:
echo - Main application: http://localhost:5173
echo - Project Dashboard: http://localhost:5173/project-dashboard
echo - Direct Dashboard: http://localhost:3001/bdc-dashboard

echo.
echo Press any key to exit this window...
pause > nul 