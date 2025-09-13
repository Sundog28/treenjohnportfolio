import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
export default function ProjectDetail(){
  const { slug } = useParams()
  const p = projects.find(x=>x.slug===slug)
  if(!p) return <div className="panel p-6">Project not found. <Link to="/projects" className="underline">Back</Link></div>
  return (
    <article className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <h1 className="text-3xl font-extrabold">{p.title}</h1>
        <div className="flex gap-2">
          <a href={p.repo} target="_blank" className="px-3 py-2 rounded bg-neon-cyan/20 hover:bg-neon-cyan/30 border border-neon-cyan/40">GitHub ↗</a>
          <Link to="/projects" className="px-3 py-2 rounded bg-white/10 hover:bg-white/20 border border-white/15">All Projects</Link>
        </div>
      </header>
      <div className="flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="px-2 py-1 rounded-full border border-white/15 bg-white/10 text-xs">{t}</span>)}</div>
      <div className="panel p-6"><h2 className="text-lg font-semibold">Overview</h2><p className="mt-2 text-white/80">{p.description}</p></div>
      <div className="panel p-6"><h2 className="text-lg font-semibold">Key Features</h2><ul className="mt-2 list-disc list-inside space-y-1 text-white/85">{p.features.map(f=> <li key={f}>{f}</li>)}</ul></div>
    </article>
  )
}
