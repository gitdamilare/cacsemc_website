/**
 * Format a date string into a human-readable format.
 * @example formatDate("2024-01-15") → "January 15, 2024"
 */
export function formatDate(dateStr: string, opts?: Intl.DateTimeFormatOptions): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...opts,
  });
}

/**
 * Estimate reading time in minutes based on word count.
 * @param text Full content string
 * @param wpm Words per minute (default 200)
 */
export function estimateReadTime(text: string, wpm = 200): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wpm));
}

/**
 * Truncate a string to a maximum length, appending an ellipsis.
 */
export function truncate(str: string, max = 160): string {
  return str.length <= max ? str : str.slice(0, max).trimEnd() + "…";
}

/**
 * Convert a title string to a URL-safe slug.
 * @example slugify("Hello World!") → "hello-world"
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Group an array of items by a key function.
 */
export function groupBy<T>(arr: T[], key: (item: T) => string): Record<string, T[]> {
  return arr.reduce<Record<string, T[]>>((acc, item) => {
    const k = key(item);
    (acc[k] ??= []).push(item);
    return acc;
  }, {});
}

/**
 * Return a pluralised label.
 * @example pluralise(1, "lesson") → "1 lesson"
 * @example pluralise(3, "lesson") → "3 lessons"
 */
export function pluralise(count: number, singular: string, plural?: string): string {
  return `${count} ${count === 1 ? singular : (plural ?? singular + "s")}`;
}

/**
 * Base URL for the site — used in metadata and OG tags.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cacmiraclecenter.org";
