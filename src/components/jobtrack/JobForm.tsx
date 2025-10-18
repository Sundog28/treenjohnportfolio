// src/components/jobtrack/JobForm.tsx
import React, { useState } from "react";
import type { Job } from "../../services/jobtrackApi";

const STATUSES = ["Applied", "Phone Screen", "Interviewing", "Offer", "Rejected"];

export default function JobForm({ onSubmit }: { onSubmit: (job: Job) => Promise<void> }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState(STATUSES[0]);
  const [notes, setNotes] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!company.trim() || !role.trim()) return;
    setBusy(true);
    try {
      await onSubmit({ company, role, status, notes });
      setCompany("");
      setRole("");
      setStatus(STATUSES[0]);
      setNotes("");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-3">
      <h3 className="text-lg font-semibold">Add Job Application</h3>
      <div className="grid md:grid-cols-2 gap-3">
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          className="px-3 py-2 rounded bg-black/20 ring-1 ring-white/10 focus:outline-none"
        />
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          className="px-3 py-2 rounded bg-black/20 ring-1 ring-white/10 focus:outline-none"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-3 py-2 rounded bg-black/20 ring-1 ring-white/10"
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes"
          className="px-3 py-2 rounded bg-black/20 ring-1 ring-white/10 focus:outline-none"
        />
      </div>
      <button disabled={busy} className="btn btn-primary">
        {busy ? "Saving…" : "Add Job"}
      </button>
    </form>
  );
}
