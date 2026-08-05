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

/** Paths that ship a full translation for every locale (not just meta tags). */
export const localizedBasePaths = ['/', '/pricing/'] as const;

export type LocalizedBasePath = (typeof localizedBasePaths)[number];

export function hasLocaleVariants(pathname: string): boolean {
	const base = stripLocalePrefix(pathname);
	return localizedBasePaths.includes(base as LocalizedBasePath);
}

export type HreflangLink = {
	hrefLang: string;
	href: string;
};

/** hreflang targets that actually exist — avoids linking to missing /de/pricing/-style URLs on English-only pages. */
export function getHreflangAlternates(pathname: string): HreflangLink[] {
	const base = stripLocalePrefix(pathname);

	if (hasLocaleVariants(pathname)) {
		return locales.map((entry) => ({
			hrefLang: entry.hrefLang,
			href: getLocalizedPath(base, entry.code),
		}));
	}

	const englishPath = getLocalizedPath(base, defaultLocale);
	return [{ hrefLang: 'en', href: englishPath }];
}

export function getXDefaultPath(pathname: string): string {
	const base = stripLocalePrefix(pathname);
	return getLocalizedPath(base, defaultLocale);
}

/** Language switcher: stay on localized page when a translation exists, otherwise open the locale homepage. */
export function getLanguageSwitchHref(currentPath: string, targetLocale: LocaleCode): string {
	const base = stripLocalePrefix(currentPath);

	if (localizedBasePaths.includes(base as LocalizedBasePath)) {
		return getLocalizedPath(base, targetLocale);
	}

	return getLocalizedPath('/', targetLocale);
}
