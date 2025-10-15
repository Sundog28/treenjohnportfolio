/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        goth: "#0f0f12"
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,215,0,0.15)"
      }
    }
  },
  plugins: []
}
