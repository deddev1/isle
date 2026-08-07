import { productInfo, siteConfig } from '../site';

export type SupportSection = {
	id: string;
	heading: string;
	paragraphs: string[];
	bullets?: string[];
};

export const supportSections: SupportSection[] = [
	{
		id: 'overview',
		heading: 'How The Isle Cheats support works',
		paragraphs: [
			'The Isle Cheats support page is the on-site hub for delivery, setup, billing, and license questions related to ESP, Cloud-DMA, and combat hack packages sold through islecheats.net. If you already purchased a monthly or lifetime license and need help locating credentials, confirming compatibility, or understanding a charge, start here before opening a ticket.',
			'Support is handled through the official portal linked below. This page explains what information to include, typical response expectations, and which policy pages answer common pre-purchase questions. Keeping support instructions on islecheats.net helps buyers find help without searching external domains.',
			'For product research — features, pricing, survival guides, and patch notes — use the internal site navigation. Support is for order-specific issues that need a human review of your purchase details.',
		],
	},
	{
		id: 'contact',
		heading: 'Contact the support team',
		paragraphs: [
			`Open the customer support portal when you are ready to submit a ticket. You can also email ${siteConfig.supportEmail} if that is more convenient. ${productInfo.supportHours}.`,
			'Include your order ID or payment reference in the first message. Without it, support may need extra time to locate your purchase across payment processors. A clear subject line such as "License delivery — Order #12345" speeds up routing.',
			'If your issue is about refund eligibility, delivery timing, or terms of use, read the Refund Policy, Terms, and Privacy Policy pages first. Support can clarify order status, but policy answers are published on those dedicated pages.',
		],
	},
	{
		id: 'before-you-write',
		heading: 'Information to include in your ticket',
		paragraphs: [
			'Complete tickets get faster replies. Copy the details below into your first message so the team does not need to ask follow-up questions for basic verification.',
		],
		bullets: [
			'Order ID or payment reference from your confirmation email',
			'Package duration purchased (monthly or lifetime)',
			'Windows version (Windows 10 or Windows 11)',
			'Clear description of the issue — delivery, login, setup, or billing',
			'Screenshots or error text when they help explain the problem',
			'Whether the issue started after a recent The Isle game patch',
		],
	},
	{
		id: 'delivery-setup',
		heading: 'License delivery and setup help',
		paragraphs: [
			`After checkout, license details are delivered digitally. ${productInfo.delivery}. If you do not see delivery within the expected window, check spam folders and payment confirmation status before opening a ticket.`,
			'Setup questions often involve menu key binding, ESP range configuration, config profile save/load, or confirming that Cloud-DMA features appear in the client. Describe which step failed — for example, "license received but menu key does not open" — rather than only writing "it does not work."',
			'Compatibility questions after The Isle patches should mention the patch date and your Windows version. Check the Updates page and blog for maintenance notices; if none are posted yet, support can confirm whether a review is in progress.',
		],
	},
	{
		id: 'billing',
		heading: 'Billing and renewal questions',
		paragraphs: [
			'Monthly licenses renew at the published rate unless cancelled according to store rules. Lifetime licenses should not generate recurring renewal charges. If you see an unexpected charge, open support with the transaction date and last four digits of the payment method so the team can match it to an order.',
			'Disputing a charge with your bank before contacting support can delay license recovery. Send a ticket first if you believe a charge is incorrect — many cases are resolved by confirming whether a monthly renewal processed on schedule.',
			'For pricing comparisons before a new purchase, visit the Pricing page rather than support. Support focuses on existing orders, not pre-sales feature comparisons.',
		],
	},
	{
		id: 'self-service',
		heading: 'Self-service resources',
		paragraphs: [
			'Many questions are answered without a ticket. Use these pages first to save time:',
		],
		bullets: [
			'Pricing — monthly vs lifetime plan comparison',
			'FAQ hub — delivery, compatibility, and Cloud-DMA overview',
			'Features — full package and Aimbot context',
			'Updates — maintenance releases after game patches',
			'Refund Policy — eligibility before requesting a refund',
			'Blog — guides on ESP, survival, pricing, and support workflows',
		],
	},
];

export const supportFaqs = [
	{
		question: 'How do I contact The Isle Cheats support?',
		answer: `Open the customer support portal or email ${siteConfig.supportEmail}. Include your order ID and a clear description of the issue.`,
	},
	{
		question: 'How long does support take to respond?',
		answer: `${productInfo.supportHours}. Complex delivery or billing cases may need additional verification time.`,
	},
	{
		question: 'What should I send when license delivery is missing?',
		answer:
			'Send your order ID, payment confirmation, package type (monthly or lifetime), and the email address used at checkout. Note whether spam folders were checked.',
	},
	{
		question: 'Can support help with ESP or cheat configuration?',
		answer:
			'Yes. Describe which feature you are configuring (Visuals ESP, World ESP, menu key, configs) and what behavior you expected versus what happened. Screenshots help.',
	},
	{
		question: 'Who do I contact about refunds?',
		answer:
			'Read the Refund Policy page first, then open support with your order ID if you believe you qualify. Policy rules are published on the refund page.',
	},
	{
		question: 'Does support help with The Isle gameplay?',
		answer:
			'Gameplay guides live on the Blog, Survival Guide, Growth Guide, and Dinosaur Guide pages. Support focuses on orders, delivery, billing, and product setup.',
	},
	{
		question: 'What if my issue started after a game update?',
		answer:
			'Check the Updates page and blog for compatibility notices, then contact support with your Windows version and the patch date. Maintenance releases are announced when available.',
	},
	{
		question: 'Where is pricing listed?',
		answer:
			'Current monthly and lifetime prices are on the Pricing page. Support does not quote prices by ticket — use that page for plan comparison before buying.',
	},
] as const;
