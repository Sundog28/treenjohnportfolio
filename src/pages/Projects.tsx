import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "SkillForge",
    description: "A gamified skill-tracking app with progress rings and presets.",
    image: "/projects/skillforge.png",
    tech: ["React", "TypeScript", "TailwindCSS", "Vite"],
    link: "/skillforge",
    repo: "https://github.com/Sundog28/SkillForge" // keep or update later
  },
  {
    title: "JobTrack API",
    description: "Backend API to track job applications, now with live demo",
    image: "/projects/jobtrack.png",
    tech: ["Go", "PostgreSQL", "Render"],
    link: "/jobtrack,
    repo: "https://github.com/Sundog28/JobTrackAPI"
  },
  {
    title: "ML Capstone — Wine Quality",
    description: "Machine Learning model using RandomForest on UCI Wine Dataset.",
    image: "/projects/mlcapstone.png",
    tech: ["Python", "Pandas", "Streamlit"],
    link: "https://huggingface.co/spaces/Sundog28/MLCapstone",
    repo: "https://huggingface.co/spaces/Sundog28/MLCapstone/tree/main"
  }
];

export default function Projects(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}
