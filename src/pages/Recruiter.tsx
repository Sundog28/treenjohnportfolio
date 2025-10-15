import React from "react";
export default function Recruiter(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Recruiter Mode</h2>
      <div className="card">
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>One-page overview of projects with links to live demos</li>
          <li>QR codes on Resume page for instant access</li>
          <li>Deploy-ready configuration (Vercel) and SPA routing</li>
          <li>Clean gold/goth futuristic theme with subtle HUD motion</li>
        </ul>
      </div>
    </section>
  );
}
