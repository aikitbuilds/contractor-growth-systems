#!/bin/bash

# Build the project
npm run build

# Create a temporary directory for deployment
mkdir -p deploy_temp
cp -r dist/* deploy_temp/

# SSH deployment command using private key
scp -i ~/.ssh/id_rsa_namecheap -r deploy_temp/* solaqmaj@solarxway.com:/home/solaqmaj/bdcteam.pro/public_html/

# Clean up
rm -rf deploy_temp

echo "Deployment completed!" 