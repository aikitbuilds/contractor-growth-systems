# Deployment Guide: Billion Dollar Contractor Website

This guide provides step-by-step instructions for deploying the Billion Dollar Contractor website to Namecheap shared hosting.

## Prerequisites

1. A Namecheap hosting account
2. Domain name configured with Namecheap (e.g., billiondollarcontractor.com)
3. Access to cPanel (provided by Namecheap)
4. FTP client (such as FileZilla, Cyberduck, or similar)

## Step 1: Access cPanel

1. Log in to your Namecheap account
2. Go to your dashboard and find your hosting package
3. Click on "Manage" and then "Go to cPanel"

## Step 2: Set up SSL Certificate

1. In cPanel, search for "SSL/TLS"
2. Select "SSL/TLS Status"
3. Make sure SSL is enabled for your domain
4. If not, go back and select "SSL/TLS" > "Install and Manage SSL for your site (HTTPS)"
5. Choose your domain and click "Install Certificate"
6. Select "Let's Encrypt" as the certificate provider (free)
7. Complete the installation process

## Step 3: Set up File Manager or FTP Access

### Option 1: Using cPanel File Manager
1. In cPanel, click on "File Manager"
2. Navigate to the public_html directory

### Option 2: Using FTP Client
1. In cPanel, look for "FTP Accounts"
2. Create an FTP account or note down your main FTP credentials
3. Connect to your server using your FTP client with the credentials
4. Navigate to the public_html directory

## Step 4: Upload Files

1. Delete any existing files in the public_html directory (if this is a new installation)
2. Upload all files from the `dist` directory to the public_html directory, including:
   - index.html
   - assets/ directory (contains CSS and JavaScript)
   - Images/ directory
   - captions/ directory
   - .htaccess file
   - _redirects file
   - robots.txt
   - sitemap.xml
   - favicon.ico
3. Make sure to maintain the directory structure

## Step 5: Configure .htaccess

The .htaccess file should already be uploaded, but verify that it contains:
- Rewrite rules for client-side routing
- MIME type configurations
- Caching rules
- Compression settings

If the .htaccess file doesn't work or causes errors, you may need to:
1. Check with Namecheap support to ensure mod_rewrite is enabled
2. Make adjustments based on the specific Apache configuration

## Step 6: Verify the Deployment

1. Visit your website (e.g., https://billiondollarcontractor.com)
2. Test different pages by navigating through the menu
3. Test direct URLs (deep linking) by entering URLs directly in the browser
4. Check that everything loads correctly, including images, styles, and interactive elements

## Step 7: Submit Sitemap to Search Engines

1. Create accounts on Google Search Console and Bing Webmaster Tools
2. Verify ownership of your site
3. Submit your sitemap.xml URL (https://billiondollarcontractor.com/sitemap.xml)

## Troubleshooting Common Issues

### 404 Errors on Page Refresh or Direct URL Access
- Check that the .htaccess file is working correctly
- Ensure mod_rewrite is enabled on your server

### Missing Styles or JavaScript
- Check browser console for errors
- Verify that asset paths are correct
- Make sure all files from the dist/assets directory were uploaded

### SSL Issues
- Ensure SSL is properly installed
- Check for mixed content warnings in the browser console

### Contact Namecheap Support
If you encounter persistent issues, contact Namecheap support with specific error messages and screenshots. Their support team can help troubleshoot server configuration issues.

## Maintenance and Updates

For future updates:
1. Make changes to the source code
2. Run `npm run build` to generate a new build
3. Upload only the changed files to the server, or repeat the above process to upload everything

## Backup

Before making significant changes:
1. In cPanel, look for the "Backup" or "Backup Wizard" tool
2. Create a full backup or just back up the public_html directory
3. Download and store the backup securely 