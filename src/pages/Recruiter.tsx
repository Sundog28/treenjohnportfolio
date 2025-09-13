import React from "react";
import GitHubStats from "../ui/GitHubStats";
import { useTheme } from "../providers/ThemeProvider";

export default function Recruiter() {
  const { theme } = useTheme();
  const glow = theme === "dark"
    ? "shadow-[0_0_30px_6px_rgba(0,255,0,.25)] border-green-500"
    : "shadow-[0_0_30px_6px_rgba(0,255,255,.25)] border-cyan-400";

  return (
    <section className="grid gap-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-extrabold">Recruiter Download Center</h1>
        <p className="opacity-80">Everything you need to quickly evaluate and contact me.</p>
      </header>

      <div className={`grid md:grid-cols-2 gap-6 border-2 rounded-2xl p-6 ${glow}`}>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Résumés</h2>
          <div className="flex flex-wrap gap-3">
            <a className="btn" href="/resume/resume_full.pdf" download>⬇ Full PDF</a>
            <a className="btn" href="/resume/resume_mini.pdf" download>⬇ Mini PDF</a>
            <a className="btn" href="/resume/resume_full.html" target="_blank" rel="noreferrer">Full (HTML)</a>
            <a className="btn" href="/resume/resume_mini.html" target="_blank" rel="noreferrer">Mini (HTML)</a>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <div className="flex flex-wrap gap-3">
            <a className="btn" href="https://github.com/Sundog28" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/john-treen-629a81159/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href="mailto:treenjohnm@gmail.com?subject=Interested in interviewing John Treen">Email</a>
          </div>
        </div>
      </div>

      <GitHubStats username="Sundog28" repos={["treenjohnportfolio.com", "skillforge", "jobtrack-api", "ml-capstone"]} />

      <div className="text-sm opacity-70">
        <p><b>Summary:</b> Full-stack & ML Engineer (React, Go, Python, SQL). Projects: SkillForge, JobTrack API, ML Capstone. Content adapted from uploaded résumés. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}</p>
      </div>

      <style>{`
        .btn {
          display:inline-flex;align-items:center;justify-content:center;
          padding:10px 12px;border-radius:12px;font-weight:700;
          background:linear-gradient(90deg,rgba(0,255,255,.12),rgba(128,0,255,.12));
          border:1px solid rgba(255,255,255,.2);
          transition:transform .12s ease, box-shadow .12s ease;
        }
        .btn:hover { transform: translateY(-1px); box-shadow: 0 0 14px rgba(0,255,255,.25); }
      `}</style>
    </section>
  );
}
