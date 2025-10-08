import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">🚀 Projects</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* SkillForge */}
        <ProjectCard
          title="SkillForge"
          description="A gamified skill-tracking app with progress bars, theming, and local storage. Add skills and level up over time."
          image="/projects/skillforge-ui.png"
          tech={["React", "TypeScript", "TailwindCSS", "Vite"]}
          link="https://skillforge-sundog28.vercel.app" // update when deployed
          repo="https://github.com/Sundog28/SkillForge"
        />

        {/* JobTrack API */}
        <ProjectCard
          title="JobTrack API"
          description="Backend API for tracking job applications, built in Go with CRUD endpoints and Render deployment."
          image="/projects/jobtrack.png"
          tech={["Go", "PostgreSQL", "SQLC", "Goose"]}
          link="https://jobtrack-api.onrender.com"
          repo="https://github.com/Sundog28/JobTrackAPI"
        />

        {/* ML Capstone */}
        <ProjectCard
          title="ML Capstone — Wine Quality"
          description="Streamlit app with RandomForest model on the Wine Quality dataset. Hosted on Hugging Face Spaces."
          image="/projects/mlcapstone.png"
          tech={["Python", "Pandas", "scikit-learn", "Streamlit"]}
          link="https://huggingface.co/spaces/Sundog28/MLCapstone"
          repo="https://github.com/Sundog28/MLCapstone"
        />
      </div>
    </div>
  );
};

export default Projects;
