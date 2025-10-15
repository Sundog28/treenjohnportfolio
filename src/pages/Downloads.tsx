import React from "react";
export default function Downloads(){
  return (
    <section className="grid gap-4">
      <h2 className="text-3xl font-bold">Downloads</h2>
      <div className="card flex flex-col gap-3">
        <a className="btn" href="/resume/resume_full.html" download>Resume (Full) — HTML</a>
        <a className="btn" href="/resume/resume_mini.html" download>Resume (Mini) — HTML</a>
      </div>
    </section>
  );
}
