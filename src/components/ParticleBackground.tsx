import React, { useEffect, useRef } from "react"

export default function ParticleBackground(){
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(()=>{
    const c = canvasRef.current!
    const ctx = c.getContext("2d")!
    let raf = 0
    const DPR = window.devicePixelRatio || 1
    const resize = () => { c.width = innerWidth*DPR; c.height = innerHeight*DPR; }
    resize(); addEventListener("resize", resize)
    const N = 70; const pts = Array.from({length:N}, ()=>({
      x: Math.random()*c.width, y: Math.random()*c.height,
      vx:(Math.random()-0.5)*0.5, vy:(Math.random()-0.5)*0.5
    }))
    const draw = () => {
      ctx.clearRect(0,0,c.width,c.height)
      for(const p of pts){
        p.x+=p.vx; p.y+=p.vy
        if(p.x<0||p.x>c.width) p.vx*=-1
        if(p.y<0||p.y>c.height) p.vy*=-1
        ctx.fillStyle="rgba(255,215,0,0.6)"
        ctx.beginPath(); ctx.arc(p.x,p.y,1.2*DPR,0,Math.PI*2); ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return ()=>{ cancelAnimationFrame(raf); removeEventListener("resize", resize) }
  },[])
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-40 pointer-events-none"/>
}
