#!/usr/bin/env bash
set -euo pipefail

# folders
mkdir -p public/projects public/resume public/downloads src/components src/pages src/styles

# package.json
cat > package.json <<'EOF'
{
  "name": "treenjohnportfolio",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --open",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "qrcode.react": "^3.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.46",
    "@types/react-dom": "^18.2.18",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.6.2",
    "vite": "^5.4.8"
  }
}
EOF

# tsconfigs
cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020","DOM","DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "noEmit": true
  },
  "include": ["src"]
}
EOF

cat > tsconfig.app.json <<'EOF'
{
  "extends": "./tsconfig.json",
  "include": ["src"]
}
EOF

cat > tsconfig.node.json <<'EOF'
{
  "extends": "./tsconfig.json",
  "compilerOptions": { "composite": true, "types": ["node"] },
  "include": ["vite.config.ts"]
}
EOF

# tailwind & postcss
cat > tailwind.config.ts <<'EOF'
import type { Config } from 'tailwindcss'
export default {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: []
} satisfies Config
EOF

cat > postcss.config.js <<'EOF'
export default { plugins: { tailwindcss: {}, autoprefixer: {} } }
EOF

# vite
cat > vite.config.ts <<'EOF'
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 }
})
EOF

# index.html
cat > index.html <<'EOF'
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>John Treen — Portfolio</title>
  <meta name="description" content="John Treen — Full-Stack & ML Engineer Portfolio">
  <meta property="og:title" content="John Treen — Portfolio" />
  <meta property="og:description" content="Projects, skills, resume, and contact." />
  <meta property="og:image" content="/projects/mlcapstone.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="manifest" href="/manifest.json" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
EOF

# styles
cat > src/styles/index.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { --bg:#0b0b0e; --text:#eaeaf2; --accent:#ffd700; --ring:#ffdf6a; }
[data-theme="goth"] { --bg:#0a0a0a; --text:#f2ecff; --accent:#9d4edd; --ring:#b57bff; }
[data-theme="matrix"] { --bg:#000; --text:#b9ffcc; --accent:#00ff41; --ring:#5cff8a; }

html,body,#root{height:100%; background:var(--bg); color:var(--text);}
a { color: var(--accent); }
.card { @apply rounded-xl bg-white/5 backdrop-blur p-5 shadow-md ring-1 ring-transparent transition hover:ring-[var(--ring)]; }
.btn  { @apply inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium ring-1 ring-transparent hover:ring-[var(--ring)] transition; }
.btn-primary { box-shadow:0 0 0 1px var(--ring), 0 0 20px var(--accent); }
EOF

# main & app
cat > src/main.tsx <<'EOF'
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Recruiter from "./pages/Recruiter"
import Downloads from "./pages/Downloads"
import NotFound from "./pages/NotFound"
import "./styles/index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { index: true, element: <Home/> },
      { path: "skills", element: <Skills/> },
      { path: "projects", element: <Projects/> },
      { path: "resume", element: <Resume/> },
      { path: "contact", element: <Contact/> },
      { path: "recruiter", element: <Recruiter/> },
      { path: "downloads", element: <Downloads/> },
      { path: "*", element: <NotFound/> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
EOF

cat > src/App.tsx <<'EOF'
import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ParticleBackground from "./components/ParticleBackground"

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground/>
      <NavBar/>
      <main className="flex-1 container mx-auto px-4 py-8 relative z-10">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
EOF

# components
cat > src/components/NavBar.tsx <<'EOF'
import React from "react"
import { NavLink } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

export default function NavBar(){
  const link = "px-3 py-2 rounded hover:bg-white/10"
  const active = ({isActive}:{isActive:boolean}) => isActive ? link+" bg-white/10" : link
  return (
    <nav className="sticky top-0 z-20 backdrop-blur bg-black/30 text-sm">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <div className="font-bold text-lg">JT ▸ Portfolio</div>
        <div className="flex gap-2">
          <NavLink to="/" className={active}>Home</NavLink>
          <NavLink to="/skills" className={active}>Skills</NavLink>
          <NavLink to="/projects" className={active}>Projects</NavLink>
          <NavLink to="/resume" className={active}>Resume</NavLink>
          <NavLink to="/contact" className={active}>Contact</NavLink>
          <NavLink to="/recruiter" className={active}>Recruiter</NavLink>
          <NavLink to="/downloads" className={active}>Downloads</NavLink>
        </div>
        <div className="ml-auto"><ThemeToggle/></div>
      </div>
    </nav>
  )
}
EOF

cat > src/components/Footer.tsx <<'EOF'
import React from "react"

export default function Footer(){
  return (
    <footer className="relative z-10 mt-12 border-t border-white/10">
      <div className="container mx-auto px-4 py-6 text-sm text-white/70">
        © {new Date().getFullYear()} John Treen — treenjohnm@gmail.com — LinkedIn: /in/john-treen-629a81159
      </div>
    </footer>
  )
}
EOF

cat > src/components/ThemeToggle.tsx <<'EOF'
import React from "react"

export default function ThemeToggle(){
  const [theme, setTheme] = React.useState<string>(()=>localStorage.getItem("jt-theme") || "day")
  React.useEffect(()=>{
    const attr = theme === "day" ? "" : theme
    if(attr) document.documentElement.setAttribute("data-theme", attr)
    else document.documentElement.removeAttribute("data-theme")
    localStorage.setItem("jt-theme", theme)
  },[theme])
  return (
    <select className="bg-transparent ring-1 ring-[var(--ring)] rounded px-2 py-1"
      value={theme} onChange={(e)=>setTheme(e.target.value)}>
      <option value="day">Gold (Day)</option>
      <option value="goth">Goth (Night)</option>
      <option value="matrix">Matrix</option>
    </select>
  )
}
EOF

cat > src/components/ParticleBackground.tsx <<'EOF'
import React, { useEffect, useRef } from "react"

export default function ParticleBackground(){
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(()=>{
    const c = canvasRef.current!
    const ctx = c.getContext("2d")!
    let raf = 0
    const DPR = window.devicePixelRatio || 1
    const resize = () => { c.width = innerWidth*DPR; c.height = innerHeight*DPR; }
    resize(); addEventListener("resize", resize)
    const N = 70; const pts = Array.from({length:N}, ()=>({
      x: Math.random()*c.width, y: Math.random()*c.height,
      vx:(Math.random()-0.5)*0.5, vy:(Math.random()-0.5)*0.5
    }))
    const draw = () => {
      ctx.clearRect(0,0,c.width,c.height)
      for(const p of pts){
        p.x+=p.vx; p.y+=p.vy
        if(p.x<0||p.x>c.width) p.vx*=-1
        if(p.y<0||p.y>c.height) p.vy*=-1
        ctx.fillStyle="rgba(255,215,0,0.6)"
        ctx.beginPath(); ctx.arc(p.x,p.y,1.2*DPR,0,Math.PI*2); ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return ()=>{ cancelAnimationFrame(raf); removeEventListener("resize", resize) }
  },[])
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-40 pointer-events-none"/>
}
EOF

# pages
cat > src/pages/Home.tsx <<'EOF'
import React from "react"
export default function Home(){
  return (
    <section className="relative z-10">
      <div className="card">
        <h1 className="text-3xl font-bold mb-2">Hi, I’m John Treen</h1>
        <p className="text-white/80">Full-Stack & ML Engineer. I build responsive frontends, robust APIs, and data-driven apps.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <a href="/projects" className="card">🚀 Projects</a>
        <a href="/skills" className="card">🧰 Skills</a>
        <a href="/resume" className="card">📄 Resume</a>
      </div>
    </section>
  )
}
EOF

cat > src/pages/Skills.tsx <<'EOF'
import React from "react"
const items = [
  "React, TypeScript, Vite, Tailwind",
  "Go (chi), REST APIs, Docker",
  "Python, NumPy, scikit-learn",
  "PostgreSQL, SQL",
  "Vercel, Render, Hugging Face Spaces",
  "Git, Linux, CLI"
]
export default function Skills(){
  return (
    <section className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="grid md:grid-cols-2 gap-3">{items.map((s,i)=>
        <li key={i} className="card">{s}</li>
      )}</ul>
    </section>
  )
}
EOF

cat > src/pages/Projects.tsx <<'EOF'
import React from "react"

const cards = [
  {
    title: "SkillForge",
    desc: "React + Tailwind skill tracker with PWA.",
    img: "/projects/skillforge.png",
    links: [
      {href:"https://github.com/Sundog28/SkillForge", label:"GitHub"},
      {href:"https://skillforge.vercel.app", label:"Live"}
    ]
  },
  {
    title: "JobTrack API",
    desc: "Go REST API with PostgreSQL, docs & security.",
    img: "/projects/jobtrack.png",
    links: [
      {href:"https://github.com/Sundog28/JobTrackAPI", label:"GitHub"},
      {href:"https://jobtrack-api.onrender.com/docs", label:"Docs"}
    ]
  },
  {
    title: "ML Capstone — Wine Quality",
    desc: "Streamlit app with theme toggle & RF model.",
    img: "/projects/mlcapstone.png",
    links: [
      {href:"https://huggingface.co/spaces/Sundog28/MLCapstone", label:"Demo"}
    ]
  }
]

export default function Projects(){
  return (
    <section className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map(c=>(
          <article key={c.title} className="card">
            <img src={c.img} alt={c.title} className="rounded mb-3 aspect-video object-cover bg-white/10"/>
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-white/70 mb-3">{c.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {c.links.map(l=><a key={l.href} className="btn" href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
EOF

cat > src/pages/Resume.tsx <<'EOF'
import React from "react"
import { QRCode } from "qrcode.react"

const FULL_URL = "/resume/John_Treen_Ultimate_Resume_Full.pdf"
const MINI_URL = "/resume/John_Treen_Ultimate_Resume_Mini.pdf"

export default function Resume(){
  return (
    <section className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="font-semibold mb-2">Full Resume (PDF)</h3>
          <div className="flex items-center gap-4">
            <QRCode value={FULL_URL} size={96} />
            <a className="btn btn-primary" href={FULL_URL} download>Download Full PDF</a>
          </div>
          <p className="text-white/70 mt-2">Address updated: 14 Wickham Ct, Sugar Land, TX 77479, United States</p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">Mini Resume (PDF)</h3>
          <div className="flex items-center gap-4">
            <QRCode value={MINI_URL} size={96} />
            <a className="btn btn-primary" href={MINI_URL} download>Download Mini PDF</a>
          </div>
        </div>
      </div>

      <div className="card mt-6">
        <h3 className="font-semibold mb-2">Web Preview (Full)</h3>
        <iframe title="Resume" src="/resume/resume_full.html" className="w-full h-[70vh] rounded bg-white"></iframe>
      </div>
    </section>
  )
}
EOF

cat > src/pages/Contact.tsx <<'EOF'
import React from "react"
export default function Contact(){
  return (
    <section className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="card">
        <p>Email: <a href="mailto:treenjohnm@gmail.com">treenjohnm@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/john-treen-629a81159" target="_blank" rel="noreferrer">john-treen-629a81159</a></p>
        <p>GitHub: <a href="https://github.com/Sundog28" target="_blank" rel="noreferrer">Sundog28</a></p>
      </div>
    </section>
  )
}
EOF

cat > src/pages/Recruiter.tsx <<'EOF'
import React from "react"
import { QRCode } from "qrcode.react"

export default function Recruiter(){
  const portfolio = "https://treenjohnportfolio.com"
  const linkedin  = "https://www.linkedin.com/in/john-treen-629a81159"
  const email     = "mailto:treenjohnm@gmail.com"
  const fullPDF   = "/resume/John_Treen_Ultimate_Resume_Full.pdf"
  const miniPDF   = "/resume/John_Treen_Ultimate_Resume_Mini.pdf"
  return (
    <section className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Recruiter Mode</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card"><h3 className="font-semibold mb-2">Portfolio</h3><QRCode value={portfolio} size={128}/><a className="btn mt-3" href={portfolio}>Open Portfolio ↗</a></div>
        <div className="card"><h3 className="font-semibold mb-2">LinkedIn</h3><QRCode value={linkedin} size={128}/><a className="btn mt-3" href={linkedin}>Open LinkedIn ↗</a></div>
        <div className="card"><h3 className="font-semibold mb-2">Email</h3><QRCode value={email} size={128}/><a className="btn mt-3" href={email}>Email John ↗</a></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="card"><h3 className="font-semibold mb-2">Full Resume</h3><QRCode value={fullPDF} size={128}/><a className="btn mt-3" href={fullPDF} download>Download Full PDF</a></div>
        <div className="card"><h3 className="font-semibold mb-2">Mini Resume</h3><QRCode value={miniPDF} size={128}/><a className="btn mt-3" href={miniPDF} download>Download Mini PDF</a></div>
      </div>
    </section>
  )
}
EOF

cat > src/pages/Downloads.tsx <<'EOF'
import React from "react"
export default function Downloads(){
  return (
    <section className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Downloads</h2>
      <div className="card">
        <ul className="list-disc ml-5">
          <li><a href="/resume/John_Treen_Ultimate_Resume_Full.pdf" download>Full Resume (PDF)</a></li>
          <li><a href="/resume/John_Treen_Ultimate_Resume_Mini.pdf" download>Mini Resume (PDF)</a></li>
          <li><a href="/downloads/portfolio_package.zip" download>Portfolio Package (zip)</a></li>
        </ul>
      </div>
    </section>
  )
}
EOF

cat > src/pages/NotFound.tsx <<'EOF'
import React from "react"
export default function NotFound(){
  return <div className="card">404 — Page not found.</div>
}
EOF

# public manifest/PWA/SEO
cat > public/sw.js <<'EOF'
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open("jt-cache-v1").then((c)=>c.addAll(["/","/index.html","/manifest.json"])));
});
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((r)=> r || fetch(e.request)));
});
EOF

cat > public/manifest.json <<'EOF'
{
  "name": "John Treen Portfolio",
  "short_name": "Portfolio",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0b0b0e",
  "theme_color": "#ffd700",
  "icons": [
    { "src": "/favicon.ico", "sizes": "32x32", "type": "image/x-icon" }
  ]
}
EOF

cat > public/robots.txt <<'EOF'
User-agent: *
Allow: /

Sitemap: https://treenjohnportfolio.com/sitemap.xml
EOF

cat > public/sitemap.xml <<'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://treenjohnportfolio.com/</loc></url>
  <url><loc>https://treenjohnportfolio.com/skills</loc></url>
  <url><loc>https://treenjohnportfolio.com/projects</loc></url>
  <url><loc>https://treenjohnportfolio.com/resume</loc></url>
  <url><loc>https://treenjohnportfolio.com/contact</loc></url>
  <url><loc>https://treenjohnportfolio.com/recruiter</loc></url>
  <url><loc>https://treenjohnportfolio.com/downloads</loc></url>
</urlset>
EOF

# vercel config
cat > vercel.json <<'EOF'
{
  "version": 2,
  "builds": [{ "src": "index.html", "use": "@vercel/static-build", "config": { "distDir": "dist" } }],
  "routes": [{ "src": "/(.*)", "dest": "/" }],
  "framework": "vite",
  "installCommand": "npm ci",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
EOF

# Resume HTML previews (address updated)
cat > public/resume/resume_full.html <<'EOF'
<!doctype html><html><head><meta charset="utf-8"><title>John Treen — Resume (Full)</title>
<style>body{font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;margin:40px;line-height:1.4;color:#111}h1{margin:0}h2{margin-top:24px}ul{margin:6px 0 12px 20px}</style></head>
<body>
<h1>John Treen</h1>
<p><b>Address:</b> 14 Wickham Ct, Sugar Land, TX 77479, United States<br>
<b>Phone:</b> (864) 630-9281 • <b>Email:</b> treenjohnm@gmail.com • <b>GitHub:</b> github.com/Sundog28 • <b>LinkedIn:</b> linkedin.com/in/john-treen-629a81159</p>
<h2>Professional Summary</h2>
<p>Full-stack & Machine Learning Engineer skilled in building responsive frontends, robust APIs, and data-driven applications. Hands-on with Python, React, Go, SQL, and ML using scikit-learn and Pandas.</p>
<h2>Core Skills</h2>
<ul><li>Python, JavaScript/TypeScript (React, Vite), Go, SQL, Git/GitHub</li><li>Flask/Express, REST APIs, Tailwind CSS</li><li>PostgreSQL, SQLite</li><li>NumPy, Pandas, scikit-learn, EDA, pipelines</li><li>Docker (basics), Vercel, Render, Hugging Face</li></ul>
<h2>Projects</h2>
<ul>
<li><b>SkillForge</b> — Portfolio & learning tracker (React, Tailwind, Vercel)</li>
<li><b>JobTrack API</b> — REST API in Go with PostgreSQL, CRUD, docs, security</li>
<li><b>ML Capstone</b> — Supervised ML models (UCI wine), Streamlit demo</li>
</ul>
<h2>Experience</h2>
<ul>
<li><b>Firehouse Subs</b> — Food Prep Cook, Panama City, FL (Jan 2023 – Jun 2023)</li>
<li><b>Hewett Tire & Auto Center</b> — Assistant Automotive Technician, Panama City, FL (Jun 2022 – Sep 2022)</li>
</ul>
<h2>Education</h2>
<p>Undergraduate Coursework — General Studies (No Degree)<br/>Tarrant County College; College of Central Florida</p>
<h2>Certifications</h2>
<p>Codecademy Machine Learning/AI Engineer Career Path (2025)</p>
</body></html>
EOF

cat > public/resume/resume_mini.html <<'EOF'
<!doctype html><html><head><meta charset="utf-8"><title>John Treen — Resume (Mini)</title>
<style>body{font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;margin:40px;line-height:1.35;color:#111}h1{margin:0}h2{margin-top:20px}</style></head>
<body>
<h1>John Treen</h1>
<p><b>Address:</b> 14 Wickham Ct, Sugar Land, TX 77479, United States<br>
<b>Phone:</b> (864) 630-9281 • <b>Email:</b> treenjohnm@gmail.com • <b>GitHub:</b> github.com/Sundog28 • <b>LinkedIn:</b> linkedin.com/in/john-treen-629a81159</p>
<h2>Summary</h2>
<p>Full-stack & ML Engineer skilled in React, Python, Go, and SQL.</p>
<h2>Key Projects</h2>
<ul><li>SkillForge — React tracker (Tailwind, Vercel)</li><li>JobTrack API — Go + PostgreSQL</li><li>ML Capstone — Streamlit demo</li></ul>
<h2>Certifications</h2>
<p>Codecademy Machine Learning/AI Engineer Career Path (2025)</p>
</body></html>
EOF

# placeholder PDFs (user will convert)
cat > public/resume/README.txt <<'EOF'
Place your generated PDFs here:
- John_Treen_Ultimate_Resume_Full.pdf
- John_Treen_Ultimate_Resume_Mini.pdf
You can print the HTML files to PDF from your browser or run:
libreoffice --headless --convert-to pdf resume_full.html --outdir .
libreoffice --headless --convert-to pdf resume_mini.html --outdir .
Then rename the outputs to the expected filenames.
EOF

# PWA register
cat > src/register-sw.ts <<'EOF'
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(console.error)
  })
}
EOF

# done
echo "Portfolio files created."
EOF

# end script
