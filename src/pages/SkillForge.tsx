import React, { useState } from "react";

interface Skill {
  id: number;
  name: string;
  progress: number;
}

export default function SkillForge() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (!input.trim()) return;
    setSkills([...skills, { id: Date.now(), name: input.trim(), progress: 50 }]);
    setInput("");
  };

  const updateSkill = (id: number, delta: number) => {
    setSkills((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, progress: Math.max(0, Math.min(100, s.progress + delta)) } : s
      )
    );
  };

  return (
    <div className="min-h-screen bg-black text-yellow-300 p-8">
      <h1 className="text-4xl font-bold mb-4">⚒ SkillForge</h1>
      <p className="opacity-80 mb-6">Add skills and level them up.</p>

      <div className="flex gap-2 mb-4">
        <input
          className="px-3 py-2 bg-neutral-900 border border-yellow-700 rounded text-white"
          placeholder="Add a skill..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addSkill()}
        />
        <button
          onClick={addSkill}
          className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 rounded text-black font-semibold"
        >
          Add
        </button>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-neutral-950 border border-yellow-700 p-4 rounded">
            <h2 className="text-xl font-bold mb-2">{skill.name}</h2>
            <div className="h-3 bg-neutral-800 rounded">
              <div className="h-3 bg-yellow-400 rounded" style={{ width: `${skill.progress}%` }} />
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => updateSkill(skill.id, -10)}
                className="px-3 py-1 bg-neutral-900 border border-yellow-700 rounded text-yellow-200"
              >
                -10
              </button>
              <button
                onClick={() => updateSkill(skill.id, 10)}
                className="px-3 py-1 bg-yellow-500 hover:bg-yellow-400 rounded text-black"
              >
                +10
              </button>
            </div>
          </div>
        ))}
        {skills.length === 0 && (
          <div className="text-yellow-200/80">No skills yet — add one above.</div>
        )}
      </div>
    </div>
  );
}
