# Matteo Lorenzi Portfolio 2026-2027

Static portfolio built with Astro, Tailwind CSS, and GSAP.

## Stack

- Astro 5 (static output)
- Tailwind CSS 3
- GSAP 3 + ScrollTrigger
- i18n routes: FR and EN
- Formspree for contact form
- GitHub Pages deployment via GitHub Actions

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Create local environment file:

```bash
cp .env.example .env
```

3. Edit .env and set your real Formspree endpoint:

```dotenv
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-real-form-id
```

4. Start dev server:

```bash
npm run dev
```

## Scripts

- npm run dev: run local dev server
- npm run build: create production build in dist
- npm run preview: preview built site locally

## Routes

- /fr/
- /fr/projets/
- /fr/projets/[slug]
- /fr/contact/
- /fr/mentions-legales/
- /en/
- /en/projects/
- /en/projects/[slug]
- /en/contact/
- /en/mentions-legales/

Root path / redirects to /fr/.

## Environment Variables

Defined in [.env.example](.env.example):

- PUBLIC_FORMSPREE_ENDPOINT: required to enable contact form submissions
- SITE_URL: optional local override for Astro site config
- BASE_PATH: optional local override for Astro base config

If PUBLIC_FORMSPREE_ENDPOINT is not set, contact pages render a setup hint and do not submit.

## Fonts

Self-hosted font files are stored in [public/fonts](public/fonts):

- Space Grotesk: 300, 400, 500, 700
- Space Mono: 400, 700

Font faces are declared in [src/styles/fonts.css](src/styles/fonts.css).

## Deployment (GitHub Pages)

Workflow file: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

Behavior:

1. Triggers on push to main (and manual dispatch).
2. Installs dependencies and builds Astro.
3. Computes SITE_URL and BASE_PATH automatically from repository name.
4. Uploads dist and deploys to GitHub Pages.

No extra manual deploy step is required after pushing to main.

## Project Notes

- Main layout: [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)
- i18n dictionaries: [src/i18n/fr.ts](src/i18n/fr.ts), [src/i18n/en.ts](src/i18n/en.ts)
- Content collection: [src/content.config.ts](src/content.config.ts)
- Project entries: [src/content/projects](src/content/projects)
