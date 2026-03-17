import React, { useMemo, useState } from "react";
import CyberBackground from "../components/CyberBackground";

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "Full Stack" | "Backend" | "ML";
  highlights: string[];
  tech: string[];
  image?: string;
  links: {
    caseStudy?: string;
    repo?: string;
    demo?: string;
  };
};

const PROJECTS: Project[] = [
  {
    slug: "skillforge",
    title: "SkillForge",
    subtitle:
      "Full-stack learning tracker with a polished UI and product-style structure.",
    category: "Full Stack",
    highlights: [
      "Built a clean UX for tracking learning goals and progress.",
      "Structured as a real product with pages, routing, and reusable components.",
      "Designed to be deployable and easy to extend.",
    ],
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    image: "/projects/skillforge-1.png",
    links: {
      caseStudy: "/projects/skillforge",
      repo: "https://github.com/Sundog28",
      demo: "",
    },
  },
  {
    slug: "jobtrack-api",
    title: "JobTrack API",
    subtitle:
      "Production-style Go REST API for tracking job applications, statuses, and notes.",
    category: "Backend",
    highlights: [
      "RESTful CRUD endpoints with token-based authentication.",
      "Validation + clean separation across handlers, services, and storage.",
      "Designed for maintainability, clarity, and real-world backend structure.",
    ],
    tech: ["Go", "REST", "Auth", "PostgreSQL", "SQL"],
    image: "/projects/jobtrack-1.png",
    links: {
      caseStudy: "/projects/jobtrack-api",
      repo: "https://github.com/Sundog28",
      demo: "",
    },
  },
  {
    slug: "ml-capstone",
    title: "ML Capstone",
    subtitle:
      "End-to-end ML project covering preprocessing, training, evaluation, and demo-ready output.",
    category: "ML",
    highlights: [
      "Data cleaning and feature engineering pipeline.",
      "Model training, evaluation metrics, and iterative improvement.",
      "Packaged into a presentation-friendly and recruiter-friendly project.",
    ],
    tech: ["Python", "Pandas", "scikit-learn", "Jupyter"],
    image: "/projects/mlcapstone-1.png",
    links: {
      caseStudy: "/projects/ml-capstone",
      repo: "https://github.com/Sundog28",
      demo: "",
    },
  },
];

const FILTERS = ["All", "Full Stack", "Backend", "ML"] as const;
type Filter = (typeof FILTERS)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visibleProjects = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section className="relative overflow-hidden">
      <CyberBackground />

      <div className="page">
        <header className="fade-in-up">
          <p className="text-sm tracking-widest uppercase text-white/60">
            Case Studies & Builds
          </p>

          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Projects
          </h1>

          <p className="mt-3 max-w-2xl text-white/75">
            These projects show structured engineering, practical problem
            solving, and production-style design decisions across frontend,
            backend, and machine learning work.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {FILTERS.map((filterValue) => (
              <button
                key={filterValue}
                onClick={() => setFilter(filterValue)}
                className={[
                  "rounded-full px-4 py-2 text-sm border transition",
                  filterValue === filter
                    ? "border-transparent bg-[var(--accent)] text-black"
                    : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10",
                ].join(" ")}
              >
                {filterValue}
              </button>
            ))}
          </div>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <article
              key={project.slug}
              className={[
                "glow-frame fade-in-up",
                index === 1 ? "delay-150" : index === 2 ? "delay-300" : "",
              ].join(" ")}
            >
              <div className="glow-inner card h-full p-8">
                {project.image && (
                  <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-black/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-56 w-full object-cover transition duration-300 hover:scale-[1.02]"
                    />
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="mt-2 text-white/75">{project.subtitle}</p>
                  </div>

                  <span className="tag">{project.category}</span>
                </div>

                <ul className="mt-5 space-y-2 text-white/75">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((techItem) => (
                    <span key={techItem} className="tag">
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.links.caseStudy && (
                    <a className="btn btn-primary" href={project.links.caseStudy}>
                      Case Study
                    </a>
                  )}

                  {project.links.repo && (
                    <a
                      className="btn"
                      href={project.links.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repo
                    </a>
                  )}

                  {project.links.demo && project.links.demo.trim() !== "" && (
                    <a
                      className="btn"
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 fade-in-up delay-300">
          <div className="card p-8">
            <h3 className="text-xl font-semibold">What these projects show</h3>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>• Structured codebases instead of one-off demos</li>
              <li>• Clear separation of UI, logic, and data flow</li>
              <li>• Practical stack choices aligned to the project goal</li>
              <li>• Recruiter-friendly case study thinking</li>
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="text-xl font-semibold">Need the fast version?</h3>
            <p className="mt-2 text-white/75">
              Open the one-page recruiter summary for quick access to the
              resume, featured case studies, and contact info.
            </p>
            <div className="mt-5">
              <a className="btn btn-primary" href="/recruiter">
                Open Recruiter Mode
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}