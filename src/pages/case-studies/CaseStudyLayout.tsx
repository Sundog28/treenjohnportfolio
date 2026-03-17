import React from "react";
import CyberBackground from "../../components/CyberBackground";

type Props = {
  title: string;
  subtitle: string;
  tags: string[];
  problem: string[];
  solution: string[];
  results: string[];
  tech: string[];
  links: { label: string; href: string; external?: boolean }[];
  images?: string[];
};

export default function CaseStudyLayout(props: Props) {
  return (
    <section className="relative overflow-hidden">
      <CyberBackground />

      <div className="page">
        <div className="glow-frame fade-in-up">
          <div className="glow-inner card p-10">
            <p className="text-sm tracking-widest uppercase text-white/60">
              Case Study
            </p>
            <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
              {props.title}
            </h1>
            <p className="mt-3 max-w-3xl text-white/75">{props.subtitle}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {props.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/projects">
                Back to Projects
              </a>
              {props.links.map((link) => (
                <a
                  key={link.label}
                  className="btn"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {props.images && props.images.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-2 fade-in-up delay-150">
            {props.images.map((src) => (
              <div key={src} className="card overflow-hidden">
                <img
                  src={src}
                  alt="Project screenshot"
                  className="h-72 w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2 fade-in-up delay-300">
          <Section title="Problem" bullets={props.problem} />
          <Section title="Solution" bullets={props.solution} />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Section title="Results" bullets={props.results} />
          <Section title="Tech Stack" bullets={props.tech} />
        </div>

        <div className="mt-6 card p-8">
          <h2 className="text-xl font-semibold">Architecture</h2>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
              <Node label="Frontend / Client" />
              <Arrow />
              <Node label="Backend / Logic" />
              <Arrow />
              <Node label="Database / Output" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="card p-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="mt-4 space-y-2 text-white/75">
        {bullets.map((bullet) => (
          <li key={bullet}>• {bullet}</li>
        ))}
      </ul>
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