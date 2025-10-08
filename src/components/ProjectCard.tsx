import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  repo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tech,
  link,
  repo,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-purple-700 text-xs px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition"
          >
            Live Demo
          </a>
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
            >
              Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

