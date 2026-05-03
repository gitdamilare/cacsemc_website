/**
 * CMS Adapter — lib/cms.ts
 *
 * All data fetching goes through this module.
 * Currently uses static mock data from lib/data.ts.
 *
 * To switch to a headless CMS (Sanity, Contentful, etc.):
 *   1. Install the SDK:       npm install @sanity/client  OR  contentful
 *   2. Set environment vars:  SANITY_PROJECT_ID, SANITY_DATASET, etc.
 *   3. Replace each function body below with the CMS fetch call.
 *   4. Map the CMS response shape to the types in src/types/index.ts.
 *
 * Every page/component imports from here, NOT from lib/data.ts directly,
 * so the swap is fully contained in this single file.
 */

import type { BlogPost, Event, Sermon } from "@/types";
import {
  blogPosts as _posts,
  events as _events,
  sermons as _sermons,
} from "./data";

/* ─── Blog Posts ─────────────────────────────────────────────── */

/** Fetch all blog posts, most recent first. */
export async function getAllPosts(): Promise<BlogPost[]> {
  // Sanity example:
  // return client.fetch(`*[_type == "post"] | order(date desc)`)
  return _posts;
}

/** Fetch a single post by its slug. */
export async function getPost(slug: string): Promise<BlogPost | null> {
  // Sanity example:
  // return client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
  return _posts.find((p) => p.slug === slug) ?? null;
}

/** Fetch the featured post (or fall back to most recent). */
export async function getFeaturedPost(): Promise<BlogPost> {
  return _posts.find((p) => p.featured) ?? _posts[0];
}

/** Fetch posts in the same category, excluding the current post. */
export async function getRelatedPosts(
  slug: string,
  category: string,
  limit = 3
): Promise<BlogPost[]> {
  return _posts
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, limit);
}

/** Fetch all unique category names. */
export async function getCategories(): Promise<string[]> {
  const cats = Array.from(new Set(_posts.map((p) => p.category)));
  return ["All", ...cats];
}

/** Static slugs for generateStaticParams. */
export async function getAllPostSlugs(): Promise<string[]> {
  return _posts.map((p) => p.slug);
}

/* ─── Events ─────────────────────────────────────────────────── */

export async function getAllEvents(): Promise<Event[]> {
  return _events;
}

/* ─── Sermons ────────────────────────────────────────────────── */

export async function getAllSermons(): Promise<Sermon[]> {
  return _sermons;
}

/* ─── Example Sanity implementation (commented out) ─────────── */
/*
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset:   process.env.SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export async function getAllPosts(): Promise<BlogPost[]> {
  return client.fetch(`
    *[_type == "post"] | order(date desc) {
      "slug": slug.current,
      title,
      excerpt,
      category,
      tags,
      "author": author->name,
      date,
      readTime,
      featured,
      lessonCount
    }
  `);
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      "slug": slug.current,
      title,
      excerpt,
      category,
      tags,
      "author": author->name,
      date,
      readTime,
      featured,
      lessonCount,
      "content": body
    }`,
    { slug }
  );
}
*/
