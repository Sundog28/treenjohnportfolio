// src/components/hud/HudFrame.tsx
import React, { PropsWithChildren, useEffect, useRef } from "react";

type Accent = "gold" | "emerald";
export default function HudFrame(
  { title, accent = "gold", children }:
  PropsWithChildren<{ title: string; accent?: Accent }>
){
  const canvasRef = useRef<HTMLCanvasElement|null>(null);
  useEffect(() => {
    const c = canvasRef.current!; const ctx = c.getContext("2d")!;
    const dpr = Math.min(2, window.devicePixelRatio||1);
    function size(){ c.width=c.clientWidth*dpr; c.height=c.clientHeight*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    size(); const onR=()=>size(); window.addEventListener("resize", onR);
    type Obj={x:number;y:number;r:number;vx:number;vy:number;t:number;kind:"ring"|"tri"};
    const objs:Obj[] = Array.from({length:12}, ()=>({
      x: Math.random()*c.clientWidth, y: Math.random()*c.clientHeight,
      r: 18+Math.random()*28, vx:(Math.random()-.5)*.3, vy:(Math.random()-.5)*.3,
      t: Math.random()*Math.PI*2, kind: Math.random()>.5?"ring":"tri"
    }));
    let raf=0;
    function draw(){
      ctx.clearRect(0,0,c.clientWidth,c.clientHeight);
      const col = accent==="gold" ? "255,215,64" : "16,185,129"; // gold or emerald
      ctx.strokeStyle = `rgba(${col},0.18)`; ctx.lineWidth=2;
      for(const o of objs){
        o.x+=o.vx; o.y+=o.vy; o.t+=.01;
        if(o.x<-50)o.x=c.clientWidth+50; if(o.x>c.clientWidth+50)o.x=-50;
        if(o.y<-50)o.y=c.clientHeight+50; if(o.y>c.clientHeight+50)o.y=-50;
        ctx.save(); ctx.translate(o.x,o.y); ctx.rotate(o.t);
        if(o.kind==="ring"){
          ctx.beginPath(); ctx.arc(0,0,o.r,0,Math.PI*2); ctx.stroke();
          ctx.beginPath(); ctx.arc(0,0,o.r*.6,0,Math.PI*2); ctx.stroke();
        } else {
          const s=o.r*1.2; ctx.beginPath();
          ctx.moveTo(0,-s); ctx.lineTo(s*.9,s*.6); ctx.lineTo(-s*.9,s*.6); ctx.closePath(); ctx.stroke();
        }
        ctx.restore();
      }
      raf=requestAnimationFrame(draw);
    }
    raf=requestAnimationFrame(draw);
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener("resize",onR); };
  }, [accent]);
  const ring = accent==="gold" ? "ring-amber-400/40" : "ring-emerald-500/40";
  const shadow = accent==="gold" ? "shadow-[0_0_40px_#F59E0B22]" : "shadow-[0_0_40px_#10B98122]";
  return (
    <div className={`relative overflow-hidden rounded-2xl border ${ring} bg-black/50 ${shadow}`}>
      <div className="pointer-events-none absolute inset-0">
        <canvas ref={canvasRef} className="h-full w-full"/>
      </div>
      <div className="relative z-10 p-5 md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className={`text-2xl md:text-3xl font-black tracking-wide ${
            accent==="gold" ? "text-amber-300" : "text-emerald-300"
          } drop-shadow`}>{title}</h2>
          <div className={`rounded-md border px-3 py-1 text-xs ${
            accent==="gold" ? "border-amber-400/40 text-amber-300/80" : "border-emerald-500/40 text-emerald-300/80"
          }`}>LIVE • HUD</div>
        </div>
        {children}
      </div>
    </div>
  );
}
