/**
 * Keyword research for The Isle Cheats — grouped by search intent.
 * Used for content planning, meta keywords, and topical cluster mapping.
 */

export type KeywordIntent = 'commercial' | 'transactional' | 'informational' | 'navigational';

export type KeywordEntry = {
	keyword: string;
	intent: KeywordIntent;
	cluster?: string;
};

export const keywordClusters = {
	cheats: 'The Isle Cheats',
	esp: 'The Isle ESP',
	hacks: 'The Isle Hacks',
	guide: 'The Isle Guide',
	features: 'The Isle Features',
	pricing: 'The Isle Pricing',
	compatibility: 'The Isle Compatibility',
	performance: 'The Isle Performance',
	survival: 'The Isle Survival',
	growth: 'The Isle Growth',
	dinosaur: 'The Isle Dinosaur',
	settings: 'The Isle Settings',
	updates: 'The Isle Updates',
	dma: 'The Isle DMA',
	overlay: 'The Isle Overlay',
	menu: 'The Isle Menu',
} as const;

export const keywords: KeywordEntry[] = [
	// Commercial
	{ keyword: 'The Isle Cheats', intent: 'commercial', cluster: 'cheats' },
	{ keyword: 'Isle Cheats', intent: 'commercial', cluster: 'cheats' },
	{ keyword: 'The Isle Cheat', intent: 'commercial', cluster: 'cheats' },
	{ keyword: 'Isle Cheat', intent: 'commercial', cluster: 'cheats' },
	{ keyword: 'The Isle ESP', intent: 'commercial', cluster: 'esp' },
	{ keyword: 'Isle ESP', intent: 'commercial', cluster: 'esp' },
	{ keyword: 'The Isle Hacks', intent: 'commercial', cluster: 'hacks' },
	{ keyword: 'Isle Hacks', intent: 'commercial', cluster: 'hacks' },
	{ keyword: 'The Isle Hack', intent: 'commercial', cluster: 'hacks' },
	{ keyword: 'The Isle DMA', intent: 'commercial', cluster: 'dma' },
	{ keyword: 'The Isle Overlay', intent: 'commercial', cluster: 'overlay' },
	{ keyword: 'The Isle Menu', intent: 'commercial', cluster: 'menu' },
	{ keyword: 'The Isle undetected cheats', intent: 'commercial', cluster: 'cheats' },
	{ keyword: 'The Isle Cloud-DMA', intent: 'commercial', cluster: 'dma' },
	{ keyword: 'The Isle radar hack', intent: 'commercial', cluster: 'cheats' },
	{ keyword: 'The Isle wallhack', intent: 'commercial', cluster: 'esp' },
	{ keyword: 'The Isle WH', intent: 'commercial', cluster: 'esp' },
	{ keyword: 'The Isle aimbot', intent: 'commercial', cluster: 'cheats' },
	{ keyword: 'The Isle instant rotation', intent: 'commercial', cluster: 'cheats' },
	{ keyword: 'The Isle omnimovement', intent: 'commercial', cluster: 'cheats' },
	{ keyword: 'best The Isle cheats', intent: 'commercial', cluster: 'cheats' },
	{ keyword: 'The Isle cheats 2026', intent: 'commercial', cluster: 'cheats' },
	{ keyword: 'The Isle ESP 2026', intent: 'commercial', cluster: 'esp' },

	// Transactional
	{ keyword: 'Buy The Isle Cheats', intent: 'transactional', cluster: 'cheats' },
	{ keyword: 'Buy Isle Cheats', intent: 'transactional', cluster: 'cheats' },
	{ keyword: 'The Isle Cheat Price', intent: 'transactional', cluster: 'pricing' },
	{ keyword: 'The Isle Cheat Cost', intent: 'transactional', cluster: 'pricing' },
	{ keyword: 'The Isle cheats monthly', intent: 'transactional', cluster: 'pricing' },
	{ keyword: 'The Isle cheats lifetime', intent: 'transactional', cluster: 'pricing' },
	{ keyword: 'The Isle ESP buy', intent: 'transactional', cluster: 'esp' },
	{ keyword: 'The Isle hacks purchase', intent: 'transactional', cluster: 'hacks' },
	{ keyword: 'The Isle cheats cheap', intent: 'transactional', cluster: 'pricing' },
	{ keyword: 'The Isle DMA buy', intent: 'transactional', cluster: 'dma' },
	{ keyword: 'order The Isle cheats', intent: 'transactional', cluster: 'cheats' },
	{ keyword: 'The Isle cheats subscription', intent: 'transactional', cluster: 'pricing' },

	// Informational
	{ keyword: 'The Isle Features', intent: 'informational', cluster: 'features' },
	{ keyword: 'The Isle Guide', intent: 'informational', cluster: 'guide' },
	{ keyword: 'The Isle Cheats Guide', intent: 'informational', cluster: 'guide' },
	{ keyword: 'The Isle ESP Guide', intent: 'informational', cluster: 'esp' },
	{ keyword: 'The Isle FAQ', intent: 'informational', cluster: 'guide' },
	{ keyword: 'The Isle Survival Guide', intent: 'informational', cluster: 'survival' },
	{ keyword: 'The Isle Growth Guide', intent: 'informational', cluster: 'growth' },
	{ keyword: 'The Isle Update Guide', intent: 'informational', cluster: 'updates' },
	{ keyword: 'The Isle Settings', intent: 'informational', cluster: 'settings' },
	{ keyword: 'The Isle FPS Guide', intent: 'informational', cluster: 'performance' },
	{ keyword: 'The Isle Performance Guide', intent: 'informational', cluster: 'performance' },
	{ keyword: 'The Isle Dinosaur Guide', intent: 'informational', cluster: 'dinosaur' },
	{ keyword: 'The Isle Windows', intent: 'informational', cluster: 'compatibility' },
	{ keyword: 'The Isle Compatibility', intent: 'informational', cluster: 'compatibility' },
	{ keyword: 'how does The Isle ESP work', intent: 'informational', cluster: 'esp' },
	{ keyword: 'The Isle ESP explained', intent: 'informational', cluster: 'esp' },
	{ keyword: 'The Isle cheats safe', intent: 'informational', cluster: 'cheats' },
	{ keyword: 'The Isle cheats detected', intent: 'informational', cluster: 'cheats' },
	{ keyword: 'The Isle dinosaur growth', intent: 'informational', cluster: 'growth' },
	{ keyword: 'The Isle herbivore guide', intent: 'informational', cluster: 'dinosaur' },
	{ keyword: 'The Isle carnivore guide', intent: 'informational', cluster: 'dinosaur' },
	{ keyword: 'The Isle nesting guide', intent: 'informational', cluster: 'survival' },
	{ keyword: 'The Isle water sources', intent: 'informational', cluster: 'survival' },
	{ keyword: 'The Isle stamina guide', intent: 'informational', cluster: 'survival' },
	{ keyword: 'The Isle fracture healing', intent: 'informational', cluster: 'survival' },
	{ keyword: 'The Isle graphics settings', intent: 'informational', cluster: 'settings' },
	{ keyword: 'The Isle optimize FPS', intent: 'informational', cluster: 'performance' },
	{ keyword: 'The Isle patch notes', intent: 'informational', cluster: 'updates' },
	{ keyword: 'The Isle Evrima guide', intent: 'informational', cluster: 'guide' },
	{ keyword: 'The Isle Legacy vs Evrima', intent: 'informational', cluster: 'guide' },
	{ keyword: 'The Isle server list', intent: 'informational', cluster: 'guide' },
	{ keyword: 'The Isle dinosaur tiers', intent: 'informational', cluster: 'dinosaur' },
	{ keyword: 'The Isle bleed mechanic', intent: 'informational', cluster: 'survival' },
	{ keyword: 'The Isle bite radius', intent: 'informational', cluster: 'features' },
	{ keyword: 'The Isle world ESP', intent: 'informational', cluster: 'esp' },
	{ keyword: 'The Isle visuals ESP', intent: 'informational', cluster: 'esp' },
	{ keyword: 'The Isle FOV changer', intent: 'informational', cluster: 'features' },
	{ keyword: 'The Isle no fog', intent: 'informational', cluster: 'features' },
	{ keyword: 'The Isle crosshair', intent: 'informational', cluster: 'features' },
	{ keyword: 'The Isle config save', intent: 'informational', cluster: 'settings' },

	// Navigational
	{ keyword: 'islecheats.net', intent: 'navigational' },
	{ keyword: 'The Isle Cheats official', intent: 'navigational', cluster: 'cheats' },
	{ keyword: 'The Isle Cheats website', intent: 'navigational', cluster: 'cheats' },
	{ keyword: 'The Isle Cheats support', intent: 'navigational' },
	{ keyword: 'The Isle Cheats pricing', intent: 'navigational', cluster: 'pricing' },
	{ keyword: 'The Isle Cheats login', intent: 'navigational' },
	{ keyword: 'The Isle Cheats download', intent: 'navigational' },
	{ keyword: 'The Isle Cheats updates', intent: 'navigational', cluster: 'updates' },
];

export const keywordsByIntent = {
	commercial: keywords.filter((k) => k.intent === 'commercial'),
	transactional: keywords.filter((k) => k.intent === 'transactional'),
	informational: keywords.filter((k) => k.intent === 'informational'),
	navigational: keywords.filter((k) => k.intent === 'navigational'),
};

export type RelatedSearchTerm = {
	label: string;
	href: string;
};

/** Crawlable homepage search terms — linked to the most relevant internal page. */
export const relatedSearchTerms: RelatedSearchTerm[] = [
	{ label: 'Isle Cheats', href: '/the-isle-cheats/' },
	{ label: 'The Isle Cheats', href: '/the-isle-cheats/' },
	{ label: 'Isle Cheat', href: '/the-isle-cheats/' },
	{ label: 'The Isle Cheat', href: '/the-isle-cheats/' },
	{ label: 'Buy Isle Cheats', href: '/pricing/' },
	{ label: 'Buy The Isle Cheats', href: '/pricing/' },
	{ label: 'Isle Hacks', href: '/cheats/' },
	{ label: 'The Isle Hacks', href: '/cheats/' },
	{ label: 'Isle Hack', href: '/cheats/' },
	{ label: 'The Isle Hack', href: '/cheats/' },
	{ label: 'Isle ESP', href: '/theisle-esp/' },
	{ label: 'The Isle ESP', href: '/the-isle-esp/' },
	{ label: 'The Isle wallhack', href: '/the-isle-esp/' },
	{ label: 'The Isle overlay', href: '/theisle-esp/' },
	{ label: 'The Isle growth', href: '/the-isle-growth-guide/' },
	{ label: 'The Isle growth guide', href: '/the-isle-growth-guide/' },
	{ label: 'The Isle dinosaur growth', href: '/the-isle-growth-guide/' },
	{ label: 'The Isle survival', href: '/the-isle-survival-guide/' },
	{ label: 'The Isle survival guide', href: '/the-isle-survival-guide/' },
	{ label: 'The Isle guide', href: '/the-isle-guide/' },
	{ label: 'The Isle features', href: '/the-isle-features/' },
	{ label: 'The Isle Cloud-DMA', href: '/features/' },
	{ label: 'The Isle DMA', href: '/features/' },
	{ label: 'The Isle radar hack', href: '/features/' },
	{ label: 'The Isle instant rotation', href: '/cheats/' },
	{ label: 'The Isle omnimovement', href: '/cheats/' },
	{ label: 'The Isle cheat price', href: '/pricing/' },
	{ label: 'The Isle cheats monthly', href: '/pricing/' },
	{ label: 'The Isle cheats lifetime', href: '/pricing/' },
	{ label: 'The Isle dinosaur guide', href: '/the-isle-dinosaur-guide/' },
	{ label: 'The Isle settings', href: '/the-isle-settings/' },
	{ label: 'The Isle performance', href: '/the-isle-performance/' },
	{ label: 'The Isle updates', href: '/the-isle-updates/' },
	{ label: 'The Isle FAQ', href: '/the-isle-faq/' },
	{ label: 'The Isle undetected cheats', href: '/the-isle-cheats/' },
	{ label: 'islecheats.net', href: '/' },
];

export const homeMetaKeywords = relatedSearchTerms.map((term) => term.label).join(', ');

export const organizationAlternateNames = [
	'Isle Cheats',
	'The Isle Cheats',
	'Isle Hacks',
	'The Isle Hacks',
	'Isle ESP',
	'The Isle ESP',
] as const;

export const organizationKnowsAbout = [
	'The Isle',
	'The Isle growth',
	'The Isle survival',
	'dinosaur survival',
	'Cloud-DMA',
	'Visuals ESP',
	'World ESP',
	'Windows PC',
] as const;

export const competitorGaps = {
	missingKeywords: [
		'The Isle survival guide',
		'The Isle growth guide',
		'The Isle dinosaur guide',
		'The Isle performance guide',
		'The Isle settings guide',
		'The Isle compatibility Windows',
		'The Isle ESP overlay',
		'The Isle DMA package',
		'The Isle cheat menu',
		'The Isle world ESP resources',
		'The Isle herbivore survival',
		'The Isle carnivore hunting',
		'The Isle nesting tips',
		'The Isle bleed recovery',
		'The Isle FOV settings',
	],
	missingPages: [
		'/the-isle-cheats/',
		'/the-isle-esp/',
		'/the-isle-guide/',
		'/the-isle-features/',
		'/the-isle-faq/',
		'/the-isle-settings/',
		'/the-isle-performance/',
		'/the-isle-growth-guide/',
		'/the-isle-survival-guide/',
		'/the-isle-updates/',
		'/the-isle-dinosaur-guide/',
		'/blog/',
	],
	missingEntities: [
		'The Isle (game)',
		'Afterthought LLC',
		'Evrima',
		'Cloud-DMA',
		'Windows PC',
		'dinosaur survival',
		'Visuals ESP',
		'World ESP',
		'SoftwareApplication',
		'FAQPage',
		'BreadcrumbList',
	],
	missingSchema: ['BreadcrumbList', 'Article', 'HowTo', 'ItemList'],
	missingFaqs: [
		'Is The Isle Cheats compatible with Windows 11?',
		'What dinosaurs does The Isle ESP show?',
		'How much does The Isle Cheats cost?',
		'Does Cloud-DMA include aimbot?',
		'How often are The Isle cheats updated?',
		'What is the difference between Visuals ESP and World ESP?',
	],
} as const;
