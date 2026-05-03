import type { Metadata } from "next";
import { Play, Clock, BookOpen, Calendar } from "lucide-react";
import { sermons } from "@/lib/data";
import { NewsletterStrip } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Listen to and watch sermons by Dr. Joshua Owoeye of CAC Miracle Centre — expository preaching on holiness, character, and godly living.",
};

const sermonCategories = ["All", "Holiness", "Character", "Word of God", "Prayer", "Leadership", "Discipleship"];

export default function SermonsPage() {
  const latest = sermons[0];
  const rest = sermons.slice(1);

  return (
    <>
      {/* ── HEADER ──────────────────────────────────── */}
      <div
        style={{
          background: "var(--cream)",
          padding: "6rem 2rem 4rem",
          paddingTop: "calc(var(--nav-h) + 4rem)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>Audio & Video</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--ink)",
              }}
            >
              Sermon <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Archive</em>
            </h1>
            <p className="body-text" style={{ maxWidth: 400 }}>
              Listen to and watch expository messages by Dr. Joshua Owoeye — delivered with conviction and grounded in Scripture.
            </p>
          </div>
        </div>
      </div>

      {/* ── LATEST SERMON ───────────────────────────── */}
      <section className="section-wrap">
        <div className="section-inner">
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Latest Message</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", background: "var(--border)" }} className="latest-grid">
            {/* Video placeholder */}
            <div
              style={{
                background: "var(--ink)",
                aspectRatio: "16/9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1rem",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(184,147,58,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(184,147,58,0.05) 1px,transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <Play size={24} fill="white" color="white" style={{ marginLeft: 3 }} />
              </div>
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", zIndex: 1, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Watch Sermon
              </p>
            </div>

            {/* Details */}
            <div style={{ background: "var(--cream)", padding: "3rem" }}>
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
                  marginBottom: "1rem",
                  fontWeight: 500,
                }}
              >
                {latest.category}
              </span>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.8rem",
                  fontWeight: 500,
                  lineHeight: 1.25,
                  color: "var(--ink)",
                  marginBottom: "0.75rem",
                }}
              >
                {latest.title}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {latest.description}
              </p>
              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", color: "var(--ink-faint)" }}>
                  <BookOpen size={13} /> {latest.scripture}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", color: "var(--ink-faint)" }}>
                  <Clock size={13} /> {latest.duration}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", color: "var(--ink-faint)" }}>
                  <Calendar size={13} /> {new Date(latest.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </span>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <button className="btn-gold" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Play size={14} /> Listen Now
                </button>
                <button className="btn-outline">Download MP3</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER TABS ─────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--warm-white)",
          padding: "0 2rem",
          overflowX: "auto",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex" }}>
          {sermonCategories.map((cat, i) => (
            <button
              key={cat}
              style={{
                padding: "1rem 1.1rem",
                fontSize: "0.76rem",
                letterSpacing: "0.04em",
                color: i === 0 ? "var(--gold)" : "var(--ink-muted)",
                background: "none",
                border: "none",
                borderBottom: i === 0 ? "2px solid var(--gold)" : "2px solid transparent",
                cursor: "pointer",
                fontFamily: "var(--sans)",
                whiteSpace: "nowrap",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── SERMON GRID ─────────────────────────────── */}
      <section className="section-wrap section-cream">
        <div className="section-inner">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5px", background: "var(--border)" }} className="sermon-grid">
            {rest.map((sermon) => (
              <div
                key={sermon.id}
                style={{ background: "var(--warm-white)", padding: "2rem", display: "flex", gap: "1.5rem" }}
              >
                {/* Play button */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "var(--gold-pale)",
                    border: "1px solid var(--gold-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    cursor: "pointer",
                    transition: "background var(--transition)",
                  }}
                  className="play-btn"
                >
                  <Play size={16} color="var(--gold)" fill="var(--gold)" style={{ marginLeft: 2 }} />
                </div>

                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500 }}>
                    {sermon.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      color: "var(--ink)",
                      margin: "0.4rem 0 0.5rem",
                    }}
                  >
                    {sermon.title}
                  </h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--ink-muted)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    {sermon.description}
                  </p>
                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.72rem", color: "var(--ink-faint)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                      <BookOpen size={11} /> {sermon.scripture}
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "var(--ink-faint)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                      <Clock size={11} /> {sermon.duration}
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "var(--ink-faint)" }}>
                      {new Date(sermon.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", paddingTop: "2.5rem" }}>
            <button className="btn-outline" style={{ padding: "0.85rem 2.5rem" }}>
              Load More Sermons
            </button>
          </div>
        </div>
      </section>

      <NewsletterStrip />

      <style>{`
        .play-btn:hover { background: var(--gold-light) !important; }
        @media (max-width: 900px) {
          .latest-grid { grid-template-columns: 1fr !important; }
          .sermon-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
