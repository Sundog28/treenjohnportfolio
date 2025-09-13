import { useEffect, useRef } from 'react'
export default function CursorTrail(){
  const ref=useRef<HTMLCanvasElement|null>(null)
  useEffect(()=>{
    const c=ref.current!, ctx=c.getContext('2d')!, dpr=devicePixelRatio||1
    const resize=()=>{ c.width=innerWidth*dpr; c.height=innerHeight*dpr; ctx.setTransform(dpr,0,0,dpr,0,0) }; resize(); addEventListener('resize',resize)
    let x=innerWidth/2, y=innerHeight/2, hue=180
    const on=(e:MouseEvent)=>{ x=e.clientX; y=e.clientY }; addEventListener('mousemove',on)
    const tail: {x:number;y:number;life:number}[]=[]; let id=0
    const loop=()=>{ ctx.clearRect(0,0,innerWidth,innerHeight); tail.push({x,y,life:1}); for(const p of tail){ p.life-=0.02; if(p.life<=0) continue; ctx.beginPath(); ctx.arc(p.x,p.y,8*p.life,0,Math.PI*2); ctx.fillStyle=`hsla(${hue},100%,60%,${0.25*p.life})`; ctx.fill() } while(tail[0]?.life<=0) tail.shift(); hue=(hue+1)%360; id=requestAnimationFrame(loop) }
    id=requestAnimationFrame(loop)
    return ()=>{ cancelAnimationFrame(id); removeEventListener('mousemove',on); removeEventListener('resize',resize) }
  },[])
  return <canvas ref={ref} className="fixed inset-0 pointer-events-none z-10"></canvas>
}
