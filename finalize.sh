#!/bin/bash

echo "🧼 Finalizing Meta3Ventures Site Setup..."

# 1. Clean and prepare
echo "🔧 Ensuring static assets and redirects..."

mkdir -p static

# Add a placeholder favicon if missing
if [ ! -f static/favicon.png ]; then
  echo "📌 Adding default favicon..."
  curl -s -o static/favicon.png https://favicon.io/favicon-generator/?t=M3V&b=square&bc=%23000&fc=%23fff
fi

# Replace netlify.toml redirect logic with proper _redirects file
rm -f netlify.toml
echo "/*    /index.html   200" > static/_redirects

# 2. Install dependencies (safety check)
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# 3. Build the project
echo "🏗️  Building the project..."
npm run build

# 4. Initialize Git and push to origin
echo "📁 Committing and pushing to GitHub..."
git add .
git commit -m "🚀 Final production-ready build for Meta3Ventures site"
git branch -M main
git push -u origin main

# 5. Optional: Deploy via Netlify CLI if installed
if command -v netlify &> /dev/null
then
  echo "🌐 Deploying to Netlify..."
  netlify deploy --prod --dir=build || netlify deploy --prod --dir=.svelte-kit/output
else
  echo "⚠️ Netlify CLI not found. Skipping deploy."
  echo "Install it with: npm install -g netlify-cli"
fi

echo "✅ Finalization complete. Visit your GitHub repo or Netlify dashboard to verify."

