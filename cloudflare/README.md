# Cloudflare redirect setup for islecheats.net

Seobility and other SEO tools require **one canonical URL**: `https://islecheats.net`.

The site ships with `public/_worker.js` (Pages advanced mode) to 301 redirect:

- `http://islecheats.net` → `https://islecheats.net`
- `http://www.islecheats.net` → `https://islecheats.net`
- `https://www.islecheats.net` → `https://islecheats.net`

## Required Cloudflare dashboard steps

### 1. DNS

| Type  | Name | Target / Content | Proxy   |
| ----- | ---- | ---------------- | ------- |
| CNAME | www  | islecheats.net   | Proxied |

Without a `www` DNS record, the www hostname cannot redirect and SEO tools will flag duplicate host issues.

### 2. SSL/TLS

Enable **Always Use HTTPS** under SSL/TLS → Edge Certificates.

### 3. Custom domains (Worker)

Route **both** hostnames to the `isle` Worker:

- `islecheats.net`
- `www.islecheats.net`

If a Cloudflare Pages project is also attached to these hostnames, remove or disable it so the Worker deployment is the only origin.

### 4. Redirect layers in this repo

Redirects are configured in two places:

1. `public/_worker.js` — host canonicalization (http/www → apex HTTPS) and path 301 rules
2. `public/_redirects` — relative path 301 rules only (Workers Assets rejects absolute URLs)

### 5. Bulk Redirects (recommended backup)

Import `cloudflare/bulk-redirects.csv` under **Bulk Redirects**, then create a Bulk Redirect Rule that uses the list.

Parameters: preserve query string, subpath matching, preserve path suffix. For the www rows, enable include subdomains.

## Verify

```sh
curl -I http://islecheats.net/
curl -I https://www.islecheats.net/
curl -I http://www.islecheats.net/
```

Each command should return `301` with `Location: https://islecheats.net/...`.
