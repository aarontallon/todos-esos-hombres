# Todos esos hombres

Plataforma dedicada a cuestionar las narrativas actuales sobre la masculinidad, la justicia y las brechas sociales mediante datos y análisis.

Sitio estático hecho con [Astro](https://astro.build), publicado en [Netlify](https://www.netlify.com). Contenido en cinco lenguas (castellano, català, galego, euskara y aranés).

## Desarrollo

```bash
npm install
npm run dev       # servidor local en http://localhost:4321
npm run build     # genera ./dist
npm run preview   # sirve ./dist para probar el build
```

Requiere Node 22 o superior (ver `.nvmrc`).

## Estructura

- `src/pages/` — páginas (inicio, estadísticas, asimetrías, propósito, blog, 404).
- `src/content/posts/<idioma>/<slug>.md` — artículos del blog; cada artículo existe en las cinco lenguas.
- `src/layouts/`, `src/components/` — maquetación, navegación y metadatos SEO (`Head.astro`).
- `public/teh_i18n.js` — traducciones y selector de idioma de las páginas.
- `public/images/posts/` — imágenes de cabecera de los artículos.

## Despliegue en Netlify

La configuración está en `netlify.toml` (comando de build, redirecciones 301 desde las antiguas URLs `.html` y cabeceras de seguridad y caché).

1. En Netlify: **Add new site → Import an existing project** y elige este repositorio de GitHub.
2. Netlify detecta `netlify.toml`: build `npm run build`, publicar `dist`. No hace falta tocar nada más.
3. Cada `push` a `main` publica en producción; cada Pull Request genera una vista previa.

Canonical, Open Graph, `sitemap-index.xml` y `robots.txt` usan la URL del sitio que Netlify proporciona en la variable `URL` (dominio propio si lo configuras, o `*.netlify.app`). En local puede forzarse con `SITE_URL=https://ejemplo.org npm run build`.

## Añadir un artículo

Crea `<slug>.md` en cada carpeta de idioma de `src/content/posts/` (campos obligatorios en `src/content.config.ts`). Si falta una traducción, esa lengua muestra la versión en castellano.
