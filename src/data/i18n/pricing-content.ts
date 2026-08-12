import type { LocaleCode } from '../i18n';

export type PricingContent = {
	heading: string;
	intro: string;
	packagesHeading: string;
	packagesLead: string;
	faqHeading: string;
	faqLead: string;
	beforeBuyHeading: string;
	beforeBuyLead: string;
	beforeBuyItems: { href: string; label: string }[];
	ctaPrimary: { href: string; label: string };
	ctaSecondary: { href: string; label: string };
	breadcrumbLabel: string;
};

const en: PricingContent = {
	heading: 'The Isle Cheats Pricing',
	intro:
		'Simple USD pricing for Cloud-DMA on Windows PC. Compare monthly and lifetime plans, then see what is included before you buy.',
	packagesHeading: 'Current packages',
	packagesLead:
		'Both plans include the same Cloud-DMA tools. Choose the license length that matches how often you play.',
	faqHeading: 'Pricing FAQ',
	faqLead: 'Short answers to the questions buyers ask most before checkout.',
	beforeBuyHeading: 'Before you buy',
	beforeBuyLead: 'Read these pages if you want more detail on policies, updates, or plan choice.',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'Read the refund policy' },
		{ href: '/terms/', label: 'Review the terms' },
		{ href: '/updates/', label: 'Check the latest updates' },
		{ href: '/blog/the-isle-cheat-price-guide/', label: 'Read the cheat price guide' },
		{ href: '/blog/the-isle-monthly-vs-lifetime/', label: 'Compare monthly vs lifetime' },
	],
	ctaPrimary: { href: '/#features', label: 'Open Product Card' },
	ctaSecondary: { href: '/features/', label: 'See Features' },
	breadcrumbLabel: 'Pricing',
};

const de: PricingContent = {
	heading: 'The Isle Cheats Preise',
	intro:
		'Einfache USD-Preise für Cloud-DMA unter Windows PC. Vergleiche Monats- und Lifetime-Pläne und sieh, was vor dem Kauf enthalten ist.',
	packagesHeading: 'Aktuelle Pakete',
	packagesLead:
		'Beide Pläne enthalten dieselben Cloud-DMA-Tools. Wähle die Lizenzdauer passend zu deiner Spielzeit.',
	faqHeading: 'Preis-FAQ',
	faqLead: 'Kurze Antworten auf die häufigsten Fragen vor dem Checkout.',
	beforeBuyHeading: 'Bevor Sie kaufen',
	beforeBuyLead: 'Lies diese Seiten für mehr Details zu Richtlinien, Updates oder Planwahl.',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'Rückerstattungsrichtlinie lesen' },
		{ href: '/terms/', label: 'Nutzungsbedingungen prüfen' },
		{ href: '/updates/', label: 'Aktuelle Updates ansehen' },
		{ href: '/blog/the-isle-cheat-price-guide/', label: 'Preisleitfaden lesen' },
		{ href: '/blog/the-isle-monthly-vs-lifetime/', label: 'Monatlich vs Lifetime vergleichen' },
	],
	ctaPrimary: { href: '/#features', label: 'Produktkarte öffnen' },
	ctaSecondary: { href: '/features/', label: 'Funktionen ansehen' },
	breadcrumbLabel: 'Preise',
};

const fr: PricingContent = {
	heading: 'Tarifs The Isle Cheats',
	intro:
		'Tarifs simples en USD pour Cloud-DMA sur PC Windows. Comparez les forfaits mensuel et à vie, puis voyez ce qui est inclus avant d’acheter.',
	packagesHeading: 'Forfaits actuels',
	packagesLead:
		'Les deux forfaits incluent les mêmes outils Cloud-DMA. Choisissez la durée de licence selon votre rythme de jeu.',
	faqHeading: 'FAQ tarifs',
	faqLead: 'Réponses courtes aux questions les plus fréquentes avant le paiement.',
	beforeBuyHeading: "Avant d'acheter",
	beforeBuyLead: 'Lisez ces pages pour plus de détails sur les politiques, les mises à jour ou le choix du forfait.',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'Lire la politique de remboursement' },
		{ href: '/terms/', label: 'Consulter les conditions' },
		{ href: '/updates/', label: 'Voir les dernières mises à jour' },
		{ href: '/blog/the-isle-cheat-price-guide/', label: 'Lire le guide des prix' },
		{ href: '/blog/the-isle-monthly-vs-lifetime/', label: 'Comparer mensuel vs à vie' },
	],
	ctaPrimary: { href: '/#features', label: 'Ouvrir la fiche produit' },
	ctaSecondary: { href: '/features/', label: 'Voir les fonctionnalités' },
	breadcrumbLabel: 'Tarifs',
};

const es: PricingContent = {
	heading: 'Precios de The Isle Cheats',
	intro:
		'Precios simples en USD para Cloud-DMA en PC Windows. Compara planes mensuales y de por vida, y revisa qué incluye cada uno antes de comprar.',
	packagesHeading: 'Paquetes actuales',
	packagesLead:
		'Ambos planes incluyen las mismas herramientas Cloud-DMA. Elige la duración de licencia según cuánto juegas.',
	faqHeading: 'FAQ de precios',
	faqLead: 'Respuestas cortas a las preguntas más comunes antes del checkout.',
	beforeBuyHeading: 'Antes de comprar',
	beforeBuyLead: 'Lee estas páginas si quieres más detalle sobre políticas, actualizaciones o elección de plan.',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'Leer la política de reembolso' },
		{ href: '/terms/', label: 'Revisar los términos' },
		{ href: '/updates/', label: 'Consultar las últimas actualizaciones' },
		{ href: '/blog/the-isle-cheat-price-guide/', label: 'Leer la guía de precios' },
		{ href: '/blog/the-isle-monthly-vs-lifetime/', label: 'Comparar mensual vs lifetime' },
	],
	ctaPrimary: { href: '/#features', label: 'Abrir ficha de producto' },
	ctaSecondary: { href: '/features/', label: 'Ver funciones' },
	breadcrumbLabel: 'Precios',
};

const tr: PricingContent = {
	heading: 'The Isle Cheats Fiyatlandırma',
	intro:
		'Windows PC için Cloud-DMA’da sade USD fiyatlar. Aylık ve lifetime planları karşılaştırın, satın almadan önce nelerin dahil olduğunu görün.',
	packagesHeading: 'Güncel paketler',
	packagesLead:
		'Her iki plan da aynı Cloud-DMA araçlarını içerir. Ne kadar oynadığınıza göre lisans süresini seçin.',
	faqHeading: 'Fiyat SSS',
	faqLead: 'Ödeme öncesi en sık sorulan sorulara kısa yanıtlar.',
	beforeBuyHeading: 'Satın almadan önce',
	beforeBuyLead: 'Politikalar, güncellemeler veya plan seçimi için bu sayfaları okuyun.',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'İade politikasını okuyun' },
		{ href: '/terms/', label: 'Şartları inceleyin' },
		{ href: '/updates/', label: 'Son güncellemeleri kontrol edin' },
		{ href: '/blog/the-isle-cheat-price-guide/', label: 'Fiyat rehberini okuyun' },
		{ href: '/blog/the-isle-monthly-vs-lifetime/', label: 'Aylık vs lifetime karşılaştırın' },
	],
	ctaPrimary: { href: '/#features', label: 'Ürün kartını aç' },
	ctaSecondary: { href: '/features/', label: 'Özellikleri gör' },
	breadcrumbLabel: 'Fiyatlandırma',
};

const ar: PricingContent = {
	heading: 'أسعار The Isle Cheats',
	intro:
		'أسعار بسيطة بالدولار لـ Cloud-DMA على Windows PC. قارن الخطط الشهرية والمدى العمر، ثم راجع ما يشمله كل باقة قبل الشراء.',
	packagesHeading: 'الباقات الحالية',
	packagesLead: 'كلا الخطتين تتضمنان نفس أدوات Cloud-DMA. اختر مدة الترخيص حسب عدد مرات لعبك.',
	faqHeading: 'أسئلة الأسعار',
	faqLead: 'إجابات قصيرة لأكثر الأسئلة شيوعًا قبل الدفع.',
	beforeBuyHeading: 'قبل الشراء',
	beforeBuyLead: 'اقرأ هذه الصفحات لمزيد من التفاصيل عن السياسات أو التحديثات أو اختيار الخطة.',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'اقرأ سياسة الاسترداد' },
		{ href: '/terms/', label: 'راجع الشروط' },
		{ href: '/updates/', label: 'اطلع على آخر التحديثات' },
		{ href: '/blog/the-isle-cheat-price-guide/', label: 'اقرأ دليل الأسعار' },
		{ href: '/blog/the-isle-monthly-vs-lifetime/', label: 'قارن الشهري والمدى العمر' },
	],
	ctaPrimary: { href: '/#features', label: 'افتح بطاقة المنتج' },
	ctaSecondary: { href: '/features/', label: 'عرض الميزات' },
	breadcrumbLabel: 'الأسعار',
};

const ru: PricingContent = {
	heading: 'Цены The Isle Cheats',
	intro:
		'Простые цены в USD на Cloud-DMA для Windows PC. Сравните месячный и lifetime планы и посмотрите, что входит, до покупки.',
	packagesHeading: 'Текущие пакеты',
	packagesLead:
		'Оба плана включают одинаковые инструменты Cloud-DMA. Выберите срок лицензии под то, как часто вы играете.',
	faqHeading: 'FAQ по ценам',
	faqLead: 'Короткие ответы на самые частые вопросы перед оплатой.',
	beforeBuyHeading: 'Перед покупкой',
	beforeBuyLead: 'Прочитайте эти страницы, если нужны детали по политикам, обновлениям или выбору плана.',
	beforeBuyItems: [
		{ href: '/refund-policy/', label: 'Прочитать политику возврата' },
		{ href: '/terms/', label: 'Ознакомиться с условиями' },
		{ href: '/updates/', label: 'Проверить последние обновления' },
		{ href: '/blog/the-isle-cheat-price-guide/', label: 'Читать гид по ценам' },
		{ href: '/blog/the-isle-monthly-vs-lifetime/', label: 'Сравнить месяц и lifetime' },
	],
	ctaPrimary: { href: '/#features', label: 'Открыть карточку продукта' },
	ctaSecondary: { href: '/features/', label: 'Смотреть функции' },
	breadcrumbLabel: 'Цены',
};

const byLocale: Record<LocaleCode, PricingContent> = { en, de, fr, es, tr, ar, ru };

export function getPricingContent(locale: LocaleCode): PricingContent {
	return byLocale[locale] ?? en;
}
