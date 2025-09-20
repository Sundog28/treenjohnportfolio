import React from "react";
import QR from "../components/QR";
type P = {title:string; desc:string; img?:string; links:{label:string;href:string}[]; qr?:string};
const Card:React.FC<P>=({title,desc,img,links,qr})=>(
  <div className="card flex flex-col gap-3">
    {img && <img src={img} alt={title} className="rounded-md object-cover w-full h-48" />}
    <div><h3 className="text-xl font-semibold">{title}</h3><p className="text-sm text-[var(--text)]/80">{desc}</p></div>
    <div className="flex gap-2 flex-wrap">{links.map(l=><a key={l.href} className="btn" href={l.href} target="_blank">{l.label}</a>)}</div>
    {qr && <QR text={qr} size={120} label="Quick Link" />}
  </div>
);
export default function Projects(){
  const items:P[]=[
    {title:"SkillForge",desc:"Learning tracker in React + Tailwind (Vercel).",
     img:"/projects/skillforge.png",
     links:[{label:"Repo",href:"https://github.com/Sundog28/SkillForge"}],
     qr:"https://github.com/Sundog28/SkillForge"},
    {title:"JobTrack API",desc:"Go REST API for job applications.",
     img:"/projects/jobtrack.png",
     links:[{label:"Repo",href:"https://github.com/Sundog28/JobTrackAPI"}],
     qr:"https://github.com/Sundog28/JobTrackAPI"},
    {title:"ML Capstone",desc:"Wine Quality classification; metrics and feature importance.",
     img:"/projects/mlcapstone.png",
     links:[{label:"Repo",href:"https://github.com/Sundog28/MLCapstone"}],
     qr:"https://github.com/Sundog28/MLCapstone"},
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">{items.map(p=><Card key={p.title}{...p}/>)}</div>
    </div>
  );
}
