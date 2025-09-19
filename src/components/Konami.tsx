import { useEffect } from 'react'
export default function Konami({ activate }: { activate: () => void }) {
  useEffect(() => {
    const code = [38,38,40,40,37,39,37,39,66,65]; let i = 0
    const h = (e: KeyboardEvent) => { if (e.keyCode === code[i]) { i++; if (i===code.length){ activate(); i=0 } } else { i=0 } }
    addEventListener('keydown', h); return () => removeEventListener('keydown', h)
  }, [activate])
  return null
}
