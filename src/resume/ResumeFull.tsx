import React from "react";
export default function ResumeFull(){
  return (
    <div className="prose max-w-none">
      <h1>John Treen</h1>
      <p><strong>Email:</strong> treenjohnm@gmail.com · <strong>LinkedIn:</strong> linkedin.com/in/john-treen-629a81159 · <strong>GitHub:</strong> github.com/Sundog28</p>
      <h2>Professional Summary</h2>
      <p>Full-Stack & Machine Learning Engineer with hands-on experience building frontends (React/TS), APIs (Go/Python), and ML pipelines (Pandas/sklearn). Focused on clean code, DX, and shipping useful apps.</p>
      <h2>Technical Skills</h2>
      <ul>
        <li><strong>Frontend:</strong> React, TypeScript, Tailwind, Vite</li>
        <li><strong>Backend:</strong> Go, Python (Flask), REST</li>
        <li><strong>Data/ML:</strong> Pandas, scikit-learn, EDA, CV</li>
        <li><strong>DB/Infra:</strong> PostgreSQL, Docker (basics), Vercel</li>
        <li><strong>Other:</strong> Git/GitHub, testing, docs</li>
      </ul>
      <h2>Projects</h2>
      <ul>
        <li><strong>SkillForge</strong> — React + Tailwind skill tracker; progress bars, tags, QR deep-links.</li>
        <li><strong>JobTrack API</strong> — Go net/http service; CRUD jobs, JWT/Migrations roadmap.</li>
        <li><strong>ML Capstone</strong> — classification on Wine Quality; metrics + feature importances.</li>
      </ul>
      <h2>Experience</h2>
      <ul>
        <li>Built and deployed multiple full-stack and ML projects showcased on portfolio.</li>
      </ul>
      <h2>Education</h2>
      <p>Independent study in CS & ML; project-based learning.</p>
    </div>
  );
}
