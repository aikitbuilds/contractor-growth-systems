# Deploying to Namecheap Hosting

This guide will walk you through the process of deploying the built project to your Namecheap shared hosting account.

## Prerequisites

1. A Namecheap shared hosting account
2. FTP credentials for your Namecheap hosting account
3. An FTP client like FileZilla, WinSCP, or Cyberduck

## Deployment Steps

### 1. Build the Project

The project has already been built, and the output files are in the `dist` directory.

### 2. Connect to Your Namecheap Hosting via FTP

1. Open your FTP client (FileZilla, WinSCP, etc.)
2. Enter your Namecheap FTP credentials:
   - Host: usually `server1.namecheaphosting.com` (check your Namecheap cPanel for the exact server)
   - Username: your cPanel username
   - Password: your cPanel password
   - Port: 21 (default FTP port)
3. Click "Connect" or "Login"

### 3. Upload the Files

1. Navigate to the public directory on your Namecheap hosting:
   - For the main domain: `/public_html/`
   - For a subdomain: `/public_html/subdomain/`

2. Upload all the contents of the `dist` directory to this location:
   - `index.html`
   - `assets/` directory (contains CSS, JavaScript, and other assets)
   - `Images/` directory (if present)
   - `vite.svg` (or other files at the root level)

### 4. Verify the Deployment

1. Visit your website domain in a browser
2. Check that all pages load correctly
3. Verify that all styles and functionality work as expected

### 5. Setup Backend Server (Optional)

If you need to run the Express backend server for API endpoints:

1. Check if your Namecheap hosting plan supports Node.js
2. If supported, upload the server files and install dependencies
3. Configure the server to run as a background process
4. Update any API endpoints in the frontend code to point to the correct server URL

Note: Most shared hosting plans do not support running custom Node.js servers. For full backend functionality, consider using a VPS or a platform like Heroku, Render, or Vercel.

### Troubleshooting

- **404 Errors**: Make sure your files are in the correct directory
- **Missing Styles**: Check that the `assets` directory was uploaded correctly
- **API Connection Issues**: Ensure your API endpoints are correctly configured in your code

## Additional Resources

- [Namecheap Hosting File Manager Guide](https://www.namecheap.com/support/knowledgebase/article.aspx/1263/205/how-to-use-cpanel-file-manager/)
- [Namecheap FTP Guide](https://www.namecheap.com/support/knowledgebase/article.aspx/1279/205/how-to-set-up-and-access-ftp-accounts/) 