import { useState } from 'react'
export default function Resume(){
  const [mode, setMode] = useState<'full'|'mini'>('full')
  const [asHtml, setAsHtml] = useState(true)
  const path = asHtml ? `/resume/resume_${mode}.html` : `/resume/resume_${mode}.pdf`
  const pdfDownload = `/resume/resume_${mode}.pdf`
  return (
    <section className="space-y-4">
      <div className="panel p-2 flex flex-wrap items-center gap-2">
        <div className="flex rounded-md overflow-hidden border border-white/15">
          <button onClick={()=>setMode('full')} className={`px-3 py-2 ${mode==='full'?'bg-white/20':'bg-white/10 hover:bg-white/20'}`}>Full</button>
          <button onClick={()=>setMode('mini')} className={`px-3 py-2 ${mode==='mini'?'bg-white/20':'bg-white/10 hover:bg-white/20'}`}>Mini</button>
        </div>
        <div className="flex rounded-md overflow-hidden border border-white/15">
          <button onClick={()=>setAsHtml(false)} className={`px-3 py-2 ${!asHtml?'bg-white/20':'bg-white/10 hover:bg-white/20'}`}>PDF</button>
          <button onClick={()=>setAsHtml(true)} className={`px-3 py-2 ${asHtml?'bg-white/20':'bg-white/10 hover:bg-white/20'}`}>HTML</button>
        </div>
        <a href={pdfDownload} className="ml-auto px-3 py-2 rounded-md bg-neon-cyan/20 hover:bg-neon-cyan/30 border border-neon-cyan/40">Download PDF</a>
        <a href={path} target="_blank" className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/15">Open in new tab</a>
      </div>
      <div className="panel p-2 border border-white/15">
        <div className="rounded-md overflow-hidden shadow-glow">
          <iframe src={path} className="w-full h-[80vh] bg-white" title={`${mode} résumé`} />
        </div>
        <p className="mt-2 text-xs text-white/60">If the viewer doesn't load, use “Open in new tab” or “Download PDF”.</p>
      </div>
    </section>
  )
}
