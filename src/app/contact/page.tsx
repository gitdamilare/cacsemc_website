import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/ui/Forms";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CAC Miracle Centre — for prayer requests, general enquiries, or to plan your visit.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "8159 S Exchange Ave\nChicago, IL, USA",
    link: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (312) 667-4791",
    link: "tel:+13126674791",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@cacmiraclecenter.org",
    link: "mailto:info@cacmiraclecenter.org",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Friday, 9:00 AM – 5:00 PM",
    link: null,
  },
];

export default function ContactPage() {
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
          <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>Reach Out</p>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--ink)",
              marginBottom: "0.75rem",
            }}
          >
            Get in{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Touch</em>
          </h1>
          <p className="body-text" style={{ maxWidth: 480 }}>
            Whether you have a prayer request, a question, or you're planning your first visit — we'd love to hear from you.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTACT LAYOUT ──────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", background: "var(--border)" }} className="contact-main-grid">
        {/* Info */}
        <div style={{ background: "var(--ink)", padding: "4rem" }} className="contact-info-panel">
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500, marginBottom: "0.6rem" }}>
            Find Us
          </p>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 400,
              color: "white",
              lineHeight: 1.2,
              marginBottom: "2.5rem",
            }}
          >
            Come & Visit{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Miracle Centre</em>
          </h2>

          {contactDetails.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  marginBottom: "1.75rem",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 3,
                    background: "rgba(184,147,58,0.15)",
                    border: "1px solid rgba(184,147,58,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={15} color="var(--gold)" />
                </div>
                <div>
                  <p style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.25rem" }}>
                    {d.label}
                  </p>
                  {d.link ? (
                    <a href={d.link} style={{ fontSize: "0.92rem", color: "var(--gold)", textDecoration: "none", lineHeight: 1.55 }}>
                      {d.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.55, whiteSpace: "pre-line" }}>
                      {d.value}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: "2rem" }} />

          {/* Map placeholder */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 4,
              height: 180,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <MapPin size={24} color="var(--gold)" opacity={0.5} />
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Map placeholder
            </p>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <p style={{ fontFamily: "var(--serif)", fontSize: "0.9rem", fontStyle: "italic", color: "var(--gold)", lineHeight: 1.6, opacity: 0.8 }}>
              "One Fold, One Shepherd" — John 10:16
            </p>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: "var(--cream)", padding: "4rem" }} className="contact-form-panel">
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Send a Message</p>
          <ContactForm />
        </div>
      </div>

      {/* ── PRAYER REQUESTS ──────────────────────────── */}
      <section className="section-wrap" id="prayer">
        <div className="section-inner" style={{ maxWidth: 760, textAlign: "center" }}>
          <p className="eyebrow eyebrow-center" style={{ marginBottom: "0.75rem" }}>Prayer Requests</p>
          <h2 className="section-heading" style={{ marginBottom: "1.25rem" }}>
            We Pray with{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>You</em>
          </h2>
          <p className="body-text" style={{ maxWidth: 540, margin: "0 auto 2rem" }}>
            At CAC Miracle Centre, we believe in the power of prayer. If you have a prayer need, please share it with us. Our pastoral team prays over every request submitted.
          </p>
          <div
            style={{
              background: "var(--cream)",
              borderLeft: "3px solid var(--gold)",
              padding: "1.5rem 2rem",
              borderRadius: "0 4px 4px 0",
              textAlign: "left",
              marginBottom: "2rem",
            }}
          >
            <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontStyle: "italic", color: "var(--ink)", lineHeight: 1.65 }}>
              "The prayer of a righteous person is powerful and effective."
            </p>
            <cite style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontStyle: "normal", fontWeight: 500 }}>
              James 5:16
            </cite>
          </div>
          <p style={{ fontSize: "0.88rem", color: "var(--ink-muted)" }}>
            Submit your prayer request using the contact form above and select{" "}
            <em>&quot;Prayer request&quot;</em> as the reason. Your request is kept confidential.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-main-grid { grid-template-columns: 1fr !important; }
          .contact-info-panel { padding: 3rem 2rem !important; }
          .contact-form-panel { padding: 3rem 2rem !important; }
          .form-row-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
