import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "SkillForge",
      description:
        "A gamified skill-tracking app with progress bars and theming. Add skills and level up over time with local storage support.",
      image: "/projects/skillforge.png",
      tech: ["React", "TypeScript", "TailwindCSS", "Vite"],
      link: "https://skillforge.vercel.app", // Update once deployed
      repo: "https://github.com/Sundog28/SkillForge",
    },
    {
      title: "JobTrack API",
      description:
        "Backend API to track job applications, built in Go with REST endpoints, PostgreSQL, and Render deployment.",
      image: "/projects/jobtrack.png",
      tech: ["Go", "PostgreSQL", "Render"],
      link: "https://jobtrack-api.onrender.com",
      repo: "https://github.com/Sundog28/JobTrackAPI",
    },
    {
      title: "ML Capstone — Wine Quality",
      description:
        "Machine Learning model using RandomForest on the UCI Wine Quality dataset. Interactive Streamlit app hosted on Hugging Face.",
      image: "/projects/mlcapstone.png",
      tech: ["Python", "Pandas", "Streamlit"],
      link: "https://huggingface.co/spaces/Sundog28/MLCapstone",
      repo: "https://github.com/Sundog28/MLCapstone",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">🚀 Projects</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            link={project.link}
            repo={project.repo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
