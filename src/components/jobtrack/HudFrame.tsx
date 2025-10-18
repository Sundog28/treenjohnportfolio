// src/components/jobtrack/HudFrame.tsx
import React, { PropsWithChildren, useEffect, useRef } from 'react';

export default function HudFrame({ title, children }: PropsWithChildren<{ title: string }>) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Tiny floating “objects” renderer
  useEffect(() => {
    const c = canvasRef.current!;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const ctx = c.getContext('2d')!;
    let raf = 0;

    function resize() {
      c.width = c.clientWidth * dpr;
      c.height = c.clientHeight * dpr;
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    type Obj = { x: number; y: number; r: number; vx: number; vy: number; t: number; kind: 'ring'|'tri' };
    const objs: Obj[] = Array.from({ length: 12 }, () => ({
      x: Math.random() * c.clientWidth,
      y: Math.random() * c.clientHeight,
      r: 18 + Math.random() * 28,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      t: Math.random() * Math.PI * 2,
      kind: Math.random() > 0.5 ? 'ring' : 'tri',
    }));

    function draw() {
      ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
      ctx.strokeStyle = 'rgba(0,255,140,0.18)';
      ctx.lineWidth = 2;

      for (const o of objs) {
        o.x += o.vx; o.y += o.vy; o.t += 0.01;
        if (o.x < -50) o.x = c.clientWidth + 50;
        if (o.x > c.clientWidth + 50) o.x = -50;
        if (o.y < -50) o.y = c.clientHeight + 50;
        if (o.y > c.clientHeight + 50) o.y = -50;

        ctx.save();
        ctx.translate(o.x, o.y);
        ctx.rotate(o.t);

        if (o.kind === 'ring') {
          ctx.beginPath();
          ctx.arc(0, 0, o.r, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, o.r * 0.6, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          const s = o.r * 1.2;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.9, s * 0.6);
          ctx.lineTo(-s * 0.9, s * 0.6);
          ctx.closePath();
          ctx.stroke();
        }
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-black/50 shadow-[0_0_40px_#10B98122]">
      <div className="pointer-events-none absolute inset-0">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <div className="relative z-10 p-5 md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-black tracking-wide text-emerald-300 drop-shadow">
            {title}
          </h2>
          <div className="rounded-md border border-emerald-500/40 px-3 py-1 text-emerald-300/80 text-xs">
            LIVE • HUD
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
