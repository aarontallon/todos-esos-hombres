import { defineConfig } from 'astro/config';

// Ajusta `site` (y `base` si sigues en GitHub Pages de proyecto, ej. "/todos-esos-hombres")
// cuando decidáis el hosting definitivo.
export default defineConfig({
  site: 'https://todosesoshombres.com',
  redirects: {
    '/teh_estadisticas.html': '/estadisticas/',
    '/teh_asimetrias.html': '/asimetrias/',
    '/teh_proposito.html': '/proposito/',
    '/teh_blog_dynamic.html': '/blog/',
    '/teh_blog_precio_una_vida_españa.html': '/blog/precio-vida-espana/',
    '/teh_blog_presuncion_inocencia.html': '/blog/presuncion-inocencia/',
    '/teh_blog_techo_cemento.html': '/blog/techo-cemento/',
    '/teh_blog_invisibles_calle.html': '/blog/invisibles-calle/',
  },
});
