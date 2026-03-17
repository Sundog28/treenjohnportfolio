import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { Command } from "lucide-react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Recruiter from "./pages/Recruiter";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import SkillForgeCaseStudy from "./pages/case-studies/SkillForgeCaseStudy";
import JobTrackCaseStudy from "./pages/case-studies/JobTrackCaseStudy";
import MLCapstoneCaseStudy from "./pages/case-studies/MLCapstoneCaseStudy";

type ThemeMode = "gold" | "purple" | "green";

type CommandItem = {
  label: string;
  href: string;
};

const COMMANDS: CommandItem[] = [
  { label: "Go to Home", href: "/" },
  { label: "Open Projects", href: "/projects" },
  { label: "Open Recruiter Mode", href: "/recruiter" },
  { label: "Open Resume", href: "/resume" },
  { label: "Open Contact", href: "/contact" },
  { label: "Open SkillForge Case Study", href: "/projects/skillforge" },
  { label: "Open JobTrack API Case Study", href: "/projects/jobtrack-api" },
  { label: "Open ML Capstone Case Study", href: "/projects/ml-capstone" },
];

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>("purple");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "gold" || saved === "purple" || saved === "green") {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(
      "theme-gold",
      "theme-purple",
      "theme-green"
    );
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isCmdK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
      if (isCmdK) {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
      if (e.key === "Escape") {
        setPaletteOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filteredCommands = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter((c) => c.label.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="min-h-screen">
      <Navbar
        theme={theme}
        onSetTheme={setTheme}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      <PageShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/skillforge" element={<SkillForgeCaseStudy />} />
          <Route path="/projects/jobtrack-api" element={<JobTrackCaseStudy />} />
          <Route path="/projects/ml-capstone" element={<MLCapstoneCaseStudy />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="page page-enter">
                <div className="card p-8">
                  <h1 className="text-3xl font-extrabold">404</h1>
                  <p className="mt-2 text-white/75">That page doesn’t exist.</p>
                  <div className="mt-6">
                    <a className="btn btn-primary" href="/">
                      Go Home
                    </a>
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </PageShell>

      <footer className="page pt-0 pb-10 no-print">
        <div className="flex flex-col gap-3 text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} John Treen</p>
          <div className="flex flex-wrap gap-4">
            <a href="/projects">Projects</a>
            <a href="/recruiter">Recruiter Mode</a>
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer>

      {paletteOpen && (
        <div
          className="command-palette-overlay"
          onClick={() => setPaletteOpen(false)}
        >
          <div
            className="command-palette"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              type="text"
              placeholder="Search navigation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div>
              {filteredCommands.map((item) => (
                <a
                  key={item.href}
                  className="command-item"
                  href={item.href}
                  onClick={() => setPaletteOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <main key={location.pathname} className="relative page-enter">
      {children}
    </main>
  );
}

function Navbar({
  theme,
  onSetTheme,
  onOpenPalette,
}: {
  theme: ThemeMode;
  onSetTheme: (theme: ThemeMode) => void;
  onOpenPalette: () => void;
}) {
  const linkBase =
    "rounded-xl px-4 py-2 text-sm font-semibold transition border border-white/10 bg-white/5 hover:bg-white/10";

  const themeBtn = (value: ThemeMode) =>
    `rounded-full px-3 py-2 text-xs font-bold border transition ${
      theme === value
        ? "bg-[var(--accent)] text-black border-transparent"
        : "border-white/15 text-white/80 bg-white/5 hover:bg-white/10"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl no-print">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="/" className="font-extrabold text-xl tracking-wide">
          John<span className="text-[var(--accent)]">Treen</span>
        </a>

        <nav className="flex flex-wrap gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "border-transparent bg-[var(--accent)] text-black"
                  : "text-white/80"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "border-transparent bg-[var(--accent)] text-black"
                  : "text-white/80"
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "border-transparent bg-[var(--accent)] text-black"
                  : "text-white/80"
              }`
            }
          >
            Resume
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "border-transparent bg-[var(--accent)] text-black"
                  : "text-white/80"
              }`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/recruiter"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "border-transparent bg-[var(--accent)] text-black"
                  : "text-white/80"
              }`
            }
          >
            Recruiter
          </NavLink>

          <button
            className={linkBase + " text-white/80"}
            onClick={onOpenPalette}
            type="button"
            title="Command Palette"
          >
            <Command size={16} />
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={themeBtn("gold")}
            onClick={() => onSetTheme("gold")}
          >
            Gold
          </button>
          <button
            type="button"
            className={themeBtn("purple")}
            onClick={() => onSetTheme("purple")}
          >
            Purple
          </button>
          <button
            type="button"
            className={themeBtn("green")}
            onClick={() => onSetTheme("green")}
          >
            Green
          </button>
        </div>
      </div>
    </header>
  );
}