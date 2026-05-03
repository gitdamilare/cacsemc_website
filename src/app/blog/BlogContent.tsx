"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { blogPosts, categories } from "@/lib/data";
import { BlogCard, NewsletterStrip } from "@/components/ui";
import type { BlogPost } from "@/types";

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo<BlogPost[]>(() => {
    return blogPosts.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchQ =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchCat && matchQ;
    });
  }, [activeCategory, query]);

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.slug !== featured?.slug);

  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────── */}
      <div
        style={{
          background: "var(--cream)",
          padding: "6rem 2rem 4rem",
          paddingTop: "calc(var(--nav-h) + 4rem)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>
              Biblical Teachings
            </p>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--ink)",
              }}
            >
              Writings &{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                Teachings
              </em>
            </h1>
            <p className="body-text" style={{ marginTop: "0.75rem", maxWidth: 480 }}>
              Scripture-grounded articles on holiness, character, leadership, and
              discipleship — written to transform lives.
            </p>
          </div>

          {/* Search */}
          <div style={{ position: "relative", width: 280, flexShrink: 0 }}>
            <Search
              size={14}
              style={{
                position: "absolute",
                left: "0.85rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--ink-faint)",
              }}
            />
            <input
              type="search"
              placeholder="Search teachings..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 2.4rem",
                border: "1px solid var(--border)",
                borderRadius: 3,
                background: "var(--warm-white)",
                color: "var(--ink)",
                fontFamily: "var(--sans)",
                fontSize: "0.88rem",
                outline: "none",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── CATEGORY FILTERS ─────────────────────────── */}
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          background: "var(--warm-white)",
          position: "sticky",
          top: "var(--nav-h)",
          zIndex: 50,
          overflowX: "auto",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            padding: "0 2rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "1rem 1.1rem",
                fontSize: "0.76rem",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color:
                  activeCategory === cat ? "var(--gold)" : "var(--ink-muted)",
                background: "none",
                border: "none",
                borderBottom:
                  activeCategory === cat
                    ? "2px solid var(--gold)"
                    : "2px solid transparent",
                cursor: "pointer",
                fontFamily: "var(--sans)",
                whiteSpace: "nowrap",
                transition:
                  "color var(--transition), border-color var(--transition)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "3rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          gap: "4rem",
          alignItems: "start",
        }}
        className="blog-layout"
      >
        {/* Article list */}
        <main>
          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 0",
                color: "var(--ink-faint)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                No teachings found
              </p>
              <p style={{ fontSize: "0.88rem" }}>
                Try a different search term or category.
              </p>
            </div>
          ) : (
            <>
              {/* Featured */}
              {featured && (
                <div
                  style={{
                    background: "var(--cream)",
                    border: "1px solid var(--border)",
                    borderRadius: 4,
                    overflow: "hidden",
                    marginBottom: "2rem",
                  }}
                >
                  <div style={{ height: 3, background: "var(--gold)" }} />
                  <div style={{ padding: "2rem 2.5rem" }}>
                    <p
                      style={{
                        fontSize: "0.62rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        fontWeight: 500,
                        marginBottom: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      ★ Featured Teaching
                    </p>
                    <BlogCard post={featured} featured />
                  </div>
                </div>
              )}

              {/* Numbered article list */}
              <div>
                {rest.map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 56px",
                      gap: "1.5rem",
                      alignItems: "start",
                      padding: "2rem 0",
                      borderBottom:
                        i < rest.length - 1
                          ? "1px solid var(--border-soft)"
                          : "none",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    className="article-row"
                  >
                    <div>
                      <p
                        className="cat-badge"
                        style={{ marginBottom: "0.6rem" }}
                      >
                        {post.category}
                      </p>
                      <h2
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "1.5rem",
                          fontWeight: 500,
                          lineHeight: 1.25,
                          color: "var(--ink)",
                          marginBottom: "0.6rem",
                        }}
                        className="article-title"
                      >
                        {post.title}
                      </h2>
                      <p
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--ink-muted)",
                          lineHeight: 1.7,
                          marginBottom: "1rem",
                        }}
                      >
                        {post.excerpt}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          flexWrap: "wrap",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {post.tags.map((tag) => (
                          <span key={tag} className="tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p style={{ fontSize: "0.75rem", color: "var(--ink-faint)" }}>
                        {post.author} · {post.readTime} min read
                      </p>
                    </div>
                    {/* Decorative index number */}
                    <p
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "3rem",
                        fontWeight: 600,
                        color: "var(--border)",
                        lineHeight: 1,
                        textAlign: "right",
                        paddingTop: "0.25rem",
                        userSelect: "none",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </main>

        {/* ── SIDEBAR ──────────────────────────────── */}
        <aside
          style={{ position: "sticky", top: "calc(var(--nav-h) + 80px)" }}
        >
          {/* Subscribe CTA */}
          <div
            style={{
              background: "var(--ink)",
              padding: "1.75rem",
              borderRadius: 4,
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.25rem",
                color: "white",
                marginBottom: "0.5rem",
                fontWeight: 400,
              }}
            >
              New Teachings, Delivered
            </h3>
            <p
              style={{
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.55)",
                marginBottom: "1rem",
                lineHeight: 1.6,
              }}
            >
              Get notified when a new article is published. No noise, just truth.
            </p>
            <input
              type="email"
              placeholder="Your email"
              style={{
                width: "100%",
                padding: "0.65rem 0.85rem",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 2,
                color: "white",
                fontFamily: "var(--sans)",
                fontSize: "0.85rem",
                marginBottom: "0.6rem",
                outline: "none",
              }}
            />
            <Link
              href="/subscribe"
              className="btn-gold"
              style={{ display: "block", textAlign: "center" }}
            >
              Subscribe →
            </Link>
          </div>

          {/* Pull-quote */}
          <div
            style={{
              background: "var(--cream)",
              padding: "1.5rem",
              borderLeft: "3px solid var(--gold)",
              borderRadius: "0 4px 4px 0",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "var(--ink)",
                lineHeight: 1.6,
                marginBottom: "0.5rem",
              }}
            >
              "Good looks fade. Money loses value. But good behavior remains the
              greatest form of beauty."
            </p>
            <cite
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontStyle: "normal",
                fontWeight: 500,
              }}
            >
              — Dr. Joshua Owoeye
            </cite>
          </div>

          {/* Browse by category */}
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "0.85rem 1.25rem",
                borderBottom: "1px solid var(--border-soft)",
                background: "var(--cream)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-faint)",
                  fontWeight: 500,
                }}
              >
                Browse by Topic
              </h3>
            </div>
            <div style={{ padding: "0.5rem 1.25rem" }}>
              {categories
                .filter((c) => c !== "All")
                .map((cat, i, arr) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "0.65rem 0",
                      borderBottom:
                        i < arr.length - 1
                          ? "1px solid var(--border-soft)"
                          : "none",
                      background: "none",
                      border: "none",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      cursor: "pointer",
                      fontFamily: "var(--sans)",
                      fontSize: "0.86rem",
                      color:
                        activeCategory === cat
                          ? "var(--gold)"
                          : "var(--ink-muted)",
                      textAlign: "left",
                      transition: "color var(--transition)",
                    }}
                  >
                    <span>{cat}</span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--ink-faint)",
                        background: "var(--cream)",
                        padding: "0.15rem 0.5rem",
                        borderRadius: 10,
                        flexShrink: 0,
                      }}
                    >
                      {blogPosts.filter((p) => p.category === cat).length}
                    </span>
                  </button>
                ))}
            </div>
          </div>
        </aside>
      </div>

      <NewsletterStrip />

      <style>{`
        .article-row:hover .article-title { color: var(--gold) !important; }
        @media (max-width: 900px) {
          .blog-layout { grid-template-columns: 1fr !important; }
          aside { display: none; }
        }
      `}</style>
    </>
  );
}
