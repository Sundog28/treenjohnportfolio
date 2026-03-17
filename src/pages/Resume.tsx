import React from "react";
import CyberBackground from "../components/CyberBackground";

export default function Resume() {
  return (
    <section className="relative overflow-hidden">
      <CyberBackground />

      <div className="page">
        <div className="glow-frame fade-in-up">
          <div className="glow-inner card p-10">
            <p className="text-sm tracking-widest uppercase text-white/60">
              Resume
            </p>

            <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
              John Treen
            </h1>

            <p className="mt-3 max-w-2xl text-white/75">
              Full-Stack & ML Engineer focused on React, TypeScript, Go,
              PostgreSQL, and practical machine learning workflows.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="btn btn-primary"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Open Resume PDF
              </a>

              <a className="btn" href="/recruiter">
                Recruiter Mode
              </a>

              <a className="btn" href="/contact">
                Contact
              </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="card p-6">
                <h2 className="text-xl font-semibold">Quick Summary</h2>
                <ul className="mt-4 space-y-2 text-white/75">
                  <li>• React + TypeScript frontend development</li>
                  <li>• Go backend APIs with clean structure</li>
                  <li>• PostgreSQL and structured data handling</li>
                  <li>• Python ML workflows with practical demos</li>
                </ul>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-semibold">
                  What this resume highlights
                </h2>
                <ul className="mt-4 space-y-2 text-white/75">
                  <li>• Full-stack projects with real architecture</li>
                  <li>• Recruiter-friendly case studies</li>
                  <li>• Practical engineering over fluff</li>
                  <li>• Immediate availability for remote roles</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <iframe
                src="/resume.pdf"
                title="John Treen Resume"
                className="h-[800px] w-full"
              />
            </div>

            <p className="mt-4 text-sm text-white/60">
              Put your real PDF at <code>public/resume.pdf</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}