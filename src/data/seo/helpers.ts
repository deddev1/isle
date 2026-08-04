/** SEO copy helpers — title 50–60 chars, description 145–160 chars. */
export const BRAND = 'islecheats';

export function withBrand(title: string, maxLen = 60): string {
	const suffix = ` | ${BRAND}`;
	const maxTitle = maxLen - suffix.length;
	const trimmed = title.length > maxTitle ? title.slice(0, maxTitle).replace(/\s+\S*$/, '') : title;
	return `${trimmed}${suffix}`;
}

export function clampDescription(text: string, min = 145, max = 160): string {
	if (text.length <= max && text.length >= min) return text;
	if (text.length > max) {
		const cut = text.slice(0, max - 1).replace(/\s+\S*$/, '');
		return cut.endsWith('.') ? cut : `${cut}.`;
	}
	return text;
}

export function estimateReadingTime(wordCount: number): number {
	return Math.max(1, Math.ceil(wordCount / 200));
}

export function formatDate(iso: string): string {
	return new Date(iso).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}
