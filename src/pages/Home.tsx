import React from "react"
export default function Home(){
  return (
    <section className="relative z-10">
      <div className="card">
        <h1 className="text-3xl font-bold mb-2">Hi, I’m John Treen</h1>
        <p className="text-white/80">Full-Stack & ML Engineer. I build responsive frontends, robust APIs, and data-driven apps.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <a href="/projects" className="card">🚀 Projects</a>
        <a href="/skills" className="card">🧰 Skills</a>
        <a href="/resume" className="card">📄 Resume</a>
      </div>
    </section>
  )
}
