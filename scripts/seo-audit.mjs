#!/usr/bin/env node
/**
 * Post-build technical SEO audit — scans dist/ HTML and reports issues.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const SITE = 'https://islecheats.net';

async function walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) files.push(...(await walk(full)));
		else if (entry.name.endsWith('.html')) files.push(full);
	}
	return files;
}

function stripTags(html) {
	return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractAll(html, regex) {
	const matches = [];
	let m;
	const re = new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : regex.flags + 'g');
	while ((m = re.exec(html))) matches.push(m);
	return matches;
}

async function main() {
	try {
		await stat(DIST);
	} catch {
		console.error('Run `npm run build` first — dist/ not found.');
		process.exit(1);
	}

	const htmlFiles = await walk(DIST);
	const issues = [];
	const titles = new Map();
	const descriptions = new Map();
	const h1s = new Map();
	const allInternalPaths = new Set();
	const linkedInternal = new Set();

	for (const file of htmlFiles) {
		const rel = '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/');
		const path = rel === '/' ? '/' : rel.endsWith('/') ? rel : `${rel}/`;
		allInternalPaths.add(path);

		const html = await readFile(file, 'utf8');
		const text = stripTags(html);
		const wordCount = text.split(/\s+/).filter(Boolean).length;

		const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim();
		const desc = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1]?.trim();
		const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i)?.[1];
		const robots = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)["']/i)?.[1];
		const ogTitle = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']*)["']/i)?.[1];
		const ogDesc = html.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']*)["']/i)?.[1];
		const twitterTitle = html.match(/<meta[^>]+name=["']twitter:title["'][^>]+content=["']([^"']*)["']/i)?.[1];

		if (!title) issues.push({ severity: 'high', page: path, issue: 'Missing title tag' });
		else {
			if (!titles.has(title)) titles.set(title, []);
			titles.get(title).push(path);
		}

		if (!desc && !robots?.includes('noindex')) {
			issues.push({ severity: 'high', page: path, issue: 'Missing meta description' });
		} else if (desc) {
			if (!descriptions.has(desc)) descriptions.set(desc, []);
			descriptions.get(desc).push(path);
		}

		if (!canonical && !robots?.includes('noindex')) {
			issues.push({ severity: 'medium', page: path, issue: 'Missing canonical tag' });
		} else if (canonical) {
			if (canonical.includes('www.islecheats.net')) {
				issues.push({ severity: 'high', page: path, issue: 'Canonical uses www domain' });
			}
			if (!canonical.startsWith(SITE)) {
				issues.push({ severity: 'medium', page: path, issue: `Non-preferred canonical: ${canonical}` });
			}
		}

		if (!ogTitle || !ogDesc) {
			if (!robots?.includes('noindex')) {
				issues.push({ severity: 'low', page: path, issue: 'Missing Open Graph title or description' });
			}
		}
		if (!twitterTitle && !robots?.includes('noindex')) {
			issues.push({ severity: 'low', page: path, issue: 'Missing Twitter title' });
		}

		const pageH1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => stripTags(m[1]));
		for (const h1 of pageH1s) {
			if (!h1s.has(h1)) h1s.set(h1, []);
			h1s.get(h1).push(path);
		}
		if (pageH1s.length === 0 && !robots?.includes('noindex')) {
			issues.push({ severity: 'high', page: path, issue: 'Missing H1' });
		}
		if (pageH1s.length > 1) {
			issues.push({ severity: 'medium', page: path, issue: `Multiple H1 tags (${pageH1s.length})` });
		}

		const headings = [...html.matchAll(/<h([2-3])[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({
			level: m[1],
			text: stripTags(m[2]),
		}));
		const seen = new Set();
		for (const h of headings) {
			const key = `${h.level}:${h.text}`;
			if (seen.has(key)) {
				issues.push({ severity: 'medium', page: path, issue: `Duplicate H${h.level}: "${h.text}"` });
			}
			seen.add(key);
		}

		const imgs = [...html.matchAll(/<img\b([^>]*)>/gi)];
		for (const m of imgs) {
			const attrs = m[1];
			const src = attrs.match(/\bsrc=["']([^"']+)["']/i)?.[1];
			const altMatch = attrs.match(/\balt=["']([^"']*)["']/i);
			if (!altMatch) {
				issues.push({ severity: 'high', page: path, issue: `Image missing alt: ${src}` });
			}
		}

		const links = [...html.matchAll(/<a\b[^>]+href=["']([^"'#?]+)["']/gi)].map((m) => m[1]);
		for (const href of links) {
			if (href.startsWith('/') || href.startsWith(SITE)) {
				let internal = href.startsWith(SITE) ? href.replace(SITE, '') : href;
				if (!internal.endsWith('/') && !internal.includes('.')) internal += '/';
				linkedInternal.add(internal.split('#')[0].replace(/\/$/, '') === '' ? '/' : internal.split('#')[0]);
				if (href.includes('www.islecheats.net')) {
					issues.push({ severity: 'high', page: path, issue: `Internal link uses www: ${href}` });
				}
			}
		}

		if (wordCount < 120 && !robots?.includes('noindex') && !path.includes('/blog/')) {
			issues.push({ severity: 'low', page: path, issue: `Thin content (~${wordCount} words)` });
		}

		if (!html.includes('application/ld+json') && !robots?.includes('noindex') && path !== '/') {
			// homepage has multiple schemas in layout
		}
	}

	for (const [title, pages] of titles) {
		if (pages.length > 1) {
			issues.push({ severity: 'high', issue: `Duplicate title "${title}" on ${pages.length} pages`, pages });
		}
	}
	for (const [desc, pages] of descriptions) {
		if (pages.length > 1 && pages.every((p) => p.includes('/blog/'))) {
			issues.push({ severity: 'medium', issue: `Duplicate meta description (${pages.length} blog posts)`, pages: pages.slice(0, 5) });
		} else if (pages.length > 1) {
			issues.push({ severity: 'high', issue: `Duplicate meta description on ${pages.length} pages`, pages });
		}
	}
	for (const [h1, pages] of h1s) {
		if (pages.length > 1) {
			issues.push({ severity: 'medium', issue: `Duplicate H1 "${h1}" on ${pages.length} pages`, pages: pages.slice(0, 5) });
		}
	}

	// Sitemap check
	try {
		const sitemap = await readFile(join(DIST, 'sitemap.xml'), 'utf8');
		if (sitemap.includes('www.islecheats.net')) {
			issues.push({ severity: 'high', issue: 'Sitemap contains www URLs' });
		}
		const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
		if (!locs.every((u) => u.startsWith(SITE))) {
			issues.push({ severity: 'medium', issue: 'Sitemap has non-canonical domain URLs' });
		}
	} catch {
		issues.push({ severity: 'high', issue: 'Missing sitemap.xml in dist' });
	}

	// robots.txt
	try {
		const robots = await readFile(join(DIST, 'robots.txt'), 'utf8');
		if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) {
			issues.push({ severity: 'medium', issue: 'robots.txt missing correct sitemap URL' });
		}
	} catch {
		issues.push({ severity: 'high', issue: 'Missing robots.txt' });
	}

	// Broken internal links (static paths only)
	const existing = new Set([...allInternalPaths].map((p) => p.replace(/\/$/, '') || '/'));
	const broken = [];
	for (const link of linkedInternal) {
		const normalized = link.endsWith('/') ? link.slice(0, -1) || '/' : link;
		const check = normalized === '/' ? '/' : normalized + (normalized.includes('.') ? '' : '');
		const variants = [check, check + '/', check.replace(/\/$/, '')];
		const exists = variants.some((v) => {
			const key = v === '' ? '/' : v;
			return [...existing].some((e) => e.replace(/\/$/, '') === key.replace(/\/$/, ''));
		});
		if (!exists) {
			// try file path
			const asDir = normalized.endsWith('/') ? normalized : normalized + '/';
			if (!existing.has(asDir) && !existing.has(normalized) && normalized !== '/') {
				broken.push(normalized);
			}
		}
	}

	const grouped = { high: [], medium: [], low: [] };
	for (const i of issues) grouped[i.severity].push(i);

	console.log(JSON.stringify({
		pagesScanned: htmlFiles.length,
		issues: grouped,
		brokenInternalLinks: [...new Set(broken)].slice(0, 30),
		duplicateTitles: [...titles.entries()].filter(([, p]) => p.length > 1).length,
		duplicateDescriptions: [...descriptions.entries()].filter(([, p]) => p.length > 1).length,
	}, null, 2));
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
