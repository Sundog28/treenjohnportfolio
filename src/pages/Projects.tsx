import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "SkillForge",
      description: "A gamified skill-tracking app with progress bars and theming.",
      image: "/projects/skillforge.png",
      tech: ["React", "TypeScript", "TailwindCSS", "Vite"],
      link: "/skillforge", // Internal interactive page
      repo: "https://github.com/Sundog28/SkillForge",
    },
    {
      title: "JobTrack API",
      description: "Backend API to track job applications, now with interactive demo.",
      image: "/projects/jobtrack.png",
      tech: ["Go", "PostgreSQL", "Render"],
      link: "/jobtrack", // Internal interactive demo
      repo: "https://github.com/Sundog28/JobTrackAPI",
    },
    {
      title: "ML Capstone — Wine Quality",
      description: "Machine Learning model using RandomForest on UCI Wine Dataset.",
      image: "/projects/mlcapstone.png",
      tech: ["Python", "Pandas", "Streamlit"],
      link: "https://huggingface.co/spaces/Sundog28/MLCapstone",
      repo: "https://huggingface.co/spaces/Sundog28/MLCapstone/tree/main",
    },
  ];

  return (
    <section className="min-h-screen px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}

