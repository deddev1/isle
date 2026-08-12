import { siteConfig } from './site';

export type IsleImage = {
	src: string;
	alt: string;
};

const screenshotBase = '/images/the-isle';
const screenshotThumbBase = '/images/the-isle/thumbs';

/** Lightweight 480w WebP for strips, thumbs, and marquees */
export function toIsleThumb(src: string): string {
	if (!src.startsWith(`${screenshotBase}/`) || src.includes('/thumbs/')) return src;
	return src.replace(`${screenshotBase}/`, `${screenshotThumbBase}/`);
}

export function withIsleThumb(image: IsleImage): IsleImage & { thumb: string } {
	return { ...image, thumb: toIsleThumb(image.src) };
}

/** Real The Isle cheat/ESP gameplay screenshots — PNG originals plus WebP copies in /images/the-isle/ */
export const isleScreenshotImages = {
	aimbotAllosaurusDamageLog: {
		src: `${screenshotBase}/isle-aimbot-allosaurus-damage-log.webp`,
		alt: 'The Isle aimbot and Allosaurus headshot damage log overlay during combat',
	},
	espRadarMinimapCombat: {
		src: `${screenshotBase}/isle-esp-radar-minimap-combat.webp`,
		alt: 'The Isle ESP radar minimap with entity tags and combat targeting overlay',
	},
	combatLogTyrannosaurusHead: {
		src: `${screenshotBase}/isle-combat-log-tyrannosaurus-head.webp`,
		alt: 'The Isle combat log showing repeated Tyrannosaurus head damage entries',
	},
	espBeachSkeletonAimbot: {
		src: `${screenshotBase}/isle-esp-beach-skeleton-aimbot.webp`,
		alt: 'The Isle beach ESP with skeleton wireframes and aimbot distance tags on Tyrannosaurus',
	},
	combatLogCeratosaurusHead: {
		src: `${screenshotBase}/isle-combat-log-ceratosaurus-head.webp`,
		alt: 'The Isle combat log with Ceratosaurus headshot damage on a beach encounter',
	},
	espRadarGlowJungle: {
		src: `${screenshotBase}/isle-esp-radar-glow-jungle.webp`,
		alt: 'The Isle jungle ESP glow highlight with radar range and entity health bars',
	},
	combatLogBoneEspForest: {
		src: `${screenshotBase}/isle-combat-log-bone-esp-forest.webp`,
		alt: 'The Isle forest bone ESP and combat log during Tyrannosaurus head damage',
	},
	combatLogTriceratopsFight: {
		src: `${screenshotBase}/isle-combat-log-triceratops-fight.webp`,
		alt: 'The Isle Triceratops versus Tyrannosaurus fight with headshot combat log',
	},
	combatLogBeachTyrannosaurus: {
		src: `${screenshotBase}/isle-combat-log-beach-tyrannosaurus.webp`,
		alt: 'The Isle beach Tyrannosaurus ESP health bars and headshot combat log',
	},
	aimbotHeadshotSkeleton: {
		src: `${screenshotBase}/isle-aimbot-headshot-skeleton.webp`,
		alt: 'The Isle aimbot always-headshot mode with skeleton ESP and radar minimap',
	},
	espBeachPlayerTags: {
		src: `${screenshotBase}/isle-esp-beach-player-tags.webp`,
		alt: 'The Isle beach player ESP with snaplines, health, and distance tags',
	},
	espBeachCarnotaurus: {
		src: `${screenshotBase}/isle-esp-beach-carnotaurus.webp`,
		alt: 'The Isle beach Carnotaurus ESP entity tags and health overlays',
	},
	espBeachHealthBars: {
		src: `${screenshotBase}/isle-esp-beach-health-bars.webp`,
		alt: 'The Isle beach ESP health and blood percentage bars on nearby dinosaurs',
	},
	espRadarDeinosuchus: {
		src: `${screenshotBase}/isle-esp-radar-deinosuchus.webp`,
		alt: 'The Isle Deinosuchus combat scene with radar minimap and growth ESP',
	},
	espRadarTopdown: {
		src: `${screenshotBase}/isle-esp-radar-topdown.webp`,
		alt: 'The Isle top-down radar ESP with FOV arc and player entity tracking',
	},
} as const satisfies Record<string, IsleImage>;

/** Legacy scenic The Isle environment shots — kept for non-feature pages */
export const isleSceneImages = {
	hero: {
		src: '/images/the-isle-hero-dinosaur-survival.webp',
		alt: 'The Isle dinosaur survival landscape — homepage hero for The Isle Cheats',
	},
	tyrannosaurForest: {
		src: '/images/the-isle-tyrannosaur-forest.webp',
		alt: 'Tyrannosaur moving through forest in The Isle — Visuals ESP threat tracking scene',
	},
	carnivoreCombat: {
		src: '/images/the-isle-carnivore-combat.webp',
		alt: 'Carnivore combat encounter in The Isle — cheat and movement hack gameplay context',
	},
	herdPlains: {
		src: '/images/the-isle-herd-open-plains.webp',
		alt: 'Dinosaur herd crossing open plains in The Isle — package cover and pricing visual',
	},
	swampEnvironment: {
		src: '/images/the-isle-swamp-environment.webp',
		alt: 'Swamp environment in The Isle — World ESP map and resource awareness preview',
	},
	nightHunt: {
		src: '/images/the-isle-night-hunt.webp',
		alt: 'Night hunt scene in The Isle — radar hack and low-light ESP context',
	},
	riversideDrink: {
		src: '/images/the-isle-riverside-drink.webp',
		alt: 'Dinosaur drinking at a riverside in The Isle — survival and water resource ESP scene',
	},
	packEncounter: {
		src: '/images/the-isle-pack-encounter.webp',
		alt: 'Pack encounter in The Isle — Instant Rotation and combat cheats preview',
	},
	aerialLandscape: {
		src: '/images/the-isle-aerial-landscape.webp',
		alt: 'Aerial landscape view in The Isle — graphics and performance settings guide visual',
	},
	predatorStalk: {
		src: '/images/the-isle-predator-stalk.webp',
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
