import Link from "next/link";
import type { BlogPost, ServiceTime } from "@/types";
import { NewsletterForm } from "./Forms";

/* ─── Section Header ──────────────────────────────── */
export function SectionHeader({
  eyebrow,
  title,
  body,
  center = false,
  viewAllHref,
  viewAllLabel = "View all →",
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  center?: boolean;
  viewAllHref?: string;
  viewAllLabel?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: center ? "center" : "space-between",
        flexDirection: center ? "column" : "row",
        textAlign: center ? "center" : "left",
        marginBottom: "2.5rem",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <div style={{ maxWidth: center ? 620 : "none" }}>
        <p className={`eyebrow ${center ? "eyebrow-center" : ""}`} style={{ marginBottom: "0.6rem" }}>
          {eyebrow}
        </p>
        <h2 className="section-heading" style={{ marginBottom: body ? "0.75rem" : 0 }}>
          {title}
        </h2>
        {body && <p className="body-text" style={{ maxWidth: 560 }}>{body}</p>}
      </div>
      {viewAllHref && !center && (
        <Link href={viewAllHref} className="btn-ghost">
          {viewAllLabel}
        </Link>
      )}
    </div>
  );
}

/* ─── Scripture Banner ────────────────────────────── */
export function ScriptureBanner({
  text,
  reference,
}: {
  text: string;
  reference: string;
}) {
  return (
    <div
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "5rem 2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: "5rem",
            lineHeight: 0.5,
            color: "var(--gold)",
            opacity: 0.2,
            display: "block",
            marginBottom: "1.75rem",
          }}
        >
          "
        </span>
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.5,
            color: "var(--ink)",
            marginBottom: "1.25rem",
          }}
        >
          {text}
        </p>
        <p
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--gold)",
            fontWeight: 500,
          }}
        >
          {reference}
        </p>
      </div>
    </div>
  );
}

/* ─── Newsletter Strip ────────────────────────────── */
export function NewsletterStrip() {
  return (
    <div
      style={{
        background: "var(--warm-white)",
        borderTop: "1px solid var(--border)",
        padding: "5rem 2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <p className="eyebrow eyebrow-center" style={{ marginBottom: "0.5rem" }}>
          Stay Connected
        </p>
        <h2
          className="section-heading"
          style={{ marginBottom: "0.75rem" }}
          dangerouslySetInnerHTML={{ __html: "Receive New <em>Teachings</em>" }}
        />
        <p className="body-text" style={{ maxWidth: 420, margin: "0 auto 2rem" }}>
          Be the first to know when a new article or teaching is published. Delivered to your inbox — no noise, just truth.
        </p>
        <NewsletterForm />
        <p style={{ fontSize: "0.73rem", color: "var(--ink-faint)", marginTop: "0.75rem" }}>
          No spam. Unsubscribe anytime.
        </p>
      </div>
      <style>{`
        @media (max-width: 560px) {
          .nl-form { flex-direction: column !important; }
        }
      `}</style>
    </div>
  );
}

/* ─── Blog Card ───────────────────────────────────── */
export function BlogCard({
  post,
  featured = false,
  variant = "default",
}: {
  post: BlogPost;
  featured?: boolean;
  variant?: "default" | "horizontal" | "compact";
}) {
  if (variant === "compact") {
    return (
      <Link
        href={`/teachings/${post.slug}`}
        style={{
          display: "block",
          background: "var(--cream)",
          padding: "1.75rem",
          textDecoration: "none",
          color: "inherit",
          transition: "background var(--transition)",
        }}
        className="blog-card-compact"
      >
        <p className="cat-badge" style={{ marginBottom: "0.65rem" }}>
          {post.category}
        </p>
        <h3
          style={{
            fontFamily: "var(--serif)",
            fontSize: "1.25rem",
            fontWeight: 500,
            lineHeight: 1.3,
            color: "var(--ink)",
            marginBottom: "0.6rem",
          }}
        >
          {post.title}
        </h3>
        <p style={{ fontSize: "0.73rem", color: "var(--ink-faint)" }}>
          {post.readTime} min read
        </p>
        <style>{`.blog-card-compact:hover { background: var(--gold-pale) !important; }`}</style>
      </Link>
    );
  }

  return (
    <Link
      href={`/teachings/${post.slug}`}
      style={{
        display: "block",
        background: "var(--cream)",
        padding: featured ? "2.5rem" : "2rem",
        textDecoration: "none",
        color: "inherit",
        transition: "background var(--transition)",
        position: "relative",
      }}
      className="blog-card-link"
    >
      <p className="cat-badge" style={{ marginBottom: "0.75rem" }}>
        {post.category}
      </p>
      <h3
        style={{
          fontFamily: "var(--serif)",
          fontSize: featured ? "2rem" : "1.35rem",
          fontWeight: 500,
          lineHeight: 1.25,
          color: "var(--ink)",
          marginBottom: "0.75rem",
        }}
      >
        {post.title}
      </h3>
      <p
        style={{
          fontSize: "0.86rem",
          color: "var(--ink-muted)",
          lineHeight: 1.7,
          marginBottom: "1rem",
        }}
      >
        {post.excerpt}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          fontSize: "0.73rem",
          color: "var(--ink-faint)",
          flexWrap: "wrap",
        }}
      >
        <span>{post.author}</span>
        <span>·</span>
        <span>{post.readTime} min read</span>
        {post.lessonCount && (
          <>
            <span>·</span>
            <span>{post.lessonCount} lessons</span>
          </>
        )}
      </div>
      <style>{`.blog-card-link:hover { background: var(--gold-pale) !important; }`}</style>
    </Link>
  );
}

/* ─── Service Card ────────────────────────────────── */
export function ServiceCard({ service }: { service: ServiceTime }) {
  return (
    <div
      style={{
        background: service.highlighted ? "var(--ink)" : "var(--warm-white)",
        padding: "2.5rem 2rem",
      }}
    >
      <p
        style={{
          fontSize: "0.62rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--gold)",
          fontWeight: 500,
          marginBottom: "0.5rem",
        }}
      >
        {service.day}
      </p>
      <p
        style={{
          fontFamily: "var(--serif)",
          fontSize: "1.45rem",
          fontWeight: 500,
          color: service.highlighted ? "white" : "var(--ink)",
          marginBottom: "0.3rem",
        }}
      >
        {service.name}
      </p>
      <p
        style={{
          fontSize: "0.95rem",
          color: service.highlighted ? "rgba(255,255,255,0.55)" : "var(--ink-muted)",
          marginBottom: "0.5rem",
        }}
      >
        {service.time}
      </p>
      {service.description && (
        <p
          style={{
            fontSize: "0.82rem",
            color: service.highlighted ? "rgba(255,255,255,0.35)" : "var(--ink-faint)",
            lineHeight: 1.65,
          }}
        >
          {service.description}
        </p>
      )}
    </div>
  );
}

/* ─── Welcome strip ───────────────────────────────── */
export function WelcomeStrip() {
  return (
    <div style={{ background: "var(--gold)", padding: "1.1rem 2rem" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <p style={{ fontSize: "0.85rem", color: "white" }}>
          Visiting for the first time? We would love to welcome you.
        </p>
        <Link
          href="/visit"
          style={{
            fontSize: "0.8rem",
            fontWeight: 500,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: "white",
            textDecoration: "none",
            borderBottom: "1px solid rgba(255,255,255,0.45)",
            paddingBottom: 1,
          }}
        >
          Find out what to expect →
        </Link>
      </div>
    </div>
  );
}
