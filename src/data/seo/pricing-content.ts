import { cloudDmaOption, productInfo } from '../site';

export type PricingSection = {
	id: string;
	heading: string;
	paragraphs: string[];
	bullets?: string[];
};

export const pricingSections: PricingSection[] = [
	{
		id: 'overview',
		heading: 'How The Isle Cheats pricing works',
		paragraphs: [
			'The Isle Cheats is sold as a digital license for Windows PC players who want ESP overlays, combat hacks, and utility tools in one Cloud-DMA package. Pricing is published in USD so you can compare plan length against how often you play The Isle before checkout.',
			'Every package includes the same core feature set described on the Features page: Visuals ESP, World ESP, combat cheats such as Instant Rotation and Omnimovement, and utility hacks like Radar and FOV Changer. The Cloud-DMA option covers ESP, World ESP, Cheats, and Other features without Aimbot. Buyers who need Aimbot controls can review the full feature breakdown before purchasing.',
			'This pricing page exists so Google and new visitors can evaluate cost, inclusions, and license duration in one place rather than guessing from a product card alone. Use it alongside the FAQ hub, refund policy, and support page when you are ready to buy.',
		],
	},
	{
		id: 'monthly-vs-lifetime',
		heading: 'Monthly vs lifetime licenses',
		paragraphs: [
			'The monthly plan suits players who want flexibility. You pay $35 USD for a 30-day license, review the product during active play sessions, and renew only when you still need access. This is the lowest upfront cost and works well if you play The Isle in seasonal bursts or want to test compatibility after a major Evrima patch.',
			'The lifetime plan costs $150 USD and is designed for long-term players who expect to keep using ESP, World ESP, and combat hacks across many months of gameplay. Lifetime does not mean the software never receives maintenance updates — it means you are not billed again for license renewal. Product updates and compatibility notices are still published on the Updates page when The Isle patches require attention.',
			'Neither plan changes the feature list inside Cloud-DMA. The difference is duration and total cost over time. If you play more than four or five months per year, lifetime often becomes the better value. If you only need short-term access, monthly keeps the entry price lower.',
		],
		bullets: [
			'Monthly: $35 USD · 30-day license · lowest upfront cost',
			'Lifetime: $150 USD · no renewal billing · best for year-round players',
			'Both plans include Cloud-DMA, Visuals ESP, World ESP, Cheats, and utility hacks',
			'Aimbot is not included in the Cloud-DMA option — see Features for the full list',
		],
	},
	{
		id: 'what-is-included',
		heading: 'What each package includes',
		paragraphs: [
			'Cloud-DMA packages bundle survival awareness and combat tools for dinosaur gameplay on Windows PC. Visuals ESP displays entities with boxes, health, growth, stamina, classname, and distance readouts up to 2000 meters. World ESP highlights environmental resources such as bodies, meat, fruits, medicinal herbs, mushrooms, and water sources so herbivore and carnivore routes are easier to plan.',
			'Combat and movement cheats include Instant Rotation, Auto-Attack, Omnimovement, No Cooldown Attack, Unlock Zoom, and No Cost Ability. Utility hacks cover Radar, FOV Changer, crosshair customization, fog removal, shadow toggles, config save/load profiles, and menu key binding. Delivery is digital after payment confirmation, and support is available if license details or setup steps need clarification.',
			'Before you buy, compare this page with the Cheats page for movement options, the ESP guide for overlay categories, and the Survival Guide if you are new to The Isle growth and resource mechanics. Pricing should be the last step after you confirm the feature set matches your goals.',
		],
	},
	{
		id: 'payment-delivery',
		heading: 'Payment, delivery, and renewal',
		paragraphs: [
			'Checkout completes on the official store linked from the product card and homepage. After payment is confirmed, license details are delivered digitally. Delivery timing can vary by payment method, fraud review, or order verification. Keep your order confirmation email and payment reference available — support uses those details to locate purchases quickly.',
			'Monthly licenses expire after 30 days unless renewed. Lifetime licenses do not require recurring renewal charges. If a charge looks unfamiliar, open the Support page with your order ID before disputing payment so the team can confirm whether it matches a legitimate renewal or first-time purchase.',
			'Refund eligibility is governed by the Refund Policy page. Read it before buying if you are unsure about digital delivery rules or compatibility with your Windows PC setup.',
		],
	},
	{
		id: 'compare-before-buy',
		heading: 'Compare plans before checkout',
		paragraphs: [
			'Use the homepage product card for a quick side-by-side view, then return here for written context on plan length and USD pricing. The blog also publishes pricing-focused articles such as the monthly vs lifetime guide and cheat price breakdown for players who want a narrative comparison.',
			'If you still have questions about compatibility, delivery, or what happens after a game patch, read the FAQ hub first. For order-specific help, email support with your order ID, package duration, and a short description of the issue.',
		],
		bullets: [
			'Review Features for the complete Cloud-DMA checklist',
			'Check Updates after The Isle patches for maintenance notices',
			'Read the Refund Policy before disputing a charge',
		],
	},
];

export const pricingFaqs = [
	{
		question: 'How much does The Isle Cheats cost?',
		answer: `Monthly packages are $${productInfo.plans[0].price} USD and lifetime packages are $${productInfo.plans[1].price} USD. Both include Cloud-DMA with Visuals ESP, World ESP, Cheats, and utility hacks.`,
	},
	{
		question: 'What is the difference between monthly and lifetime?',
		answer:
			'Monthly renews every 30 days at the published rate. Lifetime is a one-time license fee with no renewal billing. Feature inclusions are the same; only duration and total cost differ.',
	},
	{
		question: 'Does Cloud-DMA include Aimbot?',
		answer: `${cloudDmaOption.label} includes ESP, World ESP, Cheats, and Other utility hacks. Aimbot is not included in the Cloud-DMA option. See the Features page for optional Aimbot details.`,
	},
	{
		question: 'What currency is pricing listed in?',
		answer: `All published prices are in ${productInfo.currency}. Your payment provider may show a converted amount depending on your country.`,
	},
	{
		question: 'How are licenses delivered after purchase?',
		answer: `License details are delivered digitally after payment confirmation. ${productInfo.delivery}. Delivery timing can vary by payment method.`,
	},
	{
		question: 'Can I get a refund?',
		answer:
			'Refund eligibility depends on the conditions on the Refund Policy page. Review that policy before purchasing if refund timing or digital delivery rules are important to your decision.',
	},
	{
		question: 'Do prices change after game updates?',
		answer:
			'Listed prices reflect current packages on islecheats.net. Maintenance updates after The Isle patches are announced on the Updates page. Price changes, if any, are published here rather than only inside checkout.',
	},
	{
		question: 'Where can I compare features before paying?',
		answer:
			'Start with the Features page and ESP guide, then use this pricing page for plan length. The FAQ hub answers delivery and compatibility questions.',
	},
] as const;
