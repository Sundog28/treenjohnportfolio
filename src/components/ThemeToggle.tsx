type Theme = 'light' | 'dark'
type Mode = 'normal' | 'matrix'

export default function ThemeToggle({
  theme, setTheme, mode, setMode
}: {
  theme: Theme; setTheme: (t: Theme) => void
  mode: Mode; setMode: (m: Mode) => void
}) {
  return (
    <div className="flex gap-2">
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="px-3 py-1 border rounded" aria-label="Toggle Light/Dark">
        {theme === 'light' ? '🌞' : '🌙'}
      </button>
      <button onClick={() => setMode(mode === 'normal' ? 'matrix' : 'normal')}
              className={`px-3 py-1 border rounded ${mode === 'matrix' ? 'bg-[color:var(--accent)] text-black' : ''}`}
              aria-label="Toggle Matrix Mode">
        💾 Matrix
      </button>
    </div>
  )
}
