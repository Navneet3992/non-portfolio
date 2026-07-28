import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        "text-primary": "var(--color-text-primary)",
        "text-muted": "var(--color-text-muted)",
        "text-dim": "var(--color-text-dim)",
        accent: "var(--color-accent)",
        "card-teal": "var(--color-card-teal)",
        "card-dark": "var(--color-card-dark)",
        "card-orange": "var(--color-card-orange)",
        "card-red": "var(--color-card-red)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        playfair: ["var(--font-playfair)"],
      },
      fontSize: {
        hero: ["clamp(2.5rem, 7.5vw, 6.25rem)", { lineHeight: "0.95", fontWeight: "800" }],
        display: ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.05", fontWeight: "700" }],
        h2: ["clamp(1.75rem, 3.5vw, 2.5rem)", { lineHeight: "1.1", fontWeight: "700" }],
        h3: ["clamp(1.125rem, 2vw, 1.5rem)", { lineHeight: "1.2", fontWeight: "600" }],
        stat: ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.1", fontWeight: "700" }],
        label: ["0.75rem", { lineHeight: "1.2", fontWeight: "500", letterSpacing: "0.08em" }],
        body: ["18px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      borderRadius: {
        card: "var(--radius-card)",
        btn: "var(--radius-button)",
        badge: "var(--radius-badge)",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
