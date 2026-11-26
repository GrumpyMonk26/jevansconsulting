import type { APIRoute } from 'astro';

export const prerender = true;

const publicPaths = ['/', '/projects/', '/privacy/', '/terms/'];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response('The production site URL must be configured.', { status: 500 });
  }

  const urls = publicPaths
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
