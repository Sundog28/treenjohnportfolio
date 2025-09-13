import { skills } from '../data/skills'
export default function Skills(){
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {Object.entries(skills).map(([group, items])=>(
        <div key={group} className="panel p-6">
          <h2 className="text-lg font-semibold">{group}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {items.map(s => <span key={s} className="px-2 py-1 rounded-full border border-white/15 bg-white/10 text-sm">{s}</span>)}
          </div>
        </div>
      ))}
    </section>
  )
}
