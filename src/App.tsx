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
