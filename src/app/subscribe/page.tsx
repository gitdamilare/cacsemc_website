import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import { BlogCard } from "@/components/ui";
import { SubscribeForm, GoldBannerForm } from "@/components/ui/Forms";

export const metadata: Metadata = {
  title: "Subscribe",
  description:
    "Subscribe to receive new teachings and articles by Dr. Joshua Owoeye directly in your inbox.",
};

const benefits = [
  { icon: "📖", title: "New Teachings First", desc: "Be the first to receive every new article and teaching the moment it's published." },
  { icon: "✉", title: "Delivered to Your Inbox", desc: "No social media noise. Just deep, scripture-grounded content — delivered quietly." },
  { icon: "🙏", title: "Weekly Prayer Focus", desc: "Receive a scripture and prayer focus each week to anchor your spiritual life." },
  { icon: "📅", title: "Church Updates", desc: "Stay informed about upcoming events, services, and ministry announcements." },
];

export default function SubscribePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────── */}
      <div
        style={{
          background: "var(--deep)",
          padding: "6rem 2rem 5rem",
          paddingTop: "calc(var(--nav-h) + 4rem)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(184,147,58,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(184,147,58,0.04) 1px,transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, rgba(44,26,14,0.75) 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500, marginBottom: "1.5rem" }}>
            <span style={{ width: 24, height: 1, background: "var(--gold)", opacity: 0.5, display: "inline-block" }} />
            Stay Connected
            <span style={{ width: 24, height: 1, background: "var(--gold)", opacity: 0.5, display: "inline-block" }} />
          </p>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 400,
              lineHeight: 1.08,
              color: "white",
              marginBottom: "1.25rem",
            }}
          >
            Receive New{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Teachings</em>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, maxWidth: 480, margin: "0 auto 3rem" }}>
            Join thousands who receive Dr. Owoeye's scripture-grounded teachings directly in their inbox. No spam. Just truth.
          </p>

          {/* Subscribe form */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 4,
              padding: "2.5rem",
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            <SubscribeForm />
          </div>
        </div>
      </div>

      {/* ── BENEFITS ────────────────────────────────── */}
      <section className="section-wrap">
        <div className="section-inner">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 3rem" }}>
            <p className="eyebrow eyebrow-center" style={{ marginBottom: "0.6rem" }}>What You&apos;ll Receive</p>
            <h2 className="section-heading">
              Why{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Subscribe</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5px", background: "var(--border)" }} className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} style={{ background: "var(--warm-white)", padding: "2.5rem 2rem", textAlign: "center" }}>
                <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>{b.icon}</p>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 500, color: "var(--ink)", marginBottom: "0.6rem" }}>{b.title}</h3>
                <p style={{ fontSize: "0.84rem", color: "var(--ink-muted)", lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAMPLE CONTENT ──────────────────────────── */}
      <section className="section-wrap section-cream">
        <div className="section-inner">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>Sample Content</p>
              <h2 className="section-heading">
                What You'll{" "}
                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Be Reading</em>
              </h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5px", background: "var(--border)" }} className="sample-grid">
            {blogPosts.slice(0, 3).map((p) => (
              <BlogCard key={p.slug} post={p} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <div
        style={{
          background: "var(--gold)",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "2.2rem",
              fontWeight: 400,
              color: "white",
              marginBottom: "0.75rem",
            }}
          >
            Don't Miss the Next Teaching
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "2rem" }}>
            New articles are published regularly. Subscribe now and be the first to read them.
          </p>
          <GoldBannerForm />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .benefits-grid { grid-template-columns: repeat(2,1fr) !important; }
          .sample-grid   { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
