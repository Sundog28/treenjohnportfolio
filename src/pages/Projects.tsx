import React from "react"

const cards = [
  {
    title: "SkillForge",
    desc: "React + Tailwind skill tracker with PWA.",
    img: "/projects/skillforge.png",
    links: [
      {href:"https://github.com/Sundog28/SkillForge", label:"GitHub"},
      {href:"https://skillforge.vercel.app", label:"Live"}
    ]
  },
  {
    title: "JobTrack API",
    desc: "Go REST API with PostgreSQL, docs & security.",
    img: "/projects/jobtrack.png",
    links: [
      {href:"https://github.com/Sundog28/JobTrackAPI", label:"GitHub"},
      {href:"https://jobtrack-api.onrender.com/docs", label:"Docs"}
    ]
  },
  {
    title: "ML Capstone — Wine Quality",
    desc: "Streamlit app with theme toggle & RF model.",
    img: "/projects/mlcapstone.png",
    links: [
      {href:"https://huggingface.co/spaces/Sundog28/MLCapstone", label:"Demo"}
    ]
  }
]

export default function Projects(){
  return (
    <section className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map(c=>(
          <article key={c.title} className="card">
            <img src={c.img} alt={c.title} className="rounded mb-3 aspect-video object-cover bg-white/10"/>
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-white/70 mb-3">{c.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {c.links.map(l=><a key={l.href} className="btn" href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
