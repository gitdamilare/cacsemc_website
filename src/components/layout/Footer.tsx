import Link from "next/link";
import Image from "next/image";

const footerCols = [
  {
    title: "The Church",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/#services" },
      { label: "What We Believe", href: "/about#beliefs" },
      { label: "Our Pastor", href: "/pastor" },
      { label: "Plan a Visit", href: "/visit" },
    ],
  },
  {
    title: "Content",
    links: [
      { label: "All Teachings", href: "/teachings" },
      { label: "Blog", href: "/blog" },
      { label: "Sermons", href: "/sermons" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Prayer Request", href: "/contact#prayer" },
      { label: "Give Online", href: "/give" },
      { label: "Newsletter", href: "/subscribe" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--deep)", padding: "4rem 2rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <Image
                src="/logo.jpg"
                alt="CAC Miracle Centre Logo"
                width={44}
                height={44}
                style={{ borderRadius: "50%", objectFit: "cover", opacity: 0.9 }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "white",
                    lineHeight: 1.2,
                  }}
                >
                  CAC <span style={{ color: "var(--gold)" }}>Miracle Centre</span>
                </p>
                <p
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  Christ Apostolic Church
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.83rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.75,
                maxWidth: 280,
                marginTop: "1rem",
              }}
            >
              A Spirit-filled, Word-grounded congregation committed to worship, discipleship, and the transformation of lives through the gospel of Jesus Christ.
            </p>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "0.82rem",
                color: "var(--gold)",
                marginTop: "1rem",
                opacity: 0.8,
              }}
            >
              "One Fold, One Shepherd" — John 10:16
            </p>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.28)",
                  fontWeight: 500,
                  marginBottom: "1.25rem",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", margin: 0, padding: 0 }}>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "0.84rem",
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "color var(--transition)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.22)" }}>
            © {new Date().getFullYear()} Christ Apostolic Church — Miracle Centre. All rights reserved.
          </p>
          <p style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.22)" }}>
            Senior Pastor:{" "}
            <Link href="/pastor" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
              Dr. Joshua Owoeye
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
