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
        primaryLight: "var(--primary-light)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        success: "var(--success)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        cards: "repeat( auto-fit, minmax(17.5rem, 1fr) )",
      },
      backgroundImage: {
        "card-mask":
          "linear-gradient(180.22deg, rgba(0, 0, 0, 0.85) 0.19%, rgba(0, 0, 0, 0.17) 105.04%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
