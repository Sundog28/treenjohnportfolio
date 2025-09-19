import { useState } from 'react'
export default function Resume() {
  const [mini, setMini] = useState(false)
  const full = '/resume/resume_full.pdf'
  const miniPath = '/resume/resume_mini.pdf'
  const active = mini ? miniPath : full
  return (
    <section className="page space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-3xl font-bold">Résumé</h2>
        <div className="flex gap-2">
          <button className="btn" onClick={()=>setMini(false)} aria-pressed={!mini}>Full</button>
          <button className="btn" onClick={()=>setMini(true)} aria-pressed={mini}>Mini</button>
          <a className="btn btn-primary" href={active} download>Download</a>
          <a className="btn" href="/resume/all-resumes.zip" download>Download All</a>
        </div>
      </div>
      <div className="card">
        <div className="w-full h-[80dvh]">
          <iframe title="Resume Preview" src={active} className="w-full h-full rounded border" style={{borderColor:'var(--border)'}} />
        </div>
      </div>
    </section>
  )
}
