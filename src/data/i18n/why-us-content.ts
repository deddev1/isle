import type { LocaleCode } from '../i18n';

export type WhyUsHighlight = {
	title: string;
	lead: string;
	bullets: string[];
};

export type WhyUsCta = {
	label: string;
	href: string;
	external?: boolean;
};

export type WhyUsContent = {
	heading: string;
	subheading: string;
	intro: string;
	highlights: WhyUsHighlight[];
	closing: string;
	ctas: WhyUsCta[];
	footnote: string;
};

const en: WhyUsContent = {
	heading: 'Why Choose The Isle Cheats (Cloud-DMA)?',
	subheading: 'ESP, combat hacks, and utilities for Windows PC',
	intro:
		'Cloud-DMA is built for The Isle survival gameplay — see threats sooner, find food and water faster, and react quicker in fights. No fluff, just the tools players actually run.',
	highlights: [
		{
			title: 'Visuals ESP — spot threats early',
			lead: 'Track players and dinos before they see you.',
			bullets: [
				'Health, growth, stamina, and distance through terrain',
				'Boxes, snaplines, and filters up to 2000 m',
				'Custom colors so your overlay stays readable',
			],
		},
		{
			title: 'World ESP — farm faster',
			lead: 'Stop guessing where meat, water, and plants are.',
			bullets: [
				'Meat, bodies, fruits, herbs, mushrooms, and water',
				'Cleaner routes for growth and survival',
				'Less running around, more time growing',
			],
		},
		{
			title: 'Combat hacks — win more fights',
			lead: 'Pair map intel with faster movement and strikes.',
			bullets: [
				'Instant Rotation, Auto-Attack, and Omnimovement',
				'No Cooldown Attack and Unlock Zoom',
				'Radar, FOV Changer, and utility toggles included',
			],
		},
		{
			title: 'Simple pricing, digital delivery',
			lead: 'Same Cloud-DMA package on monthly or lifetime.',
			bullets: [
				'Monthly — $35 USD, good for testing your setup',
				'Lifetime — $150 USD, one payment, no renewals',
				'License delivered digitally on Windows PC after checkout',
			],
		},
	],
	closing:
		'Base Cloud-DMA includes Visuals ESP, World ESP, combat hacks, and utility tools. Aimbot is optional and not in the base pack. Compare everything on Features or check Pricing when you are ready to buy.',
	ctas: [
		{ label: 'See All Features', href: '/features/' },
		{ label: 'View Pricing', href: '/pricing/' },
	],
	footnote: 'The Isle Cheats · Cloud-DMA · Visuals ESP · World ESP · combat hacks · Windows PC · worldwide',
};

const byLocale: Partial<Record<LocaleCode, WhyUsContent>> = { en };

export function getWhyUsContent(locale: LocaleCode): WhyUsContent {
	return byLocale[locale] ?? en;
}
