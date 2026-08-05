import { siteConfig } from './site';

export type IsleImage = {
	src: string;
	alt: string;
};

/** Self-hosted The Isle screenshots — each file has a unique crawlable URL on islecheats.net */
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

export const theIsleImages = {
	hero: isleSceneImages.hero.src,
	cover: isleSceneImages.herdPlains.src,
	logo: siteConfig.logo,
	product: [
		isleSceneImages.herdPlains,
		isleSceneImages.carnivoreCombat,
		isleSceneImages.swampEnvironment,
		isleSceneImages.predatorStalk,
		isleSceneImages.nightHunt,
		isleSceneImages.packEncounter,
	],
	gallery: [
		{ ...isleSceneImages.hero, featured: true as const },
		isleSceneImages.tyrannosaurForest,
		isleSceneImages.carnivoreCombat,
		isleSceneImages.swampEnvironment,
		isleSceneImages.predatorStalk,
		isleSceneImages.packEncounter,
		isleSceneImages.riversideDrink,
	],
	pageHeroes: {
		home: isleSceneImages.hero,
		cheats: isleSceneImages.carnivoreCombat,
		theisleEsp: isleSceneImages.tyrannosaurForest,
		theIsleCheats: isleSceneImages.herdPlains,
		theIsleEsp: isleSceneImages.predatorStalk,
		theIsleGuide: isleSceneImages.riversideDrink,
		theIsleFeatures: isleSceneImages.hero,
		theIsleFaq: isleSceneImages.nightHunt,
		theIsleSettings: isleSceneImages.aerialLandscape,
		theIslePerformance: isleSceneImages.aerialLandscape,
		theIsleGrowthGuide: isleSceneImages.herdPlains,
		theIsleSurvivalGuide: isleSceneImages.riversideDrink,
		theIsleUpdates: isleSceneImages.packEncounter,
		theIsleDinosaurGuide: isleSceneImages.tyrannosaurForest,
		features: isleSceneImages.swampEnvironment,
		pricing: isleSceneImages.herdPlains,
		faq: isleSceneImages.nightHunt,
		support: isleSceneImages.riversideDrink,
		updates: isleSceneImages.packEncounter,
		terms: isleSceneImages.aerialLandscape,
		privacyPolicy: isleSceneImages.swampEnvironment,
		refundPolicy: isleSceneImages.herdPlains,
		blog: isleSceneImages.tyrannosaurForest,
		notFound: isleSceneImages.nightHunt,
	},
} as const;

export type PageHeroKey = keyof typeof theIsleImages.pageHeroes;

export function getPageHero(key: PageHeroKey): IsleImage {
	return theIsleImages.pageHeroes[key];
}

export function getPageGallery(...keys: Array<keyof typeof isleSceneImages>): IsleImage[] {
	return keys.map((key) => isleSceneImages[key]);
}
