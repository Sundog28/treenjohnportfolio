export default function Downloads() {
  return (
    <section className="page">
      <h2 className="text-3xl font-bold mb-4">Download Center</h2>
      <ul className="space-y-2">
        <li><a className="btn" href="/resume/resume_full.pdf" download>Résumé (Full)</a></li>
        <li><a className="btn" href="/resume/resume_mini.pdf" download>Résumé (Mini)</a></li>
        <li><a className="btn btn-primary" href="/resume/all-resumes.zip" download>Download All</a></li>
      </ul>
    </section>
  )
}
