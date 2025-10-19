import React from "react";

type Project = {
  title: string;
  description: string;
  image?: string;
  tech: string[];
  link?: string;
  repo?: string;
};

export default function ProjectCard(props: Project) {
  const { title, description, image, tech, link, repo } = props;

  return (
    <div className="bg-neutral-950 border border-yellow-600/40 rounded-lg p-4 shadow-lg hover:shadow-yellow-700/20 transition">
      {image && (
        <img
          src={image}
          alt={title}
          className="mb-4 w-full h-40 object-cover rounded-[6px]" /* square-ish, minimal radius */
          loading="lazy"
        />
      )}
      <h2 className="text-xl font-semibold text-yellow-200">{title}</h2>
      <p className="text-yellow-100/80 mt-1 mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span key={i} className="px-2 py-1 text-xs bg-neutral-900 border border-yellow-600/30 rounded">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {link && (
          <a
            href={link}
            className="text-yellow-300 hover:underline"
            {...(link.startsWith("/") ? {} : { target: "_blank", rel: "noreferrer" })}
          >
            Live ↗
          </a>
        )}
        {repo && (
          <a
            href={repo}
            className="text-yellow-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Repo ↗
          </a>
        )}
      </div>
    </div>
  );
}
