import type { APIRoute } from 'astro';
import { blogIdeas } from '../data/seo/blog-ideas';
import { getBlogPostSeo } from '../data/seo/blog-meta';
import { siteConfig } from '../data/site';

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
	const items = blogIdeas
		.map((idea) => {
			const seo = getBlogPostSeo(idea);
			const url = new URL(`/blog/${idea.slug}/`, siteConfig.url).href;
			return `    <item>
      <title>${escapeXml(seo.ogTitle)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(seo.description)}</description>
      <pubDate>${new Date(seo.published).toUTCString()}</pubDate>
    </item>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Isle Blog — islecheats.net</title>
    <link>${siteConfig.url}/blog/</link>
    <description>Guides and articles about The Isle cheats, ESP, survival, and updates.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
