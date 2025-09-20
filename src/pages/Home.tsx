import React from "react";
import { useRecruiter } from "../context/RecruiterContext";
export default function Home(){
  const { recruiterMode } = useRecruiter();
  return (
    <div className="relative">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Full-Stack & ML Engineer</h1>
      <p className="text-[var(--text)]/80 mb-6">React • TypeScript • Go • Python • SQL • Tailwind</p>
      <div className="flex flex-wrap gap-2">
        <a className="btn btn-primary" href="https://github.com/Sundog28" target="_blank">GitHub</a>
        <a className="btn" href="https://www.linkedin.com/in/john-treen-629a81159" target="_blank">LinkedIn</a>
        <a className="btn" href="/projects">Projects</a>
        <a className="btn" href="/resume">Résumé</a>
      </div>
      {recruiterMode&&<div className="card mt-6">Recruiter Mode is ON — quick overview at <a href="/recruiter">/recruiter</a>.</div>}
    </div>
  );
}
