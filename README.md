# Jevans Consulting website

## Getting started

Requirements: Node.js compatible with the Astro version in `package-lock.json`.

```bash
npm ci
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Production SEO

The production URL is configured as `https://jevansconsulting.co.uk` in `astro.config.mjs`. Update it there if the canonical domain changes. It is used for canonical and social metadata and to generate `/sitemap.xml`.

`public/robots.txt` points search crawlers to the generated sitemap.

## Project structure

- `src/pages/` contains route entry points. `index.astro` is the homepage.
- `src/layouts/` contains shared page layouts and document metadata.
- `src/components/` contains reusable page sections.
- `src/styles/` contains global styles.
- `public/` contains static assets served from the site root.

Astro components render on the server/build by default. This project does not need React or client-side hydration for its current content.
