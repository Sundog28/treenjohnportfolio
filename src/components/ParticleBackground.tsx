import React,{useEffect,useRef} from "react";
export default function ParticleBackground(){
  const ref=useRef<HTMLCanvasElement|null>(null);
  useEffect(()=>{
    const canvas=ref.current!,ctx=canvas.getContext("2d")!;
    const DPR=Math.min(devicePixelRatio||1,2);
    let raf=0; const N=80;
    const P=Array.from({length:N},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.0006,vy:(Math.random()-.5)*.0006,r:Math.random()*2+.5}));
    const resize=()=>{canvas.width=innerWidth*DPR;canvas.height=innerHeight*DPR;canvas.style.width=innerWidth+"px";canvas.style.height=innerHeight+"px";ctx.setTransform(DPR,0,0,DPR,0,0);};
    const draw=()=>{ctx.clearRect(0,0,innerWidth,innerHeight);const a=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#d4af37";ctx.fillStyle=a+"AA";ctx.strokeStyle=a+"40";
      P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>1)p.vx*=-1;if(p.y<0||p.y>1)p.vy*=-1;ctx.beginPath();ctx.arc(p.x*innerWidth,p.y*innerHeight,p.r,0,Math.PI*2);ctx.fill();});
      for(let i=0;i<N;i++)for(let j=i+1;j<N;j++){const a=P[i],b=P[j],dx=(a.x-b.x)*innerWidth,dy=(a.y-b.y)*innerHeight,d2=dx*dx+dy*dy;if(d2<150*150){ctx.globalAlpha=1-Math.sqrt(d2)/150;ctx.beginPath();ctx.moveTo(a.x*innerWidth,a.y*innerHeight);ctx.lineTo(b.x*innerWidth,b.y*innerHeight);ctx.stroke();ctx.globalAlpha=1;}}
      raf=requestAnimationFrame(draw);
    };
    resize(); addEventListener("resize",resize); raf=requestAnimationFrame(draw);
    return()=>{cancelAnimationFrame(raf); removeEventListener("resize",resize);}
  },[]);
  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" aria-hidden />;
}
