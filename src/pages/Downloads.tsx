import React from "react"
export default function Downloads(){
  return (
    <section className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Downloads</h2>
      <div className="card">
        <ul className="list-disc ml-5">
          <li><a href="/resume/John_Treen_Ultimate_Resume_Full.pdf" download>Full Resume (PDF)</a></li>
          <li><a href="/resume/John_Treen_Ultimate_Resume_Mini.pdf" download>Mini Resume (PDF)</a></li>
          <li><a href="/downloads/portfolio_package.zip" download>Portfolio Package (zip)</a></li>
        </ul>
      </div>
    </section>
  )
}
