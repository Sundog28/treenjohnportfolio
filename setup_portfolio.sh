#!/usr/bin/env bash
set -e

APP_DIR="${PWD}"
echo "Scaffolding portfolio into: $APP_DIR"

mkdir -p public/projects public/resume src/components src/context src/pages src/styles

############################
# package.json
############################
cat > package.json <<'EOF'
{
  "name": "treenjohn-portfolio",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 5174"
  },
  "dependencies": {
    "framer-motion": "^11.0.0",
    "qrcode.react": "^3.1.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.8",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.6.3",
    "vite": "^5.4.10"
  }
}
EOF

############################
# vite config
############################
cat > vite.config.ts <<'EOF'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true }
});
EOF

############################
# tsconfigs
############################
cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "target": "ES2021",
    "lib": ["ES2021", "DOM"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "skipLibCheck": true,
    "noEmit": true,
    "paths": {}
  },
  "include": ["src"]
}
EOF

############################
# tailwind + postcss
############################
cat > tailwind.config.js <<'EOF'
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
EOF

cat > postcss.config.js <<'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
EOF

############################
# index.html (production-safe; Vite will swap module path on build)
############################
cat > index.html <<'EOF'
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>John Treen — Portfolio</title>

  <!-- SEO & Social -->
  <meta name="description" content="John Treen — Full-Stack & ML Engineer Portfolio" />
  <meta property="og:title" content="John Treen — Portfolio" />
  <meta property="og:description" content="Projects, skills, resume, and contact." />
  <meta property="og:image" content="/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- PWA-lite -->
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#FFD700" />

  <link rel="icon" href="/favicon.png" />
</head>
<body class="bg-black text-white">
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
EOF

############################
# manifest.json (minimal, no PWA install)
############################
cat > public/manifest.json <<'EOF'
{
  "name": "John Treen — Portfolio",
  "short_name": "JT Portfolio",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#FFD700",
  "icons": []
}
EOF

############################
# OG Banner (clean gold SVG -> saved as PNG-ish filename but SVG content)
############################
cat > public/og-image.png <<'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="45%" r="60%">
      <stop offset="0" stop-color="#FFD700" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gold" x1="0" x2="1">
      <stop offset="0" stop-color="#FFDA6B"/>
      <stop offset="1" stop-color="#C9A227"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#FFD70022" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#0a0a0a"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  <ellipse cx="600" cy="315" rx="520" ry="260" fill="url(#glow)"/>
  <g fill="url(#gold)" font-family="Inter,Segoe UI,system-ui">
    <text x="120" y="240" font-size="64" font-weight="800">John Treen</text>
    <text x="120" y="300" font-size="32" opacity="0.9">Full-Stack & ML Engineer</text>
    <text x="120" y="360" font-size="24" fill="#FFD700" opacity="0.9">Code. Data. Progress.</text>
    <text x="120" y="420" font-size="22" fill="#E5C451">treenjohnportfolio.com</text>
  </g>
  <rect x="1000" y="470" width="240" height="50" fill="none"/>
  <g fill="#E5C451" font-family="Inter,Segoe UI,system-ui" font-size="18">
    <text x="120" y="480">Open to Hire — Portfolio v1.0</text>
  </g>
</svg>
EOF

############################
# simple favicon placeholder
############################
cat > public/favicon.png <<'EOF'
iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABlBMVEUAAAD///+l2Z/dAAAAEklEQVQI12NgQAX/GAgYGBgAABu0A1l7fM8kAAAAAElFTkSuQmCC
EOF

############################
# SPA routing for Vercel
############################
cat > vercel.json <<'EOF'
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
EOF

############################
# global styles
############################
cat > src/styles/index.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Gold Futuristic tokens */
:root {
  --ring: #ffd70066;
  --accent: #ffd700;
}

/* cards & buttons */
.card { @apply rounded-xl bg-white/5 backdrop-blur p-5 shadow-md ring-1 ring-transparent transition hover:ring-[var(--ring)]; }
.btn { @apply inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium ring-1 ring-transparent hover:ring-[var(--ring)] transition; }
.btn-primary { @apply bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30; box-shadow:0 0 0 1px var(--ring), 0 0 20px var(--accent);}

/* Floating orbs HUD */
.hud-wrap{ position:fixed; inset:0; overflow:hidden; pointer-events:none; z-index:0; }
.orb{ position:absolute; width:220px; height:220px; border-radius:50%; background: radial-gradient(closest-side, rgba(255,215,0,0.18), transparent); filter: blur(20px); animation: float 16s ease-in-out infinite; }
.orb:nth-child(1){ top:10%; left:8%; animation-delay:-2s;}
.orb:nth-child(2){ bottom:12%; right:12%; animation-delay:-6s;}
.orb:nth-child(3){ top:30%; right:25%; width:160px; height:160px; animation-delay:-10s;}
@keyframes float {
  0%,100% { transform: translateY(0) translateX(0);}
  50% { transform: translateY(-24px) translateX(12px);}
}

/* page containers */
.page { @apply relative z-10 max-w-6xl mx-auto px-4 py-10; }
EOF

############################
# main.tsx
############################
cat > src/main.tsx <<'EOF'
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
EOF

############################
# router
############################
cat > src/router.tsx <<'EOF'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Recruiter from "./pages/Recruiter";
import Downloads from "./pages/Downloads";
import NotFound from "./pages/NotFound";

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/recruiter" element={<Recruiter/>}/>
      <Route path="/downloads" element={<Downloads/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}
EOF

############################
# App shell with nav + footer + HUD
############################
cat > src/App.tsx <<'EOF'
import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppRoutes from "./router";

function NavLink({to,label}:{to:string;label:string}){
  const loc = useLocation();
  const active = loc.pathname === to;
  return (
    <Link to={to} className={`px-3 py-2 rounded ${active ? "bg-white/10 text-yellow-300" : "hover:bg-white/5"}`}>
      {label}
    </Link>
  );
}

function Hud(){
  return (
    <div aria-hidden className="hud-wrap">
      <div className="orb"></div>
      <div className="orb"></div>
      <div className="orb"></div>
    </div>
  );
}

function Footer(){
  return (
    <footer className="page text-sm text-white/60">
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div>© {new Date().getFullYear()} John Treen</div>
        <div className="flex gap-3">
          <a href="mailto:treenjohnm@gmail.com" className="hover:text-yellow-300">Email</a>
          <a href="https://www.linkedin.com/in/john-treen-629a81159" target="_blank" rel="noreferrer" className="hover:text-yellow-300">LinkedIn</a>
          <a href="https://github.com/Sundog28" target="_blank" rel="noreferrer" className="hover:text-yellow-300">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-goth to-black text-white">
      <Hud/>
      <header className="page flex flex-col md:flex-row md:items-center justify-between gap-6">
        <Link to="/" className="text-2xl font-bold text-yellow-300 drop-shadow">JT<span className="text-white/80">.portfolio</span></Link>
        <nav className="flex flex-wrap gap-2">
          <NavLink to="/" label="Home"/>
          <NavLink to="/skills" label="Skills"/>
          <NavLink to="/projects" label="Projects"/>
          <NavLink to="/resume" label="Resume"/>
          <NavLink to="/contact" label="Contact"/>
          <NavLink to="/recruiter" label="Recruiter"/>
          <NavLink to="/downloads" label="Downloads"/>
        </nav>
      </header>
      <main className="page">
        <AppRoutes/>
      </main>
      <Footer/>
    </div>
  );
}
EOF

############################
# Pages
############################

# Home
cat > src/pages/Home.tsx <<'EOF'
import React from "react";
export default function Home(){
  return (
    <section className="relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Hi, I'm <span className="text-yellow-300">John Treen</span>
      </h1>
      <p className="text-white/80 max-w-2xl">
        Full-Stack & ML Engineer. I build clean React frontends, robust APIs, and pragmatic ML demos.
        Explore my <a className="text-yellow-300 underline" href="/projects">projects</a>, check the <a className="text-yellow-300 underline" href="/resume">resume</a>, or get in <a className="text-yellow-300 underline" href="/contact">contact</a>.
      </p>
    </section>
  );
}
EOF

# Skills (includes R + floating vibe via HUD already)
cat > src/pages/Skills.tsx <<'EOF'
import React, { useState } from "react";

type Skill = { id:number; name:string; level:number };

const DEFAULT: Skill[] = [
  { id: 1, name: "JavaScript", level: 80 },
  { id: 2, name: "TypeScript", level: 75 },
  { id: 3, name: "Python", level: 78 },
  { id: 4, name: "R", level: 55 },
  { id: 5, name: "SQL", level: 70 }
];

export default function Skills(){
  const [skills, setSkills] = useState<Skill[]>(DEFAULT);
  const [name, setName] = useState("");

  const add = () => {
    if(!name.trim()) return;
    setSkills(s => [...s, { id: Date.now(), name, level: 40 }]);
    setName("");
  };

  const adjust = (id:number, d:number) => {
    setSkills(skills.map(s => s.id===id ? {...s, level: Math.max(0, Math.min(100, s.level + d))} : s));
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex gap-2 mb-6">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Add a skill..."
          className="px-3 py-2 rounded bg-white/10 border border-white/10 flex-1"/>
        <button onClick={add} className="btn btn-primary">Add</button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {skills.map(s=>(
          <div key={s.id} className="card">
            <div className="flex items-center justify-between mb-1">
              <div className="font-semibold">{s.name}</div>
              <div className="text-yellow-300">{s.level}%</div>
            </div>
            <div className="h-3 bg-white/10 rounded overflow-hidden">
              <div className="h-3 bg-yellow-400" style={{width: `${s.level}%`}}/>
            </div>
            <div className="flex gap-2 mt-3">
              <button className="btn" onClick={()=>adjust(s.id,-10)}>-10</button>
              <button className="btn" onClick={()=>adjust(s.id,-5)}>-5</button>
              <button className="btn" onClick={()=>adjust(s.id,5)}>+5</button>
              <button className="btn" onClick={()=>adjust(s.id,10)}>+10</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
EOF

# Projects (uses your images; if missing, SVG fallbacks added below)
cat > src/pages/Projects.tsx <<'EOF'
import React from "react";

type Card = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  repo?: string;
};

const projects: Card[] = [
  {
    title: "SkillForge",
    description: "A gamified skill-tracking app with progress bars and theming.",
    image: "/projects/skillforge.png",
    tech: ["React","TypeScript","TailwindCSS","Vite"],
    link: "https://skillforge.vercel.app",
    repo: "https://github.com/Sundog28/SkillForge"
  },
  {
    title: "JobTrack API",
    description: "Backend API to track job applications, built in Go with REST endpoints.",
    image: "/projects/jobtrack.png",
    tech: ["Go","PostgreSQL","Render"],
    link: "https://jobtrack-api.onrender.com",
    repo: "https://github.com/Sundog28/JobTrackAPI"
  },
  {
    title: "ML Capstone — Wine Quality",
    description: "Machine Learning model using RandomForest on UCI Wine Dataset.",
    image: "/projects/mlcapstone.png",
    tech: ["Python","Pandas","Streamlit"],
    link: "https://huggingface.co/spaces/Sundog28/MLCapstone",
    repo: "https://github.com/Sundog28/MLCapstone"
  }
];

export default function Projects(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map(p=>(
          <article key={p.title} className="card group overflow-hidden" style={{backdropFilter:"blur(6px)"}}>
            <div className="relative aspect-video bg-white/5 rounded mb-3 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"/>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition"
                   style={{boxShadow:"inset 0 0 120px 20px rgba(255,215,0,0.08)"}}/>
            </div>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-white/70 text-sm mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {p.tech.map(t=> <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded">{t}</span>)}
            </div>
            <div className="flex gap-2">
              <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-primary">Live ↗</a>
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="btn">Repo ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
EOF

# Resume (QR codes + updated address)
cat > src/pages/Resume.tsx <<'EOF'
import React from "react";
import QRCode from "qrcode.react";

const EMAIL = "treenjohnm@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/john-treen-629a81159";
const PORTFOLIO = "https://treenjohnportfoliocom.vercel.app";

export default function Resume(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <article className="card">
          <h3 className="font-semibold mb-2">Contact</h3>
          <div className="text-sm text-white/80 space-y-1">
            <div>John Treen</div>
            <div>14 Wickham Ct</div>
            <div>Sugar Land, TX 77479</div>
            <div>United States</div>
            <div className="pt-2"><a className="text-yellow-300 underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            <div><a className="text-yellow-300 underline" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a></div>
          </div>
          <div className="flex gap-6 mt-4">
            <div className="text-center">
              <QRCode value={PORTFOLIO} size={112}/>
              <div className="text-xs mt-2 text-white/70">Portfolio</div>
            </div>
            <div className="text-center">
              <QRCode value={LINKEDIN} size={112}/>
              <div className="text-xs mt-2 text-white/70">LinkedIn</div>
            </div>
            <div className="text-center">
              <QRCode value={`mailto:${EMAIL}`} size={112}/>
              <div className="text-xs mt-2 text-white/70">Email</div>
            </div>
          </div>
        </article>

        <article className="card">
          <h3 className="font-semibold mb-2">Downloads</h3>
          <p className="text-white/80 text-sm mb-3">HTML versions are embedded for instant viewing; download if needed.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="/resume/resume_full.html" className="btn btn-primary">Resume (Full)</a>
            <a href="/resume/resume_mini.html" className="btn">Resume (Mini)</a>
          </div>
        </article>
      </div>
    </section>
  );
}
EOF

# Contact
cat > src/pages/Contact.tsx <<'EOF'
import React, { useState } from "react";
export default function Contact(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [msg,setMsg] = useState("");
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form className="card max-w-xl">
        <label className="block mb-3">
          <span className="text-sm text-white/70">Name</span>
          <input className="mt-1 w-full px-3 py-2 rounded bg-white/10 border border-white/10" value={name} onChange={e=>setName(e.target.value)} />
        </label>
        <label className="block mb-3">
          <span className="text-sm text-white/70">Email</span>
          <input className="mt-1 w-full px-3 py-2 rounded bg-white/10 border border-white/10" value={email} onChange={e=>setEmail(e.target.value)} />
        </label>
        <label className="block mb-4">
          <span className="text-sm text-white/70">Message</span>
          <textarea className="mt-1 w-full px-3 py-2 rounded bg-white/10 border border-white/10 h-32" value={msg} onChange={e=>setMsg(e.target.value)} />
        </label>
        <button type="button" onClick={()=>alert("Thanks!")} className="btn btn-primary">Send</button>
      </form>
    </section>
  );
}
EOF

# Recruiter
cat > src/pages/Recruiter.tsx <<'EOF'
import React from "react";
export default function Recruiter(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Recruiter Mode</h2>
      <div className="card">
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>One-page overview of projects with links to live demos</li>
          <li>QR codes on Resume page for instant access</li>
          <li>Deploy-ready configuration (Vercel) and SPA routing</li>
          <li>Clean gold/goth futuristic theme with subtle HUD motion</li>
        </ul>
      </div>
    </section>
  );
}
EOF

# Downloads
cat > src/pages/Downloads.tsx <<'EOF'
import React from "react";
export default function Downloads(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Downloads</h2>
      <div className="card">
        <ul className="space-y-2">
          <li><a className="text-yellow-300 underline" href="/resume/resume_full.html">Resume (Full)</a></li>
          <li><a className="text-yellow-300 underline" href="/resume/resume_mini.html">Resume (Mini)</a></li>
        </ul>
      </div>
    </section>
  );
}
EOF

# NotFound
cat > src/pages/NotFound.tsx <<'EOF'
import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-2">404</h2>
      <p className="text-white/70 mb-4">That page doesn't exist.</p>
      <Link className="btn btn-primary" to="/">Go Home</Link>
    </section>
  );
}
EOF

############################
# Public project images (SVG fallbacks if you don't have PNGs yet)
############################
cat > public/projects/skillforge.png <<'EOF'
<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0ea5e9"/><stop offset="1" stop-color="#6366f1"/></linearGradient><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#ffffff22"/></pattern></defs><rect width="100%" height="100%" fill="#0b1220"/><rect width="100%" height="100%" fill="url(#grid)"/><g transform="translate(120,160)" font-family="Inter,Segoe UI,system-ui"><text x="360" y="80" fill="white" font-size="56" font-weight="700">SkillForge</text><text x="360" y="118" fill="#c7d2fe" font-size="22">Track & level up your skills</text><rect x="30" y="100" width="280" height="90" rx="18" fill="url(#g)"/><rect x="155" y="160" width="18" height="160" rx="9" fill="#cbd5e1"/><rect x="147" y="305" width="34" height="120" rx="6" fill="#1f2937"/><g transform="translate(360,150)"><rect width="660" height="20" rx="10" fill="#0f172a"/><rect width="520" height="20" rx="10" fill="url(#g)"/><g transform="translate(0,44)"><rect width="660" height="20" rx="10" fill="#0f172a"/><rect width="420" height="20" rx="10" fill="url(#g)"/></g><g transform="translate(0,88)"><rect width="660" height="20" rx="10" fill="#0f172a"/><rect width="300" height="20" rx="10" fill="url(#g)"/></g></g></g></svg>
EOF

cat > public/projects/jobtrack.png <<'EOF'
<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#22c55e"/><stop offset="1" stop-color="#06b6d4"/></linearGradient><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#ffffff22"/></pattern></defs><rect width="100%" height="100%" fill="#07110e"/><rect width="100%" height="100%" fill="url(#grid)"/><g transform="translate(120,140)" font-family="Inter,Segoe UI,system-ui"><text x="0" y="60" fill="white" font-size="56" font-weight="700">JobTrack API</text><text x="0" y="96" fill="#99f6e4" font-size="22">REST API for tracking applications</text><g transform="translate(0,130)"><rect width="960" height="320" rx="18" fill="#0b1e17" stroke="url(#g)"/><circle cx="28" cy="28" r="6" fill="#ef4444"/><circle cx="48" cy="28" r="6" fill="#f59e0b"/><circle cx="68" cy="28" r="6" fill="#22c55e"/><g font-size="18" fill="#d1fae5"><text x="28" y="72">$ curl -s https://jobtrack.example.com/healthz</text><text x="28" y="104">200 OK</text><text x="28" y="164">$ curl -s -X POST /jobs -d '{ "company":"Acme", "role":"BE" }'</text><text x="28" y="196">{ "id":"…", "company":"Acme", "role":"BE", "status":"Applied" }</text></g></g></g></svg>
EOF

cat > public/projects/mlcapstone.png <<'EOF'
<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#ef4444"/><stop offset="1" stop-color="#a855f7"/></linearGradient><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#ffffff22"/></pattern></defs><rect width="100%" height="100%" fill="#1a0f1d"/><rect width="100%" height="100%" fill="url(#grid)"/><g transform="translate(120,140)" font-family="Inter,Segoe UI,system-ui"><text x="0" y="60" fill="white" font-size="56" font-weight="700">ML Capstone — Wine Quality</text><text x="0" y="96" fill="#f5d0fe" font-size="22">RandomForest · Streamlit</text><g transform="translate(0,130)"><path d="M120 0 c80 0 120 40 120 90 0 60-40 110-120 120 v50 h80 v30 h-200 v-30 h80 v-50 c-80-10-120-60-120-120 0-50 40-90 120-90z" fill="url(#g)"/></g><g fill="#fecdd3" font-size="20"><text x="420" y="210">C₂H₆O</text><text x="520" y="250">SO₂</text><text x="460" y="300">pH 3.5</text></g><g transform="translate(360,220)"><rect width="20" height="80" x="0" y="40" fill="url(#g)"/><rect width="20" height="120" x="40" y="0" fill="url(#g)"/><rect width="20" height="60" x="80" y="60" fill="url(#g)"/><rect width="20" height="100" x="120" y="20" fill="url(#g)"/></g></g></svg>
EOF

############################
# Resume HTML (coded with updated address)
############################
cat > public/resume/resume_full.html <<'EOF'
<!doctype html><html><head><meta charset="utf-8"><title>John Treen — Resume (Full)</title><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;margin:40px;max-width:900px}h1{margin:0}h2{margin:24px 0 6px}small{color:#555}</style></head><body>
<h1>John Treen</h1>
<small>14 Wickham Ct · Sugar Land, TX 77479 · United States · treenjohnm@gmail.com</small>
<h2>Summary</h2><p>Full-Stack & ML Engineer building production-ready UIs, APIs, and ML demos.</p>
<h2>Experience</h2><ul><li>Projects: SkillForge (React/TS), JobTrack API (Go), ML Capstone (Python/Streamlit)</li></ul>
<h2>Skills</h2><p>React, TypeScript, Node, Go, Python, R, SQL, Tailwind, Vercel, Render</p>
<h2>Links</h2><p><a href="https://treenjohnportfoliocom.vercel.app">Portfolio</a> · <a href="https://www.linkedin.com/in/john-treen-629a81159">LinkedIn</a> · <a href="https://github.com/Sundog28">GitHub</a></p>
</body></html>
EOF

cat > public/resume/resume_mini.html <<'EOF'
<!doctype html><html><head><meta charset="utf-8"><title>John Treen — Resume (Mini)</title><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;margin:40px;max-width:720px}h1{margin:0}small{color:#555}</style></head><body>
<h1>John Treen</h1>
<small>14 Wickham Ct · Sugar Land, TX 77479 · United States · treenjohnm@gmail.com</small>
<p>Full-Stack & ML Engineer · React/TS · Go · Python · R · SQL</p>
<p><a href="/resume/resume_full.html">Full version</a></p>
</body></html>
EOF

echo "Done. Portfolio scaffolded."
echo
echo "Next steps:"
echo "1) npm install"
echo "2) npm run dev  # open http://localhost:5173"
echo "3) git init && git add . && git commit -m 'feat: portfolio full build'"
echo "4) vercel --prod  (uses vercel.json SPA routing)"
