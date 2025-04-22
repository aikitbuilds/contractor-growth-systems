# Set the source and destination paths
$sourceDir = ".\dist"
$zipFile = ".\main-site-build.zip"

# Clean up any existing zip file
if (Test-Path $zipFile) {
    Remove-Item $zipFile -Force
    Write-Host "Removed old zip file"
}

# Make sure the dist directory exists
if (-not (Test-Path $sourceDir)) {
    Write-Host "Error: dist directory not found. Build the project first with 'npm run build'" -ForegroundColor Red
    exit 1
}

# Create the zip file
Write-Host "Creating zip file from the dist directory..."
Compress-Archive -Path "$sourceDir\*" -DestinationPath $zipFile -CompressionLevel Optimal

# Verify the zip file was created
if (Test-Path $zipFile) {
    $size = (Get-Item $zipFile).Length / 1MB
    Write-Host "Created $zipFile (Size: $([math]::Round($size, 2)) MB)" -ForegroundColor Green
    Write-Host "Upload this zip file to your hosting provider."
} else {
    Write-Host "Error creating zip file" -ForegroundColor Red
} 