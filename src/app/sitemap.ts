import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl,                   lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${siteUrl}/teachings`,    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${siteUrl}/blog`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${siteUrl}/sermons`,      lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${siteUrl}/events`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${siteUrl}/about`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/pastor`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/visit`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/give`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contact`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/subscribe`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const postRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: post.featured ? 0.9 : 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}
