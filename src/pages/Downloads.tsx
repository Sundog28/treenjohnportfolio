import React from "react";
const files=[
  {name:"Mini Résumé (PDF)", href:"/resume/John_Treen_Ultimate_Resume_Mini.pdf"},
  {name:"Full Résumé (PDF)", href:"/resume/John_Treen_Ultimate_Resume_Full.pdf"}
];
export default function Downloads(){
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Downloads</h2>
      <div className="grid gap-2">
        {files.map(f=><a key={f.href} className="card hover:shadow-glow" href={f.href} download>{f.name}</a>)}
      </div>
    </div>
  );
}
