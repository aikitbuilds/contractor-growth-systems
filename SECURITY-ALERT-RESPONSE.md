# Security Alert: Exposed Credentials

GitGuardian has detected exposed credentials in our repository. This document outlines the steps to address this security issue.

## Exposed Credentials

1. **Stripe API Keys**
   - Stripe Secret Key: `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`
   - Publishable Key: `pk_live_51QoTvoC5xbT6E2bKh9BRfNY10QuGrjiWoapFyJ4yNmfNss5ZTDwf0nKhYHvz8E0FVrIy9gWP97fpQ0HPihndU7Zu00FE2Devrn`

2. **SMTP Credentials**
   - Email: `growth@bdcteam.pro`
   - Password: `oreh nmoa zwgg pdkp`

3. **Database Credentials**
   - Host: `162.0.209.106`
   - User: `solaqmaj_admin`
   - Password: `:#o=U;ks1q-PJ`

## Immediate Actions Required

### 1. Revoke and Rotate Stripe Keys

1. **Revoke Exposed Keys**:
   - Log into the [Stripe Dashboard](https://dashboard.stripe.com/)
   - Go to Developers → API keys
   - Find the exposed key (`sk_live_51QoTvoC5xbT6E2bK...`)
   - Click "Revoke" to invalidate the key

2. **Create New Keys**:
   - In the same Stripe Dashboard, create a new API key
   - Note both the new secret key and publishable key
   - Update your local `.env` file with these new keys
   - **DO NOT COMMIT the updated `.env` file to Git**

### 2. Change Email Password

1. **Change SMTP Password**:
   - Log in to the email account (`growth@bdcteam.pro`)
   - Go to account settings and security
   - Change the password and generate a new app-specific password if using Google
   - Update your local `.env` file with the new password
   - **DO NOT COMMIT the updated `.env` file to Git**

### 3. Update Database Credentials

1. **Change Database Password**:
   - Log in to your database administration panel (e.g., phpMyAdmin, cPanel)
   - Change the password for the `solaqmaj_admin` user
   - Update your local `.env` file with the new password
   - **DO NOT COMMIT the updated `.env` file to Git**

## Preventing Future Exposure

### 1. Remove `.env` from Git Repository

```bash
# Add .env to .gitignore if not already there
echo ".env" >> .gitignore

# Remove .env from Git tracking but keep the local file
git rm --cached .env
git commit -m "Remove .env file from version control"
```

### 2. Use Environment Variables on Production

- For production environments, set environment variables directly on the server
- Do not store production credentials in code repositories

### 3. Use `.env.example` as a Template

- We've created a `.env.example` file with placeholder values
- New developers should copy this file: `cp .env.example .env`
- Then fill in their own values for local development

### 4. Consider Git History Clean-up

To completely remove the exposed credentials from Git history, use BFG Repo-Cleaner:

```bash
# Download BFG Jar file
curl -o bfg.jar https://repo1.maven.org/maven2/com/madgag/bfg/1.14.0/bfg-1.14.0.jar

# Create a backup of your repository
git clone --mirror git@github.com:aikitbuilds/contractor-growth-systems.git backup-repo

# Run BFG to remove sensitive data
java -jar bfg.jar --replace-text sensitive-patterns.txt backup-repo

# Push the cleaned history
cd backup-repo
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push
```

Note: Cleaning Git history will change commit hashes and should be done carefully.

## Reporting to the Team

After completing these steps, notify the development team about:
1. The credential exposure incident
2. The new credentials that should be used
3. The security measures implemented to prevent future exposures 