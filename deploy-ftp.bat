@echo off
echo FTP Deployment Script
echo =====================
echo.
echo This script will upload your website to solarsales.pro
echo Please enter your password when prompted.
echo.

set FTP_USER=bdc-ftp-admin@solarsales.pro
set FTP_HOST=solarsales.pro
set LOCAL_DIR=%~dp0dist
set REMOTE_DIR=/

REM Create FTP commands file
echo open %FTP_HOST% > ftp_commands.txt
echo %FTP_USER% >> ftp_commands.txt
echo prompt >> ftp_commands.txt
echo cd %REMOTE_DIR% >> ftp_commands.txt
echo lcd %LOCAL_DIR% >> ftp_commands.txt
echo mput *.* >> ftp_commands.txt
echo cd assets >> ftp_commands.txt
echo lcd assets >> ftp_commands.txt
echo mput *.* >> ftp_commands.txt
echo cd .. >> ftp_commands.txt
echo lcd .. >> ftp_commands.txt
echo cd Images >> ftp_commands.txt
echo lcd Images >> ftp_commands.txt
echo mput *.* >> ftp_commands.txt
echo bye >> ftp_commands.txt

REM Run FTP with commands file
echo Running FTP upload...
ftp -s:ftp_commands.txt

echo.
echo Upload completed!
pause 