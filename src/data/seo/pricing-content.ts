import { cloudDmaOption, productInfo } from '../site';

export type PricingSubsection = {
	heading: string;
	paragraphs?: string[];
	bullets?: string[];
};

export type PricingSection = {
	id: string;
	heading: string;
	lead?: string;
	paragraphs?: string[];
	bullets?: string[];
	subsections?: PricingSubsection[];
};

export const pricingSections: PricingSection[] = [
	{
		id: 'overview',
		heading: 'How pricing works',
		lead: 'The Isle Cheats is sold as a digital Windows PC license. Prices are listed in USD so you can compare plan length before checkout.',
		paragraphs: [
			'Both plans include the same Cloud-DMA feature set. You are choosing how long the license lasts, not a different cheat package.',
		],
		bullets: [
			'Currency: USD',
			'Platform: Windows PC',
			'Delivery: digital after payment confirmation',
			'Base package: Cloud-DMA with ESP, World ESP, combat hacks, and utilities',
			'Aimbot is not included in the Cloud-DMA base option',
		],
	},
	{
		id: 'monthly-vs-lifetime',
		heading: 'Monthly vs lifetime',
		lead: 'Pick monthly for flexibility, or lifetime if you play often and want one payment.',
		subsections: [
			{
				heading: 'Monthly — $35 USD',
				bullets: [
					'30-day license',
					'Lowest upfront cost',
					'Good for seasonal play or testing after a big game patch',
					'Renew only when you still need access',
				],
			},
			{
				heading: 'Lifetime — $150 USD',
				bullets: [
					'One-time license fee',
					'No renewal billing',
					'Best value if you play many months per year',
					'Still receives maintenance updates when The Isle patches',
				],
			},
		],
		bullets: [
			'Same features on both plans',
			'Only duration and total cost change',
			'If you play more than about 4–5 months a year, lifetime usually costs less overall',
		],
	},
	{
		id: 'what-is-included',
		heading: 'What each package includes',
		lead: 'Every Cloud-DMA package bundles survival awareness and combat tools for The Isle on Windows PC.',
		subsections: [
			{
				heading: 'Visuals ESP',
				bullets: [
					'Entity boxes, snaplines, and distance',
					'Health, growth, stamina, and classname readouts',
					'Filters and colors to keep the overlay readable',
				],
			},
			{
				heading: 'World ESP',
				bullets: [
					'Bodies, meat, fruits, herbs, mushrooms, and water',
					'Faster farming and growth routes',
					'Less time searching the map',
				],
			},
			{
				heading: 'Combat and utilities',
				bullets: [
					'Instant Rotation, Auto-Attack, Omnimovement',
					'No Cooldown Attack, Unlock Zoom, and related helpers',
					'Radar, FOV Changer, fog/shadow toggles, and config profiles',
				],
			},
		],
		paragraphs: [
			'Before you buy, skim Features for the full checklist, the ESP guide for overlay details, and Cheats for movement options.',
		],
	},
	{
		id: 'payment-delivery',
		heading: 'Payment, delivery, and renewal',
		lead: 'Checkout happens on the official store linked from the product card and homepage.',
		paragraphs: [
			'After payment is confirmed, license details are sent digitally. Timing can vary by payment method or order review.',
		],
		bullets: [
			'Keep your order confirmation and payment reference',
			'Monthly licenses end after 30 days unless renewed',
			'Lifetime licenses do not need recurring renewal charges',
			'Read the Refund Policy before buying if you need clarity on digital delivery rules',
			'Contact Support with your order ID before disputing a charge',
		],
	},
	{
		id: 'compare-before-buy',
		heading: 'Quick checklist before checkout',
		lead: 'Use this short list so you buy the right plan the first time.',
		bullets: [
			'Confirm Cloud-DMA includes the ESP and combat tools you want',
			'Choose monthly for short-term use, lifetime for long-term play',
			'Check Updates after The Isle patches',
			'Read Refund Policy and Terms before paying',
			'Open Support if delivery or setup needs help',
		],
	},
];

export const pricingFaqs = [
	{
		question: 'How much does The Isle Cheats cost?',
		answer: `Monthly packages are $${productInfo.plans[0].price} USD and lifetime packages are $${productInfo.plans[1].price} USD. Both include Cloud-DMA with Visuals ESP, World ESP, Cheats, and utility hacks.`,
	},
	{
		question: 'What is the difference between monthly and lifetime?',
		answer:
			'Monthly renews every 30 days at the published rate. Lifetime is a one-time license fee with no renewal billing. Feature inclusions are the same; only duration and total cost differ.',
	},
	{
		question: 'Does Cloud-DMA include Aimbot?',
		answer: `${cloudDmaOption.label} includes ESP, World ESP, Cheats, and Other utility hacks. Aimbot is not included in the Cloud-DMA option. See the Features page for optional Aimbot details.`,
	},
	{
		question: 'What currency is pricing listed in?',
		answer: `All published prices are in ${productInfo.currency}. Your payment provider may show a converted amount depending on your country.`,
	},
	{
		question: 'How are licenses delivered after purchase?',
		answer: `License details are delivered digitally after payment confirmation. ${productInfo.delivery}. Delivery timing can vary by payment method.`,
	},
	{
		question: 'Can I get a refund?',
		answer:
			'Refund eligibility depends on the conditions on the Refund Policy page. Review that policy before purchasing if refund timing or digital delivery rules are important to your decision.',
	},
	{
		question: 'Do prices change after game updates?',
		answer:
			'Listed prices reflect current packages on islecheats.net. Maintenance updates after The Isle patches are announced on the Updates page. Price changes, if any, are published here rather than only inside checkout.',
	},
	{
		question: 'Where can I compare features before paying?',
		answer:
			'Start with the Features page and ESP guide, then use this pricing page for plan length. The FAQ hub answers delivery and compatibility questions.',
	},
] as const;
