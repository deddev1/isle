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
	wordCount?: number;
}) {
	const { title, description, path, locale = 'en', datePublished, dateModified, wordCount } = opts;
	const url = new URL(getLocalizedPath(path, locale), siteConfig.url).href;
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		'@id': `${url}#article`,
		headline: title,
		description,
		url,
		mainEntityOfPage: { '@type': 'WebPage', '@id': url },
		datePublished: datePublished ?? new Date().toISOString().slice(0, 10),
		dateModified: dateModified ?? new Date().toISOString().slice(0, 10),
		...(wordCount ? { wordCount } : {}),
		author: {
			'@type': 'Organization',
			'@id': `${siteConfig.url}/#organization`,
			name: siteConfig.name,
			url: siteConfig.url,
		},
		publisher: {
			'@type': 'Organization',
			'@id': `${siteConfig.url}/#organization`,
			name: siteConfig.name,
			url: siteConfig.url,
			logo: {
				'@type': 'ImageObject',
				url: new URL(siteConfig.logo, siteConfig.url).href,
			},
		},
		inLanguage: locale,
	};
}

export function buildWebPageSchema(opts: {
	title: string;
	description: string;
	path: string;
	locale?: LocaleCode;
}) {
	const { title, description, path, locale = 'en' } = opts;
	const url = new URL(getLocalizedPath(path, locale), siteConfig.url).href;
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'@id': url,
		url,
		name: title,
		description,
		inLanguage: locale,
		isPartOf: { '@id': `${siteConfig.url}/#website` },
		publisher: { '@id': `${siteConfig.url}/#organization` },
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
