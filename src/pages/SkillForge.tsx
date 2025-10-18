// src/pages/SkillForge.tsx
import React, { useEffect, useState } from "react";
import HudFrame from "../components/hud/HudFrame";
import SkillCard, { Skill } from "../components/skillforge/SkillCard";
import AddSkillForm from "../components/skillforge/AddSkillForm";
import { loadSkills, saveSkills, uid } from "../components/skillforge/store";

export default function SkillForge(){
  const [skills,setSkills]=useState<Skill[]>([]);
  useEffect(()=>{ setSkills(loadSkills()); },[]);
  useEffect(()=>{ saveSkills(skills); },[skills]);

  function add(name:string){
    if(skills.some(s=>s.name.toLowerCase()===name.toLowerCase())) return;
    setSkills([...skills, {id:uid(), name, progress:0}]);
  }
  function delta(id:string,d:number){
    setSkills(skills.map(s=>s.id===id?{...s,progress:Math.max(0, Math.min(100, s.progress+d))}:s));
  }
  function remove(id:string){ setSkills(skills.filter(s=>s.id!==id)); }
  function reset(){ if(confirm("Reset all progress?")) setSkills(skills.map(s=>({...s,progress:0}))); }

  return (
    <div className="space-y-6">
      <HudFrame title="SkillForge — Gamified Skill Tracker" accent="gold">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="text-amber-200/90">Add Skills</div>
            <AddSkillForm onAdd={add}/>
            <div className="text-xs text-amber-200/70">Tip: Use presets for quick add. Progress rings are adjustable per skill.</div>
            <button onClick={reset} className="rounded-md bg-neutral-800 px-3 py-2 text-sm ring-1 ring-amber-400/40 hover:bg-neutral-700">Reset All</button>
          </div>
          <div className="space-y-3">
            <div className="text-amber-200/90">Your Skills</div>
            {skills.length===0
              ? <div className="rounded-md bg-neutral-900/60 p-4 ring-1 ring-amber-400/20 text-amber-200/80">No skills yet — add from the left.</div>
              : <div className="grid gap-3">{skills.map(s=><SkillCard key={s.id} s={s} onDelta={delta} onRemove={remove}/>)}</div>}
          </div>
        </div>
      </HudFrame>
    </div>
  );
}
