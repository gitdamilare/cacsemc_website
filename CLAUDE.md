@AGENTS.md

# CAC Miracle Centre website

Marketing and teachings site for a church: Next.js 16 App Router, React 19, TypeScript (strict), Tailwind CSS v4, lucide-react icons. No backend, no database, no tests.

## Commands

- `npm run dev` - local server on http://localhost:3000
- `npm run lint` - ESLint (flat config in `eslint.config.mjs`)
- `npm run build` - static export to `out/`; this is the real check that a change works, since it type-checks and pre-renders every route

## Static export constrains everything

`next.config.ts` sets `output: "export"`, `trailingSlash: true` and unoptimized images. So: no API routes, route handlers, server actions, middleware, ISR, cookies/headers, or request-time data. Every dynamic route needs `generateStaticParams`. Anything that needs a server (newsletter signup, contact submission) has to go to a third-party endpoint called from the client. The README suggests `src/app/api/subscribe/route.ts`; that will not build under this config.

## Where things live

- Pages: `src/app/<route>/page.tsx` are server components that export `metadata`. Interactive parts sit in a sibling client file (`teachings/TeachingsContent.tsx`, `teachings/[slug]/BlogPostClient.tsx`).
- Content: all site content is static data in `src/lib/data.ts` (posts, categories, service times, beliefs, values, events, sermons). Types are in `src/types/index.ts`. A new teaching is a new entry in `blogPosts`; it shows up in the listing, related posts and `sitemap.ts` automatically.
- Post bodies are markdown strings rendered by a small hand-written renderer in `BlogPostClient.tsx` (`renderContent`). It supports only what it parses, so check it before using new markdown syntax in content.
- `src/lib/cms.ts` is an unused adapter for a future headless CMS. Pages import from `@/lib/data` directly, despite the comment in `cms.ts` saying otherwise. If you wire up a CMS, switch the imports then; don't add new data paths through `cms.ts` in the meantime.
- Shared UI: `src/components/ui/index.tsx` (SectionHeader, ScriptureBanner, NewsletterStrip, ...) and `src/components/ui/Forms.tsx`. Layout: `src/components/layout/Navbar.tsx` and `Footer.tsx`. Helpers such as `formatDate`, `truncate`, `slugify` and `siteUrl` are in `src/lib/utils.ts`. Reuse these before writing new ones.
- Use the `@/*` import alias (maps to `src/*`).

## Forms are not wired up

Every form in `Forms.tsx` calls `e.preventDefault()` and sends nothing. Placeholder env vars for Formspree and ConvertKit are in `.env.example`. Don't tell the user a form "works" unless you connected it.

## Styling and theming

- Design tokens are CSS custom properties in `src/styles/globals.css` (`--ink`, `--cream`, `--gold`, `--deep`, `--border`, `--focus`, type sizes, `--nav-h`). Use the tokens rather than hard-coded colours; most components style with inline `style={{ color: "var(--ink)" }}` plus global classes, with Tailwind utilities for layout.
- The README's token table is out of date; `globals.css` is the source of truth.
- Dark mode: dark values are defined twice, under `:root[data-theme="dark"]` and under `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])`. Change both together. The theme toggle (`src/components/theme/`) stores the choice in localStorage under `cac-theme`, and an inline script in `layout.tsx` sets `data-theme` before hydration to avoid a flash.
- `--deep` surfaces (footer, `.palette-inverse`) stay dark in both themes and remap `--gold` to `--gold-on-deep`. Text placed on them must stay readable in both themes; contrast on dark surfaces has regressed before.
- Fonts: Cormorant Garamond (`--serif`, headings) and DM Sans (`--sans`, body).
- Check visual changes at phone width (about 375px) and in both themes. Keep visible `:focus-visible` outlines and respect `prefers-reduced-motion`.

## Content and tone

This is a church site. Keep copy reverent and plain, and don't invent scripture references, people, service times, addresses or contact details. If something is missing, leave a clearly marked placeholder and tell the user. The README's "Before Going Live" table lists the placeholders still to replace.

## Housekeeping

- `README.md` is partly stale (it describes a `src/app/blog/` folder that no longer exists). Trust the code over the README.
- `out/` and `.next/` are build output; don't edit them.
