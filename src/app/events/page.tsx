import type { Metadata } from "next";
import { Calendar, Clock, MapPin } from "lucide-react";
import { events } from "@/lib/data";
import { NewsletterStrip } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events, services, and programmes at CAC Miracle Centre.",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    day: d.toLocaleDateString("en-GB", { day: "numeric" }),
    month: d.toLocaleDateString("en-GB", { month: "short" }),
    year: d.toLocaleDateString("en-GB", { year: "numeric" }),
    full: d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
  };
}

const categoryColors: Record<string, string> = {
  "Special Service": "var(--gold)",
  Youth: "#5A8C6E",
  Women: "#8C5A7A",
  Outreach: "#5A6E8C",
};

export default function EventsPage() {
  const upcoming = events;
  const next = events[0];

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
          <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>What&apos;s Coming Up</p>
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
            Events &{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Programmes</em>
          </h1>
          <p className="body-text" style={{ maxWidth: 480 }}>
            Stay connected with what's happening at CAC Miracle Centre — special services, gatherings, and ministry events.
          </p>
        </div>
      </div>

      {/* ── NEXT EVENT HIGHLIGHT ─────────────────────── */}
      <section className="section-wrap">
        <div className="section-inner">
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Next Event</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: "1.5px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              overflow: "hidden",
            }}
            className="next-event-grid"
          >
            {/* Date block */}
            <div
              style={{
                background: "var(--gold)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem 1rem",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "3rem", fontFamily: "var(--serif)", fontWeight: 600, color: "white", lineHeight: 1 }}>
                {formatDate(next.date).day}
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 500, color: "rgba(255,255,255,0.85)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {formatDate(next.date).month}
              </p>
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", marginTop: "0.25rem" }}>
                {formatDate(next.date).year}
              </p>
            </div>

            {/* Details */}
            <div style={{ background: "var(--cream)", padding: "2.5rem" }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.62rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  background: "var(--gold-pale)",
                  padding: "0.25rem 0.65rem",
                  borderRadius: 2,
                  marginBottom: "0.75rem",
                  fontWeight: 500,
                }}
              >
                {next.category}
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
                {next.title}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                {next.description}
              </p>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "var(--ink-faint)" }}>
                  <Calendar size={13} /> {formatDate(next.date).full}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "var(--ink-faint)" }}>
                  <Clock size={13} /> {next.time}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "var(--ink-faint)" }}>
                  <MapPin size={13} /> {next.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL EVENTS ──────────────────────────────── */}
      <section className="section-wrap section-cream">
        <div className="section-inner">
          <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>Full Schedule</p>
          <h2 className="section-heading" style={{ marginBottom: "2.5rem" }}>
            Upcoming <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Events</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5px", background: "var(--border)" }}>
            {upcoming.map((event) => {
              const dt = formatDate(event.date);
              return (
                <div
                  key={event.id}
                  style={{
                    background: "var(--warm-white)",
                    padding: "1.75rem 2rem",
                    display: "grid",
                    gridTemplateColumns: "80px 1fr auto",
                    gap: "1.5rem",
                    alignItems: "center",
                  }}
                  className="event-row"
                >
                  {/* Date */}
                  <div style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "2rem",
                        fontWeight: 600,
                        color: "var(--gold)",
                        lineHeight: 1,
                      }}
                    >
                      {dt.day}
                    </p>
                    <p
                      style={{
                        fontSize: "0.68rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--ink-faint)",
                      }}
                    >
                      {dt.month}
                    </p>
                  </div>

                  {/* Info */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
                      <span
                        style={{
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: categoryColors[event.category] ?? "var(--gold)",
                          fontWeight: 500,
                        }}
                      >
                        {event.category}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "1.15rem",
                        fontWeight: 500,
                        color: "var(--ink)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {event.title}
                    </h3>
                    <p style={{ fontSize: "0.83rem", color: "var(--ink-muted)", lineHeight: 1.6 }}>
                      {event.description}
                    </p>
                    <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.73rem", color: "var(--ink-faint)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                        <Clock size={11} /> {event.time}
                      </span>
                      <span style={{ fontSize: "0.73rem", color: "var(--ink-faint)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                        <MapPin size={11} /> {event.location}
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <div style={{ flexShrink: 0 }}>
                    <button className="btn-outline" style={{ padding: "0.5rem 1rem", fontSize: "0.72rem" }}>
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RECURRING PROGRAMMES ─────────────────────── */}
      <section className="section-wrap">
        <div className="section-inner">
          <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>Every Week</p>
          <h2 className="section-heading" style={{ marginBottom: "2.5rem" }}>
            Regular <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Programmes</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5px", background: "var(--border)" }} className="prog-grid">
            {[
              { day: "Sunday", name: "Worship Service", time: "8:00 AM &  01:30 PM", icon: "☀" },
              { day: "Wednesday", name: "Bible Study", time: "6:00 PM", icon: "📖" },
              { day: "Friday", name: "Night Vigil", time: "10:00 PM", icon: "🙏" },
            ].map((p) => (
              <div key={p.day} style={{ background: "var(--cream)", padding: "2.5rem 2rem", textAlign: "center" }}>
                <p style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{p.icon}</p>
                <p style={{ fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500, marginBottom: "0.4rem" }}>{p.day}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.35rem", fontWeight: 500, color: "var(--ink)", marginBottom: "0.3rem" }}>{p.name}</p>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-faint)", fontFamily: "var(--serif)", fontStyle: "italic" }}>{p.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterStrip />

      <style>{`
        @media (max-width: 900px) {
          .next-event-grid { grid-template-columns: 1fr !important; }
          .event-row { grid-template-columns: 60px 1fr !important; }
          .event-row > *:last-child { display: none; }
          .prog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
