import type { Metadata } from "next";
import Link from "next/link";
import { serviceTimes } from "@/lib/data";
import { ServiceCard, NewsletterStrip } from "@/components/ui";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description:
    "Everything you need to know before your first visit to CAC Miracle Centre — service times, what to expect, children's ministry, and more.",
};

const expectations = [
  {
    title: "Warm Welcome",
    desc: "Our welcome team will greet you at the door. You'll feel at home from the moment you arrive. No pressure, no performance — just people glad you came.",
  },
  {
    title: "Genuine Worship",
    desc: "Expect Spirit-filled praise and heartfelt worship. Our worship is led with passion and reverence — honouring God in song and prayer.",
  },
  {
    title: "Expository Preaching",
    desc: "The Bible is opened and taught faithfully. Dr. Owoeye preaches verse-by-verse, applying Scripture to everyday life with clarity and depth.",
  },
  {
    title: "Authentic Community",
    desc: "People from all walks of life who love God. After service, stay for fellowship, prayer, and genuine connection.",
  },
];

const faqs = [
  { q: "What should I wear?", a: "Come as you are. Dress comfortably and appropriately. We don't have a dress code — we want you to feel at ease." },
  { q: "How long is the service?", a: "Sunday services typically run 90 minutes to 2 hours, including worship, prayer, and the message." },
  { q: "Is there a programme for children?", a: "Yes! We have a dedicated Children's Church that runs parallel to the 10:30 AM service — age-appropriate, Bible-centred, and Spirit-led." },
  { q: "Where do I park?", a: "Parking is available at the church premises. Ushers will direct you on arrival." },
  { q: "Do I need to register?", a: "No registration needed. Simply show up — we'll take it from there." },
  { q: "What if I have questions?", a: "Our team is always happy to help. You can also contact us before your visit via our contact page." },
];

export default function VisitPage() {
  return (
    <>
      {/* ── HEADER ──────────────────────────────────── */}
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
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500, marginBottom: "1.5rem" }}>
            <span style={{ width: 24, height: 1, background: "var(--gold)", opacity: 0.5, display: "inline-block" }} />
            We're Expecting You
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
            Plan Your{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>First Visit</em>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, maxWidth: 500, margin: "0 auto 3rem" }}>
            Come as you are. There's a place for you here. Here's everything you need to know before you arrive.
          </p>
          <Link href="/contact" className="btn-gold">
            Get in Touch First
          </Link>
        </div>
      </div>

      {/* ── SERVICE TIMES ───────────────────────────── */}
      <section className="section-wrap section-cream">
        <div className="section-inner">
          <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>When to Come</p>
          <h2 className="section-heading" style={{ marginBottom: "0.75rem" }}>
            Services &{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Meeting Times</em>
          </h2>
          <p className="body-text" style={{ maxWidth: 520, marginBottom: "3rem" }}>
            We gather multiple times each week for worship, study, and prayer. Come on the Sunday that works for you.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5px", background: "var(--border)" }} className="svc-grid">
            {serviceTimes.map((s, i) => (
              <ServiceCard key={i} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ──────────────────────────── */}
      <section className="section-wrap">
        <div className="section-inner">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 3rem" }}>
            <p className="eyebrow eyebrow-center" style={{ marginBottom: "0.6rem" }}>What to Expect</p>
            <h2 className="section-heading">
              A Sunday at{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Miracle Centre</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5px", background: "var(--border)" }} className="expect-grid">
            {expectations.map((e, i) => (
              <div key={i} style={{ background: "var(--warm-white)", padding: "2.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "var(--gold-pale)",
                      border: "1px solid var(--gold-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--serif)",
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                      color: "var(--gold)",
                      fontWeight: 600,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--ink)" }}>{e.title}</h3>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-muted)", lineHeight: 1.75 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHILDREN ────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "5rem 2rem",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="two-col">
          <div>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>For Families</p>
            <h2 className="section-heading" style={{ marginBottom: "1.25rem" }}>
              Children &{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Youth Church</em>
            </h2>
            <p className="body-text" style={{ marginBottom: "1.25rem" }}>
              Your children are fully welcome here. We have a dedicated Children's Church that runs parallel to the 10:30 AM Sunday service — age-appropriate teaching, worship, and community for the next generation.
            </p>
            <p className="body-text" style={{ marginBottom: "2rem" }}>
              Our team is trained, caring, and committed to helping children grow in their faith from an early age. Parents can worship knowing their children are safe, engaged, and learning about Jesus.
            </p>
            <div style={{ display: "flex", flex: 1, flexDirection: "column", gap: "0.6rem" }}>
              {["Safe, supervised environment", "Bible-centred teaching", "Age-appropriate worship", "Available during 10:30 AM Sunday service"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.9rem", color: "var(--ink-muted)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              background: "var(--ink)",
              padding: "3rem",
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <p style={{ fontFamily: "var(--serif)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>A Note to Parents</p>
            <p style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontStyle: "italic", color: "white", lineHeight: 1.6 }}>
              "Train up a child in the way he should go; even when he is old he will not depart from it."
            </p>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
              Proverbs 22:6
            </p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
            <p style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
              At CAC Miracle Centre, we believe that raising children in the faith is a sacred responsibility. Our youth programmes are designed to complement what parents teach at home.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section className="section-wrap">
        <div className="section-inner" style={{ maxWidth: 760 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="eyebrow eyebrow-center" style={{ marginBottom: "0.6rem" }}>Common Questions</p>
            <h2 className="section-heading">
              You May Be <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Wondering…</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5px", background: "var(--border)" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "var(--warm-white)", padding: "1.75rem 2rem" }}>
                <p style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--ink)", marginBottom: "0.5rem" }}>
                  {faq.q}
                </p>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-muted)", lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION CTA ────────────────────────────── */}
      <div
        style={{
          background: "var(--gold)",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "2.5rem",
              fontWeight: 400,
              color: "white",
              marginBottom: "0.75rem",
            }}
          >
            We'd Love to See You Sunday
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", marginBottom: "2rem", lineHeight: 1.7 }}>
            No matter where you are in your faith journey, there is a place for you at Miracle Centre.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "0.9rem 2.5rem",
              background: "var(--ink)",
              color: "white",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              borderRadius: 2,
              textDecoration: "none",
            }}
          >
            Get Directions & Contact →
          </Link>
        </div>
      </div>

      <NewsletterStrip />

      <style>{`
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .expect-grid { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  );
}
