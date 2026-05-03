import type { Metadata } from "next";
import Link from "next/link";
import { beliefs } from "@/lib/data";
import { ScriptureBanner, NewsletterStrip } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Christ Apostolic Church Miracle Centre — our mission, vision, core beliefs, and heritage.",
};

const mission = [
  {
    label: "Mission",
    icon: "M",
    text: "To glorify God by faithfully teaching the full counsel of His Word, making disciples of Jesus Christ, equipping believers for godly living, developing righteous leaders, and advancing the Kingdom of God through sound doctrine, obedient faith, and Christlike character.",
  },
  {
    label: "Vision",
    icon: "V",
    text: "To be a Spirit-filled, Word-grounded community that raises disciples who reflect Christ in every area of life — impacting our city, our nation, and the nations beyond.",
  },
  {
    label: "Values",
    icon: "V",
    text: "The Word of God · Prayer & the Holy Spirit · Holiness & Character · Community & Belonging · Discipleship & Service",
  },
];

const scriptural = [
  { ref: "Matthew 28:19–20", text: "Making disciples of all nations" },
  { ref: "2 Timothy 2:15", text: "Teaching the Word accurately" },
  { ref: "Ephesians 4:11–13", text: "Equipping the saints" },
  { ref: "Acts 20:27", text: "Declaring the whole counsel of God" },
  { ref: "Colossians 1:28", text: "Presenting believers mature in Christ" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────── */}
      <div
        style={{
          background: "var(--cream)",
          padding: "6rem 2rem 5rem",
          paddingTop: "calc(var(--nav-h) + 4rem)",
          borderBottom: "1px solid var(--border)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p className="eyebrow eyebrow-center" style={{ marginBottom: "1rem" }}>
            Our Story
          </p>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--ink)",
              marginBottom: "1.25rem",
            }}
          >
            About{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              CAC Miracle Centre
            </em>
          </h1>
          <p className="body-text" style={{ maxWidth: 540, margin: "0 auto" }}>
            A Spirit-filled, Word-grounded congregation committed to worship,
            discipleship, and the transformation of lives through the gospel of
            Jesus Christ.
          </p>
        </div>
      </div>

      {/* ── WHO WE ARE ───────────────────────────────── */}
      <section className="section-wrap">
        <div className="section-inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }} className="two-col">
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Who We Are</p>
              <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>
                A Family Built on the{" "}
                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Word</em>
              </h2>
              <p className="body-text" style={{ marginBottom: "1.25rem" }}>
                Christ Apostolic Church (CAC) Miracle Centre is a vibrant,
                Spirit-filled congregation rooted in the full gospel of Jesus
                Christ — His power to save, heal, deliver, and transform every
                life.
              </p>
              <p className="body-text" style={{ marginBottom: "1.25rem" }}>
                We are part of the Christ Apostolic Church, a movement born from
                the Aladura revival of faith in Nigeria — a tradition of fervent
                prayer, total dependence on the Holy Spirit, and unwavering
                commitment to the Word of God.
              </p>
              <p className="body-text" style={{ marginBottom: "2rem" }}>
                At Miracle Centre, sound biblical doctrine, passionate worship,
                and genuine community come together under the banner:{" "}
                <em style={{ fontFamily: "var(--serif)", color: "var(--gold)" }}>
                  "One Fold, One Shepherd"
                </em>{" "}
                (John 10:16).
              </p>
              <Link href="/visit" className="btn-ink">
                Plan a Visit →
              </Link>
            </div>

            {/* Mission / Vision / Values */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5px", background: "var(--border)" }}>
              {mission.map((m) => (
                <div key={m.label} style={{ background: "var(--cream)", padding: "2rem" }}>
                  <p
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      fontWeight: 500,
                      marginBottom: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 3,
                        background: "var(--gold-pale)",
                        border: "1px solid var(--gold-light)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--serif)",
                        fontStyle: "italic",
                        fontSize: "0.9rem",
                      }}
                    >
                      {m.icon}
                    </span>
                    {m.label}
                  </p>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-muted)", lineHeight: 1.75 }}>
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ScriptureBanner
        text="One Fold, One Shepherd. And I have other sheep that are not of this fold. I must bring them also, and they will listen to my voice."
        reference="John 10:16"
      />

      {/* ── BELIEFS ─────────────────────────────────── */}
      <section className="section-wrap section-cream" id="beliefs">
        <div className="section-inner">
          <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 3rem" }}>
            <p className="eyebrow eyebrow-center" style={{ marginBottom: "0.6rem" }}>
              Our Doctrine
            </p>
            <h2 className="section-heading" style={{ marginBottom: "0.75rem" }}>
              What We{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Believe</em>
            </h2>
            <p className="body-text">
              Our faith is anchored in the historic, apostolic, and Pentecostal
              tradition — built on the full truth of God's Word.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "1.5px",
              background: "var(--border)",
            }}
            className="beliefs-grid"
          >
            {beliefs.map((b, i) => (
              <div key={i} style={{ background: "var(--warm-white)", padding: "2.5rem 1.75rem" }}>
                <p style={{ fontFamily: "var(--serif)", fontSize: "2.2rem", color: "var(--gold)", fontStyle: "italic", opacity: 0.6, marginBottom: "1rem" }}>{b.glyph}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 500, color: "var(--ink)", marginBottom: "0.5rem" }}>{b.title}</p>
                <p style={{ fontSize: "0.82rem", color: "var(--ink-muted)", lineHeight: 1.7 }}>{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIBLICAL FOUNDATIONS ─────────────────────── */}
      <section className="section-wrap">
        <div className="section-inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="two-col">
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Biblical Foundation</p>
              <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>
                Anchored in{" "}
                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Scripture</em>
              </h2>
              <p className="body-text" style={{ marginBottom: "1.25rem" }}>
                Everything we do flows from the Word of God. Our teaching, our
                worship, our community, and our service to others — all of it is
                grounded in Scripture and measured by it.
              </p>
              <p className="body-text">
                We are committed to teaching the Scriptures without compromise,
                living by the truth we proclaim, and serving God faithfully until
                the work entrusted to us is complete.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {scriptural.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                    padding: "1.25rem 0",
                    borderBottom: i < scriptural.length - 1 ? "1px solid var(--border-soft)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      paddingTop: "0.15rem",
                      minWidth: 100,
                    }}
                  >
                    {s.ref}
                  </span>
                  <span style={{ fontSize: "0.92rem", color: "var(--ink-muted)", lineHeight: 1.6 }}>
                    {s.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterStrip />

      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .beliefs-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 560px) {
          .beliefs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
