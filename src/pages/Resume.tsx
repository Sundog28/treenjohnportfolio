import React from "react"
import QRCode from "qrcode.react";

const FULL_URL = "/resume/John_Treen_Ultimate_Resume_Full.pdf"
const MINI_URL = "/resume/John_Treen_Ultimate_Resume_Mini.pdf"

export default function Resume(){
  return (
    <section className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="font-semibold mb-2">Full Resume (PDF)</h3>
          <div className="flex items-center gap-4">
            <QRCode value={FULL_URL} size={96} />
            <a className="btn btn-primary" href={FULL_URL} download>Download Full PDF</a>
          </div>
          <p className="text-white/70 mt-2">Address updated: 14 Wickham Ct, Sugar Land, TX 77479, United States</p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">Mini Resume (PDF)</h3>
          <div className="flex items-center gap-4">
            <QRCode value={MINI_URL} size={96} />
            <a className="btn btn-primary" href={MINI_URL} download>Download Mini PDF</a>
          </div>
        </div>
      </div>

      <div className="card mt-6">
        <h3 className="font-semibold mb-2">Web Preview (Full)</h3>
        <iframe title="Resume" src="/resume/resume_full.html" className="w-full h-[70vh] rounded bg-white"></iframe>
      </div>
    </section>
  )
}
