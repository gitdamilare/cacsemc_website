"use client";

import type { HistoryEra, HistoryEvent } from "@/types";
import HistoryEventDialog, { useHistoryHash } from "./HistoryEventDialog";

// Baseline list layout; each design variant branch replaces this file.
export default function HistoryTimeline({ eras, events }: { eras: HistoryEra[]; events: HistoryEvent[] }) {
  const [openId, open] = useHistoryHash(events);

  return (
    <section className="section-wrap">
      <div className="section-inner" style={{ maxWidth: 800 }}>
        {eras.map((era) => (
          <div key={era.id} style={{ marginBottom: "3rem" }}>
            <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>{era.span}</p>
            <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>{era.title}</h2>
            <ol style={{ listStyle: "none", padding: 0 }}>
              {events.filter((e) => e.era === era.id).map((e) => (
                <li key={e.id} style={{ borderBottom: "1px solid var(--border-soft)" }}>
                  <button
                    type="button"
                    onClick={() => open(e.id)}
                    style={{ all: "unset", cursor: "pointer", display: "block", width: "100%", padding: "1rem 0" }}
                  >
                    <span style={{ color: "var(--gold)", fontSize: "var(--text-meta)" }}>{e.dateLabel}</span>
                    <span style={{ display: "block", fontFamily: "var(--serif)", fontSize: "1.5rem" }}>{e.title}</span>
                    <span style={{ color: "var(--ink-muted)" }}>{e.summary}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <HistoryEventDialog events={events} openId={openId} onChange={open} />
    </section>
  );
}
