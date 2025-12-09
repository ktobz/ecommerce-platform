# Deployment Guide

## Step 1: Push to GitHub

Since GitHub CLI (`gh`) was just installed, you need to restart your terminal for it to be recognized.

### Option A: Using GitHub CLI (Recommended)

1. **Open a NEW terminal/PowerShell window** (to recognize the newly installed `gh` command)

2. Navigate to the project:
   ```powershell
   cd C:\Users\User\.gemini\antigravity\scratch\ecommerce-platform
   ```

3. Authenticate with GitHub:
   ```powershell
   gh auth login
   ```
   Follow the prompts to authenticate.

4. Create and push to GitHub:
   ```powershell
   gh repo create ecommerce-platform --public --source=. --remote=origin --push
   ```

### Option B: Manual GitHub Setup

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `ecommerce-platform`
3. Run these commands:
   ```powershell
   cd C:\Users\User\.gemini\antigravity\scratch\ecommerce-platform
   git remote add origin https://github.com/YOUR_USERNAME/ecommerce-platform.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Netlify

### Option A: Via Netlify Web UI (Easiest)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Select your `ecommerce-platform` repository
5. Netlify will auto-detect the settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: `frontend`
6. Click **"Deploy site"**

### Option B: Via Netlify CLI

1. Open a terminal in the frontend directory:
   ```powershell
   cd C:\Users\User\.gemini\antigravity\scratch\ecommerce-platform\frontend
   ```

2. Login to Netlify:
   ```powershell
   npx netlify-cli login
   ```

3. Create a new site:
   ```powershell
   npx netlify-cli init
   ```
   Follow the prompts to create a new site.

4. Deploy:
   ```powershell
   npx netlify-cli deploy --prod --dir=dist
   ```

## Verification

- **GitHub**: Visit `https://github.com/YOUR_USERNAME/ecommerce-platform`
- **Netlify**: Your site will be live at `https://YOUR_SITE_NAME.netlify.app`
