import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#fcf9f3",
          bright: "#fcf9f3",
          dim: "#dcdad4",
          low: "#f6f3ed",
          container: "#f0eee8",
          high: "#ebe8e2",
          highest: "#e5e2dc",
          lowest: "#ffffff",
        },
        "on-surface": {
          DEFAULT: "#1c1c18",
          variant: "#444748",
        },
        primary: {
          DEFAULT: "#000000",
          container: "#1c1b1b",
          fixed: "#e5e2e1",
        },
        secondary: {
          DEFAULT: "#685c53",
          container: "#f0e0d3",
          "on-container": "#6e6259",
        },
        tertiary: {
          DEFAULT: "#000000",
          container: "#3b0900",
          "on-container": "#f34100",
          fixed: "#ffdbd1",
          "fixed-dim": "#ffb5a0",
        },
        terracotta: {
          DEFAULT: "#bd814f",
          vibrant: "#dd4814",
          deep: "#f34100",
        },
        cinema: {
          black: "#070708",
          charcoal: "#0b0b0c",
          card: "#121215",
          border: "#1e1e24",
          muted: "#71717a",
        },
      },
      fontFamily: {
        editorial: ["var(--font-bodoni)", "Bodoni Moda", "Playfair Display", "serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SF Mono", "monospace"],
      },
      keyframes: {
        "marquee-l2r": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.04)" },
        },
      },
      animation: {
        "marquee-left-to-right": "marquee-l2r 28s linear infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
