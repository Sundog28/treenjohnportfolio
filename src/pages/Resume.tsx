import React from "react";
import QRCode from "qrcode.react";

const EMAIL = "treenjohnm@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/john-treen-629a81159";
const PORTFOLIO = "https://treenjohnportfoliocom.vercel.app";

export default function Resume(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <article className="card">
          <h3 className="font-semibold mb-2">Contact</h3>
          <div className="text-sm text-white/80 space-y-1">
            <div>John Treen</div>
            <div>14 Wickham Ct</div>
            <div>Sugar Land, TX 77479</div>
            <div>United States</div>
            <div className="pt-2"><a className="text-yellow-300 underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            <div><a className="text-yellow-300 underline" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a></div>
          </div>
          <div className="flex gap-6 mt-4">
            <div className="text-center">
              <QRCode value={PORTFOLIO} size={112}/>
              <div className="text-xs mt-2 text-white/70">Portfolio</div>
            </div>
            <div className="text-center">
              <QRCode value={LINKEDIN} size={112}/>
              <div className="text-xs mt-2 text-white/70">LinkedIn</div>
            </div>
            <div className="text-center">
              <QRCode value={`mailto:${EMAIL}`} size={112}/>
              <div className="text-xs mt-2 text-white/70">Email</div>
            </div>
          </div>
        </article>

        <article className="card">
          <h3 className="font-semibold mb-2">Downloads</h3>
          <p className="text-white/80 text-sm mb-3">HTML versions are embedded for instant viewing; download if needed.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="/resume/resume_full.html" className="btn btn-primary">Resume (Full)</a>
            <a href="/resume/resume_mini.html" className="btn">Resume (Mini)</a>
          </div>
        </article>
      </div>
    </section>
  );
}
