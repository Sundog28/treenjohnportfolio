import React from "react";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <CyberBackground />

      <div className="page">
        <div className="relative">
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
                Open to remote junior or entry full-stack roles. Available
                immediately.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary" href="/projects">
                  View Projects
                </a>
                <a className="btn" href="/resume">
                  Resume
                </a>
                <a className="btn" href="/recruiter">
                  Recruiter Mode
                </a>
                <a className="btn" href="/contact">
                  Contact
                </a>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <Kpi
                  title="3+ Production Projects"
                  desc="Deployed apps & APIs with real structure."
                />
                <Kpi
                  title="REST APIs Built in Go"
                  desc="Auth, validation, clean services/handlers."
                />
                <Kpi
                  title="ML Models Deployed"
                  desc="Practical pipelines → demo-ready delivery."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 fade-in-up delay-150">
          <div className="card p-8">
            <h3 className="text-xl font-semibold">What I bring to a team</h3>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Clean readable code over clever code</li>
              <li>• Production-style architecture even in personal projects</li>
              <li>• Fast learner across frontend, backend, and ML</li>
              <li>• Strong documentation and structured project design</li>
            </ul>
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <div className="terminal-dot" />
            </div>
            <div className="terminal-body">{`john@portfolio:~$ whoami
Full-Stack & ML Engineer

john@portfolio:~$ strengths
- React frontends
- Go backend APIs
- PostgreSQL + structured data design
- Practical ML demos
- Strong project organization

john@portfolio:~$ status
Open to remote opportunities`}</div>
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
              I design projects with clear separation between UI, backend logic,
              and persistence.
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
                <a
                  href="https://github.com/Sundog28"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Sundog28
                </a>
              </p>
              <p className="mt-3 text-sm text-white/65">
                Add a pinned contribution screenshot or GitHub stats image here
                later for extra credibility.
              </p>
            </div>
            <div className="mt-5">
              <a
                className="btn btn-primary"
                href="https://github.com/Sundog28"
                target="_blank"
                rel="noreferrer"
              >
                Open GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CyberBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="cyber-bg">
        <div className="cyber-noise" />
        <div className="cyber-grid" />
        <div className="cyber-scanlines" />
        <div className="cyber-lines" />
        <div className="cyber-orb one" />
        <div className="cyber-orb two" />
        <div className="cyber-orb three" />
        <div className="cyber-beam hidden md:block" />
        <div className="cyber-ring hidden md:block" />
      </div>
    </div>
  );
}

function Pill({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur ${className}`}
    >
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