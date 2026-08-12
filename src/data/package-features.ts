import { isleScreenshotImages } from './theisle';
import { productInfo } from './site';

export type PackageFeatureCategory = {
	id: string;
	title: string;
	summary: string;
	image: { src: string; alt: string };
	features: readonly string[];
	href: string;
};

/** Context-matched visuals for the homepage package showcase */
export const packageFeatureCategories: PackageFeatureCategory[] = [
	{
		id: 'visuals-esp',
		title: 'Visuals ESP',
		summary: 'Track dinosaurs, health, growth, and threats through terrain in real time.',
		image: isleScreenshotImages.espBeachPlayerTags,
		features: productInfo.features.visualsEsp.slice(0, 8),
		href: '/theisle-esp/',
	},
	{
		id: 'world-esp',
		title: 'World ESP',
		summary: 'Highlight meat, water, herbs, mushrooms, and bodies across the map.',
		image: isleScreenshotImages.espBeachHealthBars,
		features: productInfo.features.worldEsp,
		href: '/theisle-esp/#world-esp',
	},
	{
		id: 'combat',
		title: 'Combat Hacks',
		summary: 'Instant Rotation, Auto-Attack, Omnimovement, and faster strike timing.',
		image: isleScreenshotImages.aimbotAllosaurusDamageLog,
		features: productInfo.features.cheats,
		href: '/cheats/',
	},
	{
		id: 'utilities',
		title: 'Utility Tools',
		summary: 'Radar, FOV Changer, fog removal, crosshair, and config profiles.',
		image: isleScreenshotImages.espRadarTopdown,
		features: productInfo.features.other.slice(0, 8),
		href: '/features/#other',
	},
	{
		id: 'package',
		title: 'Cloud-DMA Package',
		summary: 'Monthly or lifetime license with digital delivery and update notices.',
		image: isleScreenshotImages.espRadarMinimapCombat,
		features: productInfo.features.general,
		href: '/pricing/',
	},
];
