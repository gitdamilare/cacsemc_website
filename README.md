# CAC Miracle Centre — Website

Production-ready Next.js website for **Christ Apostolic Church (CAC) Miracle Centre**, with blog/teachings as the primary feature.

**Next.js 16 · TypeScript · Tailwind CSS v4 · App Router · Static Export**

---

## Quick Start

```bash
npm install
cp .env.example .env.local
npm run dev        # → http://localhost:3000
npm run build      # → Static export in /out
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              Root layout
│   ├── page.tsx                / — Church homepage
│   ├── not-found.tsx           404 page
│   ├── loading.tsx             Loading skeleton
│   ├── sitemap.ts              Auto sitemap.xml
│   ├── robots.ts               robots.txt
│   ├── blog/
│   │   ├── page.tsx            /teachings — listing (server, metadata)
│   │   ├── BlogContent.tsx     Client search + filter UI
│   │   └── [slug]/
│   │       ├── page.tsx        /teachings/[slug] — SSG post
│   │       └── BlogPostClient  Progress bar, TOC, font toggle
│   ├── teachings/page.tsx      /teachings
│   ├── about/page.tsx          /about
│   ├── pastor/page.tsx         /pastor
│   ├── visit/page.tsx          /visit
│   ├── sermons/page.tsx        /sermons
│   ├── events/page.tsx         /events
│   ├── give/page.tsx           /give
│   ├── contact/page.tsx        /contact
│   └── subscribe/page.tsx      /subscribe
├── components/
│   ├── layout/ Navbar · Footer
│   └── ui/     BlogCard · ServiceCard · Forms · SectionHeader · etc.
├── lib/
│   ├── data.ts   Static mock data
│   ├── cms.ts    CMS adapter (swap backend here)
│   └── utils.ts  Shared utilities
├── styles/globals.css   Design tokens
└── types/index.ts       TypeScript types
```

---

## Design Tokens

All in `src/styles/globals.css`:

| Token | Value | Use |
|---|---|---|
| `--cream` | `#F7F4EE` | Section backgrounds |
| `--warm-white` | `#FDFCFA` | Page background |
| `--ink` | `#1A1714` | Primary text |
| `--gold` | `#B8933A` | Brand accent |
| `--deep` | `#2C1A0E` | Hero / dark sections |
| `--serif` | Cormorant Garamond | Headings & display |
| `--sans` | DM Sans | Body & UI |

Dark mode is automatic via `prefers-color-scheme`.

---

## Adding a Blog Post

Edit `src/lib/data.ts`, add to `blogPosts`:

```ts
{
  slug:        "my-post-slug",
  title:       "Post Title",
  excerpt:     "Short description for cards and SEO...",
  category:    "Character & Holiness",
  tags:        ["Holiness", "Scripture"],
  author:      "Dr. Joshua Owoeye",
  date:        "2024-06-01",
  readTime:    8,
  featured:    false,
  lessonCount: 25,
  content:     `## Introduction\n\nFull article in markdown...`,
}
```

The post instantly appears in: blog listing, teachings hub, related posts, and sitemap.

---

## Connecting a CMS

All fetching is isolated in `src/lib/cms.ts`. To plug in Sanity:

```bash
npm install @sanity/client
```

Add to `.env.local`:
```
SANITY_PROJECT_ID=abc123
SANITY_DATASET=production
```

Then replace the function bodies in `cms.ts` — examples are commented in the file.
**No page components need changing.**

---

## Forms

**Contact form** → add to `.env.local`:
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID
```
Then update `<form action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT}>` in `Forms.tsx`.

**Newsletter** → create `src/app/api/subscribe/route.ts` for ConvertKit/Mailchimp.
The env vars and instructions are in `.env.example`.

---

## Deployment

```bash
# Vercel (recommended)
npm i -g vercel && vercel --prod

# Netlify
npm run build && netlify deploy --dir=out --prod

# cPanel / static host
npm run build  →  upload /out to public_html
```

---

## Before Going Live

Replace placeholders in these files:

| What | Where |
|---|---|
| Church address | `src/app/contact/page.tsx`, `src/app/page.tsx` |
| Phone number | same |
| Email address | same |
| Social links | `src/components/layout/Footer.tsx` |
| Pastor photo | replace `"J"` avatar with `<Image>` |
| `NEXT_PUBLIC_SITE_URL` | `.env.local` |

---

*Christ Apostolic Church — Miracle Centre · Spiritual Leader: Dr. Joshua Owoeye*
