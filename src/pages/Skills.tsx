const skills = [
  'React','TypeScript','TailwindCSS','Go','Python','SQL',
  'PostgreSQL','Pandas','scikit-learn','Git/GitHub','Vercel'
]
export default function Skills() {
  return (
    <section className="page">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map(s => <div key={s} className="border p-3 rounded text-center bg-[color:var(--card)] hover:shadow-lg">{s}</div>)}
      </div>
    </section>
  )
}
