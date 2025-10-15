import React from "react";
export default function Resume(){
  return (
    <section className="grid gap-6">
      <h2 className="text-3xl font-bold">Resume</h2>

      <article className="card">
        <h3 className="font-semibold mb-2" style={{color:"var(--accent)"}}>Full Resume</h3>
        <div className="rounded overflow-hidden">
          <iframe src="/resume/resume_full.html" title="Full Resume" className="w-full h-[70vh] bg-white"></iframe>
        </div>
        <div className="mt-3 flex gap-3">
          <a className="btn" href="/resume/resume_full.html" download>Download (HTML)</a>
        </div>
      </article>

      <article className="card">
        <h3 className="font-semibold mb-2" style={{color:"var(--accent)"}}>Mini Resume</h3>
        <div className="rounded overflow-hidden">
          <iframe src="/resume/resume_mini.html" title="Mini Resume" className="w-full h-[50vh] bg-white"></iframe>
        </div>
        <div className="mt-3 flex gap-3">
          <a className="btn" href="/resume/resume_mini.html" download>Download (HTML)</a>
        </div>
      </article>
    </section>
  );
}
