import React from "react";
import { Link, Outlet } from "react-router-dom";
import RecruiterPanel from "./RecruiterPanel";
import { useTheme } from "../providers/ThemeProvider";

export default function Layout() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-black text-green-300" : "bg-gradient-to-b from-[#06111a] to-[#0b1622] text-cyan-100"}`}>
      <header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-6">
          <Link to="/" className="font-bold text-lg tracking-wide">JT</Link>
          <Link to="/skills" className="hover:opacity-80">Skills</Link>
          <Link to="/projects" className="hover:opacity-80">Projects</Link>
          <Link to="/resume" className="hover:opacity-80">Résumé</Link>
          <Link to="/contact" className="hover:opacity-80">Contact</Link>
          <Link to="/recruiter" className="ml-auto hover:opacity-90 border border-white/20 px-3 py-1 rounded-lg">Recruiter</Link>
          <button onClick={toggleTheme} className="ml-2 px-3 py-1 border border-white/20 rounded-lg">
            {theme === "dark" ? "☀" : "🌙"}
          </button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      <RecruiterPanel />
    </div>
  );
}
