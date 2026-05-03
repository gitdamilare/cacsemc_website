import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ScriptureBanner,
  WelcomeStrip,
  ServiceCard,
  BlogCard,
  NewsletterStrip,
  SectionHeader,
} from "@/components/ui";
import { SimpleContactForm } from "@/components/ui/Forms";
import { blogPosts, serviceTimes, beliefs, coreValues } from "@/lib/data";

export const metadata: Metadata = {
  title: "Christ Apostolic Church — Miracle Centre",
  description:
    "A Spirit-filled, Word-grounded community committed to worship, discipleship, and the transformation of lives through the gospel of Jesus Christ.",
};

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "var(--nav-h)",
          minHeight: "100vh",
          background: "var(--deep)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "linear-gradient(rgba(184,147,58,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(184,147,58,0.05) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            pointerEvents: "none",
          }}
        />
        {/* Vignette */}
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 80% 70% at 50% 50%,transparent 20%,rgba(44,26,14,0.75) 100%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative", zIndex: 1,
            padding: "4rem 2rem", maxWidth: 860,
          }}
        >
          {/* Logo */}
          {/* <div style={{ marginBottom: "2rem" }}>
            <Image
              src="/logo.jpg"
              alt="Christ Apostolic Church — Miracle Centre"
              width={100}
              height={100}
              style={{ borderRadius: "50%", border: "3px solid rgba(184,147,58,0.4)", objectFit: "cover" }}
              priority
            />
          </div> */}

          <p
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.75rem",
              fontSize: "0.78rem", letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--gold)", fontWeight: 500, marginBottom: "2rem",
            }}
          >
            <span style={{ width: 30, height: 1, background: "var(--gold)", opacity: 0.5, display: "inline-block" }} />
            Christ Apostolic Church · Miracle Centre
            <span style={{ width: 30, height: 1, background: "var(--gold)", opacity: 0.5, display: "inline-block" }} />
          </p>

          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(3.2rem, 8vw, 7rem)",
              fontWeight: 400, lineHeight: 1.04, color: "white", marginBottom: "0.6rem",
            }}
          >
            A Place to{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Encounter</em> God
          </h1>

          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
              fontWeight: 400, fontStyle: "italic",
              color: "rgba(255,255,255,0.38)", marginBottom: "2.5rem",
            }}
          >
            Worship. Word. Community.
          </p>

          <p
            style={{
              fontSize: "1rem", color: "rgba(255,255,255,0.5)",
              lineHeight: 1.85, maxWidth: 560, margin: "0 auto 3rem",
            }}
          >
            We are a Spirit-filled, Word-grounded family committed to worship, discipleship, and the transformation of lives through the gospel of Jesus Christ. Everyone is welcome here.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "5rem" }}>
            <Link href="/visit" className="btn-gold">
              Plan Your Visit
            </Link>
            <Link
              href="/teachings"
              style={{
                fontSize: "0.82rem", fontWeight: 400, letterSpacing: "0.07em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.6)",
                padding: "1rem 2.5rem", borderRadius: 2, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              Explore Teachings
            </Link>
          </div>

          {/* Service times */}
          <div
            style={{
              display: "flex", justifyContent: "center",
              borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "3rem", flexWrap: "wrap", gap: 0,
            }}
            className="hero-times"
          >
            {[
              { day: "Sunday", name: "Sunday Worship", time: "10:00 AM & 01:30 PM" },
              { day: "Wednesday", name: "Midweek Bible Study", time: "6:00 PM - 7:30 PM" },
              //{ day: "Monday - Friday", name: "Daily Prayer Line (Zoom)", time: "7:00 PM - 8:00 PM" },
            ].map((t, i, arr) => (
              <div
                key={t.day}
                style={{
                  padding: "0 2.5rem", textAlign: "center",
                  borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
                className="hero-time-item"
              >
                <p style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: "0.45rem" }}>{t.day}</p>
                <p style={{ fontSize: "1.02rem", color: "rgba(255,255,255,0.88)", marginBottom: "0.3rem" }}>{t.name}</p>
                <p style={{ fontSize: "0.94rem", color: "rgba(255,255,255,0.55)", fontFamily: "var(--serif)", fontStyle: "italic" }}>{t.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WELCOME STRIP ────────────────────────────── */}
      <WelcomeStrip />

      {/* ── WHO WE ARE ───────────────────────────────── */}
      <section className="section-wrap" id="welcome">
        <div className="section-inner">
          <div className="two-col-layout">
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>Who We Are</p>
              <h2 className="section-heading" style={{ marginBottom: "1.25rem" }}>
                A Family Rooted<br />in{" "}
                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Faith & Love</em>
              </h2>
              <p className="body-text" style={{ marginBottom: "1.25rem" }}>
                Christ Apostolic Church (CAC) Miracle Centre is a vibrant, Spirit-filled congregation that believes in the full gospel of Jesus Christ — His power to save, heal, deliver, and transform every life.
              </p>
              <p className="body-text" style={{ marginBottom: "1.25rem" }}>
                We are part of the Christ Apostolic Church, a movement rooted in the Aladura revival of faith — a tradition of fervent prayer, dependence on the Holy Spirit, and unwavering commitment to the Word of God.
              </p>
              <p className="body-text" style={{ marginBottom: "2rem" }}>
                At Miracle Centre, sound biblical doctrine, passionate worship, and genuine community come together. No matter who you are or where you've been, you are welcome here.
              </p>
              <Link href="/pastor" className="btn-ink">
                Meet Our Pastor →
              </Link>
            </div>

            <div>
              {coreValues.map((v, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", gap: "1.25rem", alignItems: "flex-start",
                    padding: "1.25rem 0",
                    borderBottom: i < coreValues.length - 1 ? "1px solid var(--border-soft)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 42, height: 42, borderRadius: 3,
                      background: "var(--gold-pale)", border: "1px solid var(--gold-light)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, fontFamily: "var(--serif)", fontStyle: "italic",
                      fontSize: "1.1rem", color: "var(--gold)",
                    }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--ink)", marginBottom: "0.2rem" }}>{v.title}</h3>
                    <p style={{ fontSize: "0.83rem", color: "var(--ink-muted)", lineHeight: 1.65 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SCRIPTURE ────────────────────────────────── */}
      <ScriptureBanner
        text="But seek first the kingdom of God and His righteousness, and all these things will be added to you."
        reference="Matthew 6:33"
      />

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="section-wrap section-cream" id="services">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Gather With Us"
            title={<>Services & <em>Programmes</em></>}
            body="Whether you're joining us for the first time or have been with us for years, there is always a seat for you."
          />
          <div className="gap-grid services-grid">
            {serviceTimes.map((s, i) => (
              <ServiceCard key={i} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BELIEFS ──────────────────────────────────── */}
      <section className="section-wrap" id="beliefs">
        <div className="section-inner">
          <SectionHeader eyebrow="Our Doctrine" title={<>What We <em>Believe</em></>} center />
          <div className="gap-grid beliefs-grid" style={{ marginTop: "3rem" }}>
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

      {/* ── PASTOR PREVIEW ───────────────────────────── */}
      <section className="section-wrap section-cream" id="pastor">
        <div className="section-inner">
          <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>Leadership</p>
          <h2 className="section-heading" style={{ marginBottom: "2.5rem" }}>
            Our <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Pastor</em>
          </h2>
          <div className="gap-grid pastor-grid">
            <div
              style={{
                background: "var(--cream)", padding: "4rem 2.5rem",
                display: "flex", flexDirection: "column", alignItems: "center",
                textAlign: "center", gap: "1rem",
              }}
            >
              <div
                style={{
                  width: 130, height: 130, borderRadius: "50%",
                  background: "var(--gold-light)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--serif)", fontSize: "3.5rem", color: "var(--gold)",
                  fontStyle: "italic", fontWeight: 600, border: "3px solid var(--gold-pale)",
                }}
              >
                J
              </div>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.55rem", fontWeight: 500, color: "var(--ink)" }}>Dr. Joshua Owoeye</p>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500 }}>Spiritual Leader</p>
              <p style={{ fontSize: "0.8rem", color: "var(--ink-faint)" }}>CAC Miracle Centre</p>
            </div>
            <div
              style={{ background: "var(--warm-white)", padding: "4rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.25rem" }}
            >
              <p className="body-text">Dr. Joshua Owoeye is the Spiritual Leader of CAC Miracle Centre and a committed minister of the full gospel of Jesus Christ. With decades of ministry experience, his life&apos;s work has been teaching the whole counsel of God&apos;s Word — with conviction, clarity, and pastoral compassion.</p>
              <p className="body-text">His passion is the making of true disciples: believers who are not just spiritually enthusiastic, but deeply grounded in Scripture, holy in character, and effective in service to God and neighbour.</p>
              <p className="body-text">Dr. Owoeye is also a prolific author and teacher whose writings on character, holiness, sin, leadership, and church accountability continue to impact lives across Nigeria and in the diaspora.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                <Link href="/teachings" className="btn-ink">Read His Teachings →</Link>
                <Link href="/pastor" className="btn-outline">Full Bio</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEACHINGS PREVIEW ────────────────────────── */}
      <section className="section-wrap section-cream" id="teachings">
        <div className="section-inner">
          <SectionHeader
            eyebrow="From the Pastor's Desk"
            title={<>Recent <em>Teachings</em></>}
            viewAllHref="/teachings"
            viewAllLabel="View all teachings →"
          />
          <div className="gap-grid teachings-grid">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <section id="contact">
        <div className="gap-grid contact-grid">
          {/* Info panel */}
          <div style={{ background: "var(--ink)", padding: "4rem" }} className="contact-info">
            <p className="eyebrow" style={{ marginBottom: "0.6rem", color: "var(--gold)" }}>Find Us</p>
            <h2
              className="section-heading"
              style={{ color: "white", marginBottom: "2rem" }}
            >
              Come & Visit<br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Miracle Centre</em>
            </h2>
            {[
              { label: "Address", value: "8159 S Exchange Ave\nChicago, IL, USA" },
              { label: "Phone", value: "+1 (312) 667-4791" },
              { label: "Email", value: "info@cacmiraclecenter.org" },
              { label: "Sunday Services", value: "10:00 AM & 01:30 PM" },
            ].map((d) => (
              <div key={d.label} style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontSize: "0.76rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.35rem" }}>{d.label}</p>
                <p style={{ fontSize: "1.03rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.6, whiteSpace: "pre-line" }}>{d.value}</p>
              </div>
            ))}
          </div>

          {/* Form panel */}
          <div style={{ background: "var(--cream)", padding: "4rem" }} className="contact-form">
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Get in Touch</p>
            <SimpleContactForm />
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────── */}
      <NewsletterStrip />

      <style>{`
        .two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .services-grid  { display: grid; grid-template-columns: repeat(3, 1fr); }
        .beliefs-grid   { display: grid; grid-template-columns: repeat(4, 1fr); }
        .pastor-grid    { display: grid; grid-template-columns: 360px 1fr; }
        .teachings-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
        .contact-grid   { display: grid; grid-template-columns: 1fr 1fr; }
        .hero-times {}
        @media (max-width: 1100px) {
          .beliefs-grid   { grid-template-columns: repeat(2, 1fr) !important; }
          .pastor-grid    { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .two-col-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .services-grid  { grid-template-columns: 1fr !important; }
          .teachings-grid { grid-template-columns: 1fr !important; }
          .contact-grid   { grid-template-columns: 1fr !important; }
          .contact-info   { padding: 3rem 2rem !important; }
          .contact-form   { padding: 3rem 2rem !important; }
        }
        @media (max-width: 680px) {
          .hero-time-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07); padding: 0 0 1.5rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
