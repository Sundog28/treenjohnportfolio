import React, { useEffect, useMemo, useRef, useState } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { Command, Volume2, VolumeX, Cpu, LayoutGrid } from "lucide-react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Recruiter from "./pages/Recruiter";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import SkillForgeCaseStudy from "./pages/case-studies/SkillForgeCaseStudy";
import JobTrackCaseStudy from "./pages/case-studies/JobTrackCaseStudy";
import MLCapstoneCaseStudy from "./pages/case-studies/MLCapstoneCaseStudy";
import BootScreen from "./components/BootScreen";

type ThemeMode = "gold" | "purple" | "green";

type CommandItem = {
  label: string;
  href: string;
};

const COMMANDS: CommandItem[] = [
  { label: "Open Home", href: "/" },
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
  const [soundOn, setSoundOn] = useState(false);
  const [bootDone, setBootDone] = useState(false);

  const humRef = useRef<HTMLAudioElement | null>(null);
  const clickRef = useRef<HTMLAudioElement | null>(null);
  const hoverRef = useRef<HTMLAudioElement | null>(null);
  const bootRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "gold" || savedTheme === "purple" || savedTheme === "green") {
      setTheme(savedTheme);
    }

    const savedSound = localStorage.getItem("portfolio-sound");
    if (savedSound === "on") {
      setSoundOn(true);
    }

    const seenBoot = sessionStorage.getItem("treenos-booted");
    if (seenBoot === "yes") {
      setBootDone(true);
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
    localStorage.setItem("portfolio-sound", soundOn ? "on" : "off");

    const audio = humRef.current;
    if (!audio) return;

    audio.volume = 0.10;
    audio.loop = true;

    if (soundOn) {
      audio.play().catch(() => {
        setSoundOn(false);
      });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [soundOn]);

  useEffect(() => {
    if (!bootDone || !soundOn) return;
    const boot = bootRef.current;
    if (!boot) return;
    boot.volume = 0.18;
    boot.currentTime = 0;
    boot.play().catch(() => {});
  }, [bootDone, soundOn]);

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

  const playClick = () => {
    if (!soundOn) return;
    const audio = clickRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.volume = 0.20;
    audio.play().catch(() => {});
  };

  const playHover = () => {
    if (!soundOn) return;
    const audio = hoverRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.volume = 0.10;
    audio.play().catch(() => {});
  };

  const finishBoot = () => {
    sessionStorage.setItem("treenos-booted", "yes");
    setBootDone(true);
  };

  return (
    <div className="min-h-screen">
      {!bootDone && <BootScreen onDone={finishBoot} />}

      <audio ref={humRef} src="/audio/ambient-hum.wav" preload="auto" loop />
      <audio ref={clickRef} src="/audio/ui/click.wav" preload="auto" />
      <audio ref={hoverRef} src="/audio/ui/hover.wav" preload="auto" />
      <audio ref={bootRef} src="/audio/startup.wav" preload="auto" />

      <Navbar
        theme={theme}
        onSetTheme={(value) => {
          playClick();
          setTheme(value);
        }}
        onOpenPalette={() => {
          playClick();
          setPaletteOpen(true);
        }}
        soundOn={soundOn}
        onToggleSound={() => {
          playClick();
          setSoundOn((v) => !v);
        }}
        playHover={playHover}
      />

      <DesktopShell>
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
      </DesktopShell>

      <footer className="page pt-0 pb-10 no-print">
        <div className="flex flex-col gap-3 text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} John Treen / TreenOS</p>
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
              placeholder="Search TreenOS..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div>
              {filteredCommands.map((item) => (
                <a
                  key={item.href}
                  className="command-item"
                  href={item.href}
                  onClick={() => {
                    playClick();
                    setPaletteOpen(false);
                  }}
                  onMouseEnter={playHover}
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

function DesktopShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="os-topbar no-print">
        <div className="os-topbar-left">
          <span className="os-pill">TreenOS</span>
          <span className="os-pill">Portfolio Kernel</span>
        </div>
        <div className="os-topbar-right">
          <span className="os-pill">SYSTEM: ONLINE</span>
        </div>
      </div>
      {children}
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
  soundOn,
  onToggleSound,
  playHover,
}: {
  theme: ThemeMode;
  onSetTheme: (theme: ThemeMode) => void;
  onOpenPalette: () => void;
  soundOn: boolean;
  onToggleSound: () => void;
  playHover: () => void;
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
            onMouseEnter={playHover}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "border-transparent bg-[var(--accent)] text-black" : "text-white/80"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            onMouseEnter={playHover}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "border-transparent bg-[var(--accent)] text-black" : "text-white/80"
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/resume"
            onMouseEnter={playHover}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "border-transparent bg-[var(--accent)] text-black" : "text-white/80"
              }`
            }
          >
            Resume
          </NavLink>

          <NavLink
            to="/contact"
            onMouseEnter={playHover}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "border-transparent bg-[var(--accent)] text-black" : "text-white/80"
              }`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/recruiter"
            onMouseEnter={playHover}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "border-transparent bg-[var(--accent)] text-black" : "text-white/80"
              }`
            }
          >
            Recruiter
          </NavLink>

          <button
            className={linkBase + " text-white/80"}
            onClick={onOpenPalette}
            onMouseEnter={playHover}
            type="button"
            title="Command Palette"
          >
            <Command size={16} />
          </button>

          <button
            className={linkBase + " text-white/80"}
            onClick={onToggleSound}
            onMouseEnter={playHover}
            type="button"
            title="Ambient Sound"
          >
            {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" className={themeBtn("gold")} onClick={() => onSetTheme("gold")} onMouseEnter={playHover}>
            Gold
          </button>
          <button type="button" className={themeBtn("purple")} onClick={() => onSetTheme("purple")} onMouseEnter={playHover}>
            Purple
          </button>
          <button type="button" className={themeBtn("green")} onClick={() => onSetTheme("green")} onMouseEnter={playHover}>
            Green
          </button>
          <span className="os-icon-pill"><Cpu size={16} /></span>
          <span className="os-icon-pill"><LayoutGrid size={16} /></span>
        </div>
      </div>
    </header>
  );
}