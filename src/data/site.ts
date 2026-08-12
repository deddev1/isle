export const siteConfig = {
	name: 'The Isle Cheats',
	url: 'https://islecheats.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@islecheats.net',
	supportUrl: '/go/support/',
	logo: '/images/navbar-logo.png',
	checkoutUrl: '/go/checkout/',
	defaultOgImage: '/images/the-isle-hero.webp',
	metaDescription:
		'Buy The Isle Cheats for Windows PC. Isle Cheats with ESP, Cloud-DMA hacks, monthly and lifetime plans, features, guides, and support at islecheats.net.',
	keywords:
		'The Isle Cheats, Isle Cheats, The Isle Hacks, Isle Hacks, The Isle ESP, Isle ESP, The Isle growth, The Isle Hack, Buy The Isle Cheats, The Isle Guide, The Isle Features, The Isle survival, The Isle Cloud-DMA, islecheats.net',
} as const;

export const homeSeo = {
	title: 'The Isle Cheats — ESP, Hacks & Guides | islecheats',
	heroEyebrow: 'Windows PC · Cloud-DMA',
	heroTitle: 'The Isle Cheats',
	heroSubtitle: 'ESP, World ESP & Dino Radar',
	heroDescription: 'Cheats available — ESP, Aimbot & Wallhack for The Isle.',
	featuresHeading: 'Compare Packages',
	whyUsHeading: 'Why Choose Cloud-DMA for The Isle?',
	whyUsIntro:
		'Complete ESP & Combat Toolkit for dinosaur survival on Windows PC — hardware-based DMA with ESP overlays and combat automation tools.',
	whyUsPoints: [
		'Isle Cheats and The Isle Cheats in one Windows PC package with Visuals ESP and World ESP',
		'Isle hacks for combat — Instant Rotation, Auto-Attack, and Omnimovement',
		'Track The Isle growth, health, stamina, and map resources through ESP overlays',
		'Cloud-DMA includes ESP and hacks without Aimbot in the base package',
		'Monthly or lifetime licenses with clear pricing before checkout',
		'Guides for The Isle survival, growth, dinosaurs, settings, and performance',
	],
	description:
		'Buy The Isle Cheats with Visuals ESP, World ESP, and Cloud-DMA for Windows PC. Compare features, pricing, and guides at islecheats.net.',
} as const;

export const homeVideo = {
	src: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/ef/0605.mp4',
	thumbnail: '/images/the-isle-hero.webp',
	thumbnailAlt: 'The Isle Cheats demo video thumbnail',
	title: 'The Isle Cheats demo video',
} as const;

export const pageDescriptions = {
	'/': siteConfig.metaDescription,
	'/theisle-esp/':
		'The Isle Cheats ESP — Visuals ESP and World ESP for entity awareness, resource tracking, and environment readouts on Windows PC. Part of the Cloud-DMA package at islecheats.net.',
	'/cheats/':
		'The Isle Cheats — Instant Rotation, Auto-Attack, Omnimovement, No Cooldown Attack, and other Cloud-DMA combat and movement cheats for The Isle.',
	'/features/':
		'Full The Isle Cheats feature list — compare Cloud-DMA, Visuals ESP, World ESP, Cheats, and utility hacks before choosing monthly or lifetime packages.',
	'/pricing/':
		'The Isle Cheats pricing — monthly and lifetime Cloud-DMA, ESP, and Cheats packages in USD. Compare plan lengths and included features at islecheats.net.',
	'/updates/':
		'The Isle Cheats updates — product changelog, maintenance notices, and compatibility updates published after The Isle patches.',
	'/faq/':
		'The Isle Cheats FAQ — answers about Cloud-DMA, ESP, Cheats, digital delivery, refund policy, and customer support.',
	'/support/':
		'Contact The Isle Cheats support for delivery, setup, and billing help. Open the customer support portal with your order details.',
	'/refund-policy/':
		'The Isle Cheats refund policy — review eligibility, conditions, and timelines before purchasing Cloud-DMA or ESP packages.',
	'/privacy-policy/':
		'The Isle Cheats privacy policy — how islecheats.net handles visitor data, cookies, and order-related information.',
	'/terms/':
		'The Isle Cheats terms of use — license terms, acceptable use, and purchase conditions for islecheats.net packages.',
} as const;

export type PagePath = keyof typeof pageDescriptions;

export function getPageDescription(path: PagePath): string {
	return pageDescriptions[path];
}

export const cloudDmaOption = {
	label: 'Cloud-DMA',
	summary:
		'Cloud-DMA package includes Visuals ESP, World ESP, Cheats, and Other hacks. Aimbot is not included in the Cloud-DMA option.',
	excludes: ['Aimbot'],
} as const;

export const productInfo = {
	name: 'The Isle Cheats',
	shortName: 'The Isle Cheats',
	tagline: 'Cloud-DMA, ESP, and Cheats for The Isle',
	summary:
		'The Isle Cheats is a software package with Cloud-DMA support, Visuals ESP, World ESP, Cheats, and utility hacks for players who want clearer survival information and advanced control options in The Isle.',
	game: 'The Isle',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC'],
	updateCadence: 'Updates are published when game patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	],
	currency: 'USD',
	features: {
		aimbot: [
			'Aimbot — Automatic aiming at players',
			'Aim Key — Keys to activate automatic aiming',
			'Lock Target — Stay locked on the target until it is destroyed',
			'Distance — Activation distance of the aimbot',
			'FOV — Field of view for the aimbot',
			'Smooth — Smoothing of aimbot movements',
			'Draw FOV — Display the aimbot working area as a circle',
			'Filled FOV — Visual fill style for the FOV circle',
			'Color FOV — Set your preferred FOV color',
			'Draw Arrows — Arrows around the aiming area',
			'Head Only — Aim targets the head only',
		],
		visualsEsp: [
			'Show Entities — Enable ESP to display entities',
			'BOX — ESP boxes around entities',
			'Box Type — Full or corner box style',
			'Snaplines — Lines to entities',
			'Snaplines Style — Line display type',
			'Distance — Distance to targets in meters',
			'Health — HP level (bar or text)',
			'Names — Entity name display',
			'Growth — Growth percentage',
			'Weight — Entity weight in kg',
			'Classname — Current class of the entity',
			'Ignore Team — Ignore allies',
			'Show All — Show everything in range',
			'Max Distance — ESP range (up to 2000 m)',
			'Custom Colors — Custom colors for ESP elements',
			'Bite Radius — Show bite radius',
			'Head Dot — Dot on the head',
			'Show Stamina — Stamina level',
			'Show Blood — Blood level',
			'Show Bleeding — Blood loss level',
		],
		worldEsp: [
			'Show Objects — Toggle environment object ESP',
			'Bodies — Bodies of the deceased',
			'Meat — Meat pickups',
			'Fruits — Fruit resources',
			'Medicinal herbs — Herb pickups',
			'Mushrooms — Mushroom resources',
			'Water — Water sources',
			'Max Distance — Object display range in meters',
		],
		cheats: [
			'No Cost Ability — Abilities require no point expenditure',
			'No Cooldown Attack — Removes cooldown between attacks',
			'No Fractured — Disables fractures',
			'Omnimovement — Removes movement constraints for dinos',
			'Instant Rotation — Instant rotation of your dino',
			'Auto-Attack — Automatically attacks in your attack area',
			'Unlock Zoom — Zoom in and out beyond default limits',
		],
		other: [
			'Radar — Window showing all dinos within radius',
			'Disable Shadows — Turn off in-game shadows',
			'FOV Changer — Increase field of view',
			'Change Sky — Sky brightness and moon settings',
			'No Fog — Remove fog',
			'Crosshair — Custom center-screen crosshair',
			'Menu Key — Bindable key to open the menu',
			'Font Settings — Configure ESP font size',
			'Configs — Save and load settings profiles',
			'Languages — English and Russian',
		],
		general: [
			'Cloud-DMA option available (ESP, World ESP, Cheats, and Other — no Aimbot)',
			'In-client feature toggles',
			'Monthly and lifetime package options',
			'Product update notices on the Updates page',
			'Support channel for setup and billing questions',
		],
	},
} as const;

export const featureCategories = [
	{ id: 'visualsEsp', title: 'Visuals ESP (WH)', href: '/theisle-esp/' },
	{ id: 'worldEsp', title: 'World ESP (Environment)', href: '/theisle-esp/#world-esp' },
	{ id: 'cheats', title: 'Cheats', href: '/cheats/' },
	{ id: 'other', title: 'Other (The Isle)', href: '/features/#other' },
	{ id: 'aimbot', title: 'Aimbot', href: '/features/#aimbot', cloudDmaExcluded: true },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/#home', section: 'home' },
	{ label: 'Features', href: '/#features', section: 'features' },
	{ label: 'Pricing', href: '/pricing/', section: 'pricing' },
	{ label: 'FAQ', href: '/#faq', section: 'faq' },
	{ label: 'Blog', href: '/blog/', section: 'blog' },
] as const;

export const footerNav = [
	{ label: 'Product updates log', href: '/updates/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'The Isle Cheats hub', href: '/the-isle-cheats/' },
	{ label: 'The Isle ESP guide', href: '/the-isle-esp/' },
	{ label: 'The Isle Guide', href: '/the-isle-guide/' },
	{ label: 'Site overview', href: '/' },
	{ label: 'Visuals ESP page', href: '/theisle-esp/' },
	{ label: 'Cheats page', href: '/cheats/' },
	{ label: 'All features and hacks', href: '/features/' },
	{ label: 'The Isle Blog', href: '/blog/' },
	{ label: 'Plans and pricing', href: '/pricing/' },
	{ label: 'Customer support hub', href: '/support/' },
	{ label: 'FAQ hub', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		question: 'What is included with The Isle Cheats?',
		answer:
			'The Isle Cheats includes Visuals ESP, World ESP, combat hacks, and utility tools for Windows PC. The Cloud-DMA package covers ESP, World ESP, Cheats, and Other features without Aimbot. See the Features page for the full checklist before you buy.',
	},
	{
		question: 'What is the Cloud-DMA option?',
		answer:
			'Cloud-DMA is the hardware-based package for The Isle on Windows PC. It focuses on Visuals ESP, World ESP, combat tools like Instant Rotation and Auto-Attack, plus utilities such as Radar and FOV Changer. Aimbot is not included in the base Cloud-DMA option.',
	},
	{
		question: 'How much do monthly and lifetime plans cost?',
		answer:
			'Current pricing is $35 USD for monthly and $150 USD for lifetime. Both plans include the same Cloud-DMA feature set. Compare options on the Pricing page before checkout.',
	},
	{
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, license details are delivered digitally. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support so the team can find your purchase quickly.',
	},
	{
		question: 'Does The Isle Cheats work after game updates?',
		answer:
			'When The Isle or Evrima patches, check the Updates page for maintenance notes. Compatibility notices are published there so you can confirm whether a new build is available after a game update.',
	},
	{
		question: 'Is Aimbot included in the base package?',
		answer:
			'No. The Cloud-DMA base package includes Visuals ESP, World ESP, combat hacks, and utilities without Aimbot. Aimbot-related options are documented separately and are not part of the standard Cloud-DMA inclusion.',
	},
	{
		question: 'What is the difference between Visuals ESP and World ESP?',
		answer:
			'Visuals ESP tracks living entities with boxes, snaplines, health, growth, stamina, and distance. World ESP highlights map resources such as bodies, meat, fruits, herbs, mushrooms, and water so you can farm and survive faster.',
	},
	{
		question: 'Which platforms are supported?',
		answer:
			'The Isle Cheats is built for Windows PC (Windows 10 and Windows 11). It is sold as a digital license for worldwide buyers. Console or other platforms are not supported.',
	},
] as const;
