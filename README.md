# SSVT Logistics Website

A modern, responsive logistics website built with React and Vite, featuring beautiful imagery and smooth animations.

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful images from Unsplash
- 📱 Mobile-friendly navigation
- 🚀 Sticky header that stays visible while scrolling
- 💼 Comprehensive logistics solutions showcase
- 📊 Industry focus sections
- 📖 Case studies with visual cards
- 📞 Contact form with company information

## Tech Stack

- React 18
- Vite
- CSS3 with modern features
- Azure Static Web Apps (deployment)

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Azure Static Web Apps

### Prerequisites
1. Azure account
2. GitHub account
3. Azure CLI (optional)

### Steps to Deploy:

#### 1. Push to GitHub
```bash
# Create a new repository on GitHub (https://github.com/new)
# Then run:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Azure Static Web Apps

**Option A: Using Azure Portal**
1. Go to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource" → Search for "Static Web App"
3. Click "Create"
4. Fill in the details:
   - **Subscription**: Select your subscription
   - **Resource Group**: Create new or select existing
   - **Name**: ssvt-website (or your preferred name)
   - **Plan type**: Free
   - **Region**: Choose closest to your users
   - **Source**: GitHub
   - **GitHub Account**: Authorize and select your account
   - **Organization**: Your GitHub username
   - **Repository**: ssvt-website
   - **Branch**: main
5. Build Details:
   - **Build Presets**: Custom
   - **App location**: /
   - **Api location**: (leave empty)
   - **Output location**: dist
6. Click "Review + Create" → "Create"

**Option B: Using Azure CLI**
```bash
# Login to Azure
az login

# Create resource group
az group create --name ssvt-rg --location eastus

# Create static web app
az staticwebapp create \
  --name ssvt-website \
  --resource-group ssvt-rg \
  --source https://github.com/YOUR_USERNAME/YOUR_REPO_NAME \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

#### 3. Configure GitHub Secrets
After creating the Static Web App, Azure will automatically:
- Add the GitHub Actions workflow (already in `.github/workflows/`)
- Add the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret to your GitHub repository

#### 4. Automatic Deployment
Once set up, every push to the `main` branch will automatically:
- Build your application
- Deploy to Azure Static Web Apps
- Provide a preview URL

### Your Website URL
After deployment, your website will be available at:
```
https://YOUR-STATIC-WEB-APP-NAME.azurestaticapps.net
```

You can also add a custom domain in the Azure Portal.

## Project Structure

```
ssvt-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx/css     # Sticky navigation header
│   │   ├── Hero.jsx/css       # Hero section with CTA
│   │   ├── Vision.jsx/css     # Company vision and stats
│   │   ├── Solutions.jsx/css  # Services showcase
│   │   ├── Industries.jsx/css # Industries served
│   │   ├── CaseStudies.jsx/css# Success stories
│   │   ├── Contact.jsx/css    # Contact form
│   │   └── Footer.jsx/css     # Footer section
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

Copyright © 2026 SSVT. All rights reserved.
