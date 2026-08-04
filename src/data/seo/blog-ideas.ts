export type BlogIdea = {
	slug: string;
	title: string;
	intent: 'commercial' | 'transactional' | 'informational';
	category: string;
};

/** 50+ blog post ideas for topical authority and search intent coverage. */
export const blogIdeas: BlogIdea[] = [
	// Buying / Commercial intent
	{ slug: 'the-isle-cheats-guide', title: 'The Isle Cheats Guide — Complete Buyer Overview', intent: 'commercial', category: 'guides' },
	{ slug: 'the-isle-esp-guide', title: 'The Isle ESP Guide — Visuals & World Overlay Explained', intent: 'commercial', category: 'guides' },
	{ slug: 'how-the-isle-esp-works', title: 'How The Isle ESP Works — Entity Tracking & Overlays', intent: 'commercial', category: 'esp' },
	{ slug: 'the-isle-features-explained', title: 'The Isle Features Explained — Full Package Breakdown', intent: 'commercial', category: 'features' },
	{ slug: 'the-isle-cheat-price-guide', title: 'The Isle Cheat Price Guide — Monthly vs Lifetime', intent: 'transactional', category: 'pricing' },
	{ slug: 'buy-the-isle-cheats-safely', title: 'How to Buy The Isle Cheats — What to Check First', intent: 'transactional', category: 'buying' },
	{ slug: 'the-isle-cloud-dma-explained', title: 'The Isle Cloud-DMA Explained — What Is Included', intent: 'commercial', category: 'features' },
	{ slug: 'the-isle-cheats-vs-free-hacks', title: 'The Isle Cheats vs Free Hacks — Key Differences', intent: 'commercial', category: 'buying' },
	{ slug: 'the-isle-monthly-vs-lifetime', title: 'The Isle Monthly vs Lifetime License — Which to Choose', intent: 'transactional', category: 'pricing' },
	{ slug: 'the-isle-aimbot-overview', title: 'The Isle Aimbot Overview — Features & Cloud-DMA Exclusion', intent: 'commercial', category: 'features' },
	{ slug: 'the-isle-radar-hack-guide', title: 'The Isle Radar Hack — Mini-Map Awareness Tool', intent: 'commercial', category: 'features' },
	{ slug: 'the-isle-instant-rotation-guide', title: 'The Isle Instant Rotation — Combat Movement Cheat', intent: 'commercial', category: 'cheats' },
	{ slug: 'the-isle-omnimovement-explained', title: 'The Isle Omnimovement — Freedom of Dino Movement', intent: 'commercial', category: 'cheats' },
	{ slug: 'the-isle-auto-attack-feature', title: 'The Isle Auto-Attack — Automated Combat Hack', intent: 'commercial', category: 'cheats' },
	{ slug: 'the-isle-fov-changer-guide', title: 'The Isle FOV Changer — Wider Field of View', intent: 'commercial', category: 'features' },

	// Informational intent
	{ slug: 'the-isle-compatibility-guide', title: 'The Isle Compatibility Guide — Windows PC Requirements', intent: 'informational', category: 'compatibility' },
	{ slug: 'the-isle-update-guide', title: 'The Isle Update Guide — Patches & Cheat Maintenance', intent: 'informational', category: 'updates' },
	{ slug: 'the-isle-survival-guide', title: 'The Isle Survival Guide — Water, Food & Threats', intent: 'informational', category: 'survival' },
	{ slug: 'the-isle-growth-guide', title: 'The Isle Growth Guide — Fast Dinosaur Development', intent: 'informational', category: 'growth' },
	{ slug: 'the-isle-dinosaur-guide', title: 'The Isle Dinosaur Guide — Species & Playstyles', intent: 'informational', category: 'dinosaurs' },
	{ slug: 'the-isle-faq', title: 'The Isle FAQ — Common Cheats & ESP Questions', intent: 'informational', category: 'faq' },
	{ slug: 'the-isle-settings-guide', title: 'The Isle Settings Guide — Graphics & ESP Config', intent: 'informational', category: 'settings' },
	{ slug: 'the-isle-fps-guide', title: 'The Isle FPS Guide — Performance Optimization', intent: 'informational', category: 'performance' },
	{ slug: 'the-isle-performance-tips', title: 'The Isle Performance Tips — Reduce Lag on Windows', intent: 'informational', category: 'performance' },
	{ slug: 'the-isle-graphics-settings', title: 'The Isle Graphics Settings — Best Balance for FPS', intent: 'informational', category: 'settings' },
	{ slug: 'the-isle-evrima-guide', title: 'The Isle Evrima Guide — Branch Overview for Players', intent: 'informational', category: 'guides' },
	{ slug: 'the-isle-legacy-vs-evrima', title: 'The Isle Legacy vs Evrima — Key Differences', intent: 'informational', category: 'guides' },
	{ slug: 'the-isle-herbivore-guide', title: 'The Isle Herbivore Guide — Survival & Growth Tips', intent: 'informational', category: 'dinosaurs' },
	{ slug: 'the-isle-carnivore-guide', title: 'The Isle Carnivore Guide — Hunting & Ambush Tactics', intent: 'informational', category: 'dinosaurs' },
	{ slug: 'the-isle-nesting-guide', title: 'The Isle Nesting Guide — Breeding & Family Play', intent: 'informational', category: 'survival' },
	{ slug: 'the-isle-water-sources', title: 'The Isle Water Sources — Finding Hydration on the Map', intent: 'informational', category: 'survival' },
	{ slug: 'the-isle-bleed-mechanic', title: 'The Isle Bleed Mechanic — Recovery & Prevention', intent: 'informational', category: 'survival' },
	{ slug: 'the-isle-stamina-management', title: 'The Isle Stamina Management — Sprint & Rest Balance', intent: 'informational', category: 'survival' },
	{ slug: 'the-isle-fracture-healing', title: 'The Isle Fracture Healing — Recovery After Injury', intent: 'informational', category: 'survival' },
	{ slug: 'the-isle-dinosaur-tiers', title: 'The Isle Dinosaur Tiers — Power Rankings Explained', intent: 'informational', category: 'dinosaurs' },
	{ slug: 'the-isle-bite-radius', title: 'The Isle Bite Radius — Combat Range Explained', intent: 'informational', category: 'features' },
	{ slug: 'the-isle-world-esp-resources', title: 'The Isle World ESP — Tracking Meat, Herbs & Water', intent: 'informational', category: 'esp' },
	{ slug: 'the-isle-visuals-esp-settings', title: 'The Isle Visuals ESP Settings — Colors & Range', intent: 'informational', category: 'esp' },
	{ slug: 'the-isle-menu-key-setup', title: 'The Isle Menu Key Setup — Opening the Cheat Menu', intent: 'informational', category: 'settings' },
	{ slug: 'the-isle-config-profiles', title: 'The Isle Config Profiles — Save & Load Settings', intent: 'informational', category: 'settings' },
	{ slug: 'the-isle-no-fog-feature', title: 'The Isle No Fog — Clearer Visibility Hack', intent: 'informational', category: 'features' },
	{ slug: 'the-isle-crosshair-customization', title: 'The Isle Crosshair Customization — Center Screen Aim', intent: 'informational', category: 'features' },
	{ slug: 'the-isle-disable-shadows', title: 'The Isle Disable Shadows — FPS Boost Hack', intent: 'informational', category: 'performance' },
	{ slug: 'the-isle-sky-settings', title: 'The Isle Sky Settings — Brightness & Moon Control', intent: 'informational', category: 'settings' },
	{ slug: 'the-isle-windows-11-compatibility', title: 'The Isle Windows 11 Compatibility — System Check', intent: 'informational', category: 'compatibility' },
	{ slug: 'the-isle-delivery-process', title: 'The Isle Cheats Delivery Process — After Purchase', intent: 'informational', category: 'buying' },
	{ slug: 'the-isle-refund-policy-explained', title: 'The Isle Refund Policy Explained — Before You Buy', intent: 'informational', category: 'buying' },
	{ slug: 'the-isle-support-guide', title: 'The Isle Support Guide — Getting Help Fast', intent: 'informational', category: 'support' },
	{ slug: 'the-isle-patch-notes-tracker', title: 'The Isle Patch Notes Tracker — Stay Updated', intent: 'informational', category: 'updates' },
	{ slug: 'the-isle-server-selection', title: 'The Isle Server Selection — Finding the Right Lobby', intent: 'informational', category: 'guides' },
	{ slug: 'the-isle-new-player-guide', title: 'The Isle New Player Guide — First Steps in Survival', intent: 'informational', category: 'guides' },
	{ slug: 'the-isle-advanced-player-tips', title: 'The Isle Advanced Player Tips — Veteran Strategies', intent: 'informational', category: 'guides' },
	{ slug: 'the-isle-esp-snaplines', title: 'The Isle ESP Snaplines — Line Styles & Distance', intent: 'informational', category: 'esp' },
	{ slug: 'the-isle-esp-health-bars', title: 'The Isle ESP Health Bars — HP Tracking in Combat', intent: 'informational', category: 'esp' },
	{ slug: 'the-isle-growth-percentage-esp', title: 'The Isle Growth Percentage ESP — Track Development', intent: 'informational', category: 'esp' },
	{ slug: 'the-isle-ignore-team-esp', title: 'The Isle Ignore Team ESP — Filter Ally Overlays', intent: 'informational', category: 'esp' },
	{ slug: 'the-isle-no-cooldown-attack', title: 'The Isle No Cooldown Attack — Rapid Combat Hack', intent: 'informational', category: 'cheats' },
	{ slug: 'the-isle-unlock-zoom', title: 'The Isle Unlock Zoom — Extended Camera Range', intent: 'informational', category: 'cheats' },
	{ slug: 'the-isle-no-fractured-hack', title: 'The Isle No Fractured Hack — Injury Prevention', intent: 'informational', category: 'cheats' },
	{ slug: 'the-isle-no-cost-ability', title: 'The Isle No Cost Ability — Free Skill Points', intent: 'informational', category: 'cheats' },
	{ slug: 'the-isle-esp-max-distance', title: 'The Isle ESP Max Distance — Range Up to 2000m', intent: 'informational', category: 'esp' },
	{ slug: 'the-isle-head-dot-esp', title: 'The Isle Head Dot ESP — Precision Targeting Aid', intent: 'informational', category: 'esp' },
	{ slug: 'the-isle-classname-esp', title: 'The Isle Classname ESP — Identify Dinosaur Species', intent: 'informational', category: 'esp' },
];

export function getBlogIdea(slug: string): BlogIdea | undefined {
	return blogIdeas.find((idea) => idea.slug === slug);
}
