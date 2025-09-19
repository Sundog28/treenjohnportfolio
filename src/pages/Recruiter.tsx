import { QRCodeCanvas } from 'qrcode.react'
import { Link } from 'react-router-dom'

export default function Recruiter() {
  return (
    <section className="page space-y-4">
      <h2 className="text-3xl font-bold glow">Recruiter Panel</h2>
      <div className="card space-y-3">
        <div className="flex flex-wrap gap-3">
          <a className="btn btn-primary" href="/resume/resume_full.pdf" download>Download Full PDF</a>
          <a className="btn" href="/resume/resume_mini.pdf" download>Download Mini PDF</a>
          <a className="btn" href="/resume/all-resumes.zip" download>All Résumés (zip)</a>
          <Link className="btn" to="/projects">Projects</Link>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <p className="text-sm mb-2 text-[color:var(--muted)]">Scan for Full Résumé</p>
            <QRCodeCanvas value="https://treenjohnportfolio.com/resume/resume_full.pdf" size={128} />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <h3 className="font-semibold">Highlights</h3>
          <ul className="mt-2 list-disc list-inside text-[color:var(--muted)]">
            <li>Frontend: React + TypeScript + Tailwind</li>
            <li>Backend: Go + PostgreSQL (REST)</li>
            <li>ML: Python + scikit-learn</li>
            <li>Deploys: Vercel / GitHub Pages</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-semibold">Contact</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="mailto:treenjohnm@gmail.com">Email</a>
            <a className="btn" href="http://linkedin.com/in/john-treen-629a81159" target="_blank">LinkedIn</a>
            <a className="btn" href="https://github.com/Sundog28" target="_blank">GitHub</a>
            <a className="btn" href="https://Sundog28.github.io" target="_blank">Portfolio</a>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="font-semibold">Code Samples</h3>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><a className="link" href="https://github.com/Sundog28/SkillForge" target="_blank">SkillForge (React App)</a></li>
          <li><a className="link" href="https://github.com/Sundog28/JobTrackAPI" target="_blank">JobTrack API (Go Backend)</a></li>
          <li><a className="link" href="https://github.com/Sundog28/ML-Capstone" target="_blank">ML Capstone (Python/ML)</a></li>
        </ul>
      </div>
    </section>
  )
}
