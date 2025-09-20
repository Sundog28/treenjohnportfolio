import React,{useEffect,useRef} from "react";
import QRCode from "qrcode";
export default function QR({text,size=128,label}:{text:string;size?:number;label?:string}){
  const ref=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{ if(ref.current){ QRCode.toCanvas(ref.current,text,{width:size});}},[text,size]);
  return (<div className="flex flex-col items-center">
    <canvas ref={ref} className="bg-white p-1 rounded shadow"/>
    {label&&<span className="mt-1 text-xs text-[var(--text)]/70">{label}</span>}
  </div>);
}
