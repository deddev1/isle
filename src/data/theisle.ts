import { siteConfig } from './site';

export type IsleImage = {
	src: string;
	alt: string;
};

/** Flat public image URLs — short, descriptive paths for crawlers */
const img = (name: string) => `/images/${name}.webp`;

/** Lightweight small variants use a simple `-sm` suffix */
export function toIsleThumb(src: string): string {
	if (!src.startsWith('/images/') || src.endsWith('-sm.webp')) return src;
	return src.replace(/\.webp$/, '-sm.webp');
}

export function withIsleThumb(image: IsleImage): IsleImage & { thumb: string } {
	return { ...image, thumb: toIsleThumb(image.src) };
}

/** Real The Isle cheat/ESP gameplay screenshots */
export const isleScreenshotImages = {
	aimbotAllosaurusDamageLog: {
		src: img('the-isle-aimbot-allosaurus'),
		alt: 'The Isle aimbot and Allosaurus headshot damage log overlay during combat',
	},
	espRadarMinimapCombat: {
		src: img('the-isle-esp-radar-minimap'),
		alt: 'The Isle ESP radar minimap with entity tags and combat targeting overlay',
	},
	combatLogTyrannosaurusHead: {
		src: img('the-isle-combat-tyrannosaurus-head'),
		alt: 'The Isle combat log showing repeated Tyrannosaurus head damage entries',
	},
	espBeachSkeletonAimbot: {
		src: img('the-isle-esp-skeleton-aimbot'),
		alt: 'The Isle beach ESP with skeleton wireframes and aimbot distance tags on Tyrannosaurus',
	},
	combatLogCeratosaurusHead: {
		src: img('the-isle-combat-ceratosaurus'),
		alt: 'The Isle combat log with Ceratosaurus headshot damage on a beach encounter',
	},
	espRadarGlowJungle: {
		src: img('the-isle-esp-radar-jungle'),
		alt: 'The Isle jungle ESP glow highlight with radar range and entity health bars',
	},
	combatLogBoneEspForest: {
		src: img('the-isle-combat-bone-esp'),
		alt: 'The Isle forest bone ESP and combat log during Tyrannosaurus head damage',
	},
	combatLogTriceratopsFight: {
		src: img('the-isle-combat-triceratops'),
		alt: 'The Isle Triceratops versus Tyrannosaurus fight with headshot combat log',
	},
	combatLogBeachTyrannosaurus: {
		src: img('the-isle-combat-tyrannosaurus'),
		alt: 'The Isle beach Tyrannosaurus ESP health bars and headshot combat log',
	},
	aimbotHeadshotSkeleton: {
		src: img('the-isle-aimbot-headshot'),
		alt: 'The Isle aimbot always-headshot mode with skeleton ESP and radar minimap',
	},
	espBeachPlayerTags: {
		src: img('the-isle-esp-player-tags'),
		alt: 'The Isle beach player ESP with snaplines, health, and distance tags',
	},
	espBeachCarnotaurus: {
		src: img('the-isle-esp-carnotaurus'),
		alt: 'The Isle beach Carnotaurus ESP entity tags and health overlays',
	},
	espBeachHealthBars: {
		src: img('the-isle-esp-health-bars'),
		alt: 'The Isle beach ESP health and blood percentage bars on nearby dinosaurs',
	},
	espRadarDeinosuchus: {
		src: img('the-isle-esp-radar-deinosuchus'),
		alt: 'The Isle Deinosuchus combat scene with radar minimap and growth ESP',
	},
	espRadarTopdown: {
		src: img('the-isle-esp-radar-topdown'),
		alt: 'The Isle top-down radar ESP with FOV arc and player entity tracking',
	},
} as const satisfies Record<string, IsleImage>;

/** Legacy scenic The Isle environment shots — kept for non-feature pages */
export const isleSceneImages = {
	hero: {
		src: img('the-isle-hero'),
		alt: 'The Isle dinosaur survival landscape — homepage hero for The Isle Cheats',
	},
	tyrannosaurForest: {
		src: img('the-isle-tyrannosaur-forest'),
		alt: 'Tyrannosaur moving through forest in The Isle — Visuals ESP threat tracking scene',
	},
	carnivoreCombat: {
		src: img('the-isle-carnivore-combat'),
		alt: 'Carnivore combat encounter in The Isle — cheat and movement hack gameplay context',
	},
	herdPlains: {
		src: img('the-isle-herd-open-plains'),
		alt: 'Dinosaur herd crossing open plains in The Isle — package cover and pricing visual',
	},
	swampEnvironment: {
		src: img('the-isle-swamp-environment'),
		alt: 'Swamp environment in The Isle — World ESP map and resource awareness preview',
	},
	nightHunt: {
		src: img('the-isle-night-hunt'),
		alt: 'Night hunt scene in The Isle — radar hack and low-light ESP context',
	},
	riversideDrink: {
		src: img('the-isle-riverside-drink'),
		alt: 'Dinosaur drinking at a riverside in The Isle — survival and water resource ESP scene',
	},
	packEncounter: {
		src: img('the-isle-pack-encounter'),
		alt: 'Pack encounter in The Isle — Instant Rotation and combat cheats preview',
	},
	aerialLandscape: {
		src: img('the-isle-aerial-landscape'),
		alt: 'Aerial landscape view in The Isle — graphics and performance settings guide visual',
	},
	predatorStalk: {
		src: img('the-isle-predator-stalk'),
		alt: 'Predator stalking prey in The Isle — ESP snaplines and targeting context',
	},
} as const satisfies Record<string, IsleImage>;

export const allIsleScreenshots = Object.values(isleScreenshotImages);

export const theIsleImages = {
	hero: isleSceneImages.hero.src,
	cover: isleScreenshotImages.espRadarMinimapCombat.src,
	logo: siteConfig.logo,
	product: [
		isleScreenshotImages.espBeachPlayerTags,
		isleScreenshotImages.combatLogTriceratopsFight,
		isleScreenshotImages.aimbotHeadshotSkeleton,
		isleScreenshotImages.espRadarGlowJungle,
		isleScreenshotImages.combatLogBoneEspForest,
		isleScreenshotImages.espRadarDeinosuchus,
		isleScreenshotImages.espBeachCarnotaurus,
		isleScreenshotImages.espRadarMinimapCombat,
		isleScreenshotImages.aimbotAllosaurusDamageLog,
		isleScreenshotImages.espBeachHealthBars,
		isleScreenshotImages.espRadarTopdown,
		isleScreenshotImages.combatLogBeachTyrannosaurus,
		isleScreenshotImages.espBeachSkeletonAimbot,
		isleScreenshotImages.combatLogCeratosaurusHead,
		isleScreenshotImages.combatLogTyrannosaurusHead,
	],
	gallery: [
		{ ...isleScreenshotImages.espBeachPlayerTags, featured: true as const },
		isleScreenshotImages.espRadarMinimapCombat,
		isleScreenshotImages.combatLogTriceratopsFight,
		isleScreenshotImages.aimbotHeadshotSkeleton,
		isleScreenshotImages.espBeachCarnotaurus,
		isleScreenshotImages.combatLogBoneEspForest,
		isleScreenshotImages.espRadarDeinosuchus,
		isleScreenshotImages.espBeachHealthBars,
		isleScreenshotImages.espRadarGlowJungle,
		isleScreenshotImages.aimbotAllosaurusDamageLog,
		isleScreenshotImages.espRadarTopdown,
		isleScreenshotImages.combatLogBeachTyrannosaurus,
		isleScreenshotImages.espBeachSkeletonAimbot,
		isleScreenshotImages.combatLogCeratosaurusHead,
		isleScreenshotImages.combatLogTyrannosaurusHead,
	],
	pageHeroes: {
		home: isleSceneImages.hero,
		cheats: isleScreenshotImages.aimbotAllosaurusDamageLog,
		theisleEsp: isleScreenshotImages.espBeachHealthBars,
		theIsleCheats: isleScreenshotImages.espRadarMinimapCombat,
		theIsleEsp: isleScreenshotImages.espBeachPlayerTags,
		theIsleGuide: isleScreenshotImages.espBeachSkeletonAimbot,
		theIsleFeatures: isleScreenshotImages.combatLogBoneEspForest,
		theIsleFaq: isleScreenshotImages.espRadarDeinosuchus,
		theIsleSettings: isleScreenshotImages.espRadarTopdown,
		theIslePerformance: isleScreenshotImages.espRadarGlowJungle,
		theIsleGrowthGuide: isleScreenshotImages.espBeachHealthBars,
		theIsleSurvivalGuide: isleScreenshotImages.espBeachPlayerTags,
		theIsleUpdates: isleScreenshotImages.combatLogBeachTyrannosaurus,
		theIsleDinosaurGuide: isleScreenshotImages.combatLogTriceratopsFight,
		features: isleScreenshotImages.espRadarTopdown,
		pricing: isleScreenshotImages.espRadarMinimapCombat,
		faq: isleScreenshotImages.espRadarGlowJungle,
		support: isleScreenshotImages.espBeachPlayerTags,
		updates: isleScreenshotImages.combatLogCeratosaurusHead,
		terms: isleScreenshotImages.espRadarTopdown,
		privacyPolicy: isleScreenshotImages.espBeachCarnotaurus,
		refundPolicy: isleScreenshotImages.combatLogCeratosaurusHead,
		blog: isleScreenshotImages.espRadarGlowJungle,
		notFound: isleScreenshotImages.combatLogTyrannosaurusHead,
	},
} as const;

export type PageHeroKey = keyof typeof theIsleImages.pageHeroes;
export type IsleScreenshotKey = keyof typeof isleScreenshotImages;
export type IsleSceneKey = keyof typeof isleSceneImages;

export function getPageHero(key: PageHeroKey): IsleImage {
	return theIsleImages.pageHeroes[key];
}

export function getPageGallery(...keys: Array<IsleScreenshotKey | IsleSceneKey>): IsleImage[] {
	return keys.map((key) => {
		if (key in isleScreenshotImages) {
			return isleScreenshotImages[key as IsleScreenshotKey];
		}
		return isleSceneImages[key as IsleSceneKey];
	});
}
