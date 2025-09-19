import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import ThemeToggle from './components/ThemeToggle'
import MatrixRain from './components/MatrixRain'
import Konami from './components/Konami'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

type Theme = 'light' | 'dark'
type Mode = 'normal' | 'matrix'

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'light')
  const [mode, setMode] = useState<Mode>(() => (localStorage.getItem('mode') as Mode) || 'normal')
  const location = useLocation()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.setAttribute('data-mode', mode)
    localStorage.setItem('theme', theme)
    localStorage.setItem('mode', mode)
  }, [theme, mode])

  const nav = useMemo(() => [
    { to: '/', label: 'Home' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume', label: 'Résumé' },
    { to: '/contact', label: 'Contact' },
    { to: '/recruiter', label: 'Recruiter' },
    { to: '/downloads', label: 'Downloads' }
  ], [])

  return (
    <div className="min-h-screen">
      {mode === 'matrix' && <div className="matrix" />}
      {mode === 'matrix' && <MatrixRain />}
      <Konami activate={() => setMode('matrix')} />

      <header className="sticky top-0 border-b backdrop-blur" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold glow">John Treen</Link>
          <nav className="flex gap-2">
            {nav.map(n => (
              <Link key={n.to} to={n.to}
                className={`px-3 py-2 rounded ${location.pathname === n.to ? 'bg-[color:var(--card)] border' : ''}`}
                style={{ borderColor: 'var(--border)' }}>
                {n.label}
              </Link>
            ))}
            <ThemeToggle theme={theme} setTheme={setTheme} mode={mode} setMode={setMode} />
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-sm text-center text-[color:var(--muted)]" style={{ borderColor: 'var(--border)' }}>
        © {new Date().getFullYear()} John Treen •
        <a href="https://github.com/Sundog28" target="_blank" className="ml-2 inline-flex items-center gap-1 hover:text-[color:var(--accent)]"><FaGithub/>GitHub</a>
        <a href="http://linkedin.com/in/john-treen-629a81159" target="_blank" className="ml-4 inline-flex items-center gap-1 hover:text-[color:var(--accent)]"><FaLinkedin/>LinkedIn</a>
      </footer>
    </div>
  )
}
