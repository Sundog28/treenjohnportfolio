import { useEffect, useRef } from 'react'
export default function MatrixRain(){
  const ref=useRef<HTMLCanvasElement|null>(null)
  useEffect(()=>{ const c=ref.current!, ctx=c.getContext('2d')!, dpr=devicePixelRatio||1
    const resize=()=>{ c.width=innerWidth*dpr; c.height=innerHeight*dpr; ctx.setTransform(dpr,0,0,dpr,0,0) }; resize(); addEventListener('resize',resize)
    const cols=Math.ceil(innerWidth/14); const y=new Array(cols).fill(0); let id=0
    const loop=()=>{ ctx.fillStyle='rgba(0,0,0,0.08)'; ctx.fillRect(0,0,innerWidth,innerHeight); ctx.fillStyle='rgba(57,255,20,0.85)'; ctx.font='14px monospace'
      for(let i=0;i<y.length;i++){ const ch=String.fromCharCode(0x30A0+Math.random()*96); ctx.fillText(ch,i*14,y[i]*14); if(y[i]*14>innerHeight&&Math.random()>0.975) y[i]=0; else y[i]++ }
      id=requestAnimationFrame(loop) }
    id=requestAnimationFrame(loop); return ()=>cancelAnimationFrame(id)
  },[])
  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none opacity-40"></canvas>
}
