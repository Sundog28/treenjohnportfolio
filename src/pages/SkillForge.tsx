import React, { useEffect, useMemo, useState } from "react";

type Skill = { id: number; name: string; progress: number };

function Gauge({ value }: { value: number }) {
  // simple ring gauge that fits your neon HUD vibe
  const pct = Math.max(0, Math.min(100, value));
  const stroke = 8;
  const r = 36;
  const c = 2 * Math.PI * r;
  const off = c - (pct / 100) * c;
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="white" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth={stroke} />
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="url(#g)"
        strokeWidth={stroke}
        strokeDasharray={c}
        strokeDashoffset={off}
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 8px var(--accent))" }}
      />
      <text x="50" y="54" textAnchor="middle" fontSize="16" fill="var(--accent)" style={{ fontWeight: 700 }}>
        {pct}%
      </text>
    </svg>
  );
}

function Bar({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full h-3 bg-white/10 rounded overflow-hidden ring-1 ring-white/10">
      <div
        className="h-full"
        style={{
          width: `${pct}%`,
          background:
            "linear-gradient(90deg, var(--accent), rgba(255,255,255,.95))",
          boxShadow: "0 0 14px var(--accent)",
        }}
      />
    </div>
  );
}

export default function SkillForge() {
  const STORAGE_KEY = "skillforge:v1";
  const [skills, setSkills] = useState<Skill[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSkills(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
  }, [skills]);

  const add = () => {
    const n = name.trim();
    if (!n) return;
    setSkills((s) => [{ id: Date.now(), name: n, progress: 0 }, ...s]);
    setName("");
  };
  const update = (id: number, delta: number) =>
    setSkills((s) =>
      s.map((k) =>
        k.id === id ? { ...k, progress: Math.max(0, Math.min(100, k.progress + delta)) } : k
      )
    );
  const removeOne = (id: number) => setSkills((s) => s.filter((k) => k.id !== id));
  const reset = () => setSkills([]);

  const avg = useMemo(
    () => (skills.length ? Math.round(skills.reduce((a, b) => a + b.progress, 0) / skills.length) : 0),
    [skills]
  );

  return (
    <section className="grid gap-6">
      {/* HUD layer */}
      <div aria-hidden className="hud">
        <div className="obj chip"></div>
        <div className="obj ring" style={{ borderColor: "var(--accent)" }}></div>
        <div className="obj tri"></div>
      </div>

      <header className="flex items-center justify-between gap-4">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          SkillForge <span className="text-white/70">— Gamified Skills</span>
        </h1>
        <div className="card flex items-center gap-4">
          <Gauge value={avg} />
          <div>
            <div className="text-sm text-white/70">Overall Progress</div>
            <div className="text-xl font-semibold" style={{ color: "var(--accent)" }}>
              {avg}%
            </div>
          </div>
        </div>
      </header>

      <div className="card flex flex-col sm:flex-row gap-2 sm:items-center">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a skill (e.g. React, Go, R)…"
          className="flex-1 px-3 py-2 rounded bg-white/10 border border-white/10"
        />
        <div className="flex gap-2">
          <button onClick={add} className="btn btn-primary">Add</button>
          <button onClick={reset} className="btn">Reset</button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((s) => (
          <article key={s.id} className="card">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
                  {s.name}
                </h3>
                <div className="mt-2">
                  <Bar value={s.progress} />
                </div>
              </div>
              <Gauge value={s.progress} />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button className="btn" onClick={() => update(s.id, -10)}>-10</button>
              <button className="btn" onClick={() => update(s.id, -5)}>-5</button>
              <button className="btn btn-primary" onClick={() => update(s.id, +5)}>+5</button>
              <button className="btn btn-primary" onClick={() => update(s.id, +10)}>+10</button>
              <button className="btn" onClick={() => removeOne(s.id)}>Remove</button>
            </div>
          </article>
        ))}
      </div>

      {!skills.length && (
        <div className="card">
          <div className="text-white/80">
            No skills yet. Add your first one above — start with <strong>React</strong>, <strong>TypeScript</strong>,
            <strong> Go</strong>, <strong>Python</strong>, or <strong>R</strong>.
          </div>
        </div>
      )}
    </section>
  );
}
