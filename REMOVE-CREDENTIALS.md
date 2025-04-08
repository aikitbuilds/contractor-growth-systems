# Remove Sensitive Credentials from Git History

GitGuardian is still detecting sensitive credentials in the Git history. To completely remove them, follow these manual steps:

## Option 1: Create a Fresh Repository (Recommended)

This is the simplest approach for removing all sensitive data:

1. Create a new private repository on GitHub
2. Push only your current clean code (without .env file)
3. Delete the old repository

### Step-by-Step Instructions:

```bash
# 1. Create a new repository on GitHub (through the web interface)

# 2. Create a new branch with only the current state
git checkout -b clean-start

# 3. Create a new local repository
mkdir ../clean-contractor-growth
cd ../clean-contractor-growth
git init

# 4. Copy all files except sensitive ones
xcopy /E /exclude:.env,.git /I ../contractor-growth-systems/* .

# 5. Add files, commit, and push to the new repository
git add .
git commit -m "Fresh start with clean history"
git remote add origin https://github.com/aikitbuilds/new-repository-name.git
git push -u origin main

# 6. Delete the old repository on GitHub
# Go to repository settings → "Danger Zone" → "Delete this repository"
```

## Option 2: Use the GitHub Web Interface to Delete .env file

1. Log in to GitHub
2. Go to your repository
3. Navigate to the `.env` file
4. Click on the file
5. Click the trash icon (Delete this file)
6. Commit the deletion with a message like "Remove sensitive credentials"
7. Go to repository Settings → Security → Code scanning alerts
8. View and resolve the GitGuardian alerts

## Option 3: Use BFG Repo-Cleaner (For Technical Users)

For technical users who want to clean the history while keeping the same repository:

```bash
# 1. Install Java if you don't have it
# 2. Download BFG Jar
curl -Lo bfg.jar https://repo1.maven.org/maven2/com/madgag/bfg/1.14.0/bfg-1.14.0.jar

# 3. Clone a fresh copy of your repo
git clone --mirror https://github.com/aikitbuilds/contractor-growth-systems.git repo.git

# 4. Run BFG to remove sensitive data (passwords, etc.)
java -jar bfg.jar --replace-text sensitive-patterns.txt repo.git

# 5. Clean and push the repository
cd repo.git
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push
```

## Important Notes

- After cleaning the repository, all team members should clone a fresh copy
- Immediately change all exposed credentials (Stripe keys, email passwords, database passwords)
- Never commit sensitive files like `.env` to Git again
- Consider using a secret management service for production credentials 