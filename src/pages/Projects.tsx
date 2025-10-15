import React from "react";

type Card = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  repo?: string;
};

const projects: Card[] = [
  {
    title: "SkillForge",
    description: "A gamified skill-tracking app with progress bars and theming.",
    image: "/projects/skillforge.png",
    tech: ["React","TypeScript","TailwindCSS","Vite"],
    link: "https://skillforge.vercel.app",
    repo: "https://github.com/Sundog28/SkillForge"
  },
  {
    title: "JobTrack API",
    description: "Backend API to track job applications, built in Go with REST endpoints.",
    image: "/projects/jobtrack.png",
    tech: ["Go","PostgreSQL","Render"],
    link: "https://jobtrack-api.onrender.com",
    repo: "https://github.com/Sundog28/JobTrackAPI"
  },
  {
    title: "ML Capstone — Wine Quality",
    description: "Machine Learning model using RandomForest on UCI Wine Dataset.",
    image: "/projects/mlcapstone.png",
    tech: ["Python","Pandas","Streamlit"],
    link: "https://huggingface.co/spaces/Sundog28/MLCapstone",
    repo: "https://github.com/Sundog28/MLCapstone"
  }
];

export default function Projects(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map(p=>(
          <article key={p.title} className="card group overflow-hidden" style={{backdropFilter:"blur(6px)"}}>
            <div className="relative aspect-video bg-white/5 rounded mb-3 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"/>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition"
                   style={{boxShadow:"inset 0 0 120px 20px rgba(255,215,0,0.08)"}}/>
            </div>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-white/70 text-sm mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {p.tech.map(t=> <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded">{t}</span>)}
            </div>
            <div className="flex gap-2">
              <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-primary">Live ↗</a>
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="btn">Repo ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
