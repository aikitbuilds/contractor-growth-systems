# Deployment Guide for Namecheap Shared Hosting

This guide provides step-by-step instructions for deploying the Contractor Growth Systems website to Namecheap shared hosting.

## Prerequisites

1. A Namecheap account with an active hosting plan
2. FTP credentials for your hosting account (available in cPanel)
3. The built website files (located in the `dist` folder)

## Deployment Steps

### 1. Prepare Your Files

Make sure your project is built and ready for production:

```bash
npm run build
```

This will create optimized files in the `dist` directory.

### 2. Access cPanel

1. Log in to your Namecheap account
2. Go to "Hosting List" and click "Manage" next to your domain
3. Click "Go to cPanel"

### 3. Set Up Your Domain (If Not Already Done)

1. In cPanel, navigate to "Domains" section
2. If you're using a subdomain or addon domain, set it up here

### 4. Upload Files via File Manager

1. In cPanel, open "File Manager"
2. Navigate to the public_html directory (or the directory for your specific domain/subdomain)
3. Upload all files from your local `dist` folder to this directory
4. Make sure the `.htaccess` file was successfully uploaded (it's a hidden file)

### 5. Alternative: Upload via FTP

If you prefer using FTP:

1. Use an FTP client like FileZilla, Cyberduck, or WinSCP
2. Connect using your FTP credentials (found in cPanel)
3. Navigate to the public_html directory
4. Upload all files from your local `dist` folder

### 6. Verify the Deployment

1. Visit your website URL in a browser
2. Test navigation to different pages (About, Services, Pricing, etc.)
3. Test forms and interactive elements
4. Verify that images and other assets are loading correctly

### 7. Troubleshooting

If you encounter routing issues (404 errors when directly accessing a route):

1. Verify that the `.htaccess` file was properly uploaded
2. Check that mod_rewrite is enabled on your hosting (it usually is on Namecheap)
3. Contact Namecheap support if you continue experiencing issues

### 8. SSL Configuration

If your site doesn't automatically redirect to HTTPS:

1. In cPanel, go to "Security" > "SSL/TLS Status"
2. Make sure SSL is enabled for your domain
3. If needed, go to "Security" > "SSL/TLS" > "Manage SSL Sites" to configure SSL

## Alternative Deployment Options

### Netlify Deployment

For simpler deployment and automatic SSL:

1. Create a Netlify account (netlify.com)
2. Connect your GitHub repository
3. Configure build settings (Build command: `npm run build`, Publish directory: `dist`)
4. Deploy
5. The `_redirects` file in the dist folder will handle routing automatically

### Vercel Deployment

Another excellent option for React applications:

1. Create a Vercel account (vercel.com)
2. Connect your GitHub repository
3. Configure build settings if needed (should be auto-detected)
4. Deploy

## Post-Deployment Tasks

1. Submit your sitemap.xml to search engines (Google Search Console, Bing Webmaster Tools)
2. Set up analytics (Google Analytics, Plausible, etc.)
3. Test the website on different devices and browsers
4. Configure regular backups of your website files

## Support

If you need assistance with deployment, contact:

- Your web development team
- Namecheap support: support.namecheap.com 