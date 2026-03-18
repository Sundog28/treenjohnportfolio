import React, { useEffect, useState } from "react";

export default function BootScreen({
  onDone,
}: {
  onDone: () => void;
}) {
  const [step, setStep] = useState(0);

  const lines = [
    "Initializing TreenOS interface...",
    "Loading UI modules...",
    "Connecting portfolio systems...",
    "Mounting recruiter mode...",
    "Portfolio system online.",
  ];

  useEffect(() => {
    if (step < lines.length) {
      const timer = setTimeout(() => setStep((s) => s + 1), 650);
      return () => clearTimeout(timer);
    }

    const doneTimer = setTimeout(() => onDone(), 900);
    return () => clearTimeout(doneTimer);
  }, [step, lines.length, onDone]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--bg)]">
      <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur">
        <div className="mb-6 flex items-center justify-between">
          <div className="text-sm uppercase tracking-[0.3em] text-white/60">
            TreenOS Boot Sequence
          </div>
          <div className="text-sm text-[var(--accent)]">SYSTEM INIT</div>
        </div>

        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
          </div>

          <div className="terminal-body min-h-[260px]">
            {lines.slice(0, step).map((line) => (
              <div key={line} className="mb-2">
                &gt; {line}
              </div>
            ))}

            {step < lines.length && (
              <div className="mt-2 animate-pulse text-[var(--accent2)]">
                &gt; ...
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <div className="h-3 overflow-hidden rounded-full border border-white/10 bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)] transition-all duration-500"
              style={{ width: `${(step / lines.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}