# Personal Website

A minimalist personal website built with Vue 3 and Vite.

## Features

- Clean, minimalist design
- Home page with links to projects and social media
- Invoicing details page
- Resume download page

## Development

### Prerequisites

- Node.js (v16 or later)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kkiermasz/kkiermasz.com.git
cd kkiermasz.com
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

This site is automatically deployed to Cloudflare Pages when changes are pushed to the main branch. The GitHub Actions workflow in `.github/workflows/deploy.yml` handles the build and deployment process.

Required secrets for GitHub:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
