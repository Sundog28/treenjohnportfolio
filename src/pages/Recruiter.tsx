import React from "react";
export default function Recruiter(){
  return (
    <section className="grid gap-4">
      <h2 className="text-3xl font-bold">Recruiter Mode</h2>
      <div className="card">
        <p className="text-white/80">This page bundles fast links recruiters need:</p>
        <ul className="list-disc ml-6 mt-2">
          <li><a href="/resume/resume_full.html" target="_blank">Resume (Full)</a></li>
          <li><a href="https://github.com/Sundog28" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/john-treen-629a81159" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </section>
  );
}
