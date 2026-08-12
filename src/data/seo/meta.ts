import type { LocaleCode } from '../i18n';
import { getHomeMetaKeywords, getRelatedSearchTerms } from '../i18n/search-terms';

export type PageSeoKey =
	| 'home'
	| 'cheats'
	| 'theisleEsp'
	| 'features'
	| 'pricing'
	| 'updates'
	| 'faq'
	| 'support'
	| 'refundPolicy'
	| 'privacyPolicy'
	| 'terms'
	| 'theIsleCheats'
	| 'theIsleEsp'
	| 'theIsleGuide'
	| 'theIsleFeatures'
	| 'theIsleFaq'
	| 'theIsleSettings'
	| 'theIslePerformance'
	| 'theIsleGrowthGuide'
	| 'theIsleSurvivalGuide'
	| 'theIsleUpdates'
	| 'theIsleDinosaurGuide'
	| 'blog'
	| 'blogPost';

export type PageSeoMeta = {
	title: string;
	description: string;
	ogTitle: string;
	ogDescription: string;
	twitterTitle: string;
	twitterDescription: string;
	keywords: string;
};

export const pagePaths: Record<PageSeoKey, string> = {
	home: '/',
	cheats: '/cheats/',
	theisleEsp: '/theisle-esp/',
	features: '/features/',
	pricing: '/pricing/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	refundPolicy: '/refund-policy/',
	privacyPolicy: '/privacy-policy/',
	terms: '/terms/',
	theIsleCheats: '/the-isle-cheats/',
	theIsleEsp: '/the-isle-esp/',
	theIsleGuide: '/the-isle-guide/',
	theIsleFeatures: '/the-isle-features/',
	theIsleFaq: '/the-isle-faq/',
	theIsleSettings: '/the-isle-settings/',
	theIslePerformance: '/the-isle-performance/',
	theIsleGrowthGuide: '/the-isle-growth-guide/',
	theIsleSurvivalGuide: '/the-isle-survival-guide/',
	theIsleUpdates: '/the-isle-updates/',
	theIsleDinosaurGuide: '/the-isle-dinosaur-guide/',
	blog: '/blog/',
	blogPost: '/blog/',
};

const en: Record<PageSeoKey, PageSeoMeta> = {
	home: {
		title: 'The Isle Cheats — ESP, Hacks & Guides | islecheats',
		description:
			'Buy The Isle Cheats for Windows PC with Visuals ESP, World ESP, and Cloud-DMA combat hacks. Compare features, monthly or lifetime pricing, and survival guides at islecheats.net.',
		ogTitle: 'The Isle Cheats — ESP, Cloud-DMA & Survival Hacks',
		ogDescription:
			'Official hub for ESP overlays, combat hacks, package pricing, and dinosaur survival guides on Windows PC.',
		twitterTitle: 'The Isle Cheats — ESP & Hacks',
		twitterDescription:
			'Compare The Isle ESP, Cloud-DMA hacks, cheat features, and monthly or lifetime package pricing for Windows PC players.',
		keywords: getHomeMetaKeywords('en'),
	},
	cheats: {
		title: 'The Isle Hack — Combat & Movement Cheats | islecheats',
		description:
			'Product page for The Isle Hack combat tools: Instant Rotation, Auto-Attack, Omnimovement, and No Cooldown Attack in the Cloud-DMA package for Windows PC.',
		ogTitle: 'The Isle Cheats — Combat & Movement Hacks',
		ogDescription:
			'Explore The Isle hack options including Instant Rotation, Auto-Attack, Omnimovement, and No Cooldown Attack for Windows PC.',
		twitterTitle: 'The Isle Hack — Cheats Overview',
		twitterDescription: 'Full list of The Isle cheat features in the Cloud-DMA package.',
		keywords: 'The Isle Cheats, The Isle Hack, Isle Hacks, The Isle instant rotation, The Isle omnimovement',
	},
	theisleEsp: {
		title: 'Theisle ESP — Product Overlay Toolkit | islecheats',
		description:
			'Product overview of Theisle ESP overlays for Windows PC: entity boxes, health, growth tags, and World ESP resource tracking in the Cloud-DMA toolkit.',
		ogTitle: 'Theisle ESP — Product Overlay Toolkit',
		ogDescription:
			'Theisle ESP product page covering Visuals ESP, World ESP, snaplines, and map awareness tools for The Isle.',
		twitterTitle: 'Theisle ESP — Product Toolkit',
		twitterDescription: 'Visuals ESP and World ESP product toolkit for The Isle on Windows PC.',
		keywords: 'Theisle ESP, The Isle ESP, Isle ESP, The Isle wallhack, The Isle overlay, The Isle visuals ESP',
	},
	features: {
		title: 'The Isle Cheats Features — Package Checklist | islecheats',
		description:
			'Transactional feature checklist for The Isle Cheats packages: Visuals ESP, World ESP, combat hacks, Radar, FOV Changer, and Cloud-DMA inclusions for Windows PC.',
		ogTitle: 'The Isle Cheats Features — Package Checklist',
		ogDescription:
			'Compare every The Isle Cheats package inclusion: ESP categories, cheat options, utility tools, and Cloud-DMA coverage.',
		twitterTitle: 'The Isle Cheats Features Checklist',
		twitterDescription: 'Package checklist for The Isle Cheats ESP, hacks, and utilities.',
		keywords: 'The Isle Features, The Isle Cheats features, The Isle ESP features, The Isle menu, The Isle radar',
	},
	pricing: {
		title: 'The Isle Cheat Price — Monthly & Lifetime | islecheats',
		description:
			'The Isle Cheat Price starts at $35 monthly or $150 lifetime for Cloud-DMA, ESP, and Cheats. Buy The Isle Cheats with clear plan comparison — view pricing today.',
		ogTitle: 'The Isle Cheat Price — Package Comparison',
		ogDescription:
			'Compare The Isle Cheat Cost for monthly and lifetime licenses. Cloud-DMA includes ESP, World ESP, Cheats, and utility hacks.',
		twitterTitle: 'The Isle Cheat Price Guide',
		twitterDescription: 'Monthly and lifetime pricing for The Isle Cheats packages.',
		keywords: 'The Isle Cheat Price, The Isle Cheat Cost, Buy The Isle Cheats, The Isle cheats monthly, The Isle cheats lifetime',
	},
	updates: {
		title: 'The Isle Cheats Updates — Product Changelog | islecheats',
		description:
			'Product changelog for The Isle Cheats: Cloud-DMA maintenance notes, Windows compatibility after Evrima patches, and release notices for ESP and combat tools.',
		ogTitle: 'The Isle Cheats Updates — Product Changelog',
		ogDescription: 'Track The Isle Cheats product updates, compatibility notices, and maintenance releases.',
		twitterTitle: 'The Isle Cheats Product Updates',
		twitterDescription: 'Product changelog and compatibility notices for The Isle Cheats.',
		keywords: 'The Isle Cheats updates, The Isle patch notes, The Isle cheats updates, The Isle compatibility',
	},
	faq: {
		title: 'The Isle Cheats FAQ — Delivery & Support | islecheats',
		description:
			'Support FAQ for The Isle Cheats buyers: Cloud-DMA delivery, Windows PC setup, ESP package questions, refunds, and order help before and after purchase.',
		ogTitle: 'The Isle Cheats FAQ — Delivery & Support',
		ogDescription: 'Buyer support answers for The Isle Cheats delivery, compatibility, refunds, and ESP package questions.',
		twitterTitle: 'The Isle Cheats Support FAQ',
		twitterDescription: 'Delivery and support FAQ for The Isle Cheats buyers.',
		keywords: 'The Isle Cheats FAQ, The Isle support FAQ, The Isle delivery FAQ, The Isle refund FAQ',
	},
	support: {
		title: 'The Isle Cheats Support — Setup & Billing | islecheats',
		description:
			'Contact The Isle Cheats support for delivery, setup, and billing help on Windows PC. Email support@islecheats.net with your order details — get help today.',
		ogTitle: 'The Isle Cheats Customer Support',
		ogDescription: 'Get help with The Isle Cheats delivery, setup, and order issues.',
		twitterTitle: 'The Isle Cheats Support',
		twitterDescription: 'Customer support for The Isle Cheats orders and setup.',
		keywords: 'The Isle Cheats support, The Isle help, islecheats.net support',
	},
	refundPolicy: {
		title: 'The Isle Cheats Refund Policy — Terms | islecheats',
		description:
			'Review The Isle Cheats refund eligibility, conditions, and timelines before purchasing ESP or Cloud-DMA packages. Understand your options — read the policy now.',
		ogTitle: 'The Isle Cheats Refund Policy',
		ogDescription: 'Refund policy for The Isle Cheats digital packages.',
		twitterTitle: 'The Isle Cheats Refund Policy',
		twitterDescription: 'Refund eligibility and conditions for The Isle Cheats.',
		keywords: 'The Isle Cheats refund, The Isle refund policy',
	},
	privacyPolicy: {
		title: 'The Isle Cheats Privacy Policy & Data Use | islecheats',
		description:
			'Learn how islecheats.net handles visitor data, cookies, and order information for The Isle Cheats customers. Transparent data practices — read the policy now.',
		ogTitle: 'The Isle Cheats Privacy Policy',
		ogDescription: 'Privacy policy for islecheats.net visitors and customers.',
		twitterTitle: 'The Isle Cheats Privacy Policy',
		twitterDescription: 'Data handling and privacy for islecheats.net.',
		keywords: 'The Isle Cheats privacy, islecheats.net privacy',
	},
	terms: {
		title: 'The Isle Cheats Terms of Use & License | islecheats',
		description:
			'License terms, acceptable use, and purchase conditions for The Isle Cheats packages at islecheats.net. Review before checkout — read the full terms today.',
		ogTitle: 'The Isle Cheats Terms of Use',
		ogDescription: 'Terms and conditions for The Isle Cheats purchases.',
		twitterTitle: 'The Isle Cheats Terms',
		twitterDescription: 'Terms of use for islecheats.net packages.',
		keywords: 'The Isle Cheats terms, islecheats.net terms',
	},
	theIsleCheats: {
		title: 'Buy The Isle Cheats — ESP & Hacks Hub | islecheats',
		description:
			'The Isle Cheats and Isle Cheats hub with Cloud-DMA, Visuals ESP, World ESP, and combat hacks for Windows PC. Compare packages — explore the product hub now.',
		ogTitle: 'The Isle Cheats — Complete Product Hub',
		ogDescription: 'Everything about The Isle Cheats: ESP, hacks, Cloud-DMA, pricing, and compatibility.',
		twitterTitle: 'The Isle Cheats Hub',
		twitterDescription: 'Complete guide to buying and using The Isle Cheats.',
		keywords: 'The Isle Cheats, Isle Cheats, Buy The Isle Cheats, The Isle Hack',
	},
	theIsleEsp: {
		title: 'The Isle ESP Guide — How Overlays Work | islecheats',
		description:
			'Learn how The Isle ESP and Isle ESP overlays track dinosaurs and resources. Visuals ESP and World ESP explained with setup tips — read the complete guide now.',
		ogTitle: 'The Isle ESP — Complete Overlay Guide',
		ogDescription: 'Learn how The Isle ESP works: entity tracking, health bars, growth, and resource overlays.',
		twitterTitle: 'The Isle ESP Guide',
		twitterDescription: 'How The Isle ESP overlays work for survival awareness.',
		keywords: 'The Isle ESP, The Isle ESP Guide, Isle ESP, The Isle overlay',
	},
	theIsleGuide: {
		title: 'The Isle Guide — Cheats, ESP & Survival | islecheats',
		description:
			'The Isle Guide for cheats, ESP setup, survival tactics, growth paths, and performance tips. Your central player resource — start with the complete guide today.',
		ogTitle: 'The Isle Guide — Player Resource Hub',
		ogDescription: 'Comprehensive The Isle guide: cheats, ESP, survival, growth, and settings.',
		twitterTitle: 'The Isle Guide',
		twitterDescription: 'Complete player guide for The Isle cheats and survival.',
		keywords: 'The Isle Guide, The Isle Cheats Guide, The Isle survival, The Isle tips',
	},
	theIsleFeatures: {
		title: 'The Isle Features Explained — Full List | islecheats',
		description:
			'The Isle Features explained: ESP categories, cheat options, radar, FOV changer, and Cloud-DMA inclusions. Every tool detailed — browse the full breakdown now.',
		ogTitle: 'The Isle Features — Detailed Breakdown',
		ogDescription: 'Every The Isle Cheats feature explained with use cases and package context.',
		twitterTitle: 'The Isle Features Explained',
		twitterDescription: 'Detailed feature guide for The Isle Cheats packages.',
		keywords: 'The Isle Features, The Isle Features Explained, The Isle menu features',
	},
	theIsleFaq: {
		title: 'The Isle FAQ — Price, ESP & Compatibility | islecheats',
		description:
			'The Isle FAQ hub covers buying cheats, ESP overlays, Cloud-DMA pricing, and Windows PC compatibility. Quick answers for buyers — browse the full FAQ today.',
		ogTitle: 'The Isle FAQ — Buyer Questions Answered',
		ogDescription: 'Frequently asked questions about The Isle Cheats, ESP, and packages.',
		twitterTitle: 'The Isle FAQ Hub',
		twitterDescription: 'Answers to The Isle cheats and ESP questions.',
		keywords: 'The Isle FAQ, The Isle Cheats FAQ, The Isle ESP FAQ',
	},
	theIsleSettings: {
		title: 'The Isle Settings — Graphics & ESP Config | islecheats',
		description:
			'The Isle Settings guide for graphics, ESP colors, menu key binds, and config profiles. Optimize your setup for survival — read the configuration guide now.',
		ogTitle: 'The Isle Settings — Configuration Guide',
		ogDescription: 'Optimize The Isle settings for ESP visibility, performance, and gameplay.',
		twitterTitle: 'The Isle Settings Guide',
		twitterDescription: 'Graphics and ESP configuration for The Isle.',
		keywords: 'The Isle Settings, The Isle graphics settings, The Isle ESP config, The Isle menu key',
	},
	theIslePerformance: {
		title: 'The Isle Performance Guide — FPS Tips | islecheats',
		description:
			'The Isle Performance Guide and FPS tips: graphics settings, shadow toggles, fog removal, and hardware advice for smoother gameplay — optimize performance today.',
		ogTitle: 'The Isle Performance Guide — FPS Optimization',
		ogDescription: 'Improve The Isle FPS with graphics settings, disable shadows, and performance hacks.',
		twitterTitle: 'The Isle FPS Guide',
		twitterDescription: 'Performance optimization tips for The Isle on Windows PC.',
		keywords: 'The Isle FPS Guide, The Isle Performance Guide, The Isle optimize FPS, The Isle lag fix',
	},
	theIsleGrowthGuide: {
		title: 'The Isle Growth Guide — Fast Development | islecheats',
		description:
			'The Isle Growth Guide covers growth mechanics, herbivore and carnivore paths, nesting tips, and ESP growth tracking. Grow faster — read the full guide today.',
		ogTitle: 'The Isle Growth Guide — Dinosaur Development',
		ogDescription: 'Master The Isle growth mechanics for faster dinosaur development.',
		twitterTitle: 'The Isle Growth Guide',
		twitterDescription: 'Growth tips and mechanics for The Isle dinosaurs.',
		keywords: 'The Isle Growth Guide, The Isle dinosaur growth, The Isle growth percentage',
	},
	theIsleSurvivalGuide: {
		title: 'The Isle Survival Guide — Food & Water | islecheats',
		description:
			'The Isle Survival Guide: find water, hunt food, avoid predators, and recover from bleed. ESP threat awareness tips included — master survival strategies now.',
		ogTitle: 'The Isle Survival Guide — Stay Alive Longer',
		ogDescription: 'Survival tactics for The Isle: resources, threats, and awareness tools.',
		twitterTitle: 'The Isle Survival Guide',
		twitterDescription: 'Essential survival tips for The Isle dinosaur players.',
		keywords: 'The Isle Survival Guide, The Isle survival tips, The Isle water sources, The Isle nesting',
	},
	theIsleUpdates: {
		title: 'The Isle Updates — Patch & Cheat Tracker | islecheats',
		description:
			'The Isle Updates tracker with Evrima patch notes and cheat compatibility releases. Stay current after every game patch — check the latest maintenance notes now.',
		ogTitle: 'The Isle Updates — Patch & Compatibility Tracker',
		ogDescription: 'Stay current with The Isle game updates and cheat compatibility.',
		twitterTitle: 'The Isle Updates',
		twitterDescription: 'Game patches and cheat compatibility updates for The Isle.',
		keywords: 'The Isle Updates, The Isle patch notes, The Isle Evrima updates',
	},
	theIsleDinosaurGuide: {
		title: 'The Isle Dinosaur Guide — Species & Tiers | islecheats',
		description:
			'The Isle Dinosaur Guide: carnivore vs herbivore playstyles, species tiers, bite radius, and classname ESP tracking. Pick your dino — read the species guide now.',
		ogTitle: 'The Isle Dinosaur Guide — Species Overview',
		ogDescription: 'Complete dinosaur guide for The Isle: species, tiers, and survival strategies.',
		twitterTitle: 'The Isle Dinosaur Guide',
		twitterDescription: 'Dinosaur species guide for The Isle players.',
		keywords: 'The Isle Dinosaur Guide, The Isle herbivore guide, The Isle carnivore guide, The Isle dinosaur tiers',
	},
	blog: {
		title: 'The Isle Blog — Cheats & Survival Guides | islecheats',
		description:
			'The Isle Blog with articles on cheats, ESP, survival, growth, performance, and compatibility. Fresh guides for dinosaur players — browse all blog posts today.',
		ogTitle: 'The Isle Blog — Guides & Updates',
		ogDescription: 'Articles about The Isle cheats, ESP, survival, and game updates.',
		twitterTitle: 'The Isle Blog',
		twitterDescription: 'Guides and articles for The Isle players.',
		keywords: 'The Isle blog, The Isle guides, The Isle cheats articles',
	},
	blogPost: {
		title: 'The Isle Blog — Articles & Guides | islecheats',
		description:
			'In-depth The Isle article covering cheats, ESP, survival, and gameplay topics for Windows PC players. Read the guide and compare packages — explore more today.',
		ogTitle: 'The Isle Blog Article',
		ogDescription: 'The Isle guide article for dinosaur survival players.',
		twitterTitle: 'The Isle Article',
		twitterDescription: 'The Isle guide article from islecheats.net.',
		keywords: 'The Isle, The Isle Cheats, The Isle guide',
	},
};

const de: Record<PageSeoKey, PageSeoMeta> = {
	home: {
		title: 'The Isle Cheats — ESP & Hacks für Windows | islecheats',
		description:
			'The Isle Cheats mit Visuals ESP, World ESP und Cloud-DMA Hacks für Windows PC. Funktionen, Preise und Anleitungen auf islecheats.net vergleichen.',
		ogTitle: 'The Isle Cheats — ESP & Hacks für The Isle',
		ogDescription:
			'Offizielle Produktseite: The Isle ESP, Cloud-DMA Pakete, Cheat-Funktionen und Survival-Guides für Dinosaurier-Spieler.',
		twitterTitle: 'The Isle Cheats — ESP & Hacks',
		twitterDescription: 'The Isle ESP, Hacks und Cloud-DMA Pakete für Windows PC vergleichen.',
		keywords: 'The Isle Cheats, The Isle ESP, The Isle Hacks kaufen, The Isle Anleitung',
	},
	cheats: en.cheats,
	theisleEsp: en.theisleEsp,
	features: en.features,
	pricing: {
		title: 'The Isle Cheat Preis — Monat & Lifetime | islecheats',
		description:
			'The Isle Cheat Preis: Monatspaket ($35) und Lifetime ($150) für Cloud-DMA, ESP und Cheats in USD.',
		ogTitle: 'The Isle Cheat Preis — Paketvergleich',
		ogDescription: 'Vergleichen Sie The Isle Cheat Kosten für Monats- und Lifetime-Lizenzen.',
		twitterTitle: 'The Isle Cheat Preis',
		twitterDescription: 'Monats- und Lifetime-Preise für The Isle Cheats.',
		keywords: 'The Isle Cheat Preis, The Isle Cheats kaufen, The Isle Kosten',
	},
	updates: en.updates,
	faq: {
		title: 'The Isle FAQ — Cheats, ESP & Support | islecheats',
		description: 'Häufige Fragen zu The Isle Cheats, Cloud-DMA, ESP, Lieferung und Windows-Kompatibilität.',
		ogTitle: 'The Isle FAQ — Häufige Fragen',
		ogDescription: 'Antworten zu The Isle Cheats, ESP und Paketen.',
		twitterTitle: 'The Isle FAQ',
		twitterDescription: 'FAQ für The Isle Cheats Käufer.',
		keywords: 'The Isle FAQ, The Isle Cheats Fragen',
	},
	support: en.support,
	refundPolicy: en.refundPolicy,
	privacyPolicy: en.privacyPolicy,
	terms: en.terms,
	theIsleCheats: en.theIsleCheats,
	theIsleEsp: en.theIsleEsp,
	theIsleGuide: {
		title: 'The Isle Guide — Cheats, ESP & Survival | islecheats',
		description: 'The Isle Anleitung: Cheats, ESP-Einrichtung, Überlebenstaktiken und Wachstumstipps für Dinosaurier-Spieler.',
		ogTitle: 'The Isle Guide — Spieler-Ressourcen',
		ogDescription: 'Umfassender The Isle Guide für Cheats, ESP und Survival.',
		twitterTitle: 'The Isle Guide',
		twitterDescription: 'Kompletter Spieler-Guide für The Isle.',
		keywords: 'The Isle Guide, The Isle Anleitung, The Isle Survival',
	},
	theIsleFeatures: en.theIsleFeatures,
	theIsleFaq: en.theIsleFaq,
	theIsleSettings: {
		title: 'The Isle Einstellungen — Grafik & ESP Config | islecheats',
		description: 'The Isle Einstellungen: Grafikoptionen, ESP-Farben, Menütasten und Config-Profile verwalten.',
		ogTitle: 'The Isle Einstellungen — Konfigurationsguide',
		ogDescription: 'The Isle Einstellungen für ESP-Sichtbarkeit und Performance optimieren.',
		twitterTitle: 'The Isle Einstellungen',
		twitterDescription: 'Grafik- und ESP-Konfiguration für The Isle.',
		keywords: 'The Isle Einstellungen, The Isle Grafikeinstellungen',
	},
	theIslePerformance: {
		title: 'The Isle FPS Guide — Performance optimieren | islecheats',
		description: 'The Isle FPS verbessern: Grafikeinstellungen, Schatten deaktivieren und Hardware-Tipps für flüssigeres Gameplay.',
		ogTitle: 'The Isle Performance Guide',
		ogDescription: 'FPS-Optimierung für The Isle auf Windows PC.',
		twitterTitle: 'The Isle FPS Guide',
		twitterDescription: 'Performance-Tipps für The Isle.',
		keywords: 'The Isle FPS, The Isle Performance, The Isle optimieren',
	},
	theIsleGrowthGuide: en.theIsleGrowthGuide,
	theIsleSurvivalGuide: en.theIsleSurvivalGuide,
	theIsleUpdates: en.theIsleUpdates,
	theIsleDinosaurGuide: en.theIsleDinosaurGuide,
	blog: en.blog,
	blogPost: en.blogPost,
};

const fr: Record<PageSeoKey, PageSeoMeta> = {
	home: {
		title: 'The Isle Cheats — ESP & Hacks pour Windows PC | islecheats',
		description:
			'Achetez The Isle Cheats avec Visuals ESP, World ESP et hacks Cloud-DMA pour Windows PC. Comparez fonctionnalités et tarifs sur islecheats.net.',
		ogTitle: 'The Isle Cheats — ESP & Hacks pour The Isle',
		ogDescription: 'Page produit officielle : ESP, packages Cloud-DMA, cheats et guides de survie dinosaure.',
		twitterTitle: 'The Isle Cheats — ESP & Hacks',
		twitterDescription: 'Comparez ESP, hacks et tarifs The Isle Cheats pour Windows PC.',
		keywords: 'The Isle Cheats, The Isle ESP, acheter The Isle Cheats, guide The Isle',
	},
	cheats: en.cheats,
	theisleEsp: en.theisleEsp,
	features: en.features,
	pricing: {
		title: 'Prix The Isle Cheat — Mensuel & À Vie | islecheats',
		description: 'Prix The Isle Cheat : forfait mensuel ($35) et à vie ($150) pour Cloud-DMA, ESP et cheats en USD.',
		ogTitle: 'Prix The Isle Cheat — Comparaison des forfaits',
		ogDescription: 'Comparez le coût des licences mensuelles et à vie pour The Isle Cheats.',
		twitterTitle: 'Prix The Isle Cheat',
		twitterDescription: 'Tarifs mensuels et à vie pour The Isle Cheats.',
		keywords: 'prix The Isle Cheat, acheter The Isle Cheats, coût The Isle',
	},
	updates: en.updates,
	faq: {
		title: 'FAQ The Isle — Cheats, ESP & Support | islecheats',
		description: 'Questions fréquentes sur The Isle Cheats, Cloud-DMA, ESP, livraison et compatibilité Windows.',
		ogTitle: 'FAQ The Isle — Questions fréquentes',
		ogDescription: 'Réponses sur The Isle Cheats, ESP et forfaits.',
		twitterTitle: 'FAQ The Isle',
		twitterDescription: 'FAQ pour les acheteurs de The Isle Cheats.',
		keywords: 'FAQ The Isle, questions The Isle Cheats',
	},
	support: en.support,
	refundPolicy: en.refundPolicy,
	privacyPolicy: en.privacyPolicy,
	terms: en.terms,
	theIsleCheats: en.theIsleCheats,
	theIsleEsp: en.theIsleEsp,
	theIsleGuide: {
		title: 'Guide The Isle — Cheats, ESP & Survie | islecheats',
		description: 'Guide The Isle : cheats, configuration ESP, tactiques de survie et croissance pour joueurs dinosaures.',
		ogTitle: 'Guide The Isle — Ressources joueur',
		ogDescription: 'Guide complet The Isle : cheats, ESP et survie.',
		twitterTitle: 'Guide The Isle',
		twitterDescription: 'Guide joueur complet pour The Isle.',
		keywords: 'guide The Isle, guide survie The Isle, cheats The Isle',
	},
	theIsleFeatures: en.theIsleFeatures,
	theIsleFaq: en.theIsleFaq,
	theIsleSettings: {
		title: 'Paramètres The Isle — Graphiques & Config ESP | islecheats',
		description: 'Paramètres The Isle : options graphiques, couleurs ESP, touches menu et profils de configuration.',
		ogTitle: 'Paramètres The Isle — Guide de configuration',
		ogDescription: 'Optimisez les paramètres The Isle pour la visibilité ESP et les performances.',
		twitterTitle: 'Paramètres The Isle',
		twitterDescription: 'Configuration graphique et ESP pour The Isle.',
		keywords: 'paramètres The Isle, réglages graphiques The Isle',
	},
	theIslePerformance: {
		title: 'Guide FPS The Isle — Optimisation performance | islecheats',
		description: 'Améliorez les FPS The Isle : réglages graphiques, ombres désactivées et conseils matériel.',
		ogTitle: 'Guide performance The Isle',
		ogDescription: 'Optimisation FPS pour The Isle sur Windows PC.',
		twitterTitle: 'Guide FPS The Isle',
		twitterDescription: 'Conseils performance pour The Isle.',
		keywords: 'FPS The Isle, performance The Isle, optimiser The Isle',
	},
	theIsleGrowthGuide: en.theIsleGrowthGuide,
	theIsleSurvivalGuide: en.theIsleSurvivalGuide,
	theIsleUpdates: en.theIsleUpdates,
	theIsleDinosaurGuide: en.theIsleDinosaurGuide,
	blog: en.blog,
	blogPost: en.blogPost,
};

const es: Record<PageSeoKey, PageSeoMeta> = {
	home: {
		title: 'The Isle Cheats — ESP y Hacks para Windows PC | islecheats',
		description:
			'Compra The Isle Cheats con Visuals ESP, World ESP y hacks Cloud-DMA para Windows PC. Compara funciones y precios en islecheats.net.',
		ogTitle: 'The Isle Cheats — ESP y Hacks para The Isle',
		ogDescription: 'Página oficial: ESP, paquetes Cloud-DMA, cheats y guías de supervivencia dinosaurio.',
		twitterTitle: 'The Isle Cheats — ESP y Hacks',
		twitterDescription: 'Compara ESP, hacks y precios de The Isle Cheats para Windows PC.',
		keywords: 'The Isle Cheats, The Isle ESP, comprar The Isle Cheats, guía The Isle',
	},
	cheats: en.cheats,
	theisleEsp: en.theisleEsp,
	features: en.features,
	pricing: {
		title: 'Precio The Isle Cheat — Mensual y Lifetime | islecheats',
		description: 'Precio The Isle Cheat: plan mensual ($35) y de por vida ($150) para Cloud-DMA, ESP y cheats en USD.',
		ogTitle: 'Precio The Isle Cheat — Comparación de planes',
		ogDescription: 'Compara el costo de licencias mensuales y de por vida para The Isle Cheats.',
		twitterTitle: 'Precio The Isle Cheat',
		twitterDescription: 'Precios mensuales y de por vida para The Isle Cheats.',
		keywords: 'precio The Isle Cheat, comprar The Isle Cheats, costo The Isle',
	},
	updates: en.updates,
	faq: {
		title: 'FAQ The Isle — Cheats, ESP y Soporte | islecheats',
		description: 'Preguntas frecuentes sobre The Isle Cheats, Cloud-DMA, ESP, entrega y compatibilidad Windows.',
		ogTitle: 'FAQ The Isle — Preguntas frecuentes',
		ogDescription: 'Respuestas sobre The Isle Cheats, ESP y paquetes.',
		twitterTitle: 'FAQ The Isle',
		twitterDescription: 'FAQ para compradores de The Isle Cheats.',
		keywords: 'FAQ The Isle, preguntas The Isle Cheats',
	},
	support: en.support,
	refundPolicy: en.refundPolicy,
	privacyPolicy: en.privacyPolicy,
	terms: en.terms,
	theIsleCheats: en.theIsleCheats,
	theIsleEsp: en.theIsleEsp,
	theIsleGuide: {
		title: 'Guía The Isle — Cheats, ESP y Supervivencia | islecheats',
		description: 'Guía The Isle: cheats, configuración ESP, tácticas de supervivencia y crecimiento para jugadores dinosaurio.',
		ogTitle: 'Guía The Isle — Recursos del jugador',
		ogDescription: 'Guía completa The Isle: cheats, ESP y supervivencia.',
		twitterTitle: 'Guía The Isle',
		twitterDescription: 'Guía completa del jugador para The Isle.',
		keywords: 'guía The Isle, supervivencia The Isle, cheats The Isle',
	},
	theIsleFeatures: en.theIsleFeatures,
	theIsleFaq: en.theIsleFaq,
	theIsleSettings: {
		title: 'Ajustes The Isle — Gráficos y Config ESP | islecheats',
		description: 'Ajustes The Isle: opciones gráficas, colores ESP, teclas de menú y perfiles de configuración.',
		ogTitle: 'Ajustes The Isle — Guía de configuración',
		ogDescription: 'Optimiza ajustes The Isle para visibilidad ESP y rendimiento.',
		twitterTitle: 'Ajustes The Isle',
		twitterDescription: 'Configuración gráfica y ESP para The Isle.',
		keywords: 'ajustes The Isle, configuración gráfica The Isle',
	},
	theIslePerformance: {
		title: 'Guía FPS The Isle — Optimización de rendimiento | islecheats',
		description: 'Mejora los FPS de The Isle: ajustes gráficos, desactivar sombras y consejos de hardware.',
		ogTitle: 'Guía de rendimiento The Isle',
		ogDescription: 'Optimización FPS para The Isle en Windows PC.',
		twitterTitle: 'Guía FPS The Isle',
		twitterDescription: 'Consejos de rendimiento para The Isle.',
		keywords: 'FPS The Isle, rendimiento The Isle, optimizar The Isle',
	},
	theIsleGrowthGuide: en.theIsleGrowthGuide,
	theIsleSurvivalGuide: en.theIsleSurvivalGuide,
	theIsleUpdates: en.theIsleUpdates,
	theIsleDinosaurGuide: en.theIsleDinosaurGuide,
	blog: en.blog,
	blogPost: en.blogPost,
};

const tr: Record<PageSeoKey, PageSeoMeta> = {
	home: {
		title: 'The Isle Cheats — Windows PC ESP & Hileler | islecheats',
		description:
			'Windows PC için Visuals ESP, World ESP ve Cloud-DMA hileleri içeren The Isle Cheats satın alın. Özellikleri ve fiyatları islecheats.net üzerinde karşılaştırın.',
		ogTitle: 'The Isle Cheats — The Isle için ESP ve Hileler',
		ogDescription: 'Resmi ürün sayfası: ESP, Cloud-DMA paketleri, hileler ve dinozor hayatta kalma rehberleri.',
		twitterTitle: 'The Isle Cheats — ESP ve Hileler',
		twitterDescription: 'Windows PC için The Isle ESP, hileler ve fiyatları karşılaştırın.',
		keywords: 'The Isle Cheats, The Isle ESP, The Isle hile satın al, The Isle rehber',
	},
	cheats: en.cheats,
	theisleEsp: en.theisleEsp,
	features: en.features,
	pricing: {
		title: 'The Isle Hile Fiyatı — Aylık & Lifetime | islecheats',
		description: 'The Isle Hile Fiyatı: Cloud-DMA, ESP ve hileler için aylık ($35) ve ömür boyu ($150) paketler.',
		ogTitle: 'The Isle Hile Fiyatı — Paket Karşılaştırması',
		ogDescription: 'The Isle Cheats için aylık ve ömür boyu lisans maliyetlerini karşılaştırın.',
		twitterTitle: 'The Isle Hile Fiyatı',
		twitterDescription: 'The Isle Cheats aylık ve ömür boyu fiyatları.',
		keywords: 'The Isle hile fiyatı, The Isle Cheats satın al, The Isle maliyet',
	},
	updates: en.updates,
	faq: {
		title: 'The Isle SSS — Hileler, ESP ve Destek | islecheats',
		description: 'The Isle Cheats, Cloud-DMA, ESP, teslimat ve Windows uyumluluğu hakkında sık sorulan sorular.',
		ogTitle: 'The Isle SSS — Sık Sorulan Sorular',
		ogDescription: 'The Isle Cheats, ESP ve paketler hakkında cevaplar.',
		twitterTitle: 'The Isle SSS',
		twitterDescription: 'The Isle Cheats alıcıları için SSS.',
		keywords: 'The Isle SSS, The Isle Cheats sorular',
	},
	support: en.support,
	refundPolicy: en.refundPolicy,
	privacyPolicy: en.privacyPolicy,
	terms: en.terms,
	theIsleCheats: en.theIsleCheats,
	theIsleEsp: en.theIsleEsp,
	theIsleGuide: {
		title: 'The Isle Rehberi — Hileler, ESP & Hayatta | islecheats',
		description: 'The Isle Rehberi: hileler, ESP kurulumu, hayatta kalma taktikleri ve büyüme ipuçları.',
		ogTitle: 'The Isle Rehberi — Oyuncu Kaynakları',
		ogDescription: 'Kapsamlı The Isle rehberi: hileler, ESP ve hayatta kalma.',
		twitterTitle: 'The Isle Rehberi',
		twitterDescription: 'The Isle için kapsamlı oyuncu rehberi.',
		keywords: 'The Isle rehberi, The Isle hayatta kalma, The Isle hileler',
	},
	theIsleFeatures: en.theIsleFeatures,
	theIsleFaq: en.theIsleFaq,
	theIsleSettings: {
		title: 'The Isle Ayarları — Grafik ve ESP Yapılandırma | islecheats',
		description: 'The Isle Ayarları: grafik seçenekleri, ESP renkleri, menü tuşları ve yapılandırma profilleri.',
		ogTitle: 'The Isle Ayarları — Yapılandırma Rehberi',
		ogDescription: 'ESP görünürlüğü ve performans için The Isle ayarlarını optimize edin.',
		twitterTitle: 'The Isle Ayarları',
		twitterDescription: 'The Isle grafik ve ESP yapılandırması.',
		keywords: 'The Isle ayarları, The Isle grafik ayarları',
	},
	theIslePerformance: {
		title: 'The Isle FPS Rehberi — Performans Optimizasyonu | islecheats',
		description: 'The Isle FPS artırma: grafik ayarları, gölge kapatma ve donanım ipuçları.',
		ogTitle: 'The Isle Performans Rehberi',
		ogDescription: 'Windows PC için The Isle FPS optimizasyonu.',
		twitterTitle: 'The Isle FPS Rehberi',
		twitterDescription: 'The Isle performans ipuçları.',
		keywords: 'The Isle FPS, The Isle performans, The Isle optimize',
	},
	theIsleGrowthGuide: en.theIsleGrowthGuide,
	theIsleSurvivalGuide: en.theIsleSurvivalGuide,
	theIsleUpdates: en.theIsleUpdates,
	theIsleDinosaurGuide: en.theIsleDinosaurGuide,
	blog: en.blog,
	blogPost: en.blogPost,
};

const ar: Record<PageSeoKey, PageSeoMeta> = {
	home: {
		title: 'The Isle Cheats — ESP وهاكات لأجهزة Windows | islecheats',
		description:
			'اشترِ The Isle Cheats مع Visuals ESP وWorld ESP وهاكات Cloud-DMA لأجهزة Windows. قارن الميزات والأسعار على islecheats.net.',
		ogTitle: 'The Isle Cheats — ESP وهاكات للعبة The Isle',
		ogDescription: 'الصفحة الرسمية: ESP وحزم Cloud-DMA والهاكات وأدلة البقاء على قيد الحياة.',
		twitterTitle: 'The Isle Cheats — ESP وهاكات',
		twitterDescription: 'قارن ESP والهاكات وأسعار The Isle Cheats لأجهزة Windows.',
		keywords: 'The Isle Cheats, The Isle ESP, شراء The Isle Cheats, دليل The Isle',
	},
	cheats: en.cheats,
	theisleEsp: en.theisleEsp,
	features: en.features,
	pricing: {
		title: 'سعر The Isle Cheat — باقات شهرية ومدى الحياة | islecheats',
		description: 'سعر The Isle Cheat: باقة شهرية ($35) ومدى الحياة ($150) لـ Cloud-DMA وESP والهاكات بالدولار.',
		ogTitle: 'سعر The Isle Cheat — مقارنة الباقات',
		ogDescription: 'قارن تكلفة التراخيص الشهرية ومدى الحياة لـ The Isle Cheats.',
		twitterTitle: 'سعر The Isle Cheat',
		twitterDescription: 'أسعار The Isle Cheats الشهرية ومدى الحياة.',
		keywords: 'سعر The Isle Cheat, شراء The Isle Cheats, تكلفة The Isle',
	},
	updates: en.updates,
	faq: {
		title: 'أسئلة The Isle الشائعة — الهاكات وESP والدعم | islecheats',
		description: 'أسئلة شائعة حول The Isle Cheats وCloud-DMA وESP والتوصيل وتوافق Windows.',
		ogTitle: 'أسئلة The Isle الشائعة',
		ogDescription: 'إجابات حول The Isle Cheats وESP والباقات.',
		twitterTitle: 'أسئلة The Isle الشائعة',
		twitterDescription: 'أسئلة شائعة لمشتري The Isle Cheats.',
		keywords: 'أسئلة The Isle, أسئلة The Isle Cheats',
	},
	support: en.support,
	refundPolicy: en.refundPolicy,
	privacyPolicy: en.privacyPolicy,
	terms: en.terms,
	theIsleCheats: en.theIsleCheats,
	theIsleEsp: en.theIsleEsp,
	theIsleGuide: {
		title: 'دليل The Isle — الهاكات وESP والبقاء على قيد | islecheats',
		description: 'دليل The Isle: الهاكات وإعداد ESP وتكتيكات البقاء ونمو الديناصورات.',
		ogTitle: 'دليل The Isle — موارد اللاعب',
		ogDescription: 'دليل شامل لـ The Isle: الهاكات وESP والبقاء.',
		twitterTitle: 'دليل The Isle',
		twitterDescription: 'دليل شامل للاعب في The Isle.',
		keywords: 'دليل The Isle, البقاء في The Isle, هاكات The Isle',
	},
	theIsleFeatures: en.theIsleFeatures,
	theIsleFaq: en.theIsleFaq,
	theIsleSettings: {
		title: 'إعدادات The Isle — الرسوميات وتكوين ESP | islecheats',
		description: 'إعدادات The Isle: خيارات الرسوميات وألوان ESP ومفاتيح القائمة وملفات التكوين.',
		ogTitle: 'إعدادات The Isle — دليل التكوين',
		ogDescription: 'حسّن إعدادات The Isle لرؤية ESP والأداء.',
		twitterTitle: 'إعدادات The Isle',
		twitterDescription: 'تكوين الرسوميات وESP لـ The Isle.',
		keywords: 'إعدادات The Isle, إعدادات الرسوميات The Isle',
	},
	theIslePerformance: {
		title: 'دليل FPS The Isle — تحسين الأداء والسرعة | islecheats',
		description: 'تحسين FPS في The Isle: إعدادات الرسوميات وإيقاف الظلال ونصائح الأجهزة.',
		ogTitle: 'دليل أداء The Isle',
		ogDescription: 'تحسين FPS لـ The Isle على Windows PC.',
		twitterTitle: 'دليل FPS لـ The Isle',
		twitterDescription: 'نصائح الأداء لـ The Isle.',
		keywords: 'FPS The Isle, أداء The Isle, تحسين The Isle',
	},
	theIsleGrowthGuide: en.theIsleGrowthGuide,
	theIsleSurvivalGuide: en.theIsleSurvivalGuide,
	theIsleUpdates: en.theIsleUpdates,
	theIsleDinosaurGuide: en.theIsleDinosaurGuide,
	blog: en.blog,
	blogPost: en.blogPost,
};

const ru: Record<PageSeoKey, PageSeoMeta> = {
	home: {
		title: 'The Isle Cheats — ESP и читы для Windows PC | islecheats',
		description:
			'Купите The Isle Cheats с Visuals ESP, World ESP и Cloud-DMA читами для Windows PC. Сравните функции и цены на islecheats.net.',
		ogTitle: 'The Isle Cheats — ESP и читы для The Isle',
		ogDescription: 'Официальная страница: ESP, пакеты Cloud-DMA, читы и гайды по выживанию с динозаврами.',
		twitterTitle: 'The Isle Cheats — ESP и читы',
		twitterDescription: 'Сравните ESP, читы и цены The Isle Cheats для Windows PC.',
		keywords: 'The Isle Cheats, The Isle ESP, купить The Isle Cheats, гайд The Isle',
	},
	cheats: {
		title: 'The Isle Cheats — Instant Rotation и читы | islecheats',
		description: 'Читы The Isle: Instant Rotation, Auto-Attack, Omnimovement и другие хаки в пакете Cloud-DMA.',
		ogTitle: 'The Isle Cheats — боевые и движковые читы',
		ogDescription: 'Обзор читов The Isle: Instant Rotation, Auto-Attack и Omnimovement.',
		twitterTitle: 'The Isle Cheats — обзор читов',
		twitterDescription: 'Полный список читов The Isle в пакете Cloud-DMA.',
		keywords: 'The Isle Cheats, The Isle читы, The Isle хаки',
	},
	theisleEsp: {
		title: 'The Isle ESP — Visuals ESP и World ESP | islecheats',
		description: 'The Isle ESP: Visuals ESP для динозавров и World ESP для ресурсов, тел, воды и трав.',
		ogTitle: 'The Isle ESP — оверлей и функции',
		ogDescription: 'Гайд по The Isle ESP: отслеживание сущностей, здоровье, рост и ресурсы.',
		twitterTitle: 'The Isle ESP — функции оверлея',
		twitterDescription: 'Visuals ESP и World ESP для выживания в The Isle.',
		keywords: 'The Isle ESP, The Isle оверлей, The Isle wallhack',
	},
	features: {
		title: 'The Isle Features — полный список функций | islecheats',
		description: 'Полный список функций The Isle: Visuals ESP, World ESP, читы, радар, FOV Changer и Cloud-DMA.',
		ogTitle: 'The Isle Features — разбор пакета',
		ogDescription: 'Сравните все функции The Isle Cheats: ESP, читы и утилиты.',
		twitterTitle: 'The Isle Features — обзор',
		twitterDescription: 'Полный разбор функций The Isle Cheats.',
		keywords: 'The Isle Features, функции The Isle Cheats',
	},
	pricing: {
		title: 'Цена The Isle Cheat — Месяц и Lifetime | islecheats',
		description: 'Цена The Isle Cheat: месячный ($35) и пожизненный ($150) пакеты Cloud-DMA, ESP и читов в USD.',
		ogTitle: 'Цена The Isle Cheat — сравнение пакетов',
		ogDescription: 'Сравните стоимость месячных и пожизненных лицензий The Isle Cheats.',
		twitterTitle: 'Цена The Isle Cheat',
		twitterDescription: 'Месячные и пожизненные цены The Isle Cheats.',
		keywords: 'цена The Isle Cheat, купить The Isle Cheats, стоимость The Isle',
	},
	updates: en.updates,
	faq: {
		title: 'The Isle FAQ — читы, ESP и поддержка | islecheats',
		description: 'Частые вопросы о The Isle Cheats, Cloud-DMA, ESP, доставке и совместимости с Windows.',
		ogTitle: 'The Isle FAQ — частые вопросы',
		ogDescription: 'Ответы о The Isle Cheats, ESP и пакетах.',
		twitterTitle: 'The Isle FAQ',
		twitterDescription: 'FAQ для покупателей The Isle Cheats.',
		keywords: 'The Isle FAQ, вопросы The Isle Cheats',
	},
	support: en.support,
	refundPolicy: en.refundPolicy,
	privacyPolicy: en.privacyPolicy,
	terms: en.terms,
	theIsleCheats: en.theIsleCheats,
	theIsleEsp: en.theIsleEsp,
	theIsleGuide: {
		title: 'Гайд The Isle — читы, ESP и выживание | islecheats',
		description: 'Гайд The Isle: читы, настройка ESP, тактики выживания и рост динозавров.',
		ogTitle: 'Гайд The Isle — ресурсы игрока',
		ogDescription: 'Полный гайд The Isle: читы, ESP и выживание.',
		twitterTitle: 'Гайд The Isle',
		twitterDescription: 'Полный гайд игрока для The Isle.',
		keywords: 'гайд The Isle, выживание The Isle, читы The Isle',
	},
	theIsleFeatures: en.theIsleFeatures,
	theIsleFaq: en.theIsleFaq,
	theIsleSettings: {
		title: 'Настройки The Isle — графика и конфиг ESP | islecheats',
		description: 'Настройки The Isle: графика, цвета ESP, клавиши меню и профили конфигурации.',
		ogTitle: 'Настройки The Isle — гайд по конфигурации',
		ogDescription: 'Оптимизация настроек The Isle для видимости ESP и производительности.',
		twitterTitle: 'Настройки The Isle',
		twitterDescription: 'Графика и конфигурация ESP для The Isle.',
		keywords: 'настройки The Isle, графика The Isle',
	},
	theIslePerformance: {
		title: 'Гайд FPS The Isle — Оптимизация игры | islecheats',
		description: 'Улучшение FPS в The Isle: настройки графики, отключение теней и советы по железу.',
		ogTitle: 'Гайд производительности The Isle',
		ogDescription: 'Оптимизация FPS для The Isle на Windows PC.',
		twitterTitle: 'Гайд FPS The Isle',
		twitterDescription: 'Советы по производительности для The Isle.',
		keywords: 'FPS The Isle, производительность The Isle',
	},
	theIsleGrowthGuide: en.theIsleGrowthGuide,
	theIsleSurvivalGuide: en.theIsleSurvivalGuide,
	theIsleUpdates: en.theIsleUpdates,
	theIsleDinosaurGuide: en.theIsleDinosaurGuide,
	blog: en.blog,
	blogPost: en.blogPost,
};

const metaByLocale: Record<LocaleCode, Record<PageSeoKey, PageSeoMeta>> = {
	en,
	de,
	fr,
	es,
	tr,
	ar,
	ru,
};

export function getPageSeo(page: PageSeoKey, locale: LocaleCode = 'en'): PageSeoMeta {
	return metaByLocale[locale][page];
}

export function getPageSeoByPath(path: string, locale: LocaleCode = 'en'): PageSeoMeta | undefined {
	const entry = Object.entries(pagePaths).find(([, p]) => p === path);
	if (!entry) return undefined;
	return getPageSeo(entry[0] as PageSeoKey, locale);
}
