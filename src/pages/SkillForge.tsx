import React, { useEffect, useState } from "react";
import HudFrame from "../components/hud/HudFrame";
import Ring from "../components/skillforge/Ring";
import AddSkillForm from "../components/skillforge/AddSkillForm";
import { loadSkills, saveSkills, uid, type Skill } from "../components/skillforge/store";

export default function SkillForge() {
  const [skills, setSkills] = useState<Skill[]>([]);

  // Load from localStorage; if empty, preload a few examples once
  useEffect(() => {
    const loaded = loadSkills();
    if (loaded.length === 0) {
      const seed: Skill[] = [
        { id: uid(), name: "Machine Learning", progress: 70 },
        { id: uid(), name: "React",            progress: 60 },
        { id: uid(), name: "Python",           progress: 80 },
      ];
      setSkills(seed);
      saveSkills(seed);
    } else {
      setSkills(loaded);
    }
  }, []);

  // Persist on change
  useEffect(() => { saveSkills(skills); }, [skills]);

  function add(name: string) {
    if (!name.trim()) return;
    if (skills.some(s => s.name.toLowerCase() === name.toLowerCase())) return;
    setSkills([...skills, { id: uid(), name: name.trim(), progress: 0 }]);
  }

  function delta(id: string, d: number) {
    setSkills(skills.map(s =>
      s.id === id ? { ...s, progress: Math.max(0, Math.min(100, s.progress + d)) } : s
    ));
  }

  return (
    <div className="space-y-6">
      <HudFrame title="SkillForge — Gamified Skill Tracker" accent="gold">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left: Add skills */}
          <div className="space-y-4">
            <div className="text-amber-200/90">Add Skills</div>
            <AddSkillForm onAdd={add} />
            <div className="text-xs text-amber-200/70">
              Presets add instantly. Adjust progress with the controls on each skill.
            </div>
          </div>

          {/* Right: Your skills */}
          <div className="space-y-3">
            <div className="text-amber-200/90">Your Skills</div>

            {skills.length === 0 ? (
              <div className="rounded-md bg-neutral-900/60 p-4 ring-1 ring-amber-400/20 text-amber-200/80">
                No skills yet — add from the left.
              </div>
            ) : (
              <ul className="grid gap-3">
                {skills.map(s => (
                  <li key={s.id}
                      className="flex items-center justify-between rounded-xl bg-neutral-900/60 p-4 ring-1 ring-amber-400/30">
                    <Ring value={s.progress} label={s.name} />
                    <div className="flex items-center gap-2">
                      <button onClick={() => delta(s.id, -10)}
                              className="rounded bg-neutral-800 px-2 py-1 ring-1 ring-amber-400/30 hover:bg-neutral-700">−10</button>
                      <button onClick={() => delta(s.id, -1)}
                              className="rounded bg-neutral-800 px-2 py-1 ring-1 ring-amber-400/30 hover:bg-neutral-700">−1</button>
                      <button onClick={() => delta(s.id, 1)}
                              className="rounded bg-neutral-800 px-2 py-1 ring-1 ring-amber-400/30 hover:bg-neutral-700">+1</button>
                      <button onClick={() => delta(s.id, 10)}
                              className="rounded bg-neutral-800 px-2 py-1 ring-1 ring-amber-400/30 hover:bg-neutral-700">+10</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </HudFrame>
    </div>
  );
}
