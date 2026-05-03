"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",      href: "/" },
  // { label: "Services",  href: "/#services" },
  { label: "Teachings", href: "/teachings" },
  { label: "Sermons",   href: "/sermons" },
  { label: "Events",    href: "/events" },
  { label: "About",     href: "/about" },
  { label: "Contact",   href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Closing the mobile menu when the route changes is a legitimate
  // synchronous state reset — not a cascading side-effect.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: scrolled
            ? "rgba(253,252,250,0.96)"
            : "rgba(253,252,250,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border-soft)",
          padding: "0 2rem",
          transition: "background var(--transition)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "var(--nav-h)",
            gap: "2rem",
          }}
        >
          {/* Brand with logo */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexShrink: 0,
            }}
          >
            <Image
              src="/logo.jpg"
              alt="CAC Miracle Centre Logo"
              width={44}
              height={44}
              style={{ borderRadius: "50%", objectFit: "cover" }}
              priority
            />
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                CAC <span style={{ color: "var(--gold)" }}>Miracle Centre</span>
              </span>
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink-faint)",
                }}
              >
                Christ Apostolic Church
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul
            style={{
              display: "flex",
              gap: 0,
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: isActive(link.href) ? "var(--gold)" : "var(--ink-muted)",
                    textDecoration: "none",
                    padding: "0 0.85rem",
                    height: "var(--nav-h)",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: isActive(link.href)
                      ? "2px solid var(--gold)"
                      : "2px solid transparent",
                    transition: "color var(--transition), border-color var(--transition)",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
            <Link href="/visit" className="btn-gold" style={{ padding: "0.5rem 1.2rem" }}>
              Plan a Visit
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--ink)",
                padding: "0.25rem",
              }}
              className="mobile-menu-btn"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: "var(--nav-h)",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            background: "var(--warm-white)",
            borderTop: "1px solid var(--border-soft)",
            overflowY: "auto",
          }}
        >
          <div style={{ padding: "1rem 2rem" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "1rem 0",
                  borderBottom: "1px solid var(--border-soft)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: isActive(link.href) ? "var(--gold)" : "var(--ink-muted)",
                  textDecoration: "none",
                  fontWeight: isActive(link.href) ? 500 : 400,
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ paddingTop: "1.5rem" }}>
              <Link href="/visit" className="btn-gold" style={{ display: "block", textAlign: "center" }}>
                Plan a Visit
              </Link>
            </div>
            <div style={{ paddingTop: "1rem" }}>
              <Link href="/give" className="btn-outline" style={{ display: "block", textAlign: "center" }}>
                Give
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1000px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
