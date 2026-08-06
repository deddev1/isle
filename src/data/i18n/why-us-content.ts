import type { LocaleCode } from '../i18n';
import { siteConfig } from '../site';

export type WhyUsSubsection = {
	heading: string;
	paragraphs?: string[];
	bullets?: string[];
};

export type WhyUsSection = {
	heading: string;
	paragraphs?: string[];
	bullets?: string[];
	subsections?: WhyUsSubsection[];
	afterParagraphs?: string[];
};

export type WhyUsCta = {
	label: string;
	href: string;
	external?: boolean;
};

export type WhyUsContent = {
	heading: string;
	subheading: string;
	intro: string[];
	bridge: string;
	sections: WhyUsSection[];
	ctas: WhyUsCta[];
	footnote: string;
};

const en: WhyUsContent = {
	heading: 'Why Choose Cloud-DMA for The Isle?',
	subheading: 'Complete ESP & Combat Toolkit',
	intro: [
		'Choosing the right cheat package for The Isle means understanding what actually improves your survival odds. Cloud-DMA is built specifically for dinosaur survival gameplay on Windows PC—combining hardware-based DMA technology with feature-rich ESP overlays and combat automation tools.',
	],
	bridge: "Here's what separates Cloud-DMA from standard injection-based cheats.",
	sections: [
		{
			heading: 'What Is Cloud-DMA?',
			paragraphs: [
				'Cloud-DMA operates through external hardware communication rather than injecting code into the game process. For The Isle players, this means:',
			],
			bullets: [
				'Lower detection profile – Memory reading happens outside the game process',
				'Stability across patches – External tools typically survive game updates better than internal cheats',
				'Windows PC optimization – Built specifically for the platform The Isle runs on',
			],
		},
		{
			heading: 'ESP Overlays: Information as Advantage',
			paragraphs: [
				"The Isle punishes players who don't know their surroundings. Cloud-DMA's ESP system splits visibility into two functional categories:",
			],
			subsections: [
				{
					heading: 'Visuals ESP',
					paragraphs: [
						"Tracks living entities in real-time. See other players, dinosaur positions, health percentages, and growth stages through terrain and obstacles. Know exactly what you're walking into before you commit.",
					],
				},
				{
					heading: 'World ESP',
					paragraphs: ['Environmental awareness overlay. Highlights resource spawns including:'],
					bullets: [
						'Bodies and meat sources',
						'Fruits, herbs, and mushrooms',
						'Water locations',
						'Configurable range settings and color coding to reduce screen clutter',
					],
				},
			],
			afterParagraphs: [
				'Both systems let you filter by distance and entity type, so your overlay shows only relevant intel.',
			],
		},
		{
			heading: 'Combat Hacks: Mechanical Advantage',
			paragraphs: [
				'Survival in The Isle often comes down to who reacts faster. Cloud-DMA includes several combat automation tools:',
			],
			bullets: [
				'Instant Rotation – Snap-turn mechanics for faster target acquisition',
				'Auto-Attack – Automated strike timing for consistent damage output',
				'Omnimovement – Breaks standard movement constraints for repositioning',
				'No Cooldown Attack – Removes delay between actions',
				'Unlock Zoom – Extended camera distance for better situational awareness',
			],
			afterParagraphs: [
				"These tools integrate with ESP data, letting you react to threats you've already spotted through walls.",
			],
		},
		{
			heading: 'Base Package vs. Upgrades',
			paragraphs: [
				'Cloud-DMA Base includes full ESP functionality (Visuals and World) plus all combat and utility hacks described above.',
				'Optional Aimbot sits in a separate tier for players who want full automation. The base package deliberately excludes this, keeping the focus on information and movement advantages rather than obvious mechanical snapping.',
			],
		},
		{
			heading: 'Learning Resources Included',
			paragraphs: ['Every license includes access to setup documentation and survival guides:'],
			bullets: [
				'ESP Configuration Guide – Range tuning, color customization, filter setup',
				'Survival Tactics – Growth path optimization, dinosaur matchup strategies',
				'Performance Settings – Balancing visual quality with ESP overlay stability',
				'Package Selection Advice – Factors for choosing monthly versus lifetime commitment',
			],
		},
		{
			heading: 'License Options',
			paragraphs: [
				'Monthly – Full feature access with lower upfront cost. Ideal for testing compatibility with your setup or playing specific seasons.',
				'Lifetime – One-time purchase for long-term players. Includes future ESP and combat hack updates for The Isle.',
				'Both options deliver the same Cloud-DMA package: Visuals ESP, World ESP, combat hacks, and utility tools.',
			],
		},
		{
			heading: 'Support & Delivery',
			paragraphs: [
				'Digital delivery activates after payment confirmation. Delivery timing varies by payment method and standard security review—most complete within minutes, some take hours depending on fraud checks.',
				'Post-purchase resources:',
			],
			bullets: [
				'Updates page at islecheats.net/updates/ for The Isle patch compatibility',
				'Support hub at islecheats.net/support/ for setup, billing, or technical issues',
				'Windows PC-specific troubleshooting guides on the Features and FAQ pages',
			],
		},
	],
	ctas: [
		{ label: 'Explore Full Features', href: '/features/' },
		{ label: 'Compare License Options', href: '/pricing/' },
		{ label: 'Contact Support', href: siteConfig.supportUrl, external: true },
	],
	footnote:
		'Available worldwide for Windows PC. Cloud-DMA package includes ESP overlays, combat hacks, and survival utilities.',
};

const byLocale: Partial<Record<LocaleCode, WhyUsContent>> = { en };

export function getWhyUsContent(locale: LocaleCode): WhyUsContent {
	return byLocale[locale] ?? en;
}
