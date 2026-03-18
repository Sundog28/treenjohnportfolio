import React from "react";

export default function DiagnosticsPanel() {
  const rows = [
    ["Frontend Systems", "Stable"],
    ["Go Backend Modules", "Operational"],
    ["Database Layer", "Connected"],
    ["ML Pipeline", "Ready"],
    ["Recruiter Mode", "Mounted"],
  ];

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">System Diagnostics</h3>
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent2)]">
          LIVE
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {rows.map(([label, status]) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <span className="text-white/80">{label}</span>
            <span className="font-semibold text-[var(--accent)]">{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}