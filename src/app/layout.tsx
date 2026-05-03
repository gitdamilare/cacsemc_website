import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://cacmiraclecenter.org"),
  title: {
    default: "Christ Apostolic Church — Miracle Centre",
    template: "%s | CAC Miracle Centre",
  },
  description:
    "A Spirit-filled, Word-grounded community committed to worship, discipleship, and the transformation of lives through the gospel of Jesus Christ.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://cacmiraclecenter.org",
    siteName: "CAC Miracle Centre",
    images: [{ url: "/logo.jpg", width: 800, height: 800, alt: "CAC Miracle Centre" }],
  },
  twitter: { card: "summary_large_image" },
  keywords: [
    "Christ Apostolic Church",
    "CAC Miracle Centre",
    "church",
    "gospel",
    "Dr Joshua Owoeye",
    "holiness",
    "discipleship",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
