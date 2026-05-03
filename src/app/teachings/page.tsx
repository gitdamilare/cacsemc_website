import type { Metadata } from "next";
import TeachingsContent from "./TeachingsContent";

export const metadata: Metadata = {
  title: "Writings & Teachings",
  description:
    "Browse scripture-grounded articles on holiness, character, leadership, and discipleship by Dr. Joshua Owoeye of CAC Miracle Centre.",
  openGraph: {
    title: "Writings & Teachings | CAC Miracle Centre",
    description:
      "Deep biblical teachings that transform lives — written by Dr. Joshua Owoeye.",
  },
};

export default function TeachingsPage() {
  return <TeachingsContent />;
}
