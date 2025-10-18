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
    setSkills([...skills, { id: Date.now(), name: input, progress: 50 }]);
    setInput("");
  };

  const updateSkill = (id: number, delta: number) => {
    setSkills(
      skills.map((s) =>
        s.id === id
          ? { ...s, progress: Math.min(100, Math.max(0, s.progress + delta)) }
          : s
      )
    );
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-8">
      <h1 className="text-4xl font-bold mb-4">⚒ SkillForge Prototype</h1>
      <p className="opacity-80 mb-6">
        Add skills and level them up. Demo HUD integration.
      </p>

      <div className="flex gap-2 mb-4">
        <input
          className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white"
          placeholder="Add a skill..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addSkill}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-black font-semibold"
        >
          Add
        </button>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gray-900 border border-green-500 p-4 rounded shadow"
          >
            <h2 className="text-xl font-bold mb-2">{skill.name}</h2>
            <div className="h-3 bg-gray-700 rounded">
              <div
                className="h-3 bg-green-400 rounded"
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => updateSkill(skill.id, -10)}
                className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-white"
              >
                -10
              </button>
              <button
                onClick={() => updateSkill(skill.id, 10)}
                className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded text-white"
              >
                +10
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

