#!/bin/bash

echo "Starting the Contractor Growth Systems servers..."

echo ""
echo "Starting the Dashboard server on port 3001..."
node dashboard-server.js &
DASHBOARD_SERVER_PID=$!

echo ""
echo "Starting the development server..."
npm run dev &
DEV_SERVER_PID=$!

echo ""
echo "Servers started. You can access:"
echo "- Main application: http://localhost:5173"
echo "- Project Dashboard: http://localhost:5173/project-dashboard"
echo "- Direct Dashboard: http://localhost:3001/bdc-dashboard"

echo ""
echo "Press Ctrl+C to stop all servers..."

# Wait for user to press Ctrl+C
trap "kill $DASHBOARD_SERVER_PID $DEV_SERVER_PID; exit" INT
wait 