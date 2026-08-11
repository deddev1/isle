import type { LocaleCode } from '../i18n';
import { siteConfig } from '../site';

export type HomeContent = {
	heroEyebrow: string;
	heroTitle: string;
	heroSubtitle: string;
	heroDescription: string;
	heroCtaPrimary: string;
	heroCtaSecondary: string;
	whyUsHeading: string;
	whyUsIntro: string;
	whyUsPoints: string[];
	gridLinks: { title: string; href: string; description: string }[];
	packageHeading: string;
	packageIntro: string;
	packageOutro: string;
	evaluateHeading: string;
	evaluateParagraphs: [string, string, string];
	faqHeading: string;
	faqs: { question: string; answer: string }[];
	faqMore: string;
	shareHeading: string;
	shareIntro: string;
	relatedSearchesLabel: string;
};

const en: HomeContent = {
	heroEyebrow: 'Windows PC · Cloud-DMA',
	heroTitle: 'The Isle Cheats',
	heroSubtitle: 'ESP, World ESP & Dino Radar',
	heroDescription: 'Cheats available — ESP, Aimbot & Wallhack for The Isle.',
	heroCtaPrimary: 'Get Access',
	heroCtaSecondary: 'Explore features',
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
	gridLinks: [
		{
			title: 'ESP overlay guide',
			href: '/the-isle-esp/',
			description:
				'Visuals ESP and World ESP cover entities, health, growth, resources, bodies, meat, fruits, herbs, mushrooms, and water with configurable range and colors.',
		},
		{
			title: 'Product hub',
			href: '/the-isle-cheats/',
			description: 'Cloud-DMA packages, hack options, and buying guides for Windows PC players.',
		},
		{
			title: 'Combat hack options',
			href: '/cheats/',
			description:
				'Instant Rotation, Auto-Attack, Omnimovement, No Cooldown Attack, Unlock Zoom, and other movement and combat tools included in Cloud-DMA.',
		},
		{
			title: 'Full feature list',
			href: '/the-isle-features/',
			description:
				'Cloud-DMA, Visuals ESP, World ESP, combat hacks, utility tools, and optional Aimbot details in one place.',
		},
		{
			title: 'Survival & growth guides',
			href: '/the-isle-guide/',
			description: 'Tactics, growth paths, performance tips, and package selection for new and veteran players.',
		},
		{
			title: 'Pricing & licenses',
			href: '/pricing/',
			description:
				'Compare monthly and lifetime plans. Cloud-DMA includes ESP, World ESP, combat hacks, and utility tools.',
		},
	],
	packageHeading: "What's in the package",
	packageIntro:
		'A Windows PC software license with Visuals ESP, World ESP, combat hacks, and utility tools. The {cloudDma} option includes ESP, World ESP, combat hacks, and Other features without Aimbot. Packages also support configs, English and Russian languages, and in-client toggles.',
	packageOutro:
		'Package pricing is listed on the pricing page so you can compare duration against budget. Maintenance notes appear on product update notices whenever a build or compatibility change is published.',
	evaluateHeading: 'How to evaluate ESP and Cloud-DMA',
	evaluateParagraphs: [
		'Start with the survival information you care about most. If threat awareness and map reading are your priority, open the ESP page and confirm which Visuals ESP and World ESP categories match your play style. If movement and combat hacks matter more, review Cheats for Instant Rotation, Auto-Attack, and Omnimovement. Many players check both pages, then use the feature list as a final checklist before choosing a monthly or lifetime license.',
		'Delivery is digital after payment confirmation. Timing can vary by payment method and order review. After purchase, watch the Updates page for maintenance notes tied to The Isle patches, and contact support if license delivery or setup needs clarification. Platforms supported today: Windows PC. Market availability: Worldwide.',
		'This site is designed for clear product research rather than vague claims. Each internal page has a focused job: ESP explains visibility hacks, Cheats explains movement and combat options, Features summarizes the full package, Pricing compares plan lengths, FAQ answers common purchase questions, and Support is the contact path when something needs a human reply.',
	],
	faqHeading: 'Common questions',
	faqs: [
		{
			question: 'What is included with The Isle Cheats?',
			answer:
				'The Isle Cheats includes Visuals ESP, World ESP, Cheats, and Other utility hacks. The Cloud-DMA option covers ESP, World ESP, Cheats, and Other features without Aimbot. Full packages can include the complete feature list on the Features page, including optional Aimbot controls for buyers who need them.',
		},
		{
			question: 'What is the Cloud-DMA option?',
			answer:
				'Cloud-DMA is the package option focused on ESP, World ESP, Cheats, and Other hacks such as Instant Rotation, Radar, and FOV Changer. Aimbot is not included in the Cloud-DMA option.',
		},
		{
			question: 'How are licenses delivered?',
			answer:
				'After payment is confirmed, license details are delivered digitally. Delivery timing can vary by payment method and order review. Keep your order confirmation available when contacting support so the team can locate your purchase quickly.',
		},
		{
			question: 'Where can I check product updates?',
			answer:
				'Product maintenance notes are published on the Updates page whenever a new build or compatibility notice is available. Checking that page after The Isle patches is the fastest way to confirm whether a maintenance release has been posted.',
		},
	],
	faqMore:
		'More answers are on the The Isle FAQ and full FAQ hub. Explore The Isle Survival Guide, Growth Guide, and The Isle Blog. Policy details are in our refund policy, privacy policy, and terms of use.',
	shareHeading: 'Share The Isle Cheats',
	shareIntro: 'Pass this page along if someone else is comparing ESP and hack options for The Isle.',
	relatedSearchesLabel: 'Related searches',
};

const de: HomeContent = {
	heroEyebrow: 'Windows PC · Cloud-DMA',
	heroTitle: 'The Isle Cheats',
	heroSubtitle: 'ESP, World ESP & Dino Radar',
	heroDescription:
		'Vergleiche Visuals ESP, World ESP und Combat-Hacks in einem Cloud-DMA-Paket. Prüfe Monats- und Lifetime-Pläne, Feature-Listen und Setup-Guides, bevor du kaufst.',
	heroCtaPrimary: 'Kaufen',
	heroCtaSecondary: 'Features entdecken',
	whyUsHeading: 'Warum Isle Cheats',
	whyUsIntro:
		'Ein Cloud-DMA-Paket für Dinosaurier-Überleben auf Windows PC — mit ESP-Overlays, Combat-Hacks und Utility-Tools in einer Lizenz.',
	whyUsPoints: [
		'Isle Cheats und The Isle Cheats in einem Windows-PC-Paket mit Visuals ESP und World ESP',
		'Isle Hacks für den Kampf — Instant Rotation, Auto-Attack und Omnimovement',
		'Verfolge The Isle Growth, Gesundheit, Ausdauer und Kartenressourcen über ESP-Overlays',
		'Cloud-DMA enthält ESP und Hacks ohne Aimbot im Basispaket',
		'Monats- oder Lifetime-Lizenzen mit klaren Preisen vor dem Checkout',
		'Guides zu The Isle Survival, Growth, Dinosaurier, Einstellungen und Performance',
	],
	gridLinks: [
		{
			title: 'ESP-Overlay-Guide',
			href: '/the-isle-esp/',
			description:
				'Visuals ESP und World ESP zeigen Entities, Gesundheit, Growth, Ressourcen, Körper, Fleisch, Früchte, Kräuter, Pilze und Wasser mit einstellbarer Reichweite und Farben.',
		},
		{
			title: 'Produkt-Hub',
			href: '/the-isle-cheats/',
			description: 'Cloud-DMA-Pakete, Hack-Optionen und Kauf-Guides für Windows-PC-Spieler.',
		},
		{
			title: 'Combat-Hack-Optionen',
			href: '/cheats/',
			description:
				'Instant Rotation, Auto-Attack, Omnimovement, No Cooldown Attack, Unlock Zoom und weitere Movement- und Combat-Tools im Cloud-DMA-Paket.',
		},
		{
			title: 'Vollständige Feature-Liste',
			href: '/the-isle-features/',
			description:
				'Cloud-DMA, Visuals ESP, World ESP, Combat-Hacks, Utility-Tools und optionale Aimbot-Details an einem Ort.',
		},
		{
			title: 'Survival- & Growth-Guides',
			href: '/the-isle-guide/',
			description: 'Taktiken, Growth-Pfade, Performance-Tipps und Paketauswahl für neue und erfahrene Spieler.',
		},
		{
			title: 'Preise & Lizenzen',
			href: '/pricing/',
			description:
				'Vergleiche Monats- und Lifetime-Pläne. Cloud-DMA enthält ESP, World ESP, Combat-Hacks und Utility-Tools.',
		},
	],
	packageHeading: 'Was im Paket enthalten ist',
	packageIntro:
		'Eine Windows-PC-Softwarelizenz mit Visuals ESP, World ESP, Combat-Hacks und Utility-Tools. Die {cloudDma}-Option umfasst ESP, World ESP, Combat-Hacks und Other-Features ohne Aimbot. Pakete unterstützen außerdem Configs, Englisch und Russisch sowie In-Client-Toggles.',
	packageOutro:
		'Paketpreise findest du auf der Preisseite, damit du Laufzeit und Budget vergleichen kannst. Wartungshinweise erscheinen bei Produkt-Updates, sobald ein Build oder eine Kompatibilitätsänderung veröffentlicht wird.',
	evaluateHeading: 'So bewertest du ESP und Cloud-DMA',
	evaluateParagraphs: [
		'Beginne mit den Survival-Informationen, die dir am wichtigsten sind. Wenn Bedrohungserkennung und Kartenlesen Priorität haben, öffne die ESP-Seite und prüfe, welche Visuals-ESP- und World-ESP-Kategorien zu deinem Spielstil passen. Wenn Movement- und Combat-Hacks wichtiger sind, sieh dir Cheats für Instant Rotation, Auto-Attack und Omnimovement an. Viele Spieler prüfen beide Seiten und nutzen die Feature-Liste als finale Checkliste vor der Wahl einer Monats- oder Lifetime-Lizenz.',
		'Die Lieferung erfolgt digital nach Zahlungsbestätigung. Die Dauer kann je nach Zahlungsmethode und Bestellprüfung variieren. Nach dem Kauf die Updates-Seite für Wartungshinweise zu The Isle-Patches im Blick behalten und den Support kontaktieren, wenn Lizenzlieferung oder Setup unklar sind. Unterstützte Plattformen: Windows PC. Verfügbarkeit: Weltweit.',
		'Diese Seite ist für klare Produktrecherche statt vager Versprechen gedacht. Jede interne Seite hat eine klare Aufgabe: ESP erklärt Sichtbarkeits-Hacks, Cheats erklärt Movement- und Combat-Optionen, Features fasst das Gesamtpaket zusammen, Pricing vergleicht Laufzeiten, FAQ beantwortet häufige Kauf-Fragen und Support ist der Kontaktweg, wenn ein menschlicher Ansprechpartner nötig ist.',
	],
	faqHeading: 'Häufige Fragen',
	faqs: [
		{
			question: 'Was ist in The Isle Cheats enthalten?',
			answer:
				'The Isle Cheats umfasst Visuals ESP, World ESP, Cheats und weitere Utility-Hacks. Die Cloud-DMA-Option deckt ESP, World ESP, Cheats und Other-Features ohne Aimbot ab. Vollständige Pakete können die komplette Feature-Liste auf der Features-Seite enthalten, einschließlich optionaler Aimbot-Steuerung für Käufer, die sie benötigen.',
		},
		{
			question: 'Was ist die Cloud-DMA-Option?',
			answer:
				'Cloud-DMA ist die Paketoption mit Fokus auf ESP, World ESP, Cheats und Other-Hacks wie Instant Rotation, Radar und FOV Changer. Aimbot ist in der Cloud-DMA-Option nicht enthalten.',
		},
		{
			question: 'Wie werden Lizenzen geliefert?',
			answer:
				'Nach Zahlungsbestätigung werden Lizenzdetails digital geliefert. Die Lieferzeit kann je nach Zahlungsmethode und Bestellprüfung variieren. Halte deine Bestellbestätigung bereit, wenn du den Support kontaktierst, damit das Team deinen Kauf schnell finden kann.',
		},
		{
			question: 'Wo finde ich Produkt-Updates?',
			answer:
				'Wartungshinweise werden auf der Updates-Seite veröffentlicht, sobald ein neuer Build oder ein Kompatibilitätshinweis verfügbar ist. Nach The Isle-Patches ist das der schnellste Weg zu prüfen, ob ein Wartungsrelease veröffentlicht wurde.',
		},
	],
	faqMore:
		'Weitere Antworten findest du in The Isle FAQ und im vollständigen FAQ-Hub. Entdecke The Isle Survival Guide, Growth Guide und The Isle Blog. Richtlinien-Details stehen in unserer Rückerstattungsrichtlinie, Datenschutzrichtlinie und den Nutzungsbedingungen.',
	shareHeading: 'The Isle Cheats teilen',
	shareIntro: 'Leite diese Seite weiter, wenn jemand ESP- und Hack-Optionen für The Isle vergleicht.',
	relatedSearchesLabel: 'Verwandte Suchen',
};

const fr: HomeContent = {
	heroEyebrow: 'Windows PC · Cloud-DMA',
	heroTitle: 'The Isle Cheats',
	heroSubtitle: 'ESP, World ESP & Dino Radar',
	heroDescription:
		'Comparez Visuals ESP, World ESP et les hacks de combat dans un seul pack Cloud-DMA. Consultez les formules mensuelles et à vie, les listes de fonctionnalités et les guides d\'installation avant d\'acheter.',
	heroCtaPrimary: 'Acheter',
	heroCtaSecondary: 'Explorer les fonctionnalités',
	whyUsHeading: 'Pourquoi choisir Isle Cheats',
	whyUsIntro:
		'Un pack Cloud-DMA conçu pour la survie dinosaure sur Windows PC — avec overlays ESP, hacks de combat et outils utilitaires dans une seule licence.',
	whyUsPoints: [
		'Isle Cheats et The Isle Cheats dans un pack Windows PC avec Visuals ESP et World ESP',
		'Hacks Isle pour le combat — Instant Rotation, Auto-Attack et Omnimovement',
		'Suivez la croissance, la santé, l\'endurance et les ressources de la carte via les overlays ESP',
		'Cloud-DMA inclut ESP et hacks sans Aimbot dans le pack de base',
		'Licences mensuelles ou à vie avec des tarifs clairs avant le paiement',
		'Guides pour la survie, la croissance, les dinosaures, les réglages et les performances dans The Isle',
	],
	gridLinks: [
		{
			title: 'Guide des overlays ESP',
			href: '/the-isle-esp/',
			description:
				'Visuals ESP et World ESP couvrent les entités, la santé, la croissance, les ressources, les corps, la viande, les fruits, les herbes, les champignons et l\'eau avec portée et couleurs configurables.',
		},
		{
			title: 'Hub produit',
			href: '/the-isle-cheats/',
			description: 'Packs Cloud-DMA, options de hacks et guides d\'achat pour les joueurs Windows PC.',
		},
		{
			title: 'Options de hacks de combat',
			href: '/cheats/',
			description:
				'Instant Rotation, Auto-Attack, Omnimovement, No Cooldown Attack, Unlock Zoom et autres outils de mouvement et de combat inclus dans Cloud-DMA.',
		},
		{
			title: 'Liste complète des fonctionnalités',
			href: '/the-isle-features/',
			description:
				'Cloud-DMA, Visuals ESP, World ESP, hacks de combat, outils utilitaires et détails optionnels de l\'Aimbot au même endroit.',
		},
		{
			title: 'Guides survie et croissance',
			href: '/the-isle-guide/',
			description: 'Tactiques, parcours de croissance, conseils de performance et choix de pack pour joueurs débutants et confirmés.',
		},
		{
			title: 'Tarifs et licences',
			href: '/pricing/',
			description:
				'Comparez les formules mensuelles et à vie. Cloud-DMA inclut ESP, World ESP, hacks de combat et outils utilitaires.',
		},
	],
	packageHeading: 'Contenu du pack',
	packageIntro:
		'Une licence logicielle Windows PC avec Visuals ESP, World ESP, hacks de combat et outils utilitaires. L\'option {cloudDma} inclut ESP, World ESP, hacks de combat et fonctionnalités Other sans Aimbot. Les packs prennent aussi en charge les configs, l\'anglais et le russe, ainsi que les bascules dans le client.',
	packageOutro:
		'Les tarifs des packs sont listés sur la page tarifs pour comparer la durée et le budget. Les notes de maintenance apparaissent sur les annonces de mise à jour produit dès qu\'un build ou un changement de compatibilité est publié.',
	evaluateHeading: 'Comment évaluer ESP et Cloud-DMA',
	evaluateParagraphs: [
		'Commencez par les informations de survie qui comptent le plus pour vous. Si la détection des menaces et la lecture de la carte sont prioritaires, ouvrez la page ESP et vérifiez quelles catégories Visuals ESP et World ESP correspondent à votre style de jeu. Si les hacks de mouvement et de combat comptent davantage, consultez Cheats pour Instant Rotation, Auto-Attack et Omnimovement. Beaucoup de joueurs consultent les deux pages, puis utilisent la liste des fonctionnalités comme checklist finale avant de choisir une licence mensuelle ou à vie.',
		'La livraison est numérique après confirmation du paiement. Le délai peut varier selon le mode de paiement et la vérification de commande. Après l\'achat, surveillez la page Updates pour les notes de maintenance liées aux patchs de The Isle, et contactez le support si la livraison de licence ou l\'installation nécessite des précisions. Plateformes prises en charge : Windows PC. Disponibilité : Monde entier.',
		'Ce site est conçu pour une recherche produit claire plutôt que des promesses vagues. Chaque page interne a un rôle précis : ESP explique les hacks de visibilité, Cheats explique les options de mouvement et de combat, Features résume le pack complet, Pricing compare les durées, FAQ répond aux questions d\'achat courantes et Support est le canal de contact quand une réponse humaine est nécessaire.',
	],
	faqHeading: 'Questions fréquentes',
	faqs: [
		{
			question: 'Que comprend The Isle Cheats ?',
			answer:
				'The Isle Cheats comprend Visuals ESP, World ESP, Cheats et d\'autres hacks utilitaires. L\'option Cloud-DMA couvre ESP, World ESP, Cheats et fonctionnalités Other sans Aimbot. Les packs complets peuvent inclure la liste complète des fonctionnalités sur la page Features, y compris les contrôles Aimbot optionnels pour les acheteurs qui en ont besoin.',
		},
		{
			question: 'Qu\'est-ce que l\'option Cloud-DMA ?',
			answer:
				'Cloud-DMA est l\'option de pack axée sur ESP, World ESP, Cheats et autres hacks comme Instant Rotation, Radar et FOV Changer. L\'Aimbot n\'est pas inclus dans l\'option Cloud-DMA.',
		},
		{
			question: 'Comment les licences sont-elles livrées ?',
			answer:
				'Après confirmation du paiement, les détails de licence sont livrés numériquement. Le délai peut varier selon le mode de paiement et la vérification de commande. Conservez votre confirmation de commande lors du contact avec le support pour que l\'équipe retrouve rapidement votre achat.',
		},
		{
			question: 'Où consulter les mises à jour produit ?',
			answer:
				'Les notes de maintenance sont publiées sur la page Updates dès qu\'un nouveau build ou un avis de compatibilité est disponible. Après les patchs de The Isle, c\'est le moyen le plus rapide de vérifier si une version de maintenance a été publiée.',
		},
	],
	faqMore:
		'D\'autres réponses sont sur The Isle FAQ et le hub FAQ complet. Explorez The Isle Survival Guide, Growth Guide et The Isle Blog. Les détails des politiques figurent dans notre politique de remboursement, politique de confidentialité et conditions d\'utilisation.',
	shareHeading: 'Partager The Isle Cheats',
	shareIntro: 'Transmettez cette page à quelqu\'un qui compare les options ESP et hacks pour The Isle.',
	relatedSearchesLabel: 'Recherches associées',
};

const es: HomeContent = {
	heroEyebrow: 'Windows PC · Cloud-DMA',
	heroTitle: 'The Isle Cheats',
	heroSubtitle: 'ESP, World ESP & Dino Radar',
	heroDescription:
		'Compara Visuals ESP, World ESP y hacks de combate en un solo paquete Cloud-DMA. Revisa planes mensuales y de por vida, listas de funciones y guías de configuración antes de comprar.',
	heroCtaPrimary: 'Comprar',
	heroCtaSecondary: 'Explorar funciones',
	whyUsHeading: 'Por qué elegir Isle Cheats',
	whyUsIntro:
		'Un paquete Cloud-DMA diseñado para la supervivencia de dinosaurios en Windows PC — con overlays ESP, hacks de combate y herramientas de utilidad en una sola licencia.',
	whyUsPoints: [
		'Isle Cheats y The Isle Cheats en un paquete Windows PC con Visuals ESP y World ESP',
		'Hacks Isle para combate — Instant Rotation, Auto-Attack y Omnimovement',
		'Rastrea el growth, la salud, la resistencia y los recursos del mapa mediante overlays ESP',
		'Cloud-DMA incluye ESP y hacks sin Aimbot en el paquete base',
		'Licencias mensuales o de por vida con precios claros antes del pago',
		'Guías de supervivencia, growth, dinosaurios, ajustes y rendimiento en The Isle',
	],
	gridLinks: [
		{
			title: 'Guía de overlays ESP',
			href: '/the-isle-esp/',
			description:
				'Visuals ESP y World ESP cubren entidades, salud, growth, recursos, cuerpos, carne, frutas, hierbas, hongos y agua con alcance y colores configurables.',
		},
		{
			title: 'Hub del producto',
			href: '/the-isle-cheats/',
			description: 'Paquetes Cloud-DMA, opciones de hacks y guías de compra para jugadores de Windows PC.',
		},
		{
			title: 'Opciones de hacks de combate',
			href: '/cheats/',
			description:
				'Instant Rotation, Auto-Attack, Omnimovement, No Cooldown Attack, Unlock Zoom y otras herramientas de movimiento y combate incluidas en Cloud-DMA.',
		},
		{
			title: 'Lista completa de funciones',
			href: '/the-isle-features/',
			description:
				'Cloud-DMA, Visuals ESP, World ESP, hacks de combate, herramientas de utilidad y detalles opcionales de Aimbot en un solo lugar.',
		},
		{
			title: 'Guías de supervivencia y growth',
			href: '/the-isle-guide/',
			description: 'Tácticas, rutas de growth, consejos de rendimiento y selección de paquetes para jugadores nuevos y veteranos.',
		},
		{
			title: 'Precios y licencias',
			href: '/pricing/',
			description:
				'Compara planes mensuales y de por vida. Cloud-DMA incluye ESP, World ESP, hacks de combate y herramientas de utilidad.',
		},
	],
	packageHeading: 'Qué incluye el paquete',
	packageIntro:
		'Una licencia de software para Windows PC con Visuals ESP, World ESP, hacks de combate y herramientas de utilidad. La opción {cloudDma} incluye ESP, World ESP, hacks de combate y funciones Other sin Aimbot. Los paquetes también admiten configs, inglés y ruso, y toggles dentro del cliente.',
	packageOutro:
		'Los precios de los paquetes están en la página de precios para comparar duración y presupuesto. Las notas de mantenimiento aparecen en los avisos de actualización del producto cuando se publica un build o un cambio de compatibilidad.',
	evaluateHeading: 'Cómo evaluar ESP y Cloud-DMA',
	evaluateParagraphs: [
		'Empieza por la información de supervivencia que más te importa. Si la detección de amenazas y la lectura del mapa son tu prioridad, abre la página ESP y confirma qué categorías de Visuals ESP y World ESP encajan con tu estilo de juego. Si los hacks de movimiento y combate importan más, revisa Cheats para Instant Rotation, Auto-Attack y Omnimovement. Muchos jugadores consultan ambas páginas y usan la lista de funciones como checklist final antes de elegir una licencia mensual o de por vida.',
		'La entrega es digital tras la confirmación del pago. El tiempo puede variar según el método de pago y la revisión del pedido. Tras la compra, consulta la página Updates para notas de mantenimiento ligadas a los parches de The Isle, y contacta con soporte si la entrega de la licencia o la configuración necesitan aclaración. Plataformas compatibles: Windows PC. Disponibilidad: Mundial.',
		'Este sitio está pensado para una investigación de producto clara, no promesas vagas. Cada página interna tiene un rol concreto: ESP explica los hacks de visibilidad, Cheats explica opciones de movimiento y combate, Features resume el paquete completo, Pricing compara duraciones, FAQ responde preguntas frecuentes de compra y Support es el canal de contacto cuando hace falta una respuesta humana.',
	],
	faqHeading: 'Preguntas frecuentes',
	faqs: [
		{
			question: '¿Qué incluye The Isle Cheats?',
			answer:
				'The Isle Cheats incluye Visuals ESP, World ESP, Cheats y otros hacks de utilidad. La opción Cloud-DMA cubre ESP, World ESP, Cheats y funciones Other sin Aimbot. Los paquetes completos pueden incluir la lista completa de funciones en la página Features, incluidos controles opcionales de Aimbot para compradores que los necesiten.',
		},
		{
			question: '¿Qué es la opción Cloud-DMA?',
			answer:
				'Cloud-DMA es la opción de paquete centrada en ESP, World ESP, Cheats y otros hacks como Instant Rotation, Radar y FOV Changer. Aimbot no está incluido en la opción Cloud-DMA.',
		},
		{
			question: '¿Cómo se entregan las licencias?',
			answer:
				'Tras confirmar el pago, los datos de la licencia se entregan de forma digital. El plazo puede variar según el método de pago y la revisión del pedido. Guarda la confirmación del pedido al contactar con soporte para que el equipo localice tu compra rápidamente.',
		},
		{
			question: '¿Dónde consulto las actualizaciones del producto?',
			answer:
				'Las notas de mantenimiento se publican en la página Updates cuando hay un nuevo build o aviso de compatibilidad. Tras los parches de The Isle, es la forma más rápida de confirmar si se ha publicado una versión de mantenimiento.',
		},
	],
	faqMore:
		'Más respuestas en The Isle FAQ y el hub FAQ completo. Explora The Isle Survival Guide, Growth Guide y The Isle Blog. Los detalles de políticas están en nuestra política de reembolso, política de privacidad y términos de uso.',
	shareHeading: 'Compartir The Isle Cheats',
	shareIntro: 'Comparte esta página si alguien más está comparando opciones de ESP y hacks para The Isle.',
	relatedSearchesLabel: 'Búsquedas relacionadas',
};

const tr: HomeContent = {
	heroEyebrow: 'Windows PC · Cloud-DMA',
	heroTitle: 'The Isle Cheats',
	heroSubtitle: 'ESP, World ESP & Dino Radar',
	heroDescription:
		'Visuals ESP, World ESP ve combat hack\'lerini tek bir Cloud-DMA paketinde karşılaştır. Satın almadan önce aylık ve ömür boyu planları, özellik listelerini ve kurulum rehberlerini incele.',
	heroCtaPrimary: 'Satın al',
	heroCtaSecondary: 'Özellikleri keşfet',
	whyUsHeading: 'Neden Isle Cheats',
	whyUsIntro:
		'Windows PC\'de dinozor hayatta kalma için tasarlanmış bir Cloud-DMA paketi — ESP overlay\'leri, combat hack\'leri ve yardımcı araçlar tek lisansta.',
	whyUsPoints: [
		'Isle Cheats ve The Isle Cheats, Visuals ESP ve World ESP ile tek Windows PC paketinde',
		'Combat için Isle hack\'leri — Instant Rotation, Auto-Attack ve Omnimovement',
		'ESP overlay\'leriyle The Isle growth, sağlık, stamina ve harita kaynaklarını takip et',
		'Cloud-DMA temel pakette Aimbot olmadan ESP ve hack\'leri içerir',
		'Ödeme öncesi net fiyatlarla aylık veya ömür boyu lisanslar',
		'The Isle hayatta kalma, growth, dinozorlar, ayarlar ve performans rehberleri',
	],
	gridLinks: [
		{
			title: 'ESP overlay rehberi',
			href: '/the-isle-esp/',
			description:
				'Visuals ESP ve World ESP; entity\'ler, sağlık, growth, kaynaklar, cesetler, et, meyve, otlar, mantarlar ve suyu ayarlanabilir menzil ve renklerle kapsar.',
		},
		{
			title: 'Ürün merkezi',
			href: '/the-isle-cheats/',
			description: 'Windows PC oyuncuları için Cloud-DMA paketleri, hack seçenekleri ve satın alma rehberleri.',
		},
		{
			title: 'Combat hack seçenekleri',
			href: '/cheats/',
			description:
				'Cloud-DMA\'da Instant Rotation, Auto-Attack, Omnimovement, No Cooldown Attack, Unlock Zoom ve diğer hareket ve combat araçları.',
		},
		{
			title: 'Tam özellik listesi',
			href: '/the-isle-features/',
			description:
				'Cloud-DMA, Visuals ESP, World ESP, combat hack\'leri, yardımcı araçlar ve isteğe bağlı Aimbot detayları tek yerde.',
		},
		{
			title: 'Hayatta kalma ve growth rehberleri',
			href: '/the-isle-guide/',
			description: 'Yeni ve deneyimli oyuncular için taktikler, growth yolları, performans ipuçları ve paket seçimi.',
		},
		{
			title: 'Fiyatlandırma ve lisanslar',
			href: '/pricing/',
			description:
				'Aylık ve ömür boyu planları karşılaştır. Cloud-DMA; ESP, World ESP, combat hack\'leri ve yardımcı araçları içerir.',
		},
	],
	packageHeading: 'Pakette neler var',
	packageIntro:
		'Visuals ESP, World ESP, combat hack\'leri ve yardımcı araçlarla Windows PC yazılım lisansı. {cloudDma} seçeneği Aimbot olmadan ESP, World ESP, combat hack\'leri ve Other özelliklerini içerir. Paketler ayrıca config\'leri, İngilizce ve Rusça dillerini ve istemci içi toggle\'ları destekler.',
	packageOutro:
		'Paket fiyatları, süre ve bütçeyi karşılaştırabilmen için fiyatlandırma sayfasında listelenir. Bir build veya uyumluluk değişikliği yayınlandığında bakım notları ürün güncelleme duyurularında görünür.',
	evaluateHeading: 'ESP ve Cloud-DMA\'yı nasıl değerlendirirsin',
	evaluateParagraphs: [
		'En çok önem verdiğin hayatta kalma bilgisiyle başla. Tehdit farkındalığı ve harita okuma önceliğinse ESP sayfasını aç ve hangi Visuals ESP ve World ESP kategorilerinin oyun tarzına uyduğunu doğrula. Hareket ve combat hack\'leri daha önemliyse Cheats\'te Instant Rotation, Auto-Attack ve Omnimovement\'ı incele. Birçok oyuncu her iki sayfayı da kontrol eder, ardından aylık veya ömür boyu lisans seçmeden önce özellik listesini son kontrol olarak kullanır.',
		'Teslimat, ödeme onayından sonra dijital olarak yapılır. Süre ödeme yöntemine ve sipariş incelemesine göre değişebilir. Satın aldıktan sonra The Isle yamalarına bağlı bakım notları için Updates sayfasını takip et; lisans teslimi veya kurulum net değilse destekle iletişime geç. Desteklenen platformlar: Windows PC. Pazar erişimi: Dünya geneli.',
		'Bu site belirsiz iddialar yerine net ürün araştırması için tasarlandı. Her iç sayfanın belirli bir görevi var: ESP görünürlük hack\'lerini açıklar, Cheats hareket ve combat seçeneklerini açıklar, Features tüm paketi özetler, Pricing plan sürelerini karşılaştırır, FAQ yaygın satın alma sorularını yanıtlar ve Support insan müdahalesi gerektiğinde iletişim yoludur.',
	],
	faqHeading: 'Sık sorulan sorular',
	faqs: [
		{
			question: 'The Isle Cheats\'e neler dahil?',
			answer:
				'The Isle Cheats; Visuals ESP, World ESP, Cheats ve diğer yardımcı hack\'leri içerir. Cloud-DMA seçeneği Aimbot olmadan ESP, World ESP, Cheats ve Other özelliklerini kapsar. Tam paketler, ihtiyaç duyan alıcılar için isteğe bağlı Aimbot kontrolleri dahil Features sayfasındaki tam özellik listesini içerebilir.',
		},
		{
			question: 'Cloud-DMA seçeneği nedir?',
			answer:
				'Cloud-DMA; ESP, World ESP, Cheats ve Instant Rotation, Radar, FOV Changer gibi Other hack\'lere odaklanan paket seçeneğidir. Aimbot Cloud-DMA seçeneğine dahil değildir.',
		},
		{
			question: 'Lisanslar nasıl teslim edilir?',
			answer:
				'Ödeme onaylandıktan sonra lisans bilgileri dijital olarak teslim edilir. Teslimat süresi ödeme yöntemine ve sipariş incelemesine göre değişebilir. Destekle iletişime geçerken sipariş onayını hazır bulundur; ekip satın alımını hızlıca bulabilsin.',
		},
		{
			question: 'Ürün güncellemelerini nereden kontrol ederim?',
			answer:
				'Ürün bakım notları yeni bir build veya uyumluluk duyurusu olduğunda Updates sayfasında yayınlanır. The Isle yamalarından sonra bir bakım sürümünün yayınlanıp yayınlanmadığını doğrulamanın en hızlı yolu budur.',
		},
	],
	faqMore:
		'Daha fazla yanıt The Isle FAQ ve tam FAQ merkezinde. The Isle Survival Guide, Growth Guide ve The Isle Blog\'u keşfet. Politika detayları iade politikamız, gizlilik politikamız ve kullanım şartlarında.',
	shareHeading: 'The Isle Cheats\'i paylaş',
	shareIntro: 'Başka biri The Isle için ESP ve hack seçeneklerini karşılaştırıyorsa bu sayfayı ilet.',
	relatedSearchesLabel: 'İlgili aramalar',
};

const ar: HomeContent = {
	heroEyebrow: 'Windows PC · Cloud-DMA',
	heroTitle: 'The Isle Cheats',
	heroSubtitle: 'ESP و World ESP و Dino Radar',
	heroDescription:
		'قارن Visuals ESP و World ESP وهاكات القتال في حزمة Cloud-DMA واحدة. راجع الخطط الشهرية ومدى الحياة وقوائم الميزات وأدلة الإعداد قبل الشراء.',
	heroCtaPrimary: 'شراء',
	heroCtaSecondary: 'استكشاف الميزات',
	whyUsHeading: 'لماذا Isle Cheats',
	whyUsIntro:
		'حزمة Cloud-DMA مصممة للبقاء على قيد الحياة مع الديناصورات على Windows PC — مع طبقات ESP وهاكات القتال وأدوات مساعدة في ترخيص واحد.',
	whyUsPoints: [
		'Isle Cheats و The Isle Cheats في حزمة Windows PC واحدة مع Visuals ESP و World ESP',
		'هاكات Isle للقتال — Instant Rotation و Auto-Attack و Omnimovement',
		'تتبع نمو The Isle والصحة والقدرة على التحمل وموارد الخريطة عبر طبقات ESP',
		'Cloud-DMA يتضمن ESP والهاكات دون Aimbot في الحزمة الأساسية',
		'تراخيص شهرية أو مدى الحياة بأسعار واضحة قبل الدفع',
		'أدلة للبقاء والنمو والديناصورات والإعدادات والأداء في The Isle',
	],
	gridLinks: [
		{
			title: 'دليل طبقة ESP',
			href: '/the-isle-esp/',
			description:
				'Visuals ESP و World ESP يغطيان الكيانات والصحة والنمو والموارد والجثث واللحم والفواكه والأعشاب والفطر والماء بمدى وألوان قابلة للتخصيص.',
		},
		{
			title: 'مركز المنتج',
			href: '/the-isle-cheats/',
			description: 'حزم Cloud-DMA وخيارات الهاكات وأدلة الشراء للاعبين على Windows PC.',
		},
		{
			title: 'خيارات هاكات القتال',
			href: '/cheats/',
			description:
				'Instant Rotation و Auto-Attack و Omnimovement و No Cooldown Attack و Unlock Zoom وأدوات حركة وقتال أخرى ضمن Cloud-DMA.',
		},
		{
			title: 'قائمة الميزات الكاملة',
			href: '/the-isle-features/',
			description:
				'Cloud-DMA و Visuals ESP و World ESP وهاكات القتال والأدوات المساعدة وتفاصيل Aimbot الاختيارية في مكان واحد.',
		},
		{
			title: 'أدلة البقاء والنمو',
			href: '/the-isle-guide/',
			description: 'تكتيكات ومسارات النمو ونصائح الأداء واختيار الحزمة للاعبين الجدد والمحترفين.',
		},
		{
			title: 'الأسعار والتراخيص',
			href: '/pricing/',
			description:
				'قارن الخطط الشهرية ومدى الحياة. Cloud-DMA يتضمن ESP و World ESP وهاكات القتال والأدوات المساعدة.',
		},
	],
	packageHeading: 'ماذا يتضمن الحزمة',
	packageIntro:
		'ترخيص برنامج Windows PC مع Visuals ESP و World ESP وهاكات القتال والأدوات المساعدة. خيار {cloudDma} يتضمن ESP و World ESP وهاكات القتال وميزات Other دون Aimbot. تدعم الحزم أيضًا الإعدادات واللغتين الإنجليزية والروسية والتبديل داخل العميل.',
	packageOutro:
		'أسعار الحزم مدرجة في صفحة الأسعار لمقارنة المدة والميزانية. تظهر ملاحظات الصيانة في إشعارات تحديث المنتج عند نشر إصدار أو تغيير توافق.',
	evaluateHeading: 'كيف تقيّم ESP و Cloud-DMA',
	evaluateParagraphs: [
		'ابدأ بمعلومات البقاء الأهم بالنسبة لك. إذا كانت أولويتك الوعي بالتهديدات وقراءة الخريطة، افتح صفحة ESP وتأكد من فئات Visuals ESP و World ESP التي تناسب أسلوب لعبك. إذا كانت هاكات الحركة والقتال أهم، راجع Cheats لـ Instant Rotation و Auto-Attack و Omnimovement. يتحقق كثير من اللاعبين من الصفحتين ثم يستخدمون قائمة الميزات كقائمة مراجعة نهائية قبل اختيار ترخيص شهري أو مدى الحياة.',
		'التسليم رقمي بعد تأكيد الدفع. قد يختلف التوقيت حسب طريقة الدفع ومراجعة الطلب. بعد الشراء، راقب صفحة Updates لملاحظات الصيانة المرتبطة بتصحيحات The Isle، وتواصل مع الدعم إذا احتجت توضيحًا لتسليم الترخيص أو الإعداد. المنصات المدعومة: Windows PC. التوفر: عالمي.',
		'هذا الموقع مصمم لبحث منتج واضح بدل ادعاءات مبهمة. لكل صفحة داخلية دور محدد: ESP يشرح هاكات الرؤية، Cheats يشرح خيارات الحركة والقتال، Features يلخص الحزمة الكاملة، Pricing يقارن مدد الخطط، FAQ يجيب أسئلة الشراء الشائعة، و Support هو مسار التواصل عند الحاجة لرد بشري.',
	],
	faqHeading: 'أسئلة شائعة',
	faqs: [
		{
			question: 'ماذا يتضمن The Isle Cheats؟',
			answer:
				'يتضمن The Isle Cheats ميزات Visuals ESP و World ESP و Cheats وهاكات مساعدة أخرى. خيار Cloud-DMA يغطي ESP و World ESP و Cheats وميزات Other دون Aimbot. قد تتضمن الحزم الكاملة القائمة الكاملة للميزات في صفحة Features، بما في ذلك عناصر تحكم Aimbot الاختيارية للمشترين الذين يحتاجونها.',
		},
		{
			question: 'ما هو خيار Cloud-DMA؟',
			answer:
				'Cloud-DMA هو خيار الحزمة المركز على ESP و World ESP و Cheats وهاكات Other مثل Instant Rotation و Radar و FOV Changer. Aimbot غير مضمن في خيار Cloud-DMA.',
		},
		{
			question: 'كيف يتم تسليم التراخيص؟',
			answer:
				'بعد تأكيد الدفع، تُسلَّم تفاصيل الترخيص رقميًا. قد يختلف التوقيت حسب طريقة الدفع ومراجعة الطلب. احتفظ بتأكيد الطلب عند التواصل مع الدعم ليتمكن الفريق من العثور على مشترياتك بسرعة.',
		},
		{
			question: 'أين أتحقق من تحديثات المنتج؟',
			answer:
				'تُنشر ملاحظات الصيانة في صفحة Updates عند توفر إصدار جديد أو إشعار توافق. بعد تصحيحات The Isle، هذه أسرع طريقة للتأكد من نشر إصدار صيانة.',
		},
	],
	faqMore:
		'مزيد من الإجابات في The Isle FAQ ومركز FAQ الكامل. استكشف The Isle Survival Guide و Growth Guide و The Isle Blog. تفاصيل السياسات في سياسة الاسترداد وسياسة الخصوصية وشروط الاستخدام.',
	shareHeading: 'شارك The Isle Cheats',
	shareIntro: 'أرسل هذه الصفحة لمن يقارن خيارات ESP والهاكات لـ The Isle.',
	relatedSearchesLabel: 'عمليات بحث ذات صلة',
};

const ru: HomeContent = {
	heroEyebrow: 'Windows PC · Cloud-DMA',
	heroTitle: 'The Isle Cheats',
	heroSubtitle: 'ESP, World ESP и Dino Radar',
	heroDescription:
		'Сравните Visuals ESP, World ESP и боевые читы в одном пакете Cloud-DMA. Изучите месячные и пожизненные планы, списки функций и гайды по настройке перед покупкой.',
	heroCtaPrimary: 'Купить',
	heroCtaSecondary: 'Изучить функции',
	whyUsHeading: 'Почему Isle Cheats',
	whyUsIntro:
		'Пакет Cloud-DMA для выживания с динозаврами на Windows PC — ESP-оверлеи, боевые читы и утилиты в одной лицензии.',
	whyUsPoints: [
		'Isle Cheats и The Isle Cheats в одном пакете для Windows PC с Visuals ESP и World ESP',
		'Читы Isle для боя — Instant Rotation, Auto-Attack и Omnimovement',
		'Отслеживайте рост, здоровье, выносливость и ресурсы карты через ESP-оверлеи',
		'Cloud-DMA включает ESP и читы без Aimbot в базовом пакете',
		'Месячные или пожизненные лицензии с понятными ценами до оплаты',
		'Гайды по выживанию, росту, динозаврам, настройкам и производительности в The Isle',
	],
	gridLinks: [
		{
			title: 'Гайд по ESP-оверлеям',
			href: '/the-isle-esp/',
			description:
				'Visuals ESP и World ESP показывают сущности, здоровье, рост, ресурсы, тела, мясо, фрукты, травы, грибы и воду с настраиваемой дальностью и цветами.',
		},
		{
			title: 'Хаб продукта',
			href: '/the-isle-cheats/',
			description: 'Пакеты Cloud-DMA, варианты читов и гайды по покупке для игроков на Windows PC.',
		},
		{
			title: 'Боевые читы',
			href: '/cheats/',
			description:
				'Instant Rotation, Auto-Attack, Omnimovement, No Cooldown Attack, Unlock Zoom и другие инструменты движения и боя в Cloud-DMA.',
		},
		{
			title: 'Полный список функций',
			href: '/the-isle-features/',
			description:
				'Cloud-DMA, Visuals ESP, World ESP, боевые читы, утилиты и опциональный Aimbot — всё в одном месте.',
		},
		{
			title: 'Гайды по выживанию и росту',
			href: '/the-isle-guide/',
			description: 'Тактики, пути роста, советы по производительности и выбор пакета для новичков и ветеранов.',
		},
		{
			title: 'Цены и лицензии',
			href: '/pricing/',
			description:
				'Сравните месячные и пожизненные планы. Cloud-DMA включает ESP, World ESP, боевые читы и утилиты.',
		},
	],
	packageHeading: 'Что входит в пакет',
	packageIntro:
		'Лицензия на ПО для Windows PC с Visuals ESP, World ESP, боевыми читами и утилитами. Опция {cloudDma} включает ESP, World ESP, боевые читы и функции Other без Aimbot. Пакеты также поддерживают конфиги, английский и русский языки и переключатели в клиенте.',
	packageOutro:
		'Цены на пакеты указаны на странице цен, чтобы сравнить срок и бюджет. Заметки о техобслуживании появляются в обновлениях продукта при публикации сборки или изменения совместимости.',
	evaluateHeading: 'Как оценить ESP и Cloud-DMA',
	evaluateParagraphs: [
		'Начните с информации о выживании, которая важна вам больше всего. Если приоритет — осведомлённость об угрозах и чтение карты, откройте страницу ESP и проверьте, какие категории Visuals ESP и World ESP подходят вашему стилю игры. Если важнее читы движения и боя, изучите Cheats: Instant Rotation, Auto-Attack и Omnimovement. Многие игроки смотрят обе страницы, а затем используют список функций как финальный чеклист перед выбором месячной или пожизненной лицензии.',
		'Доставка цифровая после подтверждения оплаты. Срок может зависеть от способа оплаты и проверки заказа. После покупки следите за страницей Updates на предмет заметок о техобслуживании после патчей The Isle и обращайтесь в поддержку, если нужны уточнения по доставке лицензии или настройке. Поддерживаемые платформы: Windows PC. Доступность: по всему миру.',
		'Этот сайт создан для ясного изучения продукта, а не расплывчатых обещаний. У каждой внутренней страницы своя задача: ESP объясняет читы видимости, Cheats — варианты движения и боя, Features суммирует полный пакет, Pricing сравнивает сроки планов, FAQ отвечает на частые вопросы о покупке, а Support — путь связи, когда нужен ответ человека.',
	],
	faqHeading: 'Частые вопросы',
	faqs: [
		{
			question: 'Что входит в The Isle Cheats?',
			answer:
				'The Isle Cheats включает Visuals ESP, World ESP, Cheats и другие утилиты. Опция Cloud-DMA охватывает ESP, World ESP, Cheats и функции Other без Aimbot. Полные пакеты могут включать весь список функций на странице Features, в том числе опциональные элементы управления Aimbot для покупателей, которым они нужны.',
		},
		{
			question: 'Что такое опция Cloud-DMA?',
			answer:
				'Cloud-DMA — вариант пакета с фокусом на ESP, World ESP, Cheats и Other-читы, такие как Instant Rotation, Radar и FOV Changer. Aimbot в опцию Cloud-DMA не входит.',
		},
		{
			question: 'Как доставляются лицензии?',
			answer:
				'После подтверждения оплаты данные лицензии доставляются в цифровом виде. Срок может зависеть от способа оплаты и проверки заказа. Сохраните подтверждение заказа при обращении в поддержку, чтобы команда быстрее нашла вашу покупку.',
		},
		{
			question: 'Где смотреть обновления продукта?',
			answer:
				'Заметки о техобслуживании публикуются на странице Updates при появлении новой сборки или уведомления о совместимости. После патчей The Isle это самый быстрый способ узнать, вышло ли обслуживающее обновление.',
		},
	],
	faqMore:
		'Больше ответов — в The Isle FAQ и полном FAQ-хабе. Изучите The Isle Survival Guide, Growth Guide и The Isle Blog. Детали политик — в политике возврата, политике конфиденциальности и условиях использования.',
	shareHeading: 'Поделиться The Isle Cheats',
	shareIntro: 'Отправьте эту страницу тому, кто сравнивает варианты ESP и читов для The Isle.',
	relatedSearchesLabel: 'Похожие запросы',
};

const byLocale: Record<LocaleCode, HomeContent> = { en, de, fr, es, tr, ar, ru };

export function getHomeContent(locale: LocaleCode): HomeContent {
	return byLocale[locale] ?? en;
}
