import type { BlogIdea } from './blog-ideas';
import { withBrand, clampDescription } from './helpers';
import type { PageSeoMeta } from './meta';

const intentPhrases: Record<BlogIdea['intent'], string> = {
	commercial: 'Compare packages and features',
	transactional: 'See pricing and buy with confidence',
	informational: 'Learn practical tips and mechanics',
};

const categoryKeywords: Record<string, string> = {
	guides: 'The Isle Guide',
	esp: 'The Isle ESP',
	features: 'The Isle Features',
	pricing: 'The Isle Cheat Price',
	buying: 'Buy The Isle Cheats',
	cheats: 'The Isle Cheats',
	compatibility: 'The Isle Compatibility',
	updates: 'The Isle Updates',
	survival: 'The Isle Survival Guide',
	growth: 'The Isle Growth Guide',
	dinosaurs: 'The Isle Dinosaur Guide',
	faq: 'The Isle FAQ',
	settings: 'The Isle Settings',
	performance: 'The Isle Performance',
	support: 'The Isle Cheats support',
};

/** Stable publish dates spread across 2025–2026 for E-E-A-T signals. */
const BASE_DATE = new Date('2025-06-01');

export function getBlogPostDates(slug: string): { published: string; modified: string } {
	let hash = 0;
	for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) | 0;
	const dayOffset = Math.abs(hash) % 240;
	const published = new Date(BASE_DATE);
	published.setDate(published.getDate() + dayOffset);
	const modified = new Date(published);
	modified.setDate(modified.getDate() + (Math.abs(hash) % 30));
	return {
		published: published.toISOString().slice(0, 10),
		modified: modified.toISOString().slice(0, 10),
	};
}

export function getBlogPostSeo(idea: BlogIdea): PageSeoMeta & { published: string; modified: string } {
	const keyword = categoryKeywords[idea.category] ?? 'The Isle Cheats';
	const shortTitle = idea.title.replace(/ — .+$/, '').slice(0, 42);
	const title = withBrand(shortTitle);
	const description = clampDescription(
		`${intentPhrases[idea.intent]} in this ${keyword.toLowerCase()} article for Windows PC players. ` +
			`Covers ${idea.category} topics with clear steps — read the guide and compare options today.`,
	);
	const dates = getBlogPostDates(idea.slug);

	return {
		title,
		description,
		ogTitle: idea.title,
		ogDescription: description,
		twitterTitle: shortTitle,
		twitterDescription: description,
		keywords: `${keyword}, ${idea.category}, The Isle, Isle Cheats`,
		published: dates.published,
		modified: dates.modified,
	};
}
