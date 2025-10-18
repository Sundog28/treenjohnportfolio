// src/components/jobtrack/JobForm.tsx
import React, { useState } from 'react';
import { addJob, Job } from '../../services/jobtrackApi';

export default function JobForm({ onAdded }: { onAdded(job: Job): void }) {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('Applied');
  const [notes, setNotes] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!company.trim() || !role.trim()) {
      setErr('Company and role are required.');
      return;
    }
    try {
      setBusy(true);
      const created = await addJob({ company, role, status, notes });
      onAdded(created);
      setCompany(''); setRole(''); setStatus('Applied'); setNotes('');
    } catch (e: any) {
      setErr(e.message || 'Failed to add job');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-3 md:grid-cols-2">
      <input
        className="rounded-md bg-neutral-900/70 px-3 py-2 ring-1 ring-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-emerald-50"
        placeholder="Company *"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        className="rounded-md bg-neutral-900/70 px-3 py-2 ring-1 ring-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-emerald-50"
        placeholder="Role *"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <select
        className="rounded-md bg-neutral-900/70 px-3 py-2 ring-1 ring-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-emerald-50"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        {['Applied', 'Interview', 'Offer', 'Rejected'].map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <input
        className="rounded-md bg-neutral-900/70 px-3 py-2 ring-1 ring-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-emerald-50"
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      {err && <div className="md:col-span-2 text-red-300 text-sm">{err}</div>}

      <div className="md:col-span-2">
        <button
          disabled={busy}
          className="w-full rounded-md bg-emerald-500 px-4 py-2 font-semibold text-black shadow-[0_0_25px_#10B98166] transition hover:bg-emerald-400 disabled:opacity-70"
        >
          {busy ? 'Adding…' : 'Add Job'}
        </button>
      </div>
    </form>
  );
}
