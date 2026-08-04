export const locales = [
	{ code: 'en', label: 'English', country: 'United States', flag: '🇺🇸', hrefLang: 'en', ogLocale: 'en_US', dir: 'ltr' as const },
	{ code: 'de', label: 'Deutsch', country: 'Germany', flag: '🇩🇪', hrefLang: 'de', ogLocale: 'de_DE', dir: 'ltr' as const },
	{ code: 'fr', label: 'Français', country: 'France', flag: '🇫🇷', hrefLang: 'fr', ogLocale: 'fr_FR', dir: 'ltr' as const },
	{ code: 'es', label: 'Español', country: 'Spain', flag: '🇪🇸', hrefLang: 'es', ogLocale: 'es_ES', dir: 'ltr' as const },
	{ code: 'tr', label: 'Türkçe', country: 'Turkey', flag: '🇹🇷', hrefLang: 'tr', ogLocale: 'tr_TR', dir: 'ltr' as const },
	{ code: 'ar', label: 'العربية', country: 'Saudi Arabia', flag: '🇸🇦', hrefLang: 'ar', ogLocale: 'ar_SA', dir: 'rtl' as const },
	{ code: 'ru', label: 'Русский', country: 'Russia', flag: '🇷🇺', hrefLang: 'ru', ogLocale: 'ru_RU', dir: 'ltr' as const },
] as const;

export type LocaleCode = (typeof locales)[number]['code'];

export const defaultLocale: LocaleCode = 'en';

/** Locale codes that use a URL prefix (all except English). */
export const prefixedLocales = locales.filter((l) => l.code !== defaultLocale).map((l) => l.code);

const localePrefixPattern = new RegExp(`^/(${prefixedLocales.join('|')})(?=/|$)`);

export function getLocaleFromPath(pathname: string): LocaleCode {
	const normalized = pathname.replace(/\/$/, '') || '/';
	const match = normalized.match(localePrefixPattern);
	if (match) {
		return match[1] as LocaleCode;
	}
	return defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
	const withoutLocale = pathname.replace(localePrefixPattern, '') || '/';
	return withoutLocale.endsWith('/') ? withoutLocale : `${withoutLocale}/`;
}

export function getLocalizedPath(pathname: string, locale: LocaleCode): string {
	const basePath = stripLocalePrefix(pathname);

	if (locale === defaultLocale) {
		return basePath === '//' ? '/' : basePath;
	}

	if (basePath === '/') {
		return `/${locale}/`;
	}

	return `/${locale}${basePath}`;
}

export function getOgLocale(locale: LocaleCode): string {
	return locales.find((l) => l.code === locale)?.ogLocale ?? 'en_US';
}

export function getLocaleDir(locale: LocaleCode): 'ltr' | 'rtl' {
	return locales.find((l) => l.code === locale)?.dir ?? 'ltr';
}
