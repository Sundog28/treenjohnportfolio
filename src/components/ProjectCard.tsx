import React from "react";
type Props = {
  title: string; description: string; image: string;
  tech: string[]; link?: string; repo?: string;
};
export default function ProjectCard({ title, description, image, tech, link, repo }: Props){
  return (
    <article className="card overflow-hidden">
      <div className="rounded-lg overflow-hidden mb-4 bg-black/40">
        <img src={image} alt={title} className="w-full h-48 object-cover" loading="lazy"/>
      </div>
      <h3 className="text-xl font-semibold mb-1" style={{color:"var(--accent)"}}>{title}</h3>
      <p className="text-white/80 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map(t => <span key={t} className="px-2 py-1 text-xs rounded bg-white/10 border border-white/10">{t}</span>)}
      </div>
      <div className="flex gap-3">
        {link && <a className="btn btn-primary" href={link} target="_blank" rel="noreferrer">Live ↗</a>}
        {repo && <a className="btn" href={repo} target="_blank" rel="noreferrer">Repo ↗</a>}
      </div>
    </article>
  );
}
