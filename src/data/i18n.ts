export const locales = [
	{ code: 'en', label: 'English', country: 'United States', flag: '🇺🇸', hrefLang: 'en' },
	{ code: 'ru', label: 'Русский', country: 'Russia', flag: '🇷🇺', hrefLang: 'ru' },
] as const;

export type LocaleCode = (typeof locales)[number]['code'];

export const defaultLocale: LocaleCode = 'en';

export function getLocaleFromPath(pathname: string): LocaleCode {
	const normalized = pathname.replace(/\/$/, '') || '/';
	if (normalized === '/ru' || normalized.startsWith('/ru/')) {
		return 'ru';
	}
	return 'en';
}

export function getLocalizedPath(pathname: string, locale: LocaleCode): string {
	const withoutLocale = pathname.replace(/^\/ru(?=\/|$)/, '') || '/';
	const normalized = withoutLocale.endsWith('/') ? withoutLocale : `${withoutLocale}/`;

	if (locale === defaultLocale) {
		return normalized === '//' ? '/' : normalized;
	}

	if (normalized === '/') {
		return '/ru/';
	}

	return `/ru${normalized}`;
}
