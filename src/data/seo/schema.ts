import { siteConfig } from '../site';
import type { LocaleCode } from '../i18n';
import { getLocalizedPath } from '../i18n';

export type BreadcrumbItem = {
	name: string;
	path: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[], locale: LocaleCode = 'en') {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: new URL(getLocalizedPath(item.path, locale), siteConfig.url).href,
		})),
	};
}

export function buildFaqSchema(faqs: ReadonlyArray<{ question: string; answer: string }>) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};
}

export function buildArticleSchema(opts: {
	title: string;
	description: string;
	path: string;
	locale?: LocaleCode;
	datePublished?: string;
	dateModified?: string;
}) {
	const { title, description, path, locale = 'en', datePublished, dateModified } = opts;
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: title,
		description,
		url: new URL(getLocalizedPath(path, locale), siteConfig.url).href,
		datePublished: datePublished ?? new Date().toISOString().slice(0, 10),
		dateModified: dateModified ?? new Date().toISOString().slice(0, 10),
		author: {
			'@type': 'Organization',
			name: siteConfig.name,
			url: siteConfig.url,
		},
		publisher: {
			'@type': 'Organization',
			name: siteConfig.name,
			url: siteConfig.url,
			logo: {
				'@type': 'ImageObject',
				url: new URL(siteConfig.logo, siteConfig.url).href,
			},
		},
	};
}

export function buildSoftwareApplicationSchema(opts: {
	name: string;
	description: string;
	pricingUrl: string;
	plans: ReadonlyArray<{ label: string; price: number }>;
	currency: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: opts.name,
		applicationCategory: 'GameApplication',
		operatingSystem: 'Windows',
		description: opts.description,
		offers: opts.plans.map((plan) => ({
			'@type': 'Offer',
			name: `${opts.name} ${plan.label}`,
			price: plan.price.toFixed(2),
			priceCurrency: opts.currency,
			availability: 'https://schema.org/InStock',
			url: opts.pricingUrl,
		})),
	};
}
