import React from "react";
import QR from "../components/QR";
export default function Recruiter(){
  const link=(t:string,h:string)=>(
    <a className="btn" href={h} target="_blank" rel="noreferrer">{t}</a>
  );
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-semibold mb-2">Recruiter Overview</h2>
      <p className="text-[var(--text)]/80 mb-4">Quick scan: skills, projects, downloads, and QR links.</p>
      <div className="grid md:grid-cols-2 gap-4 card">
        <div>
          <h3 className="font-semibold">Skills</h3>
          <ul className="list-disc pl-5 text-sm mt-2">
            <li>React • TS • Tailwind • Vite</li><li>Go • Python • SQL • REST</li><li>Pandas • scikit-learn • EDA</li>
          </ul>
          <h3 className="font-semibold mt-4">Links</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {link("GitHub","https://github.com/Sundog28")}
            {link("LinkedIn","https://www.linkedin.com/in/john-treen-629a81159")}
            {link("Portfolio","https://treenjohnportfoliocom.vercel.app")}
            {link("Résumé (PDF)","/resume/John_Treen_Ultimate_Resume_Full.pdf")}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 place-items-center">
          <QR text="https://github.com/Sundog28" label="GitHub"/>
          <QR text="https://www.linkedin.com/in/john-treen-629a81159" label="LinkedIn"/>
          <QR text="https://treenjohnportfoliocom.vercel.app" label="Portfolio"/>
          <QR text="/resume/John_Treen_Ultimate_Resume_Full.pdf" label="Full Résumé"/>
        </div>
      </div>
    </div>
  );
}
