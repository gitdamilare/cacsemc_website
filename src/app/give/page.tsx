import type { Metadata } from "next";
import { ScriptureBanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support the ministry of CAC Miracle Centre through generous, cheerful giving — advancing the Kingdom of God.",
};

const givingReasons = [
  {
    title: "Support the Ministry",
    desc: "Your giving enables sound biblical teaching, discipleship programmes, and the equipping of leaders for God's Kingdom.",
  },
  {
    title: "Reach the Lost",
    desc: "Evangelism and outreach are central to our mission. Every gift helps us take the gospel beyond our walls.",
  },
  {
    title: "Build Community",
    desc: "From youth programmes to women's fellowship, your giving builds the infrastructure of genuine Christian community.",
  },
  {
    title: "Care for Others",
    desc: "We believe in practical love. Your generosity helps us care for those in need within and around our congregation.",
  },
];

const bankDetails = [
  { label: "Account Name", value: "CAC Miracle Centre" },
  { label: "Bank Name", value: "[Your Bank Name]" },
  { label: "Account Number", value: "[Account Number]" },
  { label: "Sort Code", value: "[Sort Code / Routing]" },
];

export default function GivePage() {
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
            Generous Giving
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
            Give to the{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Kingdom</em>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, maxWidth: 520, margin: "0 auto" }}>
            Giving is an act of worship. Your generosity enables this ministry to preach the Word, make disciples, and serve our community — to the glory of God.
          </p>
        </div>
      </div>

      <ScriptureBanner
        text="Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
        reference="2 Corinthians 9:7"
      />

      {/* ── WHY GIVE ────────────────────────────────── */}
      <section className="section-wrap">
        <div className="section-inner">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 3rem" }}>
            <p className="eyebrow eyebrow-center" style={{ marginBottom: "0.6rem" }}>Your Impact</p>
            <h2 className="section-heading">
              Why Your Gift{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Matters</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5px", background: "var(--border)" }} className="giving-grid">
            {givingReasons.map((r, i) => (
              <div key={i} style={{ background: "var(--warm-white)", padding: "2.5rem" }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 3,
                    background: "var(--gold-pale)",
                    border: "1px solid var(--gold-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontSize: "1.1rem",
                    color: "var(--gold)",
                    marginBottom: "1rem",
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--ink)", marginBottom: "0.5rem" }}>{r.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-muted)", lineHeight: 1.75 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO GIVE ─────────────────────────────── */}
      <section className="section-wrap section-cream">
        <div className="section-inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", background: "var(--border)" }} className="how-grid">
            {/* Bank Transfer */}
            <div style={{ background: "var(--cream)", padding: "3rem" }}>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>Bank Transfer</p>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", fontWeight: 500, color: "var(--ink)", marginBottom: "1.5rem" }}>
                Give via Bank Transfer
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {bankDetails.map((d, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.85rem 0",
                      borderBottom: i < bankDetails.length - 1 ? "1px solid var(--border-soft)" : "none",
                    }}
                  >
                    <span style={{ fontSize: "0.75rem", color: "var(--ink-faint)", letterSpacing: "0.04em" }}>{d.label}</span>
                    <span style={{ fontSize: "0.9rem", color: "var(--ink)", fontWeight: 500 }}>{d.value}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--ink-faint)", lineHeight: 1.65, marginTop: "1.25rem" }}>
                Please use your name as the payment reference so we can acknowledge your giving.
              </p>
            </div>

            {/* In Person / Envelope */}
            <div style={{ background: "var(--ink)", padding: "3rem" }}>
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500, marginBottom: "1rem" }}>
                During Service
              </p>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", fontWeight: 400, color: "white", marginBottom: "1.25rem" }}>
                Give in Person
              </h3>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Offering envelopes are available at the entrance to all Sunday services and midweek meetings. Our ushers will guide you during the offertory moment.
              </p>
              <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: "1.5rem" }} />
              <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--gold)", lineHeight: 1.6 }}>
                "Honour the Lord with your wealth and with the firstfruits of all your produce."
              </p>
              <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", marginTop: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Proverbs 3:9
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TITHING EXPLANATION ──────────────────────── */}
      <section className="section-wrap">
        <div className="section-inner" style={{ maxWidth: 760 }}>
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Biblical Teaching on Giving</p>
          <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>
            What the{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Bible Says</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5px", background: "var(--border)" }}>
            {[
              { ref: "Malachi 3:10", text: "Bring the full tithe into the storehouse... and thereby put me to the test, says the Lord of hosts, if I will not open the windows of heaven for you." },
              { ref: "Luke 21:1–4", text: "Jesus commended the widow who gave all she had — not the amount, but the heart behind it." },
              { ref: "Matthew 6:19–21", text: "Store up for yourselves treasures in heaven... For where your treasure is, there your heart will be also." },
            ].map((s, i) => (
              <div key={i} style={{ background: "var(--cream)", padding: "1.75rem 2rem", borderLeft: "3px solid var(--gold)" }}>
                <p style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500, marginBottom: "0.5rem" }}>{s.ref}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--ink-muted)", lineHeight: 1.7 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .giving-grid { grid-template-columns: 1fr !important; }
          .how-grid    { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
