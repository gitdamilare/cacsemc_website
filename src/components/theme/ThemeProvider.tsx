"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type ThemePreference = "light" | "dark";

type ThemeContextValue = {
  preference: ThemePreference;
  setPreference: (preference: ThemePreference, origin?: ThemeRevealOrigin) => void;
};

type ThemeRevealOrigin = {
  x: number;
  y: number;
};

const THEME_STORAGE_KEY = "cac-theme";
const themeContext = createContext<ThemeContextValue | null>(null);

function isThemePreference(value: string | null): value is ThemePreference {
  return value === "light" || value === "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>("light");
  const [reveal, setReveal] = useState<{
    target: "light" | "dark";
    x: number;
    y: number;
  } | null>(null);

  const applyPreference = useCallback((nextPreference: ThemePreference) => {
    document.documentElement.dataset.theme = nextPreference;
    window.localStorage.setItem(THEME_STORAGE_KEY, nextPreference);
  }, []);

  const setPreference = useCallback(
    (nextPreference: ThemePreference, origin?: ThemeRevealOrigin) => {
      const currentTheme = preference;
      const nextTheme = nextPreference;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      setPreferenceState(nextPreference);

      if (!origin || reduceMotion || currentTheme === nextTheme) {
        applyPreference(nextPreference);
        return;
      }

      setReveal({ target: nextTheme, ...origin });
    },
    [applyPreference, preference]
  );

  useEffect(() => {
    const savedPreference = window.localStorage.getItem(THEME_STORAGE_KEY);
    const initialPreference = isThemePreference(savedPreference)
      ? savedPreference
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    setPreferenceState(initialPreference);
    if (isThemePreference(savedPreference)) {
      document.documentElement.dataset.theme = initialPreference;
    } else {
      delete document.documentElement.dataset.theme;
    }
  }, []);

  useEffect(() => {
    if (!reveal) return;

    const timer = window.setTimeout(() => {
      applyPreference(reveal.target);
      setReveal(null);
    }, 420);

    return () => window.clearTimeout(timer);
  }, [applyPreference, reveal]);

  const contextValue = useMemo(
    () => ({ preference, setPreference }),
    [preference, setPreference]
  );

  return (
    <themeContext.Provider value={contextValue}>
      {children}
      {reveal && (
        <div
          aria-hidden="true"
          className="theme-reveal"
          data-theme-target={reveal.target}
          style={
            {
              "--theme-reveal-x": `${reveal.x}px`,
              "--theme-reveal-y": `${reveal.y}px`,
            } as React.CSSProperties
          }
        />
      )}
    </themeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(themeContext);
  if (!value) throw new Error("useTheme must be used inside ThemeProvider");
  return value;
}
