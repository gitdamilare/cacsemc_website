"use client";

import { useState, useEffect, useRef } from "react";
import type { BlogPost } from "@/types";

/* ── Simple markdown-to-JSX renderer ────────────────────────── */
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) { i++; continue; }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          id={line.replace("## ", "").toLowerCase().replace(/\s+/g, "-")}
          style={{
            fontFamily: "var(--serif)",
            fontSize: "1.8rem",
            fontWeight: 500,
            lineHeight: 1.25,
            color: "var(--ink)",
            margin: "3rem 0 1rem",
            paddingTop: "1rem",
            borderTop: "1px solid var(--border-soft)",
          }}
        >
          {line.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith("**Lesson ")) {
      // Parse lesson block
      const lessonLines: string[] = [];
      while (i < lines.length && lines[i].trim() !== "") {
        lessonLines.push(lines[i].trim());
        i++;
      }
      const titleMatch = lessonLines[0].match(/\*\*(.+?)\*\*/);
      const title = titleMatch ? titleMatch[1] : lessonLines[0];
      const rest = lessonLines.slice(1);

      elements.push(
        <div
          key={i}
          style={{
            margin: "2rem 0",
            padding: "1.75rem 2rem",
            background: "var(--cream)",
            borderRadius: 4,
            borderLeft: "3px solid var(--gold)",
            position: "relative",
          }}
        >
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "0.75rem",
            }}
          >
            {title}
          </p>
          {rest.map((r, j) => {
            const cleaned = r.replace(/\*([^*]+)\*/g, "$1");
            const isExample = r.startsWith("*Example:*") || r.startsWith("*Example:");
            const isApplication = r.startsWith("*Application:*") || r.startsWith("*Application:");

            if (isApplication) {
              return (
                <div
                  key={j}
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--ink)",
                    padding: "0.6rem 0.75rem",
                    background: "var(--warm-white)",
                    borderRadius: 3,
                    marginTop: "0.5rem",
                  }}
                >
                  <span style={{ fontWeight: 400, color: "var(--gold)", fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.2rem" }}>Apply</span>
                  {cleaned.replace("*Application:*", "").replace("*Application:", "").trim()}
                </div>
              );
            }
            return (
              <p
                key={j}
                style={{
                  fontSize: "0.9rem",
                  color: isExample ? "var(--ink-muted)" : "var(--ink)",
                  fontStyle: isExample ? "italic" : "normal",
                  lineHeight: 1.7,
                  marginBottom: "0.4rem",
                }}
              >
                {cleaned.replace("*Example:*", "Example:").replace("*Example:", "Example:").trim()}
              </p>
            );
          })}
        </div>
      );
      continue;
    }

    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", fontWeight: 400, lineHeight: 1.2, color: "var(--ink)", marginBottom: "1rem" }}>
          {line.replace("# ", "")}
        </h1>
      );
      i++; continue;
    }

    // Regular paragraph — handle inline bold/italic
    const parsed = line
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");

    elements.push(
      <p
        key={i}
        style={{ marginBottom: "1.5rem", lineHeight: 1.85 }}
        dangerouslySetInnerHTML={{ __html: parsed }}
      />
    );
    i++;
  }

  return elements;
}

/* ── TOC extractor ───────────────────────────────────────────── */
function extractTOC(content: string) {
  return content
    .split("\n")
    .filter((l) => l.trim().startsWith("## "))
    .map((l) => {
      const text = l.replace("## ", "").trim();
      return { text, id: text.toLowerCase().replace(/\s+/g, "-") };
    });
}

/* ── Main client component ───────────────────────────────────── */
export default function BlogPostClient({ post }: { post: BlogPost }) {
  const [progress, setProgress] = useState(0);
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg">("md");
  const [activeToc, setActiveToc] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  const toc = post.content ? extractTOC(post.content) : [];

  const fontSizeMap = { sm: "1rem", md: "1.15rem", lg: "1.3rem" };

  useEffect(() => {
    const onScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.min(100, Math.max(0, (scrolled / total) * 100)));

      // Update active TOC
      const headings = el.querySelectorAll("h2[id]");
      let current = "";
      headings.forEach((h) => {
        if (window.scrollY >= (h as HTMLElement).offsetTop - 140) {
          current = h.id;
        }
      });
      setActiveToc(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 3,
          background: "var(--border-soft)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "var(--gold)",
            width: `${progress}%`,
            transition: "width 0.1s linear",
          }}
        />
      </div>

      {/* Layout: content + sidebar */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 260px",
          gap: "5rem",
          alignItems: "start",
        }}
        className="post-layout"
      >
        {/* Article content */}
        <div
          ref={contentRef}
          style={{
            padding: "3.5rem 0",
            fontFamily: "var(--serif)",
            fontSize: fontSizeMap[fontSize],
            lineHeight: 1.85,
            color: "var(--ink)",
          }}
        >
          {/* Font size controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "2.5rem",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid var(--border-soft)",
            }}
          >
            <span style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)" }}>Text size:</span>
            {(["sm", "md", "lg"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFontSize(s)}
                style={{
                  padding: "0.3rem 0.6rem",
                  border: "1px solid",
                  borderColor: fontSize === s ? "var(--gold)" : "var(--border)",
                  borderRadius: 2,
                  background: fontSize === s ? "var(--gold-pale)" : "none",
                  color: fontSize === s ? "var(--gold)" : "var(--ink-muted)",
                  fontFamily: "var(--sans)",
                  fontSize: s === "sm" ? "0.8rem" : s === "md" ? "0.95rem" : "1.1rem",
                  cursor: "pointer",
                  transition: "all var(--transition)",
                }}
              >
                A
              </button>
            ))}
          </div>

          {post.content ? (
            renderContent(post.content)
          ) : (
            <>
              <p style={{ marginBottom: "1.5rem" }}>
                This teaching by Dr. Joshua Owoeye covers{" "}
                {post.lessonCount ? `${post.lessonCount} key lessons` : "important biblical truths"} grounded in Scripture, with practical application for daily living.
              </p>

              {/* Key insight block */}
              <div
                style={{
                  margin: "2.5rem 0",
                  padding: "1.5rem 2rem",
                  border: "1px solid var(--gold-light)",
                  borderRadius: 4,
                  background: "var(--gold-pale)",
                }}
              >
                <p style={{ fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500, marginBottom: "0.5rem" }}>Key Truth</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", lineHeight: 1.6, color: "var(--ink)", margin: 0 }}>
                  {post.excerpt}
                </p>
              </div>

              {/* Scripture */}
              <div
                style={{
                  margin: "2.5rem 0",
                  padding: "2rem 2.5rem",
                  background: "var(--cream)",
                  borderRadius: 4,
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <span style={{ fontFamily: "var(--serif)", fontSize: "4rem", color: "var(--gold)", opacity: 0.15, position: "absolute", top: "-1rem", left: "1.5rem", lineHeight: 1 }}>&quot;</span>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontStyle: "italic", lineHeight: 1.6, color: "var(--ink)", marginBottom: "0.75rem" }}>
                  But seek first the kingdom of God and His righteousness, and all these things will be added to you.
                </p>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500 }}>Matthew 6:33</p>
              </div>

              <p style={{ marginBottom: "1.5rem", color: "var(--ink-muted)", fontSize: "0.95rem", textAlign: "center", fontStyle: "italic" }}>
                Full content of this teaching available in print or on request.
              </p>

              {/* Closing prayer */}
              <div
                style={{
                  margin: "3rem 0",
                  padding: "2.5rem",
                  background: "var(--ink)",
                  borderRadius: 4,
                  textAlign: "center",
                }}
              >
                <h3 style={{ fontFamily: "var(--sans)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500, marginBottom: "1rem" }}>Closing Prayer</h3>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
                  "Lord, let Your Word transform my life from the inside out.<br />
                  Let my character reflect Christ in all I do.<br />
                  In Jesus' Name. Amen."
                </p>
              </div>
            </>
          )}
        </div>

        {/* Sticky sidebar */}
        <aside style={{ paddingTop: "3.5rem", position: "sticky", top: "calc(var(--nav-h) + 80px)" }} className="post-sidebar">
          {/* Progress */}
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: "0.5rem" }}>
              Reading progress
            </p>
            <div style={{ height: 2, background: "var(--border)", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: "100%", background: "var(--gold)", width: `${progress}%`, transition: "width 0.2s" }} />
            </div>
          </div>

          {/* TOC */}
          {toc.length > 0 && (
            <div style={{ marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)", fontWeight: 500, marginBottom: "1rem" }}>
                In this article
              </p>
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  style={{
                    display: "block",
                    padding: "0.45rem 0.75rem",
                    fontSize: "0.82rem",
                    lineHeight: 1.4,
                    color: activeToc === item.id ? "var(--gold)" : "var(--ink-muted)",
                    borderLeft: `2px solid ${activeToc === item.id ? "var(--gold)" : "transparent"}`,
                    textDecoration: "none",
                    transition: "all var(--transition)",
                  }}
                >
                  {item.text}
                </a>
              ))}
            </div>
          )}

          {/* Divider */}
          <div style={{ height: 1, background: "var(--border-soft)", margin: "1.5rem 0" }} />

          {/* Share */}
          <div>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)", fontWeight: 500, marginBottom: "0.75rem" }}>
              Share this teaching
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {["Share on X (Twitter)", "Share on WhatsApp", "Copy link"].map((s) => (
                <button
                  key={s}
                  className="btn-outline"
                  style={{ padding: "0.5rem 0.85rem", fontSize: "0.75rem", textAlign: "left", justifyContent: "flex-start" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .post-layout { grid-template-columns: 1fr !important; }
          .post-sidebar { display: none !important; }
        }
      `}</style>
    </>
  );
}
