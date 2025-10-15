import React from "react";
export default function Downloads(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Downloads</h2>
      <div className="card">
        <ul className="space-y-2">
          <li><a className="text-yellow-300 underline" href="/resume/resume_full.html">Resume (Full)</a></li>
          <li><a className="text-yellow-300 underline" href="/resume/resume_mini.html">Resume (Mini)</a></li>
        </ul>
      </div>
    </section>
  );
}
