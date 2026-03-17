import React from "react";

const FEATURED = [
  {
    title: "JobTrack API (Go)",
    bullets: [
      "RESTful CRUD + token auth",
      "Validation + clean layers (handlers/services/storage)",
      "Designed for maintainability and production structure",
    ],
    links: {
      caseStudy: "/projects/jobtrack-api",
      repo: "https://github.com/Sundog28",
    },
  },
  {
    title: "SkillForge (React)",
    bullets: [
      "Polished UI with reusable components",
      "Routing + product-style page structure",
      "Deployable front-end architecture",
    ],
    links: {
      caseStudy: "/projects/skillforge",
      repo: "https://github.com/Sundog28",
    },
  },
  {
    title: "ML Capstone (Python)",
    bullets: [
      "Preprocessing + feature engineering",
      "Model training + evaluation",
      "Packaged into demo-friendly outputs",
    ],
    links: {
      caseStudy: "/projects/ml-capstone",
      repo: "https://github.com/Sundog28",
    },
  },
];

export default function Recruiter() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 animated-bg opacity-15" />
      </div>

      <div className="page">
        <div className="card p-10 fade-in-up">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm tracking-widest uppercase text-white/60">Recruiter Mode</p>
              <h1 className="mt-2 text-4xl font-extrabold">
                John{" "}
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">
                  Treen
                </span>
              </h1>
              <p className="mt-2 text-white/75 max-w-2xl">
                Full-Stack & ML Engineer — React + TypeScript on the frontend, Go + PostgreSQL on the backend,
                with practical ML projects in Python.
              </p>
            </div>

            <div className="mt-6 md:mt-0 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/resume">
                Resume
              </a>
              <a className="btn" href="/projects">
                Projects
              </a>
              <a className="btn" href="/contact">
                Contact
              </a>
            </div>
          </div>

          {/* Quick links row */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn" href="https://github.com/Sundog28" target="_blank" rel="noreferrer">
              GitHub
            </a>
            {/* Add your real LinkedIn when ready */}
            <a className="btn" href="https://www.linkedin.com/in/john-treen-629a81159/" onClick={(e) => e.preventDefault()}>
              LinkedIn (add link)
            </a>
            {/* Add email link when ready */}
            <a className="btn" href="mailto:treenjohnm@gmail.com">
              Email
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Kpi title="Go REST APIs" desc="Auth, validation, clean architecture." />
            <Kpi title="Modern React UI" desc="Fast, responsive, maintainable components." />
            <Kpi title="Practical ML" desc="Pipelines, metrics, demo-ready results." />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 fade-in-up delay-150">
          {FEATURED.map((p) => (
            <div key={p.title} className="card p-7">
              <h2 className="text-xl font-bold">{p.title}</h2>
              <ul className="mt-4 space-y-2 text-white/75">
                {p.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary" href={p.links.caseStudy}>
                  Case Study
                </a>
                <a className="btn" href={p.links.repo} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 card p-8 fade-in-up delay-300">
          <h3 className="text-xl font-semibold">What I’m looking for</h3>
          <p className="mt-2 text-white/75">
            Remote or hybrid roles in full-stack engineering, backend (Go), or ML-focused software roles.
            Strong preference for teams that value clean code, ownership, and shipping.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="/contact">Contact Me</a>
            <a className="btn" href="/resume">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Kpi({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </div>
  );
}