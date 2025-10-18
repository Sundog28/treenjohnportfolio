import React, { useState } from "react";

const PRESETS = ["JavaScript","TypeScript","React","Node.js","Python","R","SQL","Go","Docker","AWS"];

export default function AddSkillForm({ onAdd }: { onAdd: (name: string) => void }) {
  const [name, setName] = useState("");

  function addNow() {
    const v = name.trim();
    if (!v) return;
    onAdd(v);
    setName("");
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-md bg-neutral-900/70 px-3 py-2 ring-1 ring-amber-400/30 focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Add custom skill…"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") addNow(); }}
        />
        <button
          onClick={addNow}
          className="rounded-md bg-amber-500 px-4 py-2 font-semibold text-black hover:bg-amber-400"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p}
            onClick={() => onAdd(p)}
            className="rounded-full border border-amber-400/40 px-3 py-1 text-sm text-amber-200/90 hover:bg-amber-500/10"
          >
            + {p}
          </button>
        ))}
      </div>
    </div>
  );
}
