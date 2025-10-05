import React from "react"
const items = [
  "React, TypeScript, Vite, Tailwind",
  "Go (chi), REST APIs, Docker",
  "Python, NumPy, scikit-learn",
  "PostgreSQL, SQL",
  "Vercel, Render, Hugging Face Spaces",
  "Git, Linux, CLI"
]
export default function Skills(){
  return (
    <section className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="grid md:grid-cols-2 gap-3">{items.map((s,i)=>
        <li key={i} className="card">{s}</li>
      )}</ul>
    </section>
  )
}
