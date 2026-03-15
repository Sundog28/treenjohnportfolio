import React from "react";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 animated-bg opacity-35" />
      </div>

      <div className="page">
        {/* HERO */}
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

          <div className="card p-10 fade-in-up">
            <p className="text-sm tracking-widest uppercase text-white/60">
              Full-Stack & ML Engineer
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight">
              John{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">
                Treen
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed">
              I build clean React frontends, production Go APIs, and pragmatic ML demos.
              I ship projects that are easy to read, easy to run, and easy to hire.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/projects">View Projects</a>
              <a className="btn" href="/resume">Resume</a>
              <a className="btn" href="/recruiter">Recruiter Mode</a>
              <a className="btn" href="/contact">Contact</a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Kpi title="3+ Production Projects" desc="Deployed apps & APIs with real structure." />
              <Kpi title="REST APIs Built in Go" desc="Auth, validation, clean services/handlers." />
              <Kpi title="ML Models Deployed" desc="Practical pipelines → demo-ready delivery." />
            </div>
          </div>
        </div>

        {/* Featured project */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 fade-in-up delay-150">
          <div className="card p-8">
            <h2 className="text-xl font-semibold">Featured: JobTrack API</h2>
            <p className="mt-2 text-white/75">
              Production-style backend for tracking job applications, statuses, and notes.
              Token auth, validation, and clean separation of layers.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="tag">Go</span>
              <span className="tag">REST</span>
              <span className="tag">Auth</span>
              <span className="tag">PostgreSQL</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/projects">Read Case Studies</a>
              <a className="btn" href="https://github.com/Sundog28" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-xl font-semibold">What recruiters get</h2>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>• Clean “Recruiter Mode” page (fast scan + PDF-first)</li>
              <li>• Case studies (problem → solution → results)</li>
              <li>• Tech stack + links + demos in one click</li>
            </ul>
            <div className="mt-6">
              <a className="btn btn-primary" href="/recruiter">Open Recruiter Mode</a>
            </div>
          </div>
        </div>

        {/* Snapshot */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 fade-in-up delay-300">
          <Info title="Frontend" body="React • TypeScript • Tailwind • Vite — responsive, accessible UI." />
          <Info title="Backend" body="Go • REST • Auth • PostgreSQL — clean architecture + validation." />
          <Info title="ML" body="Python • Pandas • scikit-learn — modeling + deployable demos." />
        </div>
      </div>
    </section>
  );
}

function Pill({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`rounded-full border border-white/15 bg-black/25 px-4 py-2 text-sm text-white/80 backdrop-blur ${className}`}>{label}</div>;
}
function Kpi({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </div>
  );
}
function Info({ title, body }: { title: string; body: string }) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{body}</p>
    </div>
  );
}