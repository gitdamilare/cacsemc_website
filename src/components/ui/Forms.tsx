"use client";

export function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
        className="form-row-grid"
      >
        <div className="field">
          <label>First name</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="field">
          <label>Last name</label>
          <input type="text" placeholder="Doe" />
        </div>
      </div>
      <div className="field">
        <label>Email address</label>
        <input type="email" placeholder="john@example.com" />
      </div>
      <div className="field">
        <label>Phone (optional)</label>
        <input type="tel" placeholder="+234 000 000 0000" />
      </div>
      <div className="field">
        <label>Reason for contact</label>
        <select>
          <option value="">Select a reason…</option>
          <option>Planning a visit</option>
          <option>Prayer request</option>
          <option>General enquiry</option>
          <option>Speaking / ministry invitation</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field">
        <label>Message</label>
        <textarea placeholder="How can we help you?" style={{ minHeight: 120 }} />
      </div>
      <button type="submit" className="btn-gold" style={{ alignSelf: "flex-start" }}>
        Send Message →
      </button>
      <style>{`
        @media (max-width: 560px) {
          .form-row-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}

export function SimpleContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
        className="form-row-grid"
      >
        <div className="field">
          <label>First name</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="field">
          <label>Last name</label>
          <input type="text" placeholder="Doe" />
        </div>
      </div>
      <div className="field">
        <label>Email address</label>
        <input type="email" placeholder="john@example.com" />
      </div>
      <div className="field">
        <label>Reason for contact</label>
        <select>
          <option value="">Select a reason…</option>
          <option>Planning a visit</option>
          <option>Prayer request</option>
          <option>General enquiry</option>
          <option>Speaking / ministry invitation</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field">
        <label>Message</label>
        <textarea placeholder="How can we help you?" />
      </div>
      <button type="submit" className="btn-gold" style={{ alignSelf: "flex-start" }}>
        Send Message →
      </button>
      <style>{`
        @media (max-width: 560px) {
          .form-row-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}

export function NewsletterForm({
  dark = false,
  centered = false,
}: {
  dark?: boolean;
  centered?: boolean;
}) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        display: "flex",
        border: dark ? "none" : "1px solid var(--border)",
        borderRadius: 3,
        overflow: "hidden",
        ...(centered ? { maxWidth: 480, margin: "0 auto" } : {}),
      }}
    >
      <input
        type="email"
        placeholder="Enter your email address"
        style={{
          flex: 1,
          minWidth: 0,
          padding: "0.9rem 1.1rem",
          background: dark ? "rgba(255,255,255,0.08)" : "var(--cream)",
          border: dark ? "1px solid rgba(255,255,255,0.15)" : "none",
          borderRight: "none",
          color: dark ? "white" : "var(--ink)",
          fontFamily: "var(--sans)",
          fontSize: "var(--text-label)",
          outline: "none",
        }}
      />
      <button
        type="submit"
        className="btn-gold"
        style={{ borderRadius: 0, flexShrink: 0 }}
      >
        Subscribe
      </button>
    </form>
  );
}

export function SubscribeForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}
    >
      <div className="form-row-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 10rem), 1fr))", gap: "0.75rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", minWidth: 0 }}>
          <label
            style={{
              fontSize: "var(--text-label)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--on-deep-muted)",
            }}
          >
            First name
          </label>
          <input
            type="text"
            placeholder="John"
            style={{
              padding: "0.75rem 1rem",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 2,
              color: "white",
              fontFamily: "var(--sans)",
              fontSize: "var(--text-label)",
              outline: "none",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", minWidth: 0 }}>
          <label
            style={{
              fontSize: "var(--text-label)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--on-deep-muted)",
            }}
          >
            Last name
          </label>
          <input
            type="text"
            placeholder="Doe"
            style={{
              padding: "0.75rem 1rem",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 2,
              color: "white",
              fontFamily: "var(--sans)",
              fontSize: "var(--text-label)",
              outline: "none",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        <label
          style={{
            fontSize: "var(--text-label)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--on-deep-muted)",
          }}
        >
          Email address
        </label>
        <input
          type="email"
          placeholder="john@example.com"
          style={{
            padding: "0.75rem 1rem",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 2,
            color: "white",
            fontFamily: "var(--sans)",
            fontSize: "var(--text-label)",
            outline: "none",
          }}
        />
      </div>
      <button
        type="submit"
        className="btn-gold"
        style={{ marginTop: "0.5rem", justifyContent: "center" }}
      >
        Subscribe to Teachings →
      </button>
      <p
        style={{
          fontSize: "var(--text-meta)",
          color: "var(--on-deep-muted)",
          textAlign: "center",
        }}
      >
        No spam. Unsubscribe anytime. Your data is safe.
      </p>
    </form>
  );
}

export function GoldBannerForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        display: "flex",
        maxWidth: 420,
        margin: "0 auto",
        overflow: "hidden",
        borderRadius: 3,
      }}
    >
      <input
        type="email"
        placeholder="Your email address"
        style={{
          flex: 1,
          minWidth: 0,
          padding: "0.9rem 1.1rem",
          background: "var(--warm-white)",
          border: "none",
          color: "var(--ink)",
          fontFamily: "var(--sans)",
          fontSize: "var(--text-label)",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.9rem 1.5rem",
          background: "var(--deep)",
          border: "none",
          color: "white",
          fontFamily: "var(--sans)",
          fontSize: "var(--text-label)",
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>
    </form>
  );
}
