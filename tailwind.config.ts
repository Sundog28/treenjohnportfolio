import type { Config } from "tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)", card: "var(--card)", text: "var(--text)", accent: "var(--accent)", ring: "var(--ring)"
      },
      boxShadow: { glow: "0 0 20px var(--accent)" }
    }
  },
  plugins: [require("@tailwindcss/typography")]
} satisfies Config;
