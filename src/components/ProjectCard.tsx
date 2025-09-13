import { Link } from 'react-router-dom'
export default function ProjectCard({ slug, title, summary, tags, repo }:{
  slug:string; title:string; summary:string; tags:string[]; repo:string
}) {
  return (
    <div className="panel p-5 transition duration-300 hover:shadow-[0_0_24px_rgba(0,229,255,.35)] hover:border-neon-cyan/50">
      <div className="flex items-start justify-between gap-3">
        <Link to={`/projects/${slug}`} className="text-lg font-semibold hover:text-neon-cyan transition">{title}</Link>
        <a href={repo} target="_blank" rel="noreferrer" className="text-neon-cyan hover:underline">GitHub ↗</a>
      </div>
      <p className="mt-2 text-white/80">{summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t=>(<span key={t} className="px-2 py-1 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 text-xs">{t}</span>))}
      </div>
      <div className="mt-4"><Link to={`/projects/${slug}`} className="inline-block px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/15">View details →</Link></div>
    </div>
  )
}
