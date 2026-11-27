"use client";

import { Moon, Sun } from "lucide-react";
import { ThemePreference, useTheme } from "./ThemeProvider";

export default function ThemeControl() {
  const { preference, setPreference } = useTheme();
  const nextPreference: ThemePreference = preference === "light" ? "dark" : "light";
  const Icon = preference === "light" ? Sun : Moon;

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPreference(nextPreference, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  };

  return (
    <div className="theme-control">
      <button
        type="button"
        className="theme-control-trigger"
        data-theme-mode={preference}
        aria-label={`Switch to ${nextPreference} mode`}
        aria-pressed={preference === "dark"}
        title={`Switch to ${nextPreference} mode`}
        onClick={toggleTheme}
      >
        <span className="theme-toggle-thumb" aria-hidden="true">
          <Icon size={12} strokeWidth={1.8} />
        </span>
      </button>
    </div>
  );
}
