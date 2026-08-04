import type { APIRoute } from 'astro';
import { absolutePageUrl, getLocalizedSitemapPaths, pageSitemapEntries } from '../data/page-sitemap';
import { getLocalizedPath } from '../data/i18n';
import { locales } from '../data/i18n';

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

export const prerender = true;

export const GET: APIRoute = () => {
	const lastmod = new Date().toISOString().slice(0, 10);

	const urls = pageSitemapEntries
		.flatMap((entry) => {
			const paths = getLocalizedSitemapPaths(entry);

			return paths.map((path) => {
				const images = entry.images
					.map(
						(image) => `    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`,
					)
					.join('\n');

				const alternates = locales
					.map((locale) => {
						const href = absolutePageUrl(getLocalizedPath(path, locale.code));
						return `    <xhtml:link rel="alternate" hreflang="${locale.hrefLang}" href="${escapeXml(href)}" />`;
					})
					.join('\n');

				const xDefault = absolutePageUrl(getLocalizedPath(path, 'en'));

				return `  <url>
    <loc>${escapeXml(absolutePageUrl(path))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${Number.isInteger(entry.priority) ? entry.priority.toFixed(1) : String(entry.priority)}</priority>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(xDefault)}" />
${images}
  </url>`;
			});
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
