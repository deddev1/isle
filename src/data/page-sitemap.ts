import { siteConfig } from './site';
import { prefixedLocales } from './i18n';
import { blogIdeas } from './seo/blog-ideas';
import { getBlogPostDates } from './seo/blog-meta';

/** Blog posts that canonicalize to silo pages — omit from sitemap to avoid soft duplicates. */
const blogSitemapExclusions = new Set([
	'the-isle-survival-guide',
	'the-isle-growth-guide',
	'the-isle-dinosaur-guide',
	'the-isle-faq',
]);

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
	/** Stable ISO date (YYYY-MM-DD) when available */
	lastmod?: string;
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

const defaultImages = [
	img('/images/the-isle-hero.webp', 'The Isle Cheats hero', 'Homepage banner for The Isle Cheats'),
	img('/images/the-isle-herd-open-plains.webp', 'The Isle Cheats cover', 'Cover visual used across The Isle Cheats pages'),
];

const scene = {
	hero: img('/images/the-isle-hero.webp', 'The Isle survival hero', 'Dinosaur survival landscape banner'),
	tyrannosaur: img('/images/the-isle-tyrannosaur-forest.webp', 'The Isle tyrannosaur forest', 'Forest stalking scene for ESP guides'),
	combat: img('/images/the-isle-carnivore-combat.webp', 'The Isle carnivore combat', 'Combat encounter for cheat guides'),
	herd: img('/images/the-isle-herd-open-plains.webp', 'The Isle dinosaur herd', 'Herd on open plains for pricing pages'),
	swamp: img('/images/the-isle-swamp-environment.webp', 'The Isle swamp environment', 'Swamp biome for World ESP guides'),
	night: img('/images/the-isle-night-hunt.webp', 'The Isle night hunt', 'Night hunt scene for radar and FAQ pages'),
	river: img('/images/the-isle-riverside-drink.webp', 'The Isle riverside survival', 'Riverside drinking scene for survival guides'),
	pack: img('/images/the-isle-pack-encounter.webp', 'The Isle pack encounter', 'Pack encounter for updates and combat pages'),
	aerial: img('/images/the-isle-aerial-landscape.webp', 'The Isle aerial landscape', 'Aerial landscape for performance guides'),
	stalk: img('/images/the-isle-predator-stalk.webp', 'The Isle predator stalk', 'Predator stalking scene for ESP targeting'),
};

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
			scene.hero,
			scene.herd,
			scene.combat,
			scene.tyrannosaur,
		],
	},
	{
		path: '/the-isle-cheats/',
		priority: 0.95,
		changefreq: 'weekly',
		images: [scene.herd, scene.combat],
	},
	{
		path: '/the-isle-esp/',
		priority: 0.95,
		changefreq: 'weekly',
		images: [scene.stalk, scene.tyrannosaur, scene.swamp],
	},
	{
		path: '/the-isle-guide/',
		priority: 0.9,
		changefreq: 'weekly',
		images: [scene.river, scene.hero],
	},
	{
		path: '/the-isle-features/',
		priority: 0.9,
		changefreq: 'weekly',
		images: [scene.hero, scene.swamp, scene.combat],
	},
	{
		path: '/the-isle-faq/',
		priority: 0.85,
		changefreq: 'monthly',
		images: [scene.night, scene.stalk],
	},
	{
		path: '/the-isle-settings/',
		priority: 0.8,
		changefreq: 'monthly',
		images: [scene.aerial, scene.swamp],
	},
	{
		path: '/the-isle-performance/',
		priority: 0.8,
		changefreq: 'monthly',
		images: [scene.aerial, scene.hero],
	},
	{
		path: '/the-isle-growth-guide/',
		priority: 0.8,
		changefreq: 'monthly',
		images: [scene.herd, scene.river],
	},
	{
		path: '/the-isle-survival-guide/',
		priority: 0.8,
		changefreq: 'monthly',
		images: [scene.river, scene.swamp],
	},
	{
		path: '/the-isle-updates/',
		priority: 0.75,
		changefreq: 'weekly',
		images: [scene.pack, scene.night],
	},
	{
		path: '/the-isle-dinosaur-guide/',
		priority: 0.8,
		changefreq: 'monthly',
		images: [scene.tyrannosaur, scene.herd],
	},
	{
		path: '/cheats/',
		priority: 0.9,
		changefreq: 'weekly',
		images: [scene.combat, scene.pack, scene.stalk],
	},
	{
		path: '/theisle-esp/',
		priority: 0.9,
		changefreq: 'weekly',
		images: [scene.tyrannosaur, scene.stalk, scene.swamp],
	},
	{
		path: '/features/',
		priority: 0.85,
		changefreq: 'weekly',
		images: [scene.swamp, scene.hero, scene.combat],
	},
	{
		path: '/pricing/',
		priority: 0.9,
		changefreq: 'weekly',
		localized: true,
		images: [scene.herd, scene.combat, scene.pack],
	},
	{
		path: '/updates/',
		priority: 0.7,
		changefreq: 'weekly',
		images: [scene.pack, scene.night, scene.aerial],
	},
	{
		path: '/faq/',
		priority: 0.75,
		changefreq: 'monthly',
		images: [scene.night, scene.stalk, scene.tyrannosaur],
	},
	{
		path: '/support/',
		priority: 0.75,
		changefreq: 'monthly',
		images: [scene.river, scene.herd],
	},
	{
		path: '/blog/',
		priority: 0.8,
		changefreq: 'weekly',
		images: [scene.tyrannosaur, scene.combat, scene.swamp],
	},
	{
		path: '/refund-policy/',
		priority: 0.4,
		changefreq: 'monthly',
		images: [scene.herd, scene.pack],
	},
	{
		path: '/privacy-policy/',
		priority: 0.4,
		changefreq: 'monthly',
		images: [scene.swamp, scene.river],
	},
	{
		path: '/terms/',
		priority: 0.4,
		changefreq: 'monthly',
		images: [scene.aerial, scene.herd],
	},
	...blogIdeas
		.filter((idea) => !blogSitemapExclusions.has(idea.slug))
		.map((idea, index): PageSitemapEntry => {
			const dates = getBlogPostDates(idea.slug);
			return {
				path: `/blog/${idea.slug}/`,
				priority: 0.65,
				changefreq: 'monthly',
				lastmod: dates.modified,
				images: [Object.values(scene)[index % Object.values(scene).length]],
			};
		}),
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
			paths.push(locale === entry.path ? `/${locale}/` : `/${locale}${entry.path}`);
		}
	}
	return paths;
}
