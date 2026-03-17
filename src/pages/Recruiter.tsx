import React from "react";
import CyberBackground from "../components/CyberBackground";

const FEATURED = [
  {
    title: "JobTrack API (Go)",
    bullets: [
      "RESTful CRUD + token authentication",
      "Validation + clean architecture (handlers/services/storage)",
      "Designed for maintainability and production-style structure",
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
      "Deployable frontend architecture",
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
      <CyberBackground />

      <div className="page">
        <div className="glow-frame fade-in-up">
          <div className="glow-inner card p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm tracking-widest uppercase text-white/60">
                  Recruiter Mode
                </p>

                <h1 className="mt-2 text-4xl font-extrabold">
                  John{" "}
                  <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)] bg-clip-text text-transparent">
                    Treen
                  </span>
                </h1>

                <p className="mt-3 max-w-2xl text-white/75">
                  Full-Stack & ML Engineer focused on React + TypeScript
                  frontend development, Go backend APIs, PostgreSQL data design,
                  and practical machine learning projects in Python.
                </p>

                <p className="mt-3 text-white/65">
                  Open to remote junior, entry-level, and early-career
                  full-stack, backend, or ML-adjacent software roles.
                </p>
              </div>

              <div className="mt-2 flex flex-wrap gap-3 md:mt-0">
                <a className="btn btn-primary" href="/resume">
                  Resume
                </a>
                <a className="btn" href="/projects">
                  Projects
                </a>
                <a className="btn" href="/contact">
                  Contact
                </a>
                <button
                  className="btn no-print"
                  onClick={() => window.print()}
                  type="button"
                >
                  Print / Save PDF
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="btn"
                href="https://github.com/Sundog28"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="btn"
                href="https://www.linkedin.com/in/john-treen-629a81159/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a className="btn" href="mailto:treenjohnm@gmail.com">
                Email
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Kpi
                title="Go REST APIs"
                desc="Auth, validation, clean service and storage structure."
              />
              <Kpi
                title="Modern React UI"
                desc="Responsive interfaces, reusable components, polished UX."
              />
              <Kpi
                title="Practical ML"
                desc="Pipelines, metrics, and demo-ready project delivery."
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 fade-in-up delay-150">
          {FEATURED.map((project) => (
            <div key={project.title} className="card p-7">
              <h2 className="text-xl font-bold">{project.title}</h2>

              <ul className="mt-4 space-y-2 text-white/75">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary" href={project.links.caseStudy}>
                  Case Study
                </a>
                <a
                  className="btn"
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 fade-in-up delay-300">
          <div className="card p-8">
            <h3 className="text-xl font-semibold">What I bring to a team</h3>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>• Clean, readable code over clever but fragile code</li>
              <li>• Production-style architecture even in personal projects</li>
              <li>• Strong project organization and documentation habits</li>
              <li>• Fast learning across frontend, backend, and ML workflows</li>
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="text-xl font-semibold">Download Center</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/resume">
                Resume Page
              </a>
              <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume PDF
              </a>
              <button
                className="btn"
                onClick={() => window.print()}
                type="button"
              >
                Save One-Pager PDF
              </button>
            </div>
            <p className="mt-4 text-sm text-white/65">
              Put `resume.pdf` inside your `public` folder if it is not already there.
            </p>
          </div>
        </div>

        <div className="mt-10 card p-8 fade-in-up delay-300">
          <h3 className="text-xl font-semibold">What I’m looking for</h3>
          <p className="mt-2 text-white/75">
            Remote or hybrid roles in full-stack engineering, backend
            development with Go, or ML-focused software roles. I’m especially
            interested in teams that value ownership, code quality, and
            shipping practical products.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="/contact">
              Contact Me
            </a>
            <a className="btn" href="/resume">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Kpi({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </div>
  );
}