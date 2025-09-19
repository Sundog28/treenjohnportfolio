export default function ProjectCard({
  title, description, link, repo, badges = [], stack = []
}: {
  title: string; description: string; link?: string; repo?: string; badges?: string[]; stack?: string[]
}) {
  return (
    <div className="card hover:shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex gap-2">
          {link && <a className="btn" href={link} target="_blank">Live</a>}
          {repo && <a className="btn" href={repo} target="_blank">Code</a>}
        </div>
      </div>
      <p className="mt-2 text-[color:var(--muted)]">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map(s => <span key={s} className="px-2 py-1 rounded border text-xs" style={{borderColor:'var(--border)'}}>{s}</span>)}
      </div>
      {badges.length ? <div className="mt-3 flex flex-wrap gap-2">{badges.map((b,i)=><img key={i} src={b} alt="badge" />)}</div> : null}
    </div>
  )
}
