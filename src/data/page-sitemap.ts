import { siteConfig } from './site';
import { prefixedLocales } from './i18n';
import { blogIdeas } from './seo/blog-ideas';

export type SitemapImage = {
	url: string;
	title: string;
	caption: string;
};

export type PageSitemapEntry = {
	path: string;
	priority: number;
	changefreq: 'daily' | 'weekly' | 'monthly';
	images: SitemapImage[];
	/** Include localized alternates in sitemap */
	localized?: boolean;
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

const defaultImages = [
	img('/images/hero.webp', 'The Isle Cheats hero', 'Homepage banner for The Isle Cheats'),
	img('/images/cover.webp', 'The Isle Cheats cover', 'Cover visual used across The Isle Cheats pages'),
];

/**
 * Canonical English page → image map for the public sitemap at /sitemap.xml
 */
export const pageSitemapEntries: PageSitemapEntry[] = [
	{
		path: '/',
		priority: 1,
		changefreq: 'daily',
		localized: true,
		images: [
			...defaultImages,
			img('/images/product-2.webp', 'The Isle Cheats product preview', 'Primary product visual'),
			img('/images/product-3.webp', 'The Isle combat preview', 'Gameplay context image'),
		],
	},
	{
		path: '/the-isle-cheats/',
		priority: 0.95,
		changefreq: 'weekly',
		images: [img('/images/product-2.webp', 'The Isle Cheats hub', 'The Isle Cheats product hub page')],
	},
	{
		path: '/the-isle-esp/',
		priority: 0.95,
		changefreq: 'weekly',
		images: [img('/images/product-4.webp', 'The Isle ESP guide', 'The Isle ESP overlay guide')],
	},
	{
		path: '/the-isle-guide/',
		priority: 0.9,
		changefreq: 'weekly',
		images: defaultImages,
	},
	{
		path: '/the-isle-features/',
		priority: 0.9,
		changefreq: 'weekly',
		images: defaultImages,
	},
	{
		path: '/the-isle-faq/',
		priority: 0.85,
		changefreq: 'monthly',
		images: defaultImages,
	},
	{
		path: '/the-isle-settings/',
		priority: 0.8,
		changefreq: 'monthly',
		images: defaultImages,
	},
	{
		path: '/the-isle-performance/',
		priority: 0.8,
		changefreq: 'monthly',
		images: defaultImages,
	},
	{
		path: '/the-isle-growth-guide/',
		priority: 0.8,
		changefreq: 'monthly',
		images: defaultImages,
	},
	{
		path: '/the-isle-survival-guide/',
		priority: 0.8,
		changefreq: 'monthly',
		images: defaultImages,
	},
	{
		path: '/the-isle-updates/',
		priority: 0.75,
		changefreq: 'weekly',
		images: defaultImages,
	},
	{
		path: '/the-isle-dinosaur-guide/',
		priority: 0.8,
		changefreq: 'monthly',
		images: defaultImages,
	},
	{
		path: '/cheats/',
		priority: 0.9,
		changefreq: 'weekly',
		images: [img('/images/product-2.webp', 'The Isle Cheats preview', 'Main visual for cheats page')],
	},
	{
		path: '/theisle-esp/',
		priority: 0.9,
		changefreq: 'weekly',
		images: [img('/images/product-4.webp', 'The Isle ESP preview', 'Main visual for ESP page')],
	},
	{
		path: '/features/',
		priority: 0.85,
		changefreq: 'weekly',
		images: defaultImages,
	},
	{
		path: '/pricing/',
		priority: 0.9,
		changefreq: 'weekly',
		images: [img('/images/cover.webp', 'The Isle Cheats pricing', 'Pricing page visual')],
	},
	{
		path: '/updates/',
		priority: 0.7,
		changefreq: 'weekly',
		images: defaultImages,
	},
	{
		path: '/faq/',
		priority: 0.75,
		changefreq: 'monthly',
		images: defaultImages,
	},
	{
		path: '/support/',
		priority: 0.75,
		changefreq: 'monthly',
		images: defaultImages,
	},
	{
		path: '/blog/',
		priority: 0.8,
		changefreq: 'weekly',
		images: defaultImages,
	},
	{
		path: '/refund-policy/',
		priority: 0.4,
		changefreq: 'monthly',
		images: defaultImages,
	},
	{
		path: '/privacy-policy/',
		priority: 0.4,
		changefreq: 'monthly',
		images: defaultImages,
	},
	{
		path: '/terms/',
		priority: 0.4,
		changefreq: 'monthly',
		images: defaultImages,
	},
	...blogIdeas.map(
		(idea): PageSitemapEntry => ({
			path: `/blog/${idea.slug}/`,
			priority: 0.65,
			changefreq: 'monthly',
			images: defaultImages,
		}),
	),
];

/** Localized homepage paths for sitemap */
export const localizedHomePaths = prefixedLocales.map((locale) => `/${locale}/`);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function getLocalizedSitemapPaths(entry: PageSitemapEntry): string[] {
	const paths = [entry.path];
	if (entry.localized) {
		for (const locale of prefixedLocales) {
			paths.push(`/${locale}/`);
		}
	}
	return paths;
}
