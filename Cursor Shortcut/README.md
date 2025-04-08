# Project Startup and Shutdown Shortcuts

This folder contains instructions for creating clickable Windows shortcuts to start and stop your development workflow for specific projects, particularly the `contractor-growth-systems` project.

These shortcuts utilize the global PowerShell scripts (`Start-Project.ps1` and `Stop-Project.ps1`) which should be saved in a central location (e.g., `C:\Scripts`).

## Prerequisites

1.  **Global PowerShell Scripts:** Ensure you have saved `Start-Project.ps1` and `Stop-Project.ps1` to a known location (this guide assumes `C:\Scripts`).
2.  **Scripts Added to PATH:** The directory containing the scripts (e.g., `C:\Scripts`) must be added to your Windows PATH environment variable. (Search "Environment Variables" -> Edit System Environment Variables -> Environment Variables... -> Select Path -> Edit -> New -> Add `C:\Scripts` -> OK -> OK -> OK). Restart PowerShell after changing PATH.
3.  **PowerShell Execution Policy:** You may need to allow local scripts to run. Open PowerShell *as Administrator* and run `Set-ExecutionPolicy RemoteSigned`. You generally only need to do this once.

## Creating the Shortcuts

Follow these steps to create the `.lnk` shortcuts:

### 1. Start Contractor Growth Project Shortcut

*   **Where to Create:** Desktop, or any convenient folder (like this `Cursor Shortcut` folder).
*   **Action:** Right-click -> New -> Shortcut.
*   **Location/Target:** Paste the following command (verify the script and project paths):

    ```
    powershell.exe -ExecutionPolicy Bypass -NoProfile -File "C:\Scripts\Start-Project.ps1" -ProjectPath "C:\Users\aikit\Documents\GitHub\contractor-growth-systems"
    ```

*   **Click Next.**
*   **Name:** `Start Contractor Growth Project`
*   **Click Finish.**
*   **(Recommended) Set Starting Directory:**
    *   Right-click the new shortcut -> Properties.
    *   Go to the "Shortcut" tab.
    *   In the "Start in:" field, enter the project path: `C:\Users\aikit\Documents\GitHub\contractor-growth-systems`
    *   Click OK.

### 2. Stop Contractor Growth Project Shortcut

*   **Where to Create:** Place this shortcut *inside* the project folder: `C:\Users\aikit\Documents\GitHub\contractor-growth-systems`.
*   **Action:** Right-click inside the project folder -> New -> Shortcut.
*   **Location/Target:** Paste the following command (verify the script path):

    ```
    powershell.exe -ExecutionPolicy Bypass -NoProfile -NoExit -File "C:\Scripts\Stop-Project.ps1"
    ```
    *   *Note: `-NoExit` keeps the PowerShell window open after the script runs so you can see the output.* 

*   **Click Next.**
*   **Name:** `Stop This Project`
*   **Click Finish.**
*   **(Required) Set Run as Administrator:**
    *   Right-click the new shortcut -> Properties.
    *   Go to the "Shortcut" tab.
    *   Click the "Advanced..." button.
    *   Check the box "Run as administrator".
    *   Click OK.
    *   Click OK.

## How to Use

*   **Start:** Double-click the `Start Contractor Growth Project` shortcut you created.
*   **Stop:** Navigate to the `C:\Users\aikit\Documents\GitHub\contractor-growth-systems` folder in File Explorer and double-click the `Stop This Project` shortcut. Accept the User Account Control (UAC) prompt asking for administrator privileges.

## Moving This Folder

You mentioned moving this `Cursor Shortcut` folder. You can place it anywhere you like (e.g., next to your `GitHub` folder). The instructions inside this README remain the same regardless of where this folder lives, as the shortcuts themselves reference the *actual* script and project locations. 