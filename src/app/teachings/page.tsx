import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, categories } from "@/lib/data";
import { BlogCard, NewsletterStrip, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Teachings",
  description:
    "Scripture-grounded teachings by Dr. Joshua Owoeye on holiness, character, leadership, and discipleship.",
};

export default function TeachingsPage() {
  const featured = blogPosts.find((p) => p.featured)!;
  const rest = blogPosts.filter((p) => !p.featured);
  const grouped = categories.slice(1).reduce<Record<string, typeof blogPosts>>(
    (acc, cat) => {
      const posts = blogPosts.filter((p) => p.category === cat);
      if (posts.length) acc[cat] = posts;
      return acc;
    },
    {}
  );

  return (
    <>
      {/* ── HEADER ──────────────────────────────────── */}
      <div
        style={{
          background: "var(--deep)",
          padding: "6rem 2rem 5rem",
          paddingTop: "calc(var(--nav-h) + 4rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(184,147,58,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(184,147,58,0.04) 1px,transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500, marginBottom: "1.5rem" }}>
            <span style={{ width: 24, height: 1, background: "var(--gold)", opacity: 0.5, display: "inline-block" }} />
            From the Pastor's Desk
            <span style={{ width: 24, height: 1, background: "var(--gold)", opacity: 0.5, display: "inline-block" }} />
          </p>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "white",
              marginBottom: "1.25rem",
            }}
          >
            Writings &{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Teachings</em>
          </h1>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.2rem",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.6,
              maxWidth: 540,
              margin: "0 auto 2.5rem",
            }}
          >
            Scripture-grounded articles on holiness, character, leadership, and discipleship — written to transform lives.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/blog" className="btn-gold">Browse All Posts</Link>
            <Link href="/subscribe"
              style={{ fontSize: "0.82rem", fontWeight: 400, letterSpacing: "0.07em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", padding: "0.85rem 2rem", borderRadius: 2, textDecoration: "none", border: "1px solid rgba(255,255,255,0.18)" }}
            >
              Get Teaching Alerts
            </Link>
          </div>
        </div>
      </div>

      {/* ── FEATURED ────────────────────────────────── */}
      <section className="section-wrap">
        <div className="section-inner">
          <SectionHeader eyebrow="Featured Teaching" title={<>Most Recent <em>Writing</em></>} />
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5px", background: "var(--border)" }} className="featured-grid">
            <BlogCard post={featured} featured />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5px", background: "var(--border)" }}>
              {rest.slice(0, 2).map((p) => (
                <BlogCard key={p.slug} post={p} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BY CATEGORY ─────────────────────────────── */}
      {Object.entries(grouped).map(([cat, posts]) => (
        <section key={cat} className="section-wrap section-cream" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div className="section-inner">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <p className="cat-badge" style={{ marginBottom: "0.3rem" }}>{cat}</p>
                <p style={{ fontSize: "0.82rem", color: "var(--ink-faint)" }}>{posts.length} teaching{posts.length > 1 ? "s" : ""}</p>
              </div>
              <Link href={`/blog?cat=${encodeURIComponent(cat)}`} className="btn-ghost">
                See all in {cat} →
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5px", background: "var(--border)" }}>
              {posts.map((p) => (
                <BlogCard key={p.slug} post={p} variant="compact" />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── ALL TOPICS ──────────────────────────────── */}
      <section className="section-wrap">
        <div className="section-inner">
          <SectionHeader eyebrow="Browse" title={<>All <em>Topics</em></>} center />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginTop: "2rem" }}>
            {categories.slice(1).map((cat) => (
              <Link key={cat} href={`/blog?cat=${encodeURIComponent(cat)}`}
                style={{
                  padding: "0.6rem 1.25rem",
                  border: "1px solid var(--border)",
                  borderRadius: 3,
                  fontSize: "0.82rem",
                  color: "var(--ink-muted)",
                  textDecoration: "none",
                  transition: "all var(--transition)",
                  background: "var(--warm-white)",
                }}
                className="topic-pill"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterStrip />

      <style>{`
        .featured-grid { }
        .topic-pill:hover { border-color: var(--gold) !important; color: var(--gold) !important; }
        @media (max-width: 800px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
