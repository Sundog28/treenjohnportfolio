import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppRoutes from "./router";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Hud from "./components/Hud";

function NavLink({to,label}:{to:string;label:string}){
  const loc = useLocation(); const active = loc.pathname === to;
  return <Link to={to} className={`px-3 py-2 rounded ${active ? "bg-white/10 text-[var(--accent)]" : "hover:bg-white/5"}`}>{label}</Link>;
}

const Icon = {
  Mail: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/></svg>),
  LinkedIn: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33 0-3.04-1.85-3.04s-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.65 0 4.33 2.4 4.33 5.52v6.23zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.57 20.45h3.55V9H3.57v11.45z"/></svg>),
  GitHub: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.5-1.5-1.9-1.5-1.9-1.3-.9.1-.9.1-.9 1.4.1 2.1 1.5 2.1 1.5 1.2 2 3.1 1.4 3.8 1.1.1-.9.4-1.4.7-1.8-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>)
};

function Footer(){
  return (
    <footer className="page text-sm text-white/70">
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div>© {new Date().getFullYear()} John Treen</div>
        <div className="flex items-center gap-4">
          <a href="mailto:treenjohnm@gmail.com" className="hover:text-[var(--accent)]" aria-label="Email"><Icon.Mail/></a>
          <a href="https://www.linkedin.com/in/john-treen-629a81159" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]" aria-label="LinkedIn"><Icon.LinkedIn/></a>
          <a href="https://github.com/Sundog28" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]" aria-label="GitHub"><Icon.GitHub/></a>
        </div>
      </div>
    </footer>
  );
}

export default function App(){
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Hud/>
        <header className="page flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link to="/" className="text-2xl font-bold" style={{color:"var(--accent)"}}>JT<span className="text-white/80">.portfolio</span></Link>
          <nav className="flex flex-wrap gap-2 items-center">
            <NavLink to="/" label="Home"/><NavLink to="/skills" label="Skills"/><NavLink to="/projects" label="Projects"/>
            <NavLink to="/resume" label="Resume"/><NavLink to="/contact" label="Contact"/><NavLink to="/recruiter" label="Recruiter"/>
            <NavLink to="/downloads" label="Downloads"/><ThemeToggle/>
          </nav>
        </header>
        <main className="page"><AppRoutes/></main>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}
