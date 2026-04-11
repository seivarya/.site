<div align="center">
<h3>.site</h3>
a minimal astro based portfolio site.
<br>
<br>
</div>

> note: there isn't much info in the README.md, if you want more details, read the code.

##### core ([src/](src))
- `layouts/`: base layouts used across pages
- `components/`: reusable UI components
- `pages/`: route-based pages (astro routing)
- `styles/`: global + modular styles

##### public assets ([public/](public))
- static files served as-is
- images, icons, etc.

##### configuration
- `astro.config.mjs`: astro setup (integrations, adapter, build config)
- `tsconfig.json`: typescript config
- `package.json`: dependencies + scripts

##### deployment ([.wrangler/](.wrangler) / `wrangler.jsonc`)
- cloudflare worker deployment config
- handles build output + routing

##### scripts
- `npm run dev`: start local dev server
- `npm run build`: production build
- `npm run preview`: preview production build
- `npm run deploy`: deploy via wrangler

<br>

<div align="center">
<h4>build instructions</h4>
</div>

install dependencies:

```sh
npm install
