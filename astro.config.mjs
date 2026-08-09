import { defineConfig } from 'astro/config';

// El sitio se sirve hoy como GitHub Pages de PROYECTO en
// aarontallon.github.io/todos-esos-hombres/, de ahí el `base`.
// Si os pasáis a un dominio propio o a Pages de usuario (aarontallon.github.io
// a secas), quitad `base` y ajustad `site` al dominio final.
export default defineConfig({
  site: 'https://aarontallon.github.io',
  base: '/todos-esos-hombres/',
  // Astro no antepone `base` a los destinos de redirects automáticamente,
  // así que lo incluimos a mano aquí.
  redirects: {
    '/teh_estadisticas.html': '/todos-esos-hombres/estadisticas/',
    '/teh_asimetrias.html': '/todos-esos-hombres/asimetrias/',
    '/teh_proposito.html': '/todos-esos-hombres/proposito/',
    '/teh_blog_dynamic.html': '/todos-esos-hombres/blog/',
    '/teh_blog_precio_una_vida_españa.html': '/todos-esos-hombres/blog/precio-vida-espana/',
    '/teh_blog_presuncion_inocencia.html': '/todos-esos-hombres/blog/presuncion-inocencia/',
    '/teh_blog_techo_cemento.html': '/todos-esos-hombres/blog/techo-cemento/',
    '/teh_blog_invisibles_calle.html': '/todos-esos-hombres/blog/invisibles-calle/',
  },
});
