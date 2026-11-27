"use client";

import { useEffect, useRef } from "react";
import type { HistoryEra, HistoryEvent } from "@/types";
import HistoryEventDialog, { useHistoryHash } from "./HistoryEventDialog";

const css = `
.spine { position: relative; }
.spine::before {
  content: ""; position: absolute; top: 0; bottom: 0; left: 50%;
  width: 1px; background: var(--gold); opacity: 0.45;
}
.spine-era {
  position: relative; text-align: center; max-width: 560px;
  margin: 0 auto 3rem; padding: 1.5rem 1rem; background: var(--warm-white);
}
.spine-era:not(:first-child) { margin-top: 4rem; }
.spine-list { list-style: none; padding: 0; margin: 0; }
.spine-item {
  position: relative; width: 50%; padding-right: 2.5rem; margin-bottom: 2rem;
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.spine-item:nth-child(even) { margin-left: 50%; padding-right: 0; padding-left: 2.5rem; }
.spine-item::before {
  content: ""; position: absolute; top: 1.6rem; right: -5px;
  width: 9px; height: 9px; border-radius: 50%;
  background: var(--warm-white); border: 1px solid var(--gold);
}
.spine-item:nth-child(even)::before { right: auto; left: -4px; }
.spine-item.is-pending { opacity: 0; transform: translateY(16px); }
.spine-card {
  display: block; width: 100%; min-height: 44px; text-align: left; cursor: pointer;
  padding: 1.5rem 1.75rem; font: inherit; color: var(--ink);
  background: var(--cream); border: 1px solid var(--border);
  transition: border-color var(--transition), transform var(--transition);
}
.spine-item:nth-child(even) .spine-card { background: var(--warm-white); }
.spine-card:hover { border-color: var(--gold); transform: translateY(-2px); }
.spine-card:focus-visible { outline: 2px solid var(--focus); outline-offset: 3px; }
@media (max-width: 767px) {
  .spine::before { left: 0.5rem; }
  .spine-era { text-align: left; margin-left: 0; padding: 1rem 0 1rem 2rem; background: none; }
  .spine-era .eyebrow { justify-content: flex-start; }
  .spine-item, .spine-item:nth-child(even) { width: 100%; margin-left: 0; padding: 0 0 0 2rem; }
  .spine-item::before, .spine-item:nth-child(even)::before { left: calc(0.5rem - 4px); right: auto; }
  .spine-card { padding: 1.25rem; }
}
@media (prefers-reduced-motion: reduce) {
  .spine-item, .spine-card { transition: none; }
  .spine-card:hover { transform: none; }
}
`;

export default function HistoryTimeline({ eras, events }: { eras: HistoryEra[]; events: HistoryEvent[] }) {
  const [openId, open] = useHistoryHash(events);
  const root = useRef<HTMLDivElement>(null);

  // Items are visible by default; JS only hides below-the-fold items for the reveal, and only when motion is allowed.
  useEffect(() => {
    if (!root.current || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = Array.from(root.current.querySelectorAll<HTMLElement>(".spine-item"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.remove("is-pending");
            io.unobserve(en.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    for (const el of items) {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("is-pending");
        io.observe(el);
      }
    }
    return () => {
      io.disconnect();
      for (const el of items) el.classList.remove("is-pending");
    };
  }, []);

  return (
    <section className="section-wrap">
      <style>{css}</style>
      <div ref={root} className="section-inner spine" style={{ maxWidth: 1040 }}>
        {eras.map((era) => (
          <div key={era.id}>
            <header className="spine-era">
              <p className="eyebrow eyebrow-center" style={{ marginBottom: "0.75rem" }}>{era.span}</p>
              <h2 className="section-heading" style={{ color: "var(--ink)", marginBottom: "0.75rem" }}>{era.title}</h2>
              <p className="body-text">{era.intro}</p>
            </header>
            <ol className="spine-list">
              {events.filter((e) => e.era === era.id).map((e) => (
                <li key={e.id} className="spine-item">
                  <button type="button" className="spine-card" onClick={() => open(e.id)}>
                    <span style={{ display: "block", color: "var(--gold)", fontSize: "var(--text-meta)", letterSpacing: "0.08em" }}>
                      {e.dateLabel}
                    </span>
                    <span style={{ display: "block", fontFamily: "var(--serif)", fontSize: "1.6rem", lineHeight: 1.25, margin: "0.35rem 0 0.25rem" }}>
                      {e.title}
                    </span>
                    <span style={{ display: "block", color: "var(--ink-faint)", fontSize: "var(--text-meta)", marginBottom: "0.75rem" }}>
                      {e.place}
                    </span>
                    <span className="body-text" style={{ display: "block" }}>{e.summary}</span>
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
