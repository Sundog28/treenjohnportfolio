import Parallax from '../visuals/Parallax'
export default function Home(){
  return (
    <section className="grid md:grid-cols-2 gap-6 items-center">
      <Parallax>
        <div className="relative panel p-8 holo">
          <h1 className="text-4xl font-extrabold">Build. Learn. Ship.</h1>
          <p className="mt-3 text-white/80">Full-stack & ML. Futuristic UI, performant backends, thoughtful UX.</p>
          <div className="mt-5 flex gap-3">
            <a href="/resume" className="px-4 py-2 rounded bg-neon-cyan/20 hover:bg-neon-cyan/30 border border-neon-cyan/40">View Résumé</a>
            <a href="/resume/resume_full.pdf" className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 border border-white/15">Download PDF</a>
          </div>
        </div>
      </Parallax>
      <div className="panel p-6">
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>Day/Night themes (cyan/purple vs black/neon-green)</li>
          <li>Holographic panels, boot sequence, matrix mode</li>
          <li>Ambient hum + beeps with volume and mute</li>
          <li>Cursor trails + parallax</li>
        </ul>
      </div>
    </section>
  )
}
