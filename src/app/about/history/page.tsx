import type { Metadata } from "next";
import Link from "next/link";
import { historyEras, historyEvents } from "@/lib/data";
import { ScriptureBanner, NewsletterStrip } from "@/components/ui";
import HistoryTimeline from "./HistoryTimeline";

export const metadata: Metadata = {
  title: "Our History",
  description:
    "The story of Christ Apostolic Church, from the Precious Stone Society in 1918 and the 1930 Oke-Ooye revival to assemblies around the world.",
};

export default function HistoryPage() {
  return (
    <>
      <div
        style={{
          background: "var(--cream)",
          padding: "6rem 2rem 5rem",
          paddingTop: "calc(var(--nav-h) + 4rem)",
          borderBottom: "1px solid var(--border)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p className="eyebrow eyebrow-center" style={{ marginBottom: "1rem" }}>
            <Link href="/about/" style={{ color: "inherit" }}>About Us</Link> / Our Heritage
          </p>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--ink)",
              marginBottom: "1.25rem",
            }}
          >
            The Story of{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Christ Apostolic Church</em>
          </h1>
          <p className="body-text" style={{ maxWidth: 540, margin: "0 auto 1rem" }}>
            From a prayer band of five in Ijebu-Ode to assemblies across the
            nations. Select any event to read its full story.
          </p>
          <p style={{ fontSize: "var(--text-meta)", color: "var(--ink-faint)" }}>
            Adapted from the CAC Pastoral Training Manual 2025/26.
          </p>
        </div>
      </div>

      <HistoryTimeline eras={historyEras} events={historyEvents} />

      <ScriptureBanner
        text="Therefore they that were scattered abroad went every where preaching the word."
        reference="Acts 8:4"
      />

      <NewsletterStrip />
    </>
  );
}
