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
	faqHeading: 'FAQ',
	faqs: [
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
	],
	faqMore:
		'Need more help? Browse the full FAQ hub, The Isle FAQ, Pricing, Features, and Support. Also check the Updates page after game patches, plus the refund policy and terms before you buy.',
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
				'The Isle Cheats umfasst Visuals ESP, World ESP, Combat-Hacks und Utility-Tools für Windows PC. Das Cloud-DMA-Paket deckt ESP, World ESP, Cheats und Other-Features ohne Aimbot ab. Siehe die Features-Seite für die komplette Checkliste.',
		},
		{
			question: 'Was ist die Cloud-DMA-Option?',
			answer:
				'Cloud-DMA ist das hardwarebasierte Paket für The Isle auf Windows PC. Fokus liegen auf Visuals ESP, World ESP, Combat-Tools wie Instant Rotation und Auto-Attack sowie Utilities wie Radar und FOV Changer. Aimbot ist in der Basis-Cloud-DMA-Option nicht enthalten.',
		},
		{
			question: 'Was kosten Monats- und Lifetime-Pläne?',
			answer:
				'Aktuell: $35 USD monatlich und $150 USD Lifetime. Beide Pläne enthalten denselben Cloud-DMA-Feature-Umfang. Vergleiche die Optionen auf der Pricing-Seite vor dem Checkout.',
		},
		{
			question: 'Wie werden Lizenzen geliefert?',
			answer:
				'Nach Zahlungsbestätigung werden Lizenzdetails digital geliefert. Die Dauer kann je nach Zahlungsmethode und Prüfung variieren. Halte deine Bestellbestätigung bereit, wenn du Support kontaktierst.',
		},
		{
			question: 'Funktioniert The Isle Cheats nach Game-Updates?',
			answer:
				'Nach The Isle- oder Evrima-Patches die Updates-Seite prüfen. Dort erscheinen Wartungshinweise, damit du siehst, ob ein neuer Build verfügbar ist.',
		},
		{
			question: 'Ist Aimbot im Basispaket enthalten?',
			answer:
				'Nein. Das Cloud-DMA-Basispaket enthält Visuals ESP, World ESP, Combat-Hacks und Utilities ohne Aimbot. Aimbot-Optionen sind separat dokumentiert und nicht Teil der Standard-Cloud-DMA-Inklusion.',
		},
		{
			question: 'Was ist der Unterschied zwischen Visuals ESP und World ESP?',
			answer:
				'Visuals ESP trackt lebende Entities mit Boxen, Snaplines, Health, Growth, Stamina und Distanz. World ESP markiert Map-Ressourcen wie Bodies, Meat, Fruits, Herbs, Mushrooms und Water für schnelleres Farmen und Überleben.',
		},
		{
			question: 'Welche Plattformen werden unterstützt?',
			answer:
				'The Isle Cheats ist für Windows PC (Windows 10 und 11) gebaut und wird weltweit als digitale Lizenz verkauft. Konsolen oder andere Plattformen werden nicht unterstützt.',
		},
	],
	faqMore:
		'Brauchst du mehr Hilfe? Sieh dir den FAQ-Hub, The Isle FAQ, Pricing, Features und Support an. Prüfe auch Updates nach Game-Patches sowie Rückerstattungsrichtlinie und Nutzungsbedingungen vor dem Kauf.',
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
			question: 'Que contient The Isle Cheats ?',
			answer:
				'The Isle Cheats inclut Visuals ESP, World ESP, hacks de combat et outils utilitaires pour Windows PC. Le pack Cloud-DMA couvre ESP, World ESP, Cheats et Other sans Aimbot. Consultez Features pour la checklist complète.',
		},
		{
			question: 'Qu’est-ce que l’option Cloud-DMA ?',
			answer:
				'Cloud-DMA est le pack matériel pour The Isle sur Windows PC. Il se concentre sur Visuals ESP, World ESP, outils de combat comme Instant Rotation et Auto-Attack, plus Radar et FOV Changer. Aimbot n’est pas inclus dans l’option Cloud-DMA de base.',
		},
		{
			question: 'Combien coûtent les plans mensuel et à vie ?',
			answer:
				'Prix actuels : $35 USD mensuel et $150 USD lifetime. Les deux plans offrent le même ensemble Cloud-DMA. Comparez sur Pricing avant le paiement.',
		},
		{
			question: 'Comment les licences sont-elles livrées ?',
			answer:
				'Après confirmation du paiement, les détails de licence sont livrés numériquement. Le délai peut varier selon le moyen de paiement. Gardez votre confirmation de commande pour le support.',
		},
		{
			question: 'The Isle Cheats fonctionne-t-il après les mises à jour du jeu ?',
			answer:
				'Après un patch The Isle ou Evrima, consultez la page Updates pour les notes de maintenance et confirmer si un nouveau build est disponible.',
		},
		{
			question: 'Aimbot est-il inclus dans le pack de base ?',
			answer:
				'Non. Le pack Cloud-DMA de base inclut Visuals ESP, World ESP, hacks de combat et utilitaires sans Aimbot. Les options Aimbot sont documentées séparément.',
		},
		{
			question: 'Quelle est la différence entre Visuals ESP et World ESP ?',
			answer:
				'Visuals ESP suit les entités vivantes (boîtes, snaplines, santé, croissance, endurance, distance). World ESP met en évidence les ressources de carte : corps, viande, fruits, herbes, champignons et eau.',
		},
		{
			question: 'Quelles plateformes sont prises en charge ?',
			answer:
				'The Isle Cheats est conçu pour Windows PC (Windows 10 et 11) et vendu en licence numérique dans le monde entier. Consoles et autres plateformes non prises en charge.',
		},
	],
	faqMore:
		'Besoin d’aide ? Consultez le hub FAQ, The Isle FAQ, Pricing, Features et Support. Vérifiez aussi Updates après les patches, ainsi que la politique de remboursement et les conditions avant d’acheter.',
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
				'The Isle Cheats incluye Visuals ESP, World ESP, hacks de combate y utilidades para Windows PC. El paquete Cloud-DMA cubre ESP, World ESP, Cheats y Other sin Aimbot. Revisa Features para la lista completa.',
		},
		{
			question: '¿Qué es la opción Cloud-DMA?',
			answer:
				'Cloud-DMA es el paquete basado en hardware para The Isle en Windows PC. Se centra en Visuals ESP, World ESP, herramientas de combate como Instant Rotation y Auto-Attack, más Radar y FOV Changer. Aimbot no está en la opción base Cloud-DMA.',
		},
		{
			question: '¿Cuánto cuestan los planes mensual y lifetime?',
			answer:
				'Precio actual: $35 USD mensual y $150 USD lifetime. Ambos planes incluyen el mismo set Cloud-DMA. Compara en Pricing antes del checkout.',
		},
		{
			question: '¿Cómo se entregan las licencias?',
			answer:
				'Tras confirmar el pago, los datos de licencia se entregan digitalmente. El tiempo puede variar según el método de pago. Conserva la confirmación del pedido si contactas a soporte.',
		},
		{
			question: '¿The Isle Cheats funciona tras actualizaciones del juego?',
			answer:
				'Cuando The Isle o Evrima reciben un parche, revisa Updates para notas de mantenimiento y confirmar si hay un build nuevo.',
		},
		{
			question: '¿Aimbot está incluido en el paquete base?',
			answer:
				'No. El paquete base Cloud-DMA incluye Visuals ESP, World ESP, hacks de combate y utilidades sin Aimbot. Las opciones de Aimbot se documentan por separado.',
		},
		{
			question: '¿Cuál es la diferencia entre Visuals ESP y World ESP?',
			answer:
				'Visuals ESP rastrea entidades vivas con cajas, snaplines, salud, crecimiento, stamina y distancia. World ESP marca recursos del mapa: cuerpos, carne, frutas, hierbas, hongos y agua.',
		},
		{
			question: '¿Qué plataformas son compatibles?',
			answer:
				'The Isle Cheats está hecho para Windows PC (Windows 10 y 11) y se vende como licencia digital a nivel mundial. Consolas u otras plataformas no son compatibles.',
		},
	],
	faqMore:
		'¿Necesitas más ayuda? Mira el hub FAQ, The Isle FAQ, Pricing, Features y Support. También revisa Updates tras parches, más la política de reembolso y los términos antes de comprar.',
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
			question: 'The Isle Cheats neleri içerir?',
			answer:
				'The Isle Cheats; Windows PC için Visuals ESP, World ESP, combat hileleri ve yardımcı araçları içerir. Cloud-DMA paketi Aimbot olmadan ESP, World ESP, Cheats ve Other özelliklerini kapsar. Tam liste için Features sayfasına bakın.',
		},
		{
			question: 'Cloud-DMA seçeneği nedir?',
			answer:
				'Cloud-DMA, The Isle için Windows PC’de donanım tabanlı pakettir. Visuals ESP, World ESP, Instant Rotation ve Auto-Attack gibi combat araçları ile Radar ve FOV Changer’a odaklanır. Aimbot temel Cloud-DMA’ya dahil değildir.',
		},
		{
			question: 'Aylık ve lifetime planlar ne kadar?',
			answer:
				'Güncel fiyat: aylık $35 USD, lifetime $150 USD. İki plan da aynı Cloud-DMA özellik setini sunar. Ödemeden önce Pricing’de karşılaştırın.',
		},
		{
			question: 'Lisanslar nasıl teslim edilir?',
			answer:
				'Ödeme onayından sonra lisans bilgileri dijital olarak teslim edilir. Süre ödeme yöntemine göre değişebilir. Destek için sipariş onayınızı saklayın.',
		},
		{
			question: 'Oyun güncellemelerinden sonra çalışır mı?',
			answer:
				'The Isle veya Evrima yaması sonrası Updates sayfasındaki bakım notlarını kontrol edin; yeni build olup olmadığını oradan doğrulayın.',
		},
		{
			question: 'Aimbot temel pakette var mı?',
			answer:
				'Hayır. Temel Cloud-DMA paketi Aimbot olmadan Visuals ESP, World ESP, combat hileleri ve yardımcıları içerir. Aimbot seçenekleri ayrı belgelenir.',
		},
		{
			question: 'Visuals ESP ile World ESP farkı nedir?',
			answer:
				'Visuals ESP canlı varlıkları kutu, snapline, sağlık, growth, stamina ve mesafe ile gösterir. World ESP et, ceset, meyve, ot, mantar ve su gibi harita kaynaklarını vurgular.',
		},
		{
			question: 'Hangi platformlar desteklenir?',
			answer:
				'The Isle Cheats Windows PC (Windows 10 ve 11) içindir ve dünya genelinde dijital lisans olarak satılır. Konsol veya diğer platformlar desteklenmez.',
		},
	],
	faqMore:
		'Daha fazla yardım için FAQ merkezi, The Isle FAQ, Pricing, Features ve Support’a bakın. Yama sonrası Updates’i, satın almadan önce iade politikası ve şartları da kontrol edin.',
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
				'يتضمن The Isle Cheats أدوات Visuals ESP وWorld ESP وهاكات القتال والمرافق لأجهزة Windows PC. حزمة Cloud-DMA تغطي ESP وWorld ESP وCheats وOther دون Aimbot. راجع صفحة Features للقائمة الكاملة.',
		},
		{
			question: 'ما خيار Cloud-DMA؟',
			answer:
				'Cloud-DMA هي الحزمة المعتمدة على العتاد لـ The Isle على Windows PC. تركز على Visuals ESP وWorld ESP وأدوات القتال مثل Instant Rotation وAuto-Attack بالإضافة إلى Radar وFOV Changer. Aimbot غير مشمول في خيار Cloud-DMA الأساسي.',
		},
		{
			question: 'كم تكلفة الخطط الشهرية ومدى الحياة؟',
			answer:
				'السعر الحالي: $35 شهريًا و$150 مدى الحياة بالدولار. كلا الخطتين تقدمان نفس مجموعة Cloud-DMA. قارن في Pricing قبل الدفع.',
		},
		{
			question: 'كيف يتم تسليم التراخيص؟',
			answer:
				'بعد تأكيد الدفع تُسلَّم تفاصيل الترخيص رقميًا. قد يختلف التوقيت حسب طريقة الدفع. احتفظ بتأكيد الطلب عند التواصل مع الدعم.',
		},
		{
			question: 'هل يعمل The Isle Cheats بعد تحديثات اللعبة؟',
			answer:
				'عند صدور تحديث The Isle أو Evrima راجع صفحة Updates لملاحظات الصيانة والتأكد من توفر بناء جديد.',
		},
		{
			question: 'هل Aimbot مشمول في الحزمة الأساسية؟',
			answer:
				'لا. حزمة Cloud-DMA الأساسية تتضمن Visuals ESP وWorld ESP وهاكات القتال والمرافق دون Aimbot. خيارات Aimbot موثقة بشكل منفصل.',
		},
		{
			question: 'ما الفرق بين Visuals ESP وWorld ESP؟',
			answer:
				'Visuals ESP يتتبع الكيانات الحية بالصناديق والخطوط والصحة والنمو والتحمل والمسافة. World ESP يبرز موارد الخريطة مثل الجثث واللحم والفواكه والأعشاب والفطر والماء.',
		},
		{
			question: 'ما المنصات المدعومة؟',
			answer:
				'The Isle Cheats مخصص لـ Windows PC (Windows 10 و11) ويُباع كترخيص رقمي عالمي وأكثر. وحدات التحكم والمنصات الأخرى غير مدعومة.',
		},
	],
	faqMore:
		'هل تحتاج مزيدًا من المساعدة؟ تصفح مركز FAQ وThe Isle FAQ وPricing وFeatures وSupport. راجع أيضًا Updates بعد التحديثات وسياسة الاسترداد والشروط قبل الشراء.',
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
				'The Isle Cheats включает Visuals ESP, World ESP, боевые хаки и утилиты для Windows PC. Пакет Cloud-DMA покрывает ESP, World ESP, Cheats и Other без Aimbot. Полный список смотрите на странице Features.',
		},
		{
			question: 'Что такое опция Cloud-DMA?',
			answer:
				'Cloud-DMA — аппаратный пакет для The Isle на Windows PC. Он фокусируется на Visuals ESP, World ESP, боевых инструментах вроде Instant Rotation и Auto-Attack, а также Radar и FOV Changer. Aimbot не входит в базовую опцию Cloud-DMA.',
		},
		{
			question: 'Сколько стоят месячный и lifetime планы?',
			answer:
				'Текущие цены: $35 USD в месяц и $150 USD lifetime. Оба плана дают один и тот же набор Cloud-DMA. Сравните на Pricing перед оплатой.',
		},
		{
			question: 'Как доставляются лицензии?',
			answer:
				'После подтверждения оплаты данные лицензии доставляются цифровым способом. Срок зависит от метода оплаты. Сохраните подтверждение заказа для обращения в поддержку.',
		},
		{
			question: 'Работает ли The Isle Cheats после обновлений игры?',
			answer:
				'После патчей The Isle или Evrima проверяйте страницу Updates: там публикуются заметки о совместимости и новые сборки.',
		},
		{
			question: 'Входит ли Aimbot в базовый пакет?',
			answer:
				'Нет. Базовый пакет Cloud-DMA включает Visuals ESP, World ESP, боевые хаки и утилиты без Aimbot. Опции Aimbot описаны отдельно.',
		},
		{
			question: 'В чём разница между Visuals ESP и World ESP?',
			answer:
				'Visuals ESP отслеживает живые сущности: боксы, snaplines, здоровье, рост, выносливость и дистанцию. World ESP подсвечивает ресурсы карты: тела, мясо, фрукты, травы, грибы и воду.',
		},
		{
			question: 'Какие платформы поддерживаются?',
			answer:
				'The Isle Cheats создан для Windows PC (Windows 10 и 11) и продаётся как цифровая лицензия по всему миру. Консоли и другие платформы не поддерживаются.',
		},
	],
	faqMore:
		'Нужна помощь? Откройте FAQ hub, The Isle FAQ, Pricing, Features и Support. Также смотрите Updates после патчей, политику возврата и условия перед покупкой.',
	shareHeading: 'Поделиться The Isle Cheats',
	shareIntro: 'Отправьте эту страницу тому, кто сравнивает варианты ESP и читов для The Isle.',
	relatedSearchesLabel: 'Похожие запросы',
};

const byLocale: Record<LocaleCode, HomeContent> = { en, de, fr, es, tr, ar, ru };

export function getHomeContent(locale: LocaleCode): HomeContent {
	return byLocale[locale] ?? en;
}
