import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "1.5625rem",
      center: true,
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        success: "var(--success)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        cards: "repeat( auto-fit, minmax(19.8125rem, 1fr) )",
      },
    },
  },
  plugins: [],
} satisfies Config;
