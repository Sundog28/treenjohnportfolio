import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <section className="text-center space-y-6 page">
      <h1 className="text-5xl font-bold glow">John Treen</h1>
      <p className="text-lg">AI/ML & Full-Stack Developer</p>
      <p className="text-[color:var(--muted)] max-w-xl mx-auto">
        React • Go • Python • SQL • ML. I build polished frontends, robust APIs, and ML prototypes end-to-end.
      </p>
      <div className="flex justify-center gap-3">
        <Link to="/projects" className="btn btn-primary">View Projects</Link>
        <Link to="/resume" className="btn">Résumé</Link>
        <Link to="/contact" className="btn">Contact</Link>
      </div>
    </section>
  )
}
