import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, BookOpen, Share2 } from "lucide-react";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/data";
import { NewsletterStrip } from "@/components/ui";
import BlogPostClient from "./BlogPostClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.category);
  const allOthers = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const suggestions = related.length ? related : allOthers;

  return (
    <>
      {/* ── ARTICLE HEADER ──────────────────────────── */}
      <div
        style={{
          background: "var(--cream)",
          padding: "5rem 2rem 4rem",
          paddingTop: "calc(var(--nav-h) + 3rem)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.75rem",
              color: "var(--ink-faint)",
              marginBottom: "1.5rem",
            }}
          >
            <Link href="/" style={{ color: "var(--ink-faint)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/teachings" style={{ color: "var(--ink-faint)", textDecoration: "none" }}>Writings</Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>

          <span
            style={{
              display: "inline-block",
              fontSize: "0.62rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold)",
              background: "var(--gold-pale)",
              padding: "0.3rem 0.75rem",
              borderRadius: 2,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            {post.category}
          </span>

          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--ink)",
              marginBottom: "1.25rem",
            }}
          >
            {post.title}
          </h1>

          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.2rem",
              fontStyle: "italic",
              color: "var(--ink-muted)",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            {post.excerpt}
          </p>

          {/* Byline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border-soft)",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "var(--gold-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--serif)",
                  fontSize: "1.1rem",
                  color: "var(--gold)",
                  fontStyle: "italic",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                J
              </div>
              <div>
                <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--ink)" }}>
                  {post.author}
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--ink-faint)" }}>
                  Spiritual Leader, CAC Miracle Centre
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                fontSize: "0.78rem",
                color: "var(--ink-faint)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Clock size={13} /> {post.readTime} min read
              </span>
              {post.lessonCount && (
                <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <BookOpen size={13} /> {post.lessonCount} lessons
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── ACTIONS BAR ─────────────────────────────── */}
      <div
        style={{
          borderBottom: "1px solid var(--border-soft)",
          padding: "0.85rem 2rem",
          background: "var(--warm-white)",
          position: "sticky",
          top: "var(--nav-h)",
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <Link
            href="/teachings"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.78rem",
              color: "var(--ink-muted)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            <ArrowLeft size={13} /> All Writings
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.72rem", color: "var(--ink-faint)" }}>Share:</span>
            <button className="btn-outline" style={{ padding: "0.35rem 0.85rem", fontSize: "0.72rem" }}>
              <Share2 size={12} /> Share
            </button>
          </div>
        </div>
      </div>

      {/* ── READING LAYOUT ──────────────────────────── */}
      <BlogPostClient post={post} />

      {/* ── TAGS ────────────────────────────────────── */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 2rem 3rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-soft)",
          }}
        >
          {post.tags.map((tag) => (
            <Link key={tag} href={`/teachings?tag=${tag}`} className="tag-pill">
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* ── RELATED POSTS ───────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          background: "var(--cream)",
          padding: "4rem 2rem",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 500,
              marginBottom: "2rem",
            }}
          >
            Continue Reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "1.5px",
              background: "var(--border)",
            }}
            className="related-grid"
          >
            {suggestions.map((s) => (
              <Link
                key={s.slug}
                href={`/teachings/${s.slug}`}
                style={{
                  background: "var(--cream)",
                  padding: "1.75rem",
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  transition: "background var(--transition)",
                }}
                className="related-card"
              >
                <p className="cat-badge" style={{ marginBottom: "0.65rem" }}>{s.category}</p>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: "var(--ink)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.73rem", color: "var(--ink-faint)" }}>
                  {s.readTime} min read
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <NewsletterStrip />

      <style>{`
        .related-card:hover { background: var(--gold-pale) !important; }
        @media (max-width: 700px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
