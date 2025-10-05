import React from "react"
import QRCode from "qrcode.react"

export default function Recruiter(){
  const portfolio = "https://treenjohnportfolio.com"
  const linkedin  = "https://www.linkedin.com/in/john-treen-629a81159"
  const email     = "mailto:treenjohnm@gmail.com"
  const fullPDF   = "/resume/John_Treen_Ultimate_Resume_Full.pdf"
  const miniPDF   = "/resume/John_Treen_Ultimate_Resume_Mini.pdf"
  return (
    <section className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Recruiter Mode</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card"><h3 className="font-semibold mb-2">Portfolio</h3><QRCode value={portfolio} size={128}/><a className="btn mt-3" href={portfolio}>Open Portfolio ↗</a></div>
        <div className="card"><h3 className="font-semibold mb-2">LinkedIn</h3><QRCode value={linkedin} size={128}/><a className="btn mt-3" href={linkedin}>Open LinkedIn ↗</a></div>
        <div className="card"><h3 className="font-semibold mb-2">Email</h3><QRCode value={email} size={128}/><a className="btn mt-3" href={email}>Email John ↗</a></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="card"><h3 className="font-semibold mb-2">Full Resume</h3><QRCode value={fullPDF} size={128}/><a className="btn mt-3" href={fullPDF} download>Download Full PDF</a></div>
        <div className="card"><h3 className="font-semibold mb-2">Mini Resume</h3><QRCode value={miniPDF} size={128}/><a className="btn mt-3" href={miniPDF} download>Download Mini PDF</a></div>
      </div>
    </section>
  )
}
