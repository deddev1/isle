import type { LocaleCode } from '../i18n';

export type PricingContent = {
	heading: string;
	intro: string;
	packagesHeading: string;
	includesHeading: string;
	includesBody: string;
	beforeBuyHeading: string;
	beforeBuyItems: { href: string; label: string }[];
	ctaPrimary: { href: string; label: string };
	ctaSecondary: { href: string; label: string };
	breadcrumbLabel: string;
};

const en: PricingContent = {
	heading: 'The Isle Cheats Pricing',
	intro: 'Packages are sold in USD and include Cloud-DMA, ESP, and Cheats.',
	packagesHeading: 'Current packages',
	includesHeading: 'What each package includes',
	includesBody:
		'Each package includes access to The Isle Cheats feature set described on Features (/features/), including Cloud-DMA, Visuals ESP, World ESP, and Cheats.',
	beforeBuyHeading: 'Before you buy',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'Read the refund policy' },
		{ href: '/terms/', label: 'Review the terms' },
		{ href: '/updates/', label: 'Check the latest updates' },
	],
	ctaPrimary: { href: '/#product', label: 'Open Product Card' },
	ctaSecondary: { href: '/features/', label: 'See Features' },
	breadcrumbLabel: 'Pricing',
};

const de: PricingContent = {
	heading: 'The Isle Cheats Preise',
	intro: 'Pakete werden in USD verkauft und umfassen Cloud-DMA, ESP und Cheats.',
	packagesHeading: 'Aktuelle Pakete',
	includesHeading: 'Was jedes Paket enthält',
	includesBody:
		'Jedes Paket beinhaltet Zugang zum The Isle Cheats Funktionsumfang auf der Features-Seite (/features/), einschließlich Cloud-DMA, Visuals ESP, World ESP und Cheats.',
	beforeBuyHeading: 'Bevor Sie kaufen',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'Rückerstattungsrichtlinie lesen' },
		{ href: '/terms/', label: 'Nutzungsbedingungen prüfen' },
		{ href: '/updates/', label: 'Aktuelle Updates ansehen' },
	],
	ctaPrimary: { href: '/#product', label: 'Produktkarte öffnen' },
	ctaSecondary: { href: '/features/', label: 'Funktionen ansehen' },
	breadcrumbLabel: 'Preise',
};

const fr: PricingContent = {
	heading: 'Tarifs The Isle Cheats',
	intro: 'Les forfaits sont vendus en USD et incluent Cloud-DMA, ESP et Cheats.',
	packagesHeading: 'Forfaits actuels',
	includesHeading: 'Ce que comprend chaque forfait',
	includesBody:
		'Chaque forfait donne accès à l\'ensemble des fonctionnalités The Isle Cheats décrites sur la page Fonctionnalités (/features/), y compris Cloud-DMA, Visuals ESP, World ESP et Cheats.',
	beforeBuyHeading: 'Avant d\'acheter',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'Lire la politique de remboursement' },
		{ href: '/terms/', label: 'Consulter les conditions' },
		{ href: '/updates/', label: 'Voir les dernières mises à jour' },
	],
	ctaPrimary: { href: '/#product', label: 'Ouvrir la fiche produit' },
	ctaSecondary: { href: '/features/', label: 'Voir les fonctionnalités' },
	breadcrumbLabel: 'Tarifs',
};

const es: PricingContent = {
	heading: 'Precios de The Isle Cheats',
	intro: 'Los paquetes se venden en USD e incluyen Cloud-DMA, ESP y Cheats.',
	packagesHeading: 'Paquetes actuales',
	includesHeading: 'Qué incluye cada paquete',
	includesBody:
		'Cada paquete incluye acceso al conjunto de funciones de The Isle Cheats descrito en la página de Funciones (/features/), incluyendo Cloud-DMA, Visuals ESP, World ESP y Cheats.',
	beforeBuyHeading: 'Antes de comprar',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'Leer la política de reembolso' },
		{ href: '/terms/', label: 'Revisar los términos' },
		{ href: '/updates/', label: 'Consultar las últimas actualizaciones' },
	],
	ctaPrimary: { href: '/#product', label: 'Abrir ficha de producto' },
	ctaSecondary: { href: '/features/', label: 'Ver funciones' },
	breadcrumbLabel: 'Precios',
};

const tr: PricingContent = {
	heading: 'The Isle Cheats Fiyatlandırma',
	intro: 'Paketler USD olarak satılır ve Cloud-DMA, ESP ve Hileler içerir.',
	packagesHeading: 'Güncel paketler',
	includesHeading: 'Her pakette neler var',
	includesBody:
		'Her paket, Özellikler sayfasında (/features/) açıklanan The Isle Cheats özellik setine erişim sağlar; Cloud-DMA, Visuals ESP, World ESP ve Hileler dahildir.',
	beforeBuyHeading: 'Satın almadan önce',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'İade politikasını okuyun' },
		{ href: '/terms/', label: 'Şartları inceleyin' },
		{ href: '/updates/', label: 'Son güncellemeleri kontrol edin' },
	],
	ctaPrimary: { href: '/#product', label: 'Ürün kartını aç' },
	ctaSecondary: { href: '/features/', label: 'Özellikleri gör' },
	breadcrumbLabel: 'Fiyatlandırma',
};

const ar: PricingContent = {
	heading: 'أسعار The Isle Cheats',
	intro: 'تُباع الباقات بالدولار الأمريكي وتشمل Cloud-DMA وESP والهاكات.',
	packagesHeading: 'الباقات الحالية',
	includesHeading: 'ما تتضمنه كل باقة',
	includesBody:
		'تتضمن كل باقة الوصول إلى مجموعة ميزات The Isle Cheats الموضحة في صفحة الميزات (/features/)، بما في ذلك Cloud-DMA وVisuals ESP وWorld ESP والهاكات.',
	beforeBuyHeading: 'قبل الشراء',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'اقرأ سياسة الاسترداد' },
		{ href: '/terms/', label: 'راجع الشروط' },
		{ href: '/updates/', label: 'اطلع على آخر التحديثات' },
	],
	ctaPrimary: { href: '/#product', label: 'افتح بطاقة المنتج' },
	ctaSecondary: { href: '/features/', label: 'عرض الميزات' },
	breadcrumbLabel: 'الأسعار',
};

const ru: PricingContent = {
	heading: 'Цены The Isle Cheats',
	intro: 'Пакеты продаются в USD и включают Cloud-DMA, ESP и читы.',
	packagesHeading: 'Текущие пакеты',
	includesHeading: 'Что входит в каждый пакет',
	includesBody:
		'Каждый пакет включает доступ к набору функций The Isle Cheats, описанному на странице Функции (/features/), включая Cloud-DMA, Visuals ESP, World ESP и читы.',
	beforeBuyHeading: 'Перед покупкой',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'Прочитать политику возврата' },
		{ href: '/terms/', label: 'Ознакомиться с условиями' },
		{ href: '/updates/', label: 'Проверить последние обновления' },
	],
	ctaPrimary: { href: '/#product', label: 'Открыть карточку продукта' },
	ctaSecondary: { href: '/features/', label: 'Смотреть функции' },
	breadcrumbLabel: 'Цены',
};

const byLocale: Record<LocaleCode, PricingContent> = { en, de, fr, es, tr, ar, ru };

export function getPricingContent(locale: LocaleCode): PricingContent {
	return byLocale[locale] ?? en;
}
