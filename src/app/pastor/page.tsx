import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { BlogCard, ScriptureBanner, NewsletterStrip } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Pastor",
  description:
    "Learn about Dr. Joshua Owoeye, Spiritual Leader of CAC Miracle Centre — his calling, ministry, and teachings.",
};

const highlights = [
  { num: "25+", label: "Years in Ministry" },
  { num: "150+", label: "Teachings Written" },
  { num: "1000s", label: "Lives Impacted" },
  { num: "10+", label: "Ministry Focus Areas" },
];

const focusAreas = [
  "Biblical Teaching & Expository Ministry",
  "Leadership Development & Ministerial Training",
  "Discipleship & Spiritual Growth",
  "Youth & Next Generation Formation",
  "Christian Ethics & Godly Living",
];

export default function PastorPage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* ── HERO ────────────────────────────────────── */}
      <div
        style={{
          background: "var(--cream)",
          padding: "6rem 2rem 0",
          paddingTop: "calc(var(--nav-h) + 4rem)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "360px 1fr",
            gap: "1.5px",
            background: "var(--border)",
          }}
          className="pastor-hero-grid"
        >
          {/* Photo panel */}
          <div
            style={{
              background: "var(--cream)",
              padding: "4rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: 160,
                height: 160,
                borderRadius: "50%",
                background: "var(--gold-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--serif)",
                fontSize: "4.5rem",
                color: "var(--gold)",
                fontStyle: "italic",
                fontWeight: 600,
                border: "4px solid var(--gold-pale)",
              }}
            >
              J
            </div>
            <div>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.7rem", fontWeight: 500, color: "var(--ink)", marginBottom: "0.3rem" }}>
                Dr. Joshua Owoeye
              </p>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500, marginBottom: "0.25rem" }}>
                Spiritual Leader
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--ink-faint)" }}>
                CAC Miracle Centre
              </p>
            </div>
            <div style={{ width: "100%", height: 1, background: "var(--border-soft)" }} />
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "0.95rem",
                fontStyle: "italic",
                color: "var(--gold)",
                lineHeight: 1.6,
                opacity: 0.85,
              }}
            >
              "Committed to teaching the Scriptures without compromise, living by the truth proclaimed, and serving God faithfully."
            </p>
          </div>

          {/* Stats + intro */}
          <div
            style={{
              background: "var(--warm-white)",
              padding: "4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {/* Stats row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "1.5px",
                background: "var(--border)",
              }}
              className="stats-grid"
            >
              {highlights.map((h) => (
                <div key={h.num} style={{ background: "var(--cream)", padding: "1.25rem 1rem", textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 600, color: "var(--ink)", lineHeight: 1 }}>{h.num}</p>
                  <p style={{ fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-faint)", marginTop: "0.25rem" }}>{h.label}</p>
                </div>
              ))}
            </div>

            <p className="body-text">
              Dr. Joshua Owoeye is the Spiritual Leader of CAC Miracle Centre and a committed minister of the full gospel of Jesus Christ. With decades of ministry experience, his life's work has been teaching the whole counsel of God's Word — with conviction, clarity, and pastoral compassion.
            </p>
            <p className="body-text">
              His passion is the making of true disciples: believers who are not just spiritually enthusiastic, but deeply grounded in Scripture, holy in character, and effective in service to God and neighbour. He believes the Church's greatest need today is not more entertainment, but more truth.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/teachings" className="btn-ink">Read His Teachings →</Link>
              <Link href="/contact" className="btn-outline">Contact the Church</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── FULL BIO ────────────────────────────────── */}
      <section className="section-wrap">
        <div className="section-inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }} className="two-col">
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Ministry Calling</p>
              <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>
                A Life Given to{" "}
                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>the Word</em>
              </h2>
              <p className="body-text" style={{ marginBottom: "1.25rem" }}>
                From an early age, Dr. Owoeye felt a deep call to preach the uncompromised Word of God. This calling led him into years of diligent study of the Scriptures, pastoral training, and hands-on ministry.
              </p>
              <p className="body-text" style={{ marginBottom: "1.25rem" }}>
                He is known for his expository teaching style — going through Scripture systematically, explaining what God said, what it meant, and what it demands of those who believe it. He refuses to soften the message of the Bible for popularity or applause.
              </p>
              <p className="body-text" style={{ marginBottom: "1.25rem" }}>
                Dr. Owoeye is also a prolific writer. His articles on character, holiness, sin, leadership, and church accountability have been read by thousands across Nigeria and the diaspora. Each piece is structured, scripture-rich, and practically applied.
              </p>
              <p className="body-text">
                As Spiritual Leader of CAC Miracle Centre, he provides spiritual oversight, expository preaching, leadership development, and the overall direction of the ministry — all under the motto of the Christ Apostolic Church: <em style={{ fontFamily: "var(--serif)", color: "var(--gold)" }}>&quot;One Fold, One Shepherd.&quot;</em>
              </p>
            </div>

            <div>
              <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Ministry Focus Areas</p>
              <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>
                Areas of{" "}
                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Service</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: "2.5rem" }}>
                {focusAreas.map((area, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem 0",
                      borderBottom: i < focusAreas.length - 1 ? "1px solid var(--border-soft)" : "none",
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "var(--gold)",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: "0.95rem", color: "var(--ink-muted)" }}>{area}</span>
                  </div>
                ))}
              </div>

              {/* Expected outcomes */}
              <div
                style={{
                  background: "var(--cream)",
                  borderLeft: "3px solid var(--gold)",
                  padding: "1.5rem 2rem",
                  borderRadius: "0 4px 4px 0",
                }}
              >
                <p style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500, marginBottom: "0.75rem" }}>
                  Ministry Outcomes
                </p>
                {[
                  "Spiritually mature believers",
                  "Biblically grounded leaders",
                  "Churches built on truth, not trends",
                  "Lives transformed by obedience to God's Word",
                  "A generation committed to righteousness",
                ].map((o, i) => (
                  <p key={i} style={{ fontSize: "0.88rem", color: "var(--ink-muted)", lineHeight: 1.6, marginBottom: "0.4rem" }}>
                    — {o}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScriptureBanner
        text="Preach the word; be ready in season and out of season; reprove, rebuke, and exhort, with complete patience and teaching."
        reference="2 Timothy 4:2"
      />

      {/* ── RECENT TEACHINGS ────────────────────────── */}
      <section className="section-wrap section-cream">
        <div className="section-inner">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Recent Writings</p>
              <h2 className="section-heading">Latest from Dr. Owoeye</h2>
            </div>
            <Link href="/teachings" className="btn-ghost">View all teachings →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5px", background: "var(--border)" }} className="teachings-grid">
            {recentPosts.map((p) => (
              <BlogCard key={p.slug} post={p} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      <NewsletterStrip />

      <style>{`
        @media (max-width: 1000px) {
          .pastor-hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .teachings-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
