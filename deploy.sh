#!/bin/bash

# Deploy script untuk GitHub Pages
# Jalankan: bash deploy.sh

echo "🚀 Starting deployment to GitHub Pages..."

# Build project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Navigate to dist folder
cd dist

# Initialize git in dist folder
echo "📝 Initializing git..."
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Force push to gh-pages branch
echo "🚀 Pushing to GitHub Pages..."
git push -f https://github.com/Tamaaa1/Wowowowhbd.git main:gh-pages

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your site will be available at: https://tamaaa1.github.io/Wowowowhbd/"
    echo "⏰ Wait 1-2 minutes for GitHub Pages to update"
else
    echo "❌ Deployment failed!"
    exit 1
fi

# Clean up
cd ..

echo "🎉 Done!"
