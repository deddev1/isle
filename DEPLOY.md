# Cloudflare deployment

This site deploys with **Workers Builds** using a Worker + static assets.

## Workers Builds settings

| Setting | Value |
| ------- | ----- |
| **Build command** | `npm run build` |
| **Deploy command** | `npx wrangler deploy` |

`wrangler.toml` configures:

- **Worker entry:** `public/_worker.js` (canonical redirects + security headers)
- **Static assets:** `./dist` (Astro build output) via the `ASSETS` binding
- **`run_worker_first`:** redirects run before static asset serving
- **`html_handling`:** `force-trailing-slash` (matches Astro `trailingSlash: 'always'`)
- **`not_found_handling`:** `404-page` (serves `dist/404.html`)

The postbuild step writes `dist/.assetsignore` so `_worker.js` is not uploaded as a public static file.

Use the npm `wrangler` package directly — do not add a custom shim that overwrites `node_modules/.bin/wrangler` (that symlink points at the real binary and a shim causes an infinite deploy loop).

## Manual deploy

```sh
npm install
npm run build
npm run deploy
```

Equivalent commands:

```sh
npx wrangler deploy
```

## Redirects

HTTP/www → HTTPS apex redirects are handled by `public/_worker.js`
and `public/_redirects`.
