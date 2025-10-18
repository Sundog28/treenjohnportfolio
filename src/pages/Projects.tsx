import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "SkillForge",
      description: "A gamified skill-tracking app with progress rings and theming.",
      image: "/projects/skillforge.png",
      tech: ["React", "TypeScript", "TailwindCSS", "Vite"],
      link: "/skillforge",
      repo: "https://github.com/Sundog28/SkillForge",
    },
    {
      title: "JobTrack API",
      description: "Backend API to track job applications, now with a live in-site demo.",
      image: "/projects/jobtrack.png",
      tech: ["Go", "PostgreSQL", "Render"],
      link: "/jobtrack", // ✅ FIXED
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
    <div className="min-h-screen py-16 px-6 text-center">
      <h1 className="text-5xl font-bold mb-12 tracking-wide">
        <span className="text-yellow-400">Projects</span>
      </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
