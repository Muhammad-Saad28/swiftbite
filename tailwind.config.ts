import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tertiary-fixed": "#e2e2e2", "inverse-on-surface": "#000000ff", "inverse-surface": "#e5e2e1", "primary-fixed-dim": "#ffba20", "on-tertiary-container": "#505252", "surface-container-low": "#1c1b1b", "outline-variant": "#514532", "inverse-primary": "#7c5800", "on-secondary": "#3f2e00", "primary-container": "#ffb800", "on-primary-fixed-variant": "#5e4200", "on-secondary-fixed-variant": "#5a4300", "surface": "#000000", "on-tertiary": "#2f3131", "tertiary-container": "#c4c5c5", "outline": "#9e8f78", "on-background": "#e5e2e1", "surface-container-lowest": "#000000", "on-secondary-fixed": "#251a00", "surface-container": "#201f1f", "surface-container-highest": "#353534", "tertiary": "#e1e1e1", "on-primary": "#412d00", "secondary-fixed-dim": "#f7be00", "primary-fixed": "#ffdea8", "secondary-fixed": "#ffdf99", "on-error-container": "#ffdad6", "on-surface": "#e5e2e1", "error-container": "#93000a", "surface-variant": "#353534", "secondary": "#ffe5b1", "background": "#000000", "surface-dim": "#000000", "primary": "#ffdca1", "on-error": "#690005", "on-secondary-container": "#6d5200", "error": "#ffb4ab", "surface-container-high": "#2a2a2a", "surface-bright": "#3a3939", "on-tertiary-fixed-variant": "#454747", "on-surface-variant": "#d5c4ab", "tertiary-fixed-dim": "#c6c6c7", "surface-tint": "#ffba20", "on-primary-container": "#6b4c00", "on-primary-fixed": "#271900", "secondary-container": "#fec300", "on-tertiary-fixed": "#1a1c1c"
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
      spacing: { "margin": "2rem", "gutter-mobile": "0.75rem", "space-sm": "0.5rem", "space-xs": "0.25rem", "space-lg": "1.5rem", "margin-mobile": "1rem", "gutter": "1.25rem", "space-xl": "2.5rem", "space-md": "1rem" },
      fontFamily: { "body-md": ["var(--font-outfit)", "sans-serif"], "label-md": ["var(--font-space-grotesk)", "sans-serif"], "body-sm": ["var(--font-outfit)", "sans-serif"], "body-xl": ["var(--font-outfit)", "sans-serif"], "headline-sm": ["var(--font-epilogue)", "sans-serif"], "display-hero-mobile": ["var(--font-epilogue)", "sans-serif"], "headline-xl-mobile": ["var(--font-epilogue)", "sans-serif"], "label-lg": ["var(--font-space-grotesk)", "sans-serif"], "headline-xl": ["var(--font-epilogue)", "sans-serif"], "display-hero": ["var(--font-epilogue)", "sans-serif"], "price-tag": ["var(--font-space-grotesk)", "sans-serif"], "headline-lg": ["var(--font-epilogue)", "sans-serif"] },
      fontSize: { "body-md": ["15px", { "lineHeight": "24px", "fontWeight": "400" }], "label-md": ["12px", { "lineHeight": "16px", "letterSpacing": "0.04em", "fontWeight": "600" }], "body-sm": ["13px", { "lineHeight": "20px", "fontWeight": "400" }], "body-xl": ["18px", { "lineHeight": "28px", "fontWeight": "400" }], "headline-sm": ["20px", { "lineHeight": "28px", "letterSpacing": "-0.01em", "fontWeight": "600" }], "display-hero-mobile": ["36px", { "lineHeight": "42px", "letterSpacing": "-0.02em", "fontWeight": "800" }], "headline-xl-mobile": ["28px", { "lineHeight": "34px", "letterSpacing": "-0.01em", "fontWeight": "700" }], "label-lg": ["14px", { "lineHeight": "18px", "letterSpacing": "0.02em", "fontWeight": "600" }], "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }], "display-hero": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.03em", "fontWeight": "800" }], "price-tag": ["18px", { "lineHeight": "22px", "letterSpacing": "-0.01em", "fontWeight": "700" }], "headline-lg": ["28px", { "lineHeight": "36px", "letterSpacing": "-0.015em", "fontWeight": "700" }] }
    },
  },
  plugins: [],
};
export default config;
