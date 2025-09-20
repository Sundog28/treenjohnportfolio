import React from "react";
export default function Skills(){
  const groups=[
    {title:"Web", items:["React","TypeScript","Vite","Tailwind","Flask"]},
    {title:"Backend", items:["Go","REST APIs","Auth","Testing"]},
    {title:"Data/ML", items:["Python","Pandas","scikit-learn","EDA","CV"]},
    {title:"DB/Infra", items:["PostgreSQL","SQL","Docker (basics)","Vercel"]}
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Core Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map(g=>(
          <div key={g.title} className="card">
            <h3 className="font-semibold mb-2">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map(i=><span key={i} className="px-3 py-1 rounded bg-card ring-1 ring-white/10 text-sm">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
