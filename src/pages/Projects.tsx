import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
export default function Projects(){
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => <ProjectCard key={p.slug} slug={p.slug} title={p.title} summary={p.summary} tags={p.tags} repo={p.repo} />)}
      </div>
    </section>
  )
}
