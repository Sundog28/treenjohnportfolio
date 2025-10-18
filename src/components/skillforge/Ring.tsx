// src/components/skillforge/Ring.tsx
import React from "react";
export default function Ring({value,label}:{value:number;label?:string}){
  const r=28, c=2*Math.PI*r, off=c*(1-Math.max(0,Math.min(100,value))/100);
  return (
    <div className="flex items-center gap-3">
      <svg width="72" height="72" viewBox="0 0 72 72" className="drop-shadow">
        <circle cx="36" cy="36" r={r} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="8"/>
        <circle cx="36" cy="36" r={r} fill="none" stroke="rgba(245,158,11,.9)" strokeWidth="8"
                strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
                transform="rotate(-90 36 36)"/>
        <text x="36" y="42" textAnchor="middle" fontSize="14" fill="#FDE68A" fontFamily="ui-sans-serif">
          {Math.round(value)}%
        </text>
      </svg>
      {label && <div className="font-semibold">{label}</div>}
    </div>
  );
}
