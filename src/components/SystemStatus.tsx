import React from "react";

export default function SystemStatus() {
  const items = [
    ["STATUS", "ONLINE"],
    ["FOCUS", "FULL-STACK + ML"],
    ["LOCATION", "REMOTE / HOUSTON"],
    ["AVAILABILITY", "IMMEDIATE"],
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-white/50">
            {label}
          </div>
          <div className="mt-2 font-semibold text-[var(--accent2)]">
            {value}
          </div>
        </div>
      ))}
    </div>
  );
}