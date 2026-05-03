import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--deep)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(184,147,58,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(184,147,58,0.05) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 520 }}>
        {/* Logo */}
        <div style={{ marginBottom: "2.5rem" }}>
          <Image
            src="/logo.jpg"
            alt="CAC Miracle Centre"
            width={80}
            height={80}
            style={{
              borderRadius: "50%",
              border: "2px solid rgba(184,147,58,0.35)",
              objectFit: "cover",
              opacity: 0.8,
            }}
          />
        </div>

        {/* 404 number */}
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(5rem, 15vw, 9rem)",
            fontWeight: 400,
            color: "rgba(184,147,58,0.15)",
            lineHeight: 1,
            marginBottom: "0",
            userSelect: "none",
          }}
        >
          404
        </p>

        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 400,
            color: "white",
            lineHeight: 1.2,
            marginBottom: "1rem",
            marginTop: "-1rem",
          }}
        >
          Page{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Not Found</em>
        </h1>

        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on the right path.
        </p>

        {/* Scripture */}
        <div
          style={{
            background: "rgba(184,147,58,0.08)",
            border: "1px solid rgba(184,147,58,0.2)",
            borderRadius: 4,
            padding: "1.25rem 1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1rem",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.65,
              marginBottom: "0.5rem",
            }}
          >
            "Your word is a lamp to my feet and a light to my path."
          </p>
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 500,
            }}
          >
            Psalm 119:105
          </p>
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" className="btn-gold">
            ← Back to Home
          </Link>
          <Link
            href="/teachings"
            style={{
              fontSize: "0.82rem",
              fontWeight: 400,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              padding: "0.85rem 2rem",
              borderRadius: 2,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.18)",
              transition: "all var(--transition)",
            }}
          >
            Browse Teachings
          </Link>
        </div>

        {/* Quick links */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Blog", href: "/blog" },
            { label: "Sermons", href: "/sermons" },
            { label: "Events", href: "/events" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                transition: "color var(--transition)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
