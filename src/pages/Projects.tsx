import React, { useMemo, useState } from "react";

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "Full Stack" | "Backend" | "ML";
  highlights: string[];
  tech: string[];
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
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 animated-bg opacity-20" />
      </div>

      <div className="page">
        <header className="fade-in-up">
          <p className="text-sm tracking-widest uppercase text-white/60">
            Case Studies & Builds
          </p>

          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Projects
          </h1>

          <p className="mt-3 max-w-2xl text-white/75">
            These projects are built to show structured engineering, clean UI,
            practical backend design, and end-to-end thinking. Each one is
            presented as a mini case study with clear outcomes and technology
            choices.
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
              <div className="glow-inner card p-8 h-full">
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

        <div className="mt-12 card p-8 fade-in-up delay-300">
          <h3 className="text-xl font-semibold">
            Want the fast recruiter view?
          </h3>
          <p className="mt-2 text-white/75">
            Open the one-page recruiter summary for quick access to the resume,
            featured case studies, and contact info.
          </p>
          <div className="mt-5">
            <a className="btn btn-primary" href="/recruiter">
              Open Recruiter Mode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}