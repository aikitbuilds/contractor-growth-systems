# Build the project
npm run build

# Create a temporary directory for deployment
New-Item -ItemType Directory -Force -Path deploy_temp
Copy-Item -Path "dist\*" -Destination "deploy_temp" -Recurse

# SSH deployment command using private key
scp -i "$HOME\.ssh\id_rsa_namecheap" -r deploy_temp\* solaqmaj@solarxway.com:/home/solaqmaj/bdcteam.pro/public_html/

# Clean up
Remove-Item -Path deploy_temp -Recurse -Force

Write-Host "Deployment completed!" 