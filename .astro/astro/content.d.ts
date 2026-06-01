declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"001-alabama-state-income-tax-guide.md": {
	id: "001-alabama-state-income-tax-guide.md";
  slug: "001-alabama-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"002-alaska-state-income-tax-guide.md": {
	id: "002-alaska-state-income-tax-guide.md";
  slug: "002-alaska-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"003-arizona-state-income-tax-guide.md": {
	id: "003-arizona-state-income-tax-guide.md";
  slug: "003-arizona-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"004-arkansas-state-income-tax-guide.md": {
	id: "004-arkansas-state-income-tax-guide.md";
  slug: "004-arkansas-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"005-california-state-income-tax-guide.md": {
	id: "005-california-state-income-tax-guide.md";
  slug: "005-california-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"006-colorado-state-income-tax-guide.md": {
	id: "006-colorado-state-income-tax-guide.md";
  slug: "006-colorado-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"007-connecticut-state-income-tax-guide.md": {
	id: "007-connecticut-state-income-tax-guide.md";
  slug: "007-connecticut-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"008-delaware-state-income-tax-guide.md": {
	id: "008-delaware-state-income-tax-guide.md";
  slug: "008-delaware-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"009-florida-state-income-tax-guide.md": {
	id: "009-florida-state-income-tax-guide.md";
  slug: "009-florida-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"010-georgia-state-income-tax-guide.md": {
	id: "010-georgia-state-income-tax-guide.md";
  slug: "010-georgia-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"011-hawaii-state-income-tax-guide.md": {
	id: "011-hawaii-state-income-tax-guide.md";
  slug: "011-hawaii-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"012-idaho-state-income-tax-guide.md": {
	id: "012-idaho-state-income-tax-guide.md";
  slug: "012-idaho-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"013-illinois-state-income-tax-guide.md": {
	id: "013-illinois-state-income-tax-guide.md";
  slug: "013-illinois-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"014-indiana-state-income-tax-guide.md": {
	id: "014-indiana-state-income-tax-guide.md";
  slug: "014-indiana-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"015-iowa-state-income-tax-guide.md": {
	id: "015-iowa-state-income-tax-guide.md";
  slug: "015-iowa-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"016-kansas-state-income-tax-guide.md": {
	id: "016-kansas-state-income-tax-guide.md";
  slug: "016-kansas-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"017-kentucky-state-income-tax-guide.md": {
	id: "017-kentucky-state-income-tax-guide.md";
  slug: "017-kentucky-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"018-louisiana-state-income-tax-guide.md": {
	id: "018-louisiana-state-income-tax-guide.md";
  slug: "018-louisiana-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"019-maine-state-income-tax-guide.md": {
	id: "019-maine-state-income-tax-guide.md";
  slug: "019-maine-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"020-maryland-state-income-tax-guide.md": {
	id: "020-maryland-state-income-tax-guide.md";
  slug: "020-maryland-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"021-massachusetts-state-income-tax-guide.md": {
	id: "021-massachusetts-state-income-tax-guide.md";
  slug: "021-massachusetts-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"022-michigan-state-income-tax-guide.md": {
	id: "022-michigan-state-income-tax-guide.md";
  slug: "022-michigan-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"023-minnesota-state-income-tax-guide.md": {
	id: "023-minnesota-state-income-tax-guide.md";
  slug: "023-minnesota-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"024-mississippi-state-income-tax-guide.md": {
	id: "024-mississippi-state-income-tax-guide.md";
  slug: "024-mississippi-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"025-missouri-state-income-tax-guide.md": {
	id: "025-missouri-state-income-tax-guide.md";
  slug: "025-missouri-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"026-montana-state-income-tax-guide.md": {
	id: "026-montana-state-income-tax-guide.md";
  slug: "026-montana-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"027-nebraska-state-income-tax-guide.md": {
	id: "027-nebraska-state-income-tax-guide.md";
  slug: "027-nebraska-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"028-nevada-state-income-tax-guide.md": {
	id: "028-nevada-state-income-tax-guide.md";
  slug: "028-nevada-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"029-new-hampshire-state-income-tax-guide.md": {
	id: "029-new-hampshire-state-income-tax-guide.md";
  slug: "029-new-hampshire-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"030-new-jersey-state-income-tax-guide.md": {
	id: "030-new-jersey-state-income-tax-guide.md";
  slug: "030-new-jersey-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"031-new-mexico-state-income-tax-guide.md": {
	id: "031-new-mexico-state-income-tax-guide.md";
  slug: "031-new-mexico-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"032-new-york-state-income-tax-guide.md": {
	id: "032-new-york-state-income-tax-guide.md";
  slug: "032-new-york-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"033-north-carolina-state-income-tax-guide.md": {
	id: "033-north-carolina-state-income-tax-guide.md";
  slug: "033-north-carolina-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"034-north-dakota-state-income-tax-guide.md": {
	id: "034-north-dakota-state-income-tax-guide.md";
  slug: "034-north-dakota-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"035-ohio-state-income-tax-guide.md": {
	id: "035-ohio-state-income-tax-guide.md";
  slug: "035-ohio-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"036-oklahoma-state-income-tax-guide.md": {
	id: "036-oklahoma-state-income-tax-guide.md";
  slug: "036-oklahoma-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"037-oregon-state-income-tax-guide.md": {
	id: "037-oregon-state-income-tax-guide.md";
  slug: "037-oregon-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"038-pennsylvania-state-income-tax-guide.md": {
	id: "038-pennsylvania-state-income-tax-guide.md";
  slug: "038-pennsylvania-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"039-rhode-island-state-income-tax-guide.md": {
	id: "039-rhode-island-state-income-tax-guide.md";
  slug: "039-rhode-island-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"040-south-carolina-state-income-tax-guide.md": {
	id: "040-south-carolina-state-income-tax-guide.md";
  slug: "040-south-carolina-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"041-south-dakota-state-income-tax-guide.md": {
	id: "041-south-dakota-state-income-tax-guide.md";
  slug: "041-south-dakota-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"042-tennessee-state-income-tax-guide.md": {
	id: "042-tennessee-state-income-tax-guide.md";
  slug: "042-tennessee-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"043-texas-state-income-tax-guide.md": {
	id: "043-texas-state-income-tax-guide.md";
  slug: "043-texas-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"044-utah-state-income-tax-guide.md": {
	id: "044-utah-state-income-tax-guide.md";
  slug: "044-utah-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"045-vermont-state-income-tax-guide.md": {
	id: "045-vermont-state-income-tax-guide.md";
  slug: "045-vermont-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"046-virginia-state-income-tax-guide.md": {
	id: "046-virginia-state-income-tax-guide.md";
  slug: "046-virginia-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"047-washington-state-income-tax-guide.md": {
	id: "047-washington-state-income-tax-guide.md";
  slug: "047-washington-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"048-west-virginia-state-income-tax-guide.md": {
	id: "048-west-virginia-state-income-tax-guide.md";
  slug: "048-west-virginia-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"049-wisconsin-state-income-tax-guide.md": {
	id: "049-wisconsin-state-income-tax-guide.md";
  slug: "049-wisconsin-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"050-wyoming-state-income-tax-guide.md": {
	id: "050-wyoming-state-income-tax-guide.md";
  slug: "050-wyoming-state-income-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"051-federal-income-tax-brackets-2025.md": {
	id: "051-federal-income-tax-brackets-2025.md";
  slug: "051-federal-income-tax-brackets-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"052-how-to-fill-out-w4-form.md": {
	id: "052-how-to-fill-out-w4-form.md";
  slug: "052-how-to-fill-out-w4-form";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"053-standard-deduction-guide-2025.md": {
	id: "053-standard-deduction-guide-2025.md";
  slug: "053-standard-deduction-guide-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"054-tax-credits-vs-deductions-explained.md": {
	id: "054-tax-credits-vs-deductions-explained.md";
  slug: "054-tax-credits-vs-deductions-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"055-how-federal-tax-withholding-works.md": {
	id: "055-how-federal-tax-withholding-works.md";
  slug: "055-how-federal-tax-withholding-works";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"056-what-is-adjusted-gross-income-agi.md": {
	id: "056-what-is-adjusted-gross-income-agi.md";
  slug: "056-what-is-adjusted-gross-income-agi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"057-understanding-your-w2-form.md": {
	id: "057-understanding-your-w2-form.md";
  slug: "057-understanding-your-w2-form";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"058-federal-tax-filing-deadlines-2025.md": {
	id: "058-federal-tax-filing-deadlines-2025.md";
  slug: "058-federal-tax-filing-deadlines-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"059-how-to-get-tax-extension-2025.md": {
	id: "059-how-to-get-tax-extension-2025.md";
  slug: "059-how-to-get-tax-extension-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"060-marginal-vs-effective-tax-rate.md": {
	id: "060-marginal-vs-effective-tax-rate.md";
  slug: "060-marginal-vs-effective-tax-rate";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"061-what-is-a-tax-refund-why-you-get-one.md": {
	id: "061-what-is-a-tax-refund-why-you-get-one.md";
  slug: "061-what-is-a-tax-refund-why-you-get-one";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"062-earned-income-tax-credit-eitc-guide.md": {
	id: "062-earned-income-tax-credit-eitc-guide.md";
  slug: "062-earned-income-tax-credit-eitc-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"063-child-tax-credit-2025-guide.md": {
	id: "063-child-tax-credit-2025-guide.md";
  slug: "063-child-tax-credit-2025-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"064-home-office-deduction-2025.md": {
	id: "064-home-office-deduction-2025.md";
  slug: "064-home-office-deduction-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"065-medical-expense-deductions-2025.md": {
	id: "065-medical-expense-deductions-2025.md";
  slug: "065-medical-expense-deductions-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"066-what-happens-if-you-dont-file-taxes.md": {
	id: "066-what-happens-if-you-dont-file-taxes.md";
  slug: "066-what-happens-if-you-dont-file-taxes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"067-understanding-tax-brackets-every-income-level.md": {
	id: "067-understanding-tax-brackets-every-income-level.md";
  slug: "067-understanding-tax-brackets-every-income-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"068-education-tax-credits-american-opportunity-lifetime-learning.md": {
	id: "068-education-tax-credits-american-opportunity-lifetime-learning.md";
  slug: "068-education-tax-credits-american-opportunity-lifetime-learning";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"069-how-to-handle-irs-audit-notice.md": {
	id: "069-how-to-handle-irs-audit-notice.md";
  slug: "069-how-to-handle-irs-audit-notice";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"070-how-to-read-your-pay-stub.md": {
	id: "070-how-to-read-your-pay-stub.md";
  slug: "070-how-to-read-your-pay-stub";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"071-pre-tax-vs-post-tax-deductions.md": {
	id: "071-pre-tax-vs-post-tax-deductions.md";
  slug: "071-pre-tax-vs-post-tax-deductions";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"072-how-social-security-tax-works.md": {
	id: "072-how-social-security-tax-works.md";
  slug: "072-how-social-security-tax-works";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"073-medicare-tax-explained.md": {
	id: "073-medicare-tax-explained.md";
  slug: "073-medicare-tax-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"074-what-is-fica-tax.md": {
	id: "074-what-is-fica-tax.md";
  slug: "074-what-is-fica-tax";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"075-health-insurance-premiums-pre-tax.md": {
	id: "075-health-insurance-premiums-pre-tax.md";
  slug: "075-health-insurance-premiums-pre-tax";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"076-flexible-spending-account-fsa-guide.md": {
	id: "076-flexible-spending-account-fsa-guide.md";
  slug: "076-flexible-spending-account-fsa-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"077-health-savings-account-hsa-guide.md": {
	id: "077-health-savings-account-hsa-guide.md";
  slug: "077-health-savings-account-hsa-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"078-dental-vision-insurance-deductions.md": {
	id: "078-dental-vision-insurance-deductions.md";
  slug: "078-dental-vision-insurance-deductions";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"079-employer-life-insurance-taxes.md": {
	id: "079-employer-life-insurance-taxes.md";
  slug: "079-employer-life-insurance-taxes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"080-wage-garnishment-levy-explained.md": {
	id: "080-wage-garnishment-levy-explained.md";
  slug: "080-wage-garnishment-levy-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"081-union-dues-professional-deductions.md": {
	id: "081-union-dues-professional-deductions.md";
  slug: "081-union-dues-professional-deductions";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"082-commuter-benefits-transit-parking.md": {
	id: "082-commuter-benefits-transit-parking.md";
  slug: "082-commuter-benefits-transit-parking";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"083-child-support-wage-garnishment.md": {
	id: "083-child-support-wage-garnishment.md";
  slug: "083-child-support-wage-garnishment";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"084-overtime-pay-and-taxes.md": {
	id: "084-overtime-pay-and-taxes.md";
  slug: "084-overtime-pay-and-taxes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"085-how-bonus-pay-is-taxed.md": {
	id: "085-how-bonus-pay-is-taxed.md";
  slug: "085-how-bonus-pay-is-taxed";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"086-tips-gratuities-tax-obligations.md": {
	id: "086-tips-gratuities-tax-obligations.md";
  slug: "086-tips-gratuities-tax-obligations";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"087-commission-pay-tax-withholding.md": {
	id: "087-commission-pay-tax-withholding.md";
  slug: "087-commission-pay-tax-withholding";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"088-severance-pay-taxes.md": {
	id: "088-severance-pay-taxes.md";
  slug: "088-severance-pay-taxes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"089-stock-options-rsu-tax-implications.md": {
	id: "089-stock-options-rsu-tax-implications.md";
  slug: "089-stock-options-rsu-tax-implications";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"090-tax-filing-status-explained.md": {
	id: "090-tax-filing-status-explained.md";
  slug: "090-tax-filing-status-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"091-itemize-vs-standard-deduction.md": {
	id: "091-itemize-vs-standard-deduction.md";
  slug: "091-itemize-vs-standard-deduction";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"092-married-filing-jointly-guide.md": {
	id: "092-married-filing-jointly-guide.md";
  slug: "092-married-filing-jointly-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"093-married-filing-separately-when-it-makes-sense.md": {
	id: "093-married-filing-separately-when-it-makes-sense.md";
  slug: "093-married-filing-separately-when-it-makes-sense";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"094-head-of-household-filing-status.md": {
	id: "094-head-of-household-filing-status.md";
  slug: "094-head-of-household-filing-status";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"095-filing-taxes-single-parent.md": {
	id: "095-filing-taxes-single-parent.md";
  slug: "095-filing-taxes-single-parent";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"096-claiming-dependents-tax-return.md": {
	id: "096-claiming-dependents-tax-return.md";
  slug: "096-claiming-dependents-tax-return";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"097-modified-adjusted-gross-income-magi.md": {
	id: "097-modified-adjusted-gross-income-magi.md";
  slug: "097-modified-adjusted-gross-income-magi";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"098-irs-tax-forms-1040-guide.md": {
	id: "098-irs-tax-forms-1040-guide.md";
  slug: "098-irs-tax-forms-1040-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"099-irs-free-file-guide-2025.md": {
	id: "099-irs-free-file-guide-2025.md";
  slug: "099-irs-free-file-guide-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"100-turbotax-vs-hrblock-vs-diy.md": {
	id: "100-turbotax-vs-hrblock-vs-diy.md";
  slug: "100-turbotax-vs-hrblock-vs-diy";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"101-how-to-amend-tax-return-1040x.md": {
	id: "101-how-to-amend-tax-return-1040x.md";
  slug: "101-how-to-amend-tax-return-1040x";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"102-owe-taxes-cant-pay-options.md": {
	id: "102-owe-taxes-cant-pay-options.md";
  slug: "102-owe-taxes-cant-pay-options";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"103-irs-payment-plan-installment-agreement.md": {
	id: "103-irs-payment-plan-installment-agreement.md";
  slug: "103-irs-payment-plan-installment-agreement";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"104-irs-audit-selection-process.md": {
	id: "104-irs-audit-selection-process.md";
  slug: "104-irs-audit-selection-process";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"105-tax-records-how-long-to-keep.md": {
	id: "105-tax-records-how-long-to-keep.md";
  slug: "105-tax-records-how-long-to-keep";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"106-irs-tax-transcript-request.md": {
	id: "106-irs-tax-transcript-request.md";
  slug: "106-irs-tax-transcript-request";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"107-estimated-tax-payments-guide.md": {
	id: "107-estimated-tax-payments-guide.md";
  slug: "107-estimated-tax-payments-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"108-how-to-avoid-underpayment-penalties.md": {
	id: "108-how-to-avoid-underpayment-penalties.md";
  slug: "108-how-to-avoid-underpayment-penalties";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"109-state-vs-federal-tax-filing-differences.md": {
	id: "109-state-vs-federal-tax-filing-differences.md";
  slug: "109-state-vs-federal-tax-filing-differences";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"110-10-ways-reduce-federal-tax.md": {
	id: "110-10-ways-reduce-federal-tax.md";
  slug: "110-10-ways-reduce-federal-tax";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"111-maximize-take-home-pay.md": {
	id: "111-maximize-take-home-pay.md";
  slug: "111-maximize-take-home-pay";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"112-tax-loss-harvesting-explained.md": {
	id: "112-tax-loss-harvesting-explained.md";
  slug: "112-tax-loss-harvesting-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"113-when-to-hire-tax-professional.md": {
	id: "113-when-to-hire-tax-professional.md";
  slug: "113-when-to-hire-tax-professional";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"114-deductible-business-expenses-employees.md": {
	id: "114-deductible-business-expenses-employees.md";
  slug: "114-deductible-business-expenses-employees";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"115-how-to-use-tax-refund-wisely.md": {
	id: "115-how-to-use-tax-refund-wisely.md";
  slug: "115-how-to-use-tax-refund-wisely";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"116-reduce-state-income-tax-strategies.md": {
	id: "116-reduce-state-income-tax-strategies.md";
  slug: "116-reduce-state-income-tax-strategies";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"117-charitable-donation-tax-deductions.md": {
	id: "117-charitable-donation-tax-deductions.md";
  slug: "117-charitable-donation-tax-deductions";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"118-student-loan-interest-deduction.md": {
	id: "118-student-loan-interest-deduction.md";
  slug: "118-student-loan-interest-deduction";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"119-mortgage-interest-deduction-guide.md": {
	id: "119-mortgage-interest-deduction-guide.md";
  slug: "119-mortgage-interest-deduction-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"120-property-tax-deductions-homeowners.md": {
	id: "120-property-tax-deductions-homeowners.md";
  slug: "120-property-tax-deductions-homeowners";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"121-energy-efficiency-tax-credits-2025.md": {
	id: "121-energy-efficiency-tax-credits-2025.md";
  slug: "121-energy-efficiency-tax-credits-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"122-electric-vehicle-tax-credit-guide.md": {
	id: "122-electric-vehicle-tax-credit-guide.md";
  slug: "122-electric-vehicle-tax-credit-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"123-first-time-homebuyer-tax-benefits.md": {
	id: "123-first-time-homebuyer-tax-benefits.md";
  slug: "123-first-time-homebuyer-tax-benefits";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"124-cola-adjustments-tax-impact.md": {
	id: "124-cola-adjustments-tax-impact.md";
  slug: "124-cola-adjustments-tax-impact";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"125-moving-for-job-tax-deductions.md": {
	id: "125-moving-for-job-tax-deductions.md";
  slug: "125-moving-for-job-tax-deductions";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"126-work-from-home-tax-strategies.md": {
	id: "126-work-from-home-tax-strategies.md";
  slug: "126-work-from-home-tax-strategies";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"127-tax-planning-pay-raise.md": {
	id: "127-tax-planning-pay-raise.md";
  slug: "127-tax-planning-pay-raise";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"128-avoid-tax-bracket-creep.md": {
	id: "128-avoid-tax-bracket-creep.md";
  slug: "128-avoid-tax-bracket-creep";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"129-year-end-tax-planning-checklist.md": {
	id: "129-year-end-tax-planning-checklist.md";
  slug: "129-year-end-tax-planning-checklist";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"130-401k-contributions-reduce-taxes.md": {
	id: "130-401k-contributions-reduce-taxes.md";
  slug: "130-401k-contributions-reduce-taxes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"131-traditional-ira-vs-roth-ira.md": {
	id: "131-traditional-ira-vs-roth-ira.md";
  slug: "131-traditional-ira-vs-roth-ira";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"132-401k-contribution-limits-2025-2026.md": {
	id: "132-401k-contribution-limits-2025-2026.md";
  slug: "132-401k-contribution-limits-2025-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"133-roth-401k-vs-traditional-401k.md": {
	id: "133-roth-401k-vs-traditional-401k.md";
  slug: "133-roth-401k-vs-traditional-401k";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"134-employer-401k-matching-explained.md": {
	id: "134-employer-401k-matching-explained.md";
  slug: "134-employer-401k-matching-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"135-ira-contribution-limits-income-limits.md": {
	id: "135-ira-contribution-limits-income-limits.md";
  slug: "135-ira-contribution-limits-income-limits";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"136-capital-gains-tax-explained.md": {
	id: "136-capital-gains-tax-explained.md";
  slug: "136-capital-gains-tax-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"137-dividend-income-and-taxes.md": {
	id: "137-dividend-income-and-taxes.md";
  slug: "137-dividend-income-and-taxes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"138-cryptocurrency-taxes-2025.md": {
	id: "138-cryptocurrency-taxes-2025.md";
  slug: "138-cryptocurrency-taxes-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"139-investment-account-types-tax-comparison.md": {
	id: "139-investment-account-types-tax-comparison.md";
  slug: "139-investment-account-types-tax-comparison";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"140-403b-plan-guide-nonprofit-employees.md": {
	id: "140-403b-plan-guide-nonprofit-employees.md";
  slug: "140-403b-plan-guide-nonprofit-employees";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"141-457b-plan-guide-government-employees.md": {
	id: "141-457b-plan-guide-government-employees.md";
  slug: "141-457b-plan-guide-government-employees";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"142-sep-ira-self-employed-guide.md": {
	id: "142-sep-ira-self-employed-guide.md";
  slug: "142-sep-ira-self-employed-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"143-simple-ira-small-business-guide.md": {
	id: "143-simple-ira-small-business-guide.md";
  slug: "143-simple-ira-small-business-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"144-required-minimum-distributions-rmd-guide.md": {
	id: "144-required-minimum-distributions-rmd-guide.md";
  slug: "144-required-minimum-distributions-rmd-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"145-early-retirement-withdrawal-penalties.md": {
	id: "145-early-retirement-withdrawal-penalties.md";
  slug: "145-early-retirement-withdrawal-penalties";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"146-how-to-rollover-401k.md": {
	id: "146-how-to-rollover-401k.md";
  slug: "146-how-to-rollover-401k";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"147-vesting-schedules-retirement-plans.md": {
	id: "147-vesting-schedules-retirement-plans.md";
  slug: "147-vesting-schedules-retirement-plans";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"148-backdoor-roth-ira-strategy.md": {
	id: "148-backdoor-roth-ira-strategy.md";
  slug: "148-backdoor-roth-ira-strategy";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"149-net-unrealized-appreciation-nua-strategy.md": {
	id: "149-net-unrealized-appreciation-nua-strategy.md";
  slug: "149-net-unrealized-appreciation-nua-strategy";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"150-self-employment-tax-guide.md": {
	id: "150-self-employment-tax-guide.md";
  slug: "150-self-employment-tax-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"151-quarterly-estimated-taxes-guide.md": {
	id: "151-quarterly-estimated-taxes-guide.md";
  slug: "151-quarterly-estimated-taxes-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"152-deductible-expenses-freelancers.md": {
	id: "152-deductible-expenses-freelancers.md";
  slug: "152-deductible-expenses-freelancers";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"153-home-office-deduction-self-employed.md": {
	id: "153-home-office-deduction-self-employed.md";
  slug: "153-home-office-deduction-self-employed";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"154-self-employed-health-insurance-deduction.md": {
	id: "154-self-employed-health-insurance-deduction.md";
  slug: "154-self-employed-health-insurance-deduction";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"155-schedule-c-profit-loss-guide.md": {
	id: "155-schedule-c-profit-loss-guide.md";
  slug: "155-schedule-c-profit-loss-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"156-1099-nec-vs-1099-misc.md": {
	id: "156-1099-nec-vs-1099-misc.md";
  slug: "156-1099-nec-vs-1099-misc";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"157-sole-proprietorship-vs-llc-taxes.md": {
	id: "157-sole-proprietorship-vs-llc-taxes.md";
  slug: "157-sole-proprietorship-vs-llc-taxes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"158-s-corp-election-self-employment-tax-savings.md": {
	id: "158-s-corp-election-self-employment-tax-savings.md";
  slug: "158-s-corp-election-self-employment-tax-savings";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"159-retirement-plans-self-employed-comparison.md": {
	id: "159-retirement-plans-self-employed-comparison.md";
  slug: "159-retirement-plans-self-employed-comparison";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"160-vehicle-deductions-self-employed.md": {
	id: "160-vehicle-deductions-self-employed.md";
  slug: "160-vehicle-deductions-self-employed";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"161-mileage-rate-vs-actual-expenses.md": {
	id: "161-mileage-rate-vs-actual-expenses.md";
  slug: "161-mileage-rate-vs-actual-expenses";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"162-business-travel-expenses-deductions.md": {
	id: "162-business-travel-expenses-deductions.md";
  slug: "162-business-travel-expenses-deductions";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"163-meals-entertainment-business-deductions.md": {
	id: "163-meals-entertainment-business-deductions.md";
  slug: "163-meals-entertainment-business-deductions";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"164-section-179-deduction-equipment.md": {
	id: "164-section-179-deduction-equipment.md";
  slug: "164-section-179-deduction-equipment";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"165-child-tax-credit-complete-guide.md": {
	id: "165-child-tax-credit-complete-guide.md";
  slug: "165-child-tax-credit-complete-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"166-child-dependent-care-credit.md": {
	id: "166-child-dependent-care-credit.md";
  slug: "166-child-dependent-care-credit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"167-adoption-tax-credit-2025.md": {
	id: "167-adoption-tax-credit-2025.md";
  slug: "167-adoption-tax-credit-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"168-american-opportunity-credit-college.md": {
	id: "168-american-opportunity-credit-college.md";
  slug: "168-american-opportunity-credit-college";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"169-lifetime-learning-credit-guide.md": {
	id: "169-lifetime-learning-credit-guide.md";
  slug: "169-lifetime-learning-credit-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"170-savers-credit-retirement-contributions.md": {
	id: "170-savers-credit-retirement-contributions.md";
  slug: "170-savers-credit-retirement-contributions";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"171-premium-tax-credit-aca-health.md": {
	id: "171-premium-tax-credit-aca-health.md";
  slug: "171-premium-tax-credit-aca-health";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"172-residential-clean-energy-credit.md": {
	id: "172-residential-clean-energy-credit.md";
  slug: "172-residential-clean-energy-credit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"173-work-opportunity-tax-credit-wotc.md": {
	id: "173-work-opportunity-tax-credit-wotc.md";
  slug: "173-work-opportunity-tax-credit-wotc";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"174-research-development-tax-credit.md": {
	id: "174-research-development-tax-credit.md";
  slug: "174-research-development-tax-credit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"175-foreign-tax-credit-guide.md": {
	id: "175-foreign-tax-credit-guide.md";
  slug: "175-foreign-tax-credit-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"176-retirement-savings-contributions-credit.md": {
	id: "176-retirement-savings-contributions-credit.md";
  slug: "176-retirement-savings-contributions-credit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"177-plug-in-electric-vehicle-credit.md": {
	id: "177-plug-in-electric-vehicle-credit.md";
  slug: "177-plug-in-electric-vehicle-credit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"178-low-income-housing-tax-credit.md": {
	id: "178-low-income-housing-tax-credit.md";
  slug: "178-low-income-housing-tax-credit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"179-new-markets-tax-credit.md": {
	id: "179-new-markets-tax-credit.md";
  slug: "179-new-markets-tax-credit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"180-getting-married-tax-changes.md": {
	id: "180-getting-married-tax-changes.md";
  slug: "180-getting-married-tax-changes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"181-divorce-tax-implications.md": {
	id: "181-divorce-tax-implications.md";
  slug: "181-divorce-tax-implications";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"182-having-a-baby-tax-benefits.md": {
	id: "182-having-a-baby-tax-benefits.md";
  slug: "182-having-a-baby-tax-benefits";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"183-adopting-child-tax-benefits.md": {
	id: "183-adopting-child-tax-benefits.md";
  slug: "183-adopting-child-tax-benefits";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"184-buying-first-home-tax-deductions.md": {
	id: "184-buying-first-home-tax-deductions.md";
  slug: "184-buying-first-home-tax-deductions";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"185-selling-home-capital-gains-exclusion.md": {
	id: "185-selling-home-capital-gains-exclusion.md";
  slug: "185-selling-home-capital-gains-exclusion";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"186-inheriting-money-property-taxes.md": {
	id: "186-inheriting-money-property-taxes.md";
  slug: "186-inheriting-money-property-taxes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"187-receiving-gift-taxable-income.md": {
	id: "187-receiving-gift-taxable-income.md";
  slug: "187-receiving-gift-taxable-income";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"188-starting-new-job-tax-steps.md": {
	id: "188-starting-new-job-tax-steps.md";
  slug: "188-starting-new-job-tax-steps";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"189-losing-job-tax-issues.md": {
	id: "189-losing-job-tax-issues.md";
  slug: "189-losing-job-tax-issues";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"190-unemployment-income-federal-taxes.md": {
	id: "190-unemployment-income-federal-taxes.md";
  slug: "190-unemployment-income-federal-taxes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"191-disability-income-social-security-taxes.md": {
	id: "191-disability-income-social-security-taxes.md";
  slug: "191-disability-income-social-security-taxes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"192-social-security-benefits-taxable.md": {
	id: "192-social-security-benefits-taxable.md";
  slug: "192-social-security-benefits-taxable";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"193-retirement-income-taxation-guide.md": {
	id: "193-retirement-income-taxation-guide.md";
  slug: "193-retirement-income-taxation-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"194-estate-tax-who-pays-how-much.md": {
	id: "194-estate-tax-who-pays-how-much.md";
  slug: "194-estate-tax-who-pays-how-much";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"195-moving-to-another-state-tax-considerations.md": {
	id: "195-moving-to-another-state-tax-considerations.md";
  slug: "195-moving-to-another-state-tax-considerations";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"196-moving-abroad-us-tax-obligations-expat.md": {
	id: "196-moving-abroad-us-tax-obligations-expat.md";
  slug: "196-moving-abroad-us-tax-obligations-expat";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"197-death-and-taxes-estate-planning.md": {
	id: "197-death-and-taxes-estate-planning.md";
  slug: "197-death-and-taxes-estate-planning";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"198-tax-timeline-birth-to-retirement.md": {
	id: "198-tax-timeline-birth-to-retirement.md";
  slug: "198-tax-timeline-birth-to-retirement";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"199-us-taxes-new-americans-immigrants.md": {
	id: "199-us-taxes-new-americans-immigrants.md";
  slug: "199-us-taxes-new-americans-immigrants";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"200-alternative-minimum-tax-amt-explained.md": {
	id: "200-alternative-minimum-tax-amt-explained.md";
  slug: "200-alternative-minimum-tax-amt-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
