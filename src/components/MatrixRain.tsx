import { useEffect, useRef } from 'react'
export default function MatrixRain() {
  const ref = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    const c = document.createElement('canvas'); ref.current = c
    c.className = 'fixed inset-0 -z-10 opacity-40 pointer-events-none'; document.body.appendChild(c)
    const ctx = c.getContext('2d')!
    const resize = () => { c.width = innerWidth; c.height = innerHeight }
    resize(); addEventListener('resize', resize)
    const fontSize = 16, cols = () => Math.ceil(c.width / fontSize)
    let drops = Array(cols()).fill(1), raf = 0
    const chars = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const draw = () => {
      ctx.fillStyle = 'rgba(2,11,2,0.08)'; ctx.fillRect(0,0,c.width,c.height)
      ctx.fillStyle = '#00ff95'; ctx.font = `${fontSize}px monospace`
      for (let i=0;i<drops.length;i++){ const t = chars[Math.floor(Math.random()*chars.length)]
        ctx.fillText(t, i*fontSize, drops[i]*fontSize); if (drops[i]*fontSize>c.height && Math.random()>0.975) drops[i]=0; drops[i]++ }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); c.remove() }
  }, [])
  return null
}
