/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00E5FF',
        'matrix-green': '#39FF14'
      },
      boxShadow: { glow: '0 0 24px rgba(0,229,255,.25)' },
      backgroundImage: {
        'day-gradient': 'linear-gradient(135deg,#0e1220 0%,#151c3b 35%,#1b1b3a 60%,#2b1b3d 100%), radial-gradient(600px circle at 0% 0%, rgba(0,229,255,.08), transparent), radial-gradient(600px circle at 100% 100%, rgba(168,85,247,.09), transparent)',
        'night-gradient': 'radial-gradient(600px circle at 10% 10%, rgba(57,255,20,.10), transparent), radial-gradient(600px circle at 90% 90%, rgba(57,255,20,.15), transparent), #000'
      }
    }
  },
  plugins: []
}
