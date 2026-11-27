"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { HistoryEvent } from "@/types";

/** Open event id, kept in the URL hash so an event can be linked and shared. */
export function useHistoryHash(events: HistoryEvent[]) {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      setOpenId(events.some((e) => e.id === id) ? id : null);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [events]);

  const open = useCallback((id: string | null) => {
    setOpenId(id);
    const url = id ? `#${id}` : window.location.pathname + window.location.search;
    window.history.replaceState(null, "", url);
  }, []);

  return [openId, open] as const;
}

export default function HistoryEventDialog({
  events,
  openId,
  onChange,
}: {
  events: HistoryEvent[];
  openId: string | null;
  onChange: (id: string | null) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const index = events.findIndex((e) => e.id === openId);
  const event = index >= 0 ? events[index] : null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (event && !dialog.open) dialog.showModal();
    if (!event && dialog.open) dialog.close();
  }, [event]);

  const prev = index > 0 ? events[index - 1] : null;
  const next = index >= 0 && index < events.length - 1 ? events[index + 1] : null;

  return (
    <dialog
      ref={ref}
      className="history-dialog"
      aria-labelledby="history-dialog-title"
      onClose={() => onChange(null)}
      onClick={(e) => {
        if (e.target === e.currentTarget) ref.current?.close(); // backdrop click
      }}
    >
      {event && (
        <div className="history-dialog-inner">
          <div className="history-dialog-top">
            <p className="eyebrow">{event.dateLabel}</p>
            <button type="button" className="history-dialog-icon" onClick={() => ref.current?.close()} aria-label="Close">
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <h2 id="history-dialog-title" className="history-dialog-title">
            {event.title}
          </h2>
          <p className="history-dialog-place">{event.place}</p>
          <div className="history-dialog-body">
            {event.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <nav className="history-dialog-nav" aria-label="Other events">
            <button type="button" className="btn-outline" disabled={!prev} onClick={() => prev && onChange(prev.id)}>
              <ChevronLeft size={16} aria-hidden="true" /> {prev ? prev.dateLabel : "Previous"}
            </button>
            <button type="button" className="btn-outline" disabled={!next} onClick={() => next && onChange(next.id)}>
              {next ? next.dateLabel : "Next"} <ChevronRight size={16} aria-hidden="true" />
            </button>
          </nav>
        </div>
      )}
      <style>{`
        .history-dialog {
          width: min(640px, calc(100vw - 2rem));
          max-height: calc(100dvh - 2rem);
          margin: auto;
          padding: 0;
          border: 1px solid var(--border);
          border-radius: 2px;
          background: var(--warm-white);
          color: var(--ink);
        }
        .history-dialog[open] { animation: historyDialogIn 0.28s ease both; }
        .history-dialog::backdrop { background: rgba(20, 14, 9, 0.6); }
        .history-dialog-inner { padding: 2rem; }
        .history-dialog-top { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 0.75rem; }
        .history-dialog-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border: 1px solid var(--border); border-radius: 2px;
          background: none; color: var(--ink-muted); cursor: pointer;
        }
        .history-dialog-icon:hover { border-color: var(--gold); color: var(--gold); }
        .history-dialog-title { font-family: var(--serif); font-size: clamp(1.75rem, 4vw, 2.4rem); font-weight: 400; line-height: 1.15; margin-bottom: 0.4rem; }
        .history-dialog-place { font-size: var(--text-meta); color: var(--ink-faint); letter-spacing: 0.04em; margin-bottom: 1.5rem; }
        .history-dialog-body p { color: var(--ink-muted); line-height: 1.8; margin-bottom: 1rem; }
        .history-dialog-nav { display: flex; justify-content: space-between; gap: 0.75rem; flex-wrap: wrap; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-soft); }
        .history-dialog-nav .btn-outline { min-height: 44px; font-size: var(--text-meta); }
        .history-dialog-nav .btn-outline:disabled { opacity: 0.4; cursor: default; }
        .history-dialog :focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
        @keyframes historyDialogIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        @media (max-width: 600px) { .history-dialog-inner { padding: 1.25rem; } }
        @media (prefers-reduced-motion: reduce) { .history-dialog[open] { animation: none; } }
      `}</style>
    </dialog>
  );
}
