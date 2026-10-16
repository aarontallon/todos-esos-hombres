import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// En Netlify, `URL` es la dirección principal del sitio (el dominio propio si
// hay uno configurado, o *.netlify.app). Para builds locales se puede forzar
// con SITE_URL. Se usa para canonical, Open Graph, sitemap y robots.txt.
const site = process.env.SITE_URL || process.env.URL || 'http://localhost:4321';

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
