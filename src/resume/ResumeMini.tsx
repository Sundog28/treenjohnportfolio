import React from "react";
export default function ResumeMini(){
  return (
    <div className="prose max-w-none">
      <h1>John Treen</h1>
      <p><strong>Email:</strong> treenjohnm@gmail.com · <strong>LinkedIn:</strong> linkedin.com/in/john-treen-629a81159 · <strong>GitHub:</strong> github.com/Sundog28</p>
      <h2>Summary</h2>
      <p>Full-Stack & ML engineer skilled in React/TS, Go, Python, SQL. I build fast UIs, robust APIs, and data-driven features.</p>
      <h2>Skills</h2>
      <ul><li>React, TypeScript, Tailwind, Vite</li><li>Go, Python, REST APIs</li><li>PostgreSQL, SQL</li><li>scikit-learn, Pandas</li></ul>
      <h2>Projects</h2>
      <ul>
        <li><strong>SkillForge</strong> — learning tracker (React + Tailwind, Vercel).</li>
        <li><strong>JobTrack API</strong> — Go + PostgreSQL CRUD with JWT (roadmap).</li>
        <li><strong>ML Capstone</strong> — supervised models, feature importance.</li>
      </ul>
    </div>
  );
}
