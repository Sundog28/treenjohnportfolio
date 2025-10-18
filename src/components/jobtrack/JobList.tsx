// src/components/jobtrack/JobList.tsx
import React from 'react';
import { Job } from '../../services/jobtrackApi';

export default function JobList({ jobs, loading }: { jobs: Job[]; loading: boolean }) {
  if (loading) {
    return (
      <div className="grid gap-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-16 animate-pulse rounded-md bg-neutral-900/60 ring-1 ring-emerald-500/20" />
        ))}
      </div>
    );
  }

  if (!jobs.length) {
    return <div className="rounded-md bg-neutral-900/60 px-4 py-6 text-emerald-200/70 ring-1 ring-emerald-500/20">No jobs yet. Add your first on the left.</div>;
  }

  return (
    <ul className="grid gap-3">
      {jobs.map((j) => (
        <li
          key={j.id ?? `${j.company}-${j.role}`}
          className="rounded-md bg-neutral-900/60 p-4 ring-1 ring-emerald-500/25"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="font-semibold text-emerald-300">{j.company}</div>
            <div className="rounded-full border border-emerald-500/40 px-2 py-0.5 text-xs text-emerald-200/80">
              {j.status}
            </div>
          </div>
          <div className="text-emerald-100/90">{j.role}</div>
          {j.notes && <div className="mt-1 text-sm text-emerald-200/70">{j.notes}</div>}
        </li>
      ))}
    </ul>
  );
}
