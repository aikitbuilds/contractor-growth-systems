@echo off
echo FTP Deployment Script
echo =====================
echo.
echo This script will upload your website to solarsales.pro

set FTP_USER=bdc-ftp-admin@solarsales.pro
set FTP_HOST=solarsales.pro
set LOCAL_DIR=%~dp0dist
set REMOTE_DIR=/

echo Please enter your FTP password when prompted.
echo.

REM Create a WinSCP script file
echo option batch abort > winscp_script.txt
echo option confirm off >> winscp_script.txt
echo open ftp://%FTP_USER%@%FTP_HOST%/ >> winscp_script.txt
echo lcd "%LOCAL_DIR%" >> winscp_script.txt
echo cd "%REMOTE_DIR%" >> winscp_script.txt
echo synchronize remote >> winscp_script.txt
echo exit >> winscp_script.txt

REM Run WinSCP with the script file
echo Please install WinSCP if you don't have it: https://winscp.net/eng/download.php
echo Then run the following command:
echo winscp.com /script=winscp_script.txt

pause 