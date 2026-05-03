import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Apostrophes and quotes in JSX text are valid HTML — stylistic only
      "react/no-unescaped-entities": "off",
      // Custom fonts in root layout <head> are correct for App Router static export
      "@next/next/no-page-custom-font": "off",
      // Closing a mobile menu on route change is a legitimate synchronous reset
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
