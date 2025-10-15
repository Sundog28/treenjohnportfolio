import React, { useState } from "react";

type Skill = { id:number; name:string; level:number };

const DEFAULT: Skill[] = [
  { id: 1, name: "JavaScript", level: 80 },
  { id: 2, name: "TypeScript", level: 75 },
  { id: 3, name: "Python", level: 78 },
  { id: 4, name: "R", level: 55 },
  { id: 5, name: "SQL", level: 70 }
];

export default function Skills(){
  const [skills, setSkills] = useState<Skill[]>(DEFAULT);
  const [name, setName] = useState("");

  const add = () => {
    if(!name.trim()) return;
    setSkills(s => [...s, { id: Date.now(), name, level: 40 }]);
    setName("");
  };

  const adjust = (id:number, d:number) => {
    setSkills(skills.map(s => s.id===id ? {...s, level: Math.max(0, Math.min(100, s.level + d))} : s));
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex gap-2 mb-6">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Add a skill..."
          className="px-3 py-2 rounded bg-white/10 border border-white/10 flex-1"/>
        <button onClick={add} className="btn btn-primary">Add</button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {skills.map(s=>(
          <div key={s.id} className="card">
            <div className="flex items-center justify-between mb-1">
              <div className="font-semibold">{s.name}</div>
              <div className="text-yellow-300">{s.level}%</div>
            </div>
            <div className="h-3 bg-white/10 rounded overflow-hidden">
              <div className="h-3 bg-yellow-400" style={{width: `${s.level}%`}}/>
            </div>
            <div className="flex gap-2 mt-3">
              <button className="btn" onClick={()=>adjust(s.id,-10)}>-10</button>
              <button className="btn" onClick={()=>adjust(s.id,-5)}>-5</button>
              <button className="btn" onClick={()=>adjust(s.id,5)}>+5</button>
              <button className="btn" onClick={()=>adjust(s.id,10)}>+10</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
