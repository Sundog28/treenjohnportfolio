import React from "react";
import CyberBackground from "../components/CyberBackground";
import SystemStatus from "../components/SystemStatus";
import DiagnosticsPanel from "../components/DiagnosticsPanel";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <CyberBackground />

      <div className="page">
        <SystemStatus />

        <div className="mt-8 relative">
          <div className="pointer-events-none absolute -top-8 right-6 hidden md:block">
            <Pill label="React" className="float-slow" />
          </div>
          <div className="pointer-events-none absolute top-24 -left-4 hidden md:block">
            <Pill label="Go" className="float-med" />
          </div>
          <div className="pointer-events-none absolute -bottom-10 right-28 hidden md:block">
            <Pill label="PostgreSQL" className="float-fast" />
          </div>

          <div className="glow-frame fade-in-up">
            <div className="glow-inner card p-10">
              <p className="text-sm tracking-widest uppercase text-white/70">
                Full-Stack & ML Engineer
              </p>

              <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-6xl">
                John{" "}
                <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)] bg-clip-text text-transparent">
                  Treen
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
                I build clean React frontends, production Go APIs, and pragmatic
                ML demos. I ship projects that are easy to read, easy to run,
                and easy to hire.
              </p>

              <p className="mt-3 text-white/70">
                Open to remote junior or entry full-stack roles. Available immediately.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary" href="/projects">View Projects</a>
                <a className="btn" href="/resume">Resume</a>
                <a className="btn" href="/recruiter">Recruiter Mode</a>
                <a className="btn" href="/contact">Contact</a>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <Kpi title="3+ Production Projects" desc="Deployed apps & APIs with real structure." />
                <Kpi title="REST APIs Built in Go" desc="Auth, validation, clean services/handlers." />
                <Kpi title="ML Models Deployed" desc="Practical pipelines → demo-ready delivery." />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 fade-in-up delay-150">
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <div className="terminal-dot" />
            </div>
            <div className="terminal-body">{`john@treenos:~$ whoami
Full-Stack & ML Engineer

john@treenos:~$ strengths
- React frontends
- Go backend APIs
- PostgreSQL + structured data design
- Practical ML demos
- Strong project organization

john@treenos:~$ status
OPEN TO REMOTE OPPORTUNITIES`}</div>
          </div>

          <DiagnosticsPanel />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 fade-in-up delay-300">
          <div className="card p-8">
            <h3 className="text-xl font-semibold">Tech Stack Matrix</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <StackGroup title="Frontend" items={["React", "TypeScript", "Tailwind", "Vite"]} />
              <StackGroup title="Backend" items={["Go", "REST APIs", "Auth", "Routing"]} />
              <StackGroup title="Data / ML" items={["Python", "Pandas", "scikit-learn", "Jupyter"]} />
              <StackGroup title="Tools" items={["Git", "GitHub", "PostgreSQL", "SQL"]} />
            </div>
          </div>

          <div className="card p-8">
            <h3 className="text-xl font-semibold">Currently Building</h3>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Expanding JobTrack API into a stronger portfolio backend</li>
              <li>• Improving SkillForge UX and case-study presentation</li>
              <li>• Making this portfolio more recruiter-friendly and polished</li>
              <li>• Adding stronger full-stack and ML proof projects</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 fade-in-up delay-300">
          <div className="card p-8">
            <h3 className="text-xl font-semibold">Architecture Snapshot</h3>
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-6">
              <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
                <Node label="React UI" />
                <Arrow />
                <Node label="Go API" />
                <Arrow />
                <Node label="PostgreSQL" />
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">
              I design projects with clear separation between UI, backend logic, and persistence.
            </p>
          </div>

          <div className="card p-8">
            <h3 className="text-xl font-semibold">GitHub Activity</h3>
            <p className="mt-2 text-white/80">
              View repositories, commits, and project code on GitHub.
            </p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-white/75">
                GitHub:{" "}
                <a href="https://github.com/Sundog28" target="_blank" rel="noreferrer">
                  github.com/Sundog28
                </a>
              </p>
              <p className="mt-3 text-sm text-white/65">
                Add a GitHub stats image later to public/github/github-stats.png if you want a live panel.
              </p>
            </div>
            <div className="mt-5">
              <a className="btn btn-primary" href="https://github.com/Sundog28" target="_blank" rel="noreferrer">
                Open GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 card p-8 fade-in-up delay-300">
          <h3 className="text-xl font-semibold">Timeline</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <TimelineItem title="SkillForge" text="Built a cleaner learning tracker with reusable UI." />
            <TimelineItem title="JobTrack API" text="Designed a production-style Go backend structure." />
            <TimelineItem title="ML Capstone" text="Completed end-to-end preprocessing, training, and evaluation." />
            <TimelineItem title="Portfolio Redesign" text="Turned the site into a futuristic recruiter-ready portfolio." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur ${className}`}>
      {label}
    </div>
  );
}

function Kpi({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/75">{desc}</div>
    </div>
  );
}

function StackGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <h4 className="font-semibold">{title}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="tag">{item}</span>
        ))}
      </div>
    </div>
  );
}

function Node({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold">
      {label}
    </div>
  );
}

function Arrow() {
  return <div className="text-xl font-bold text-[var(--accent)]">→</div>;
}

function TimelineItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm uppercase tracking-widest text-white/60">Milestone</div>
      <div className="mt-2 font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/75">{text}</div>
    </div>
  );
}