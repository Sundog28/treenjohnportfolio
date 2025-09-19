import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="page text-center">
      <h1 className="text-5xl font-bold text-[color:var(--accent)]">404</h1>
      <p className="mt-2">Lost in the Matrix…</p>
      <Link to="/" className="mt-4 inline-block btn">Return Home</Link>
    </section>
  )
}
