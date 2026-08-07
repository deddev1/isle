import { cloudDmaOption, homeFaqs, productInfo, siteConfig } from '../site';

export const siloFaqs = {
	theIsleCheats: [
		{
			question: 'What is The Isle Cheats?',
			answer:
				'The Isle Cheats is a Windows PC software package with Visuals ESP, World ESP, combat cheats, and utility hacks for The Isle dinosaur survival game. Packages include Cloud-DMA options with monthly and lifetime licenses.',
		},
		{
			question: 'How do I buy The Isle Cheats?',
			answer:
				'Compare features on the Features page, choose a monthly or lifetime plan on Pricing, and complete checkout. License details are delivered digitally after payment confirmation.',
		},
		{
			question: 'Is The Isle Cheats compatible with Windows?',
			answer:
				'Yes. The Isle Cheats is designed for Windows PC. Confirm current compatibility on the Updates page after major game patches.',
		},
	],
	theIsleEsp: [
		{
			question: 'What is The Isle ESP?',
			answer:
				'The Isle ESP is an overlay that displays entity information on screen. Visuals ESP shows dinosaurs with boxes, health, growth, and distance. World ESP reveals resources like meat, water, herbs, and bodies.',
		},
		{
			question: 'How does The Isle ESP work?',
			answer:
				'ESP reads game entity data and renders configurable overlays. You can set max distance up to 2000m, customize colors, toggle snaplines, and filter allies with Ignore Team.',
		},
		{
			question: 'What is the difference between Visuals ESP and World ESP?',
			answer:
				'Visuals ESP tracks living entities and players. World ESP tracks environmental objects like bodies, meat, fruits, medicinal herbs, mushrooms, and water sources.',
		},
	],
	theIsleGuide: [
		{
			question: 'Where should new players start with The Isle Cheats?',
			answer:
				'Start with the homepage overview, then read the ESP page for awareness tools, the Cheats page for movement hacks, and the Survival Guide for in-game tactics.',
		},
		{
			question: 'Does The Isle Cheats include a guide for settings?',
			answer:
				'Yes. The Settings page covers ESP font, colors, menu key binds, and config profiles. The Performance page covers FPS optimization.',
		},
	],
	theIsleSettings: [
		{
			question: 'What settings can I configure in The Isle Cheats?',
			answer:
				'You can configure ESP font size, custom colors, menu key, config save/load profiles, FOV changer, crosshair, sky settings, and shadow toggles.',
		},
		{
			question: 'How do I save The Isle Cheats settings?',
			answer:
				'Use the Configs feature to save and load settings profiles. This lets you switch between ESP layouts for different dinosaurs or playstyles.',
		},
	],
	theIslePerformance: [
		{
			question: 'How can I improve The Isle FPS?',
			answer:
				'Lower in-game graphics settings, use the Disable Shadows hack, remove fog with No Fog, and ensure your Windows PC meets recommended specs for The Isle Evrima.',
		},
		{
			question: 'Does The Isle Cheats affect performance?',
			answer:
				'ESP overlays add minimal overhead. Utility hacks like Disable Shadows and No Fog can actually improve FPS by reducing rendered effects.',
		},
	],
	theIsleGrowthGuide: [
		{
			question: 'How does growth work in The Isle?',
			answer:
				'Dinosaurs grow by eating and surviving over time. Growth percentage is visible through Visuals ESP. Herbivores grow by grazing; carnivores grow by hunting.',
		},
		{
			question: 'What is the fastest way to grow in The Isle?',
			answer:
				'Stay fed, avoid unnecessary fights, nest with family for safety, and use World ESP to find food and water efficiently. Growth ESP helps track your progress.',
		},
	],
	theIsleSurvivalGuide: [
		{
			question: 'How do I find water in The Isle?',
			answer:
				'Water sources appear on the map near rivers and lakes. World ESP highlights water locations. Stay hydrated to maintain stamina and health.',
		},
		{
			question: 'How do I survive as a herbivore in The Isle?',
			answer:
				'Use World ESP to locate fruits, herbs, and water. Travel in groups, avoid apex predators, and monitor growth percentage to know when you can defend yourself.',
		},
	],
	theIsleDinosaurGuide: [
		{
			question: 'What dinosaurs are in The Isle?',
			answer:
				'The Isle features carnivores like Tyrannosaurus, Allosaurus, and Utahraptor, plus herbivores like Triceratops, Stegosaurus, and Maiasaura. Each has unique stamina, bite radius, and growth rates.',
		},
		{
			question: 'Which dinosaur is best for beginners?',
			answer:
				'Smaller herbivores like Dryosaurus or carnivores like Carnotaurus offer faster growth and lower risk. Use Classname ESP to identify species at a distance.',
		},
	],
} as const;

export const internalLinks = {
	hub: [
		{ href: '/the-isle-cheats/', label: 'The Isle Cheats hub' },
		{ href: '/the-isle-esp/', label: 'The Isle ESP guide' },
		{ href: '/the-isle-guide/', label: 'The Isle Guide' },
		{ href: '/the-isle-features/', label: 'The Isle Features' },
		{ href: '/the-isle-faq/', label: 'The Isle FAQ' },
	],
	guides: [
		{ href: '/the-isle-survival-guide/', label: 'The Isle Survival Guide' },
		{ href: '/the-isle-growth-guide/', label: 'The Isle Growth Guide' },
		{ href: '/the-isle-dinosaur-guide/', label: 'The Isle Dinosaur Guide' },
		{ href: '/the-isle-settings/', label: 'The Isle Settings' },
		{ href: '/the-isle-performance/', label: 'The Isle Performance Guide' },
		{ href: '/the-isle-updates/', label: 'The Isle Updates' },
	],
	product: [
		{ href: '/cheats/', label: 'Cheats page' },
		{ href: '/theisle-esp/', label: 'Visuals ESP page' },
		{ href: '/features/', label: 'Features overview' },
		{ href: '/pricing/', label: 'Pricing and plans' },
		{ href: siteConfig.supportUrl, label: 'Customer support' },
		{ href: '/faq/', label: 'FAQ hub' },
		{ href: '/blog/', label: 'The Isle Blog' },
	],
} as const;

export const extendedFaqs = [
	...homeFaqs,
	{
		question: 'Is The Isle Cheats compatible with Windows 11?',
		answer:
			'The Isle Cheats is built for Windows PC, including Windows 10 and Windows 11. Check the Updates page after major OS or game patches for compatibility notices.',
	},
	{
		question: 'What dinosaurs does The Isle ESP show?',
		answer:
			'Visuals ESP displays all entities in range with classname, health, growth, weight, stamina, and blood levels. World ESP shows environmental resources separately.',
	},
	{
		question: 'How much does The Isle Cheats cost?',
		answer:
			'Monthly packages start at $35 USD and lifetime packages at $150 USD. See the Pricing page for current plan details and Cloud-DMA inclusions.',
	},
	{
		question: 'How often are The Isle cheats updated?',
		answer:
			'Updates are published when The Isle game patches require maintenance. Check the Updates page and blog for the latest compatibility notices.',
	},
	{
		question: 'What is the difference between Visuals ESP and World ESP?',
		answer:
			'Visuals ESP tracks living entities with health, growth, and combat data. World ESP tracks map resources like bodies, meat, fruits, herbs, mushrooms, and water.',
	},
];

export const gameEntities = [
	'The Isle',
	'Afterthought LLC',
	'Evrima',
	'Cloud-DMA',
	'Visuals ESP',
	'World ESP',
	'dinosaur survival',
	'Windows PC',
	'Tyrannosaurus',
	'Herbivore',
	'Carnivore',
	'Instant Rotation',
	'Omnimovement',
	'Auto-Attack',
	'Radar',
	'FOV Changer',
];

export { productInfo, cloudDmaOption };
