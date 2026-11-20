# Astro Showcase Website

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

## Before publishing

Update the starter business details near the top of `src/pages/index.astro`:

- `name`
- `email`
- `audience`

Update the website's production URL in `astro.config.mjs` when your domain is confirmed:

```js
export default defineConfig({
  site: 'https://www.example.com',
});
```

The configured `site` value allows the shared layout to output canonical URLs.

## Project structure

- `src/pages/` contains route entry points. `index.astro` is the homepage.
- `src/layouts/` contains shared page layouts and document metadata.
- `src/components/` contains reusable page sections.
- `src/styles/` contains global styles.
- `public/` contains static assets served from the site root.

Astro components render on the server/build by default. This project does not need React or client-side hydration for its current content.
