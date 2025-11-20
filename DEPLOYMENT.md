# LuckChain Frontend - GitHub Pages Deployment

This guide explains how to deploy the LuckChain frontend to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed locally
- Node.js 18+ installed

## Setup Instructions

### 1. Create a New GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `luckchain-frontend`)
3. Make it **public** (required for free GitHub Pages)
4. **Do not** initialize with README, .gitignore, or license

### 2. Prepare the Frontend Directory

The frontend directory is already configured for GitHub Pages deployment with:
- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ Vite configuration for GitHub Pages
- ✅ Build scripts in `package.json`

### 3. Initialize Git and Push to GitHub

```bash
# Navigate to the frontend directory
cd frontend

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: LuckChain frontend"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Save the settings

### 5. Configure Base Path (if needed)

If deploying to `username.github.io/repo-name`:

1. Open `vite.config.ts`
2. Update the `base` property:
   ```typescript
   base: '/your-repo-name/',
   ```
3. Commit and push:
   ```bash
   git add vite.config.ts
   git commit -m "Update base path for GitHub Pages"
   git push
   ```

If using a custom domain or `username.github.io`, keep `base: '/'`.

### 6. Deployment

The site will automatically deploy when you push to the `main` branch.

**Manual Deployment:**
- Go to **Actions** tab in your repository
- Click **Deploy to GitHub Pages** workflow
- Click **Run workflow**

### 7. Access Your Site

After deployment completes (2-5 minutes):
- **GitHub Pages URL**: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
- **Custom Domain**: Configure in Settings → Pages

## Updating the Site

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update: description of changes"
git push
```

The site will automatically rebuild and deploy.

## Important Notes

### Password Protection

The site uses client-side password protection (`654789`). This is **not secure** for production. Consider:
- Removing password protection for public deployment
- Using server-side authentication
- Implementing proper access control

### Blockchain Configuration

Update contract addresses in `src/lib/contracts/addresses.json` to point to your deployed contracts on:
- Mainnet
- Sepolia testnet
- Or other networks

### Environment Variables

For sensitive data, use GitHub Secrets:
1. Go to Settings → Secrets and variables → Actions
2. Add secrets (e.g., `VITE_RPC_URL`)
3. Reference in workflow: `${{ secrets.VITE_RPC_URL }}`

## Troubleshooting

### Build Fails

Check the Actions tab for error logs. Common issues:
- Missing dependencies: Run `npm install`
- TypeScript errors: Run `npm run type-check`
- Build errors: Run `npm run build` locally

### 404 on Refresh

If you get 404 errors when refreshing pages:
1. Add a `404.html` file that redirects to `index.html`
2. Or use hash routing instead of browser routing

### Blank Page

- Check browser console for errors
- Verify `base` path in `vite.config.ts` matches your deployment URL
- Check that all assets are loading correctly

## File Structure

```
frontend/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Static assets
├── src/                        # Source code
├── vite.config.ts             # Vite configuration
├── package.json               # Dependencies and scripts
└── DEPLOYMENT.md              # This file
```

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
