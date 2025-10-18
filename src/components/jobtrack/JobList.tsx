// src/components/jobtrack/JobList.tsx
import React from "react";
import type { Job } from "../../services/jobtrackApi";

export default function JobList({ jobs }: { jobs: Job[] }) {
  if (!jobs.length) {
    return <p className="opacity-70">No job applications yet. Add one above.</p>;
  }

  return (
    <div className="card overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="text-left opacity-70">
          <tr>
            <th className="py-2 pr-4">Company</th>
            <th className="py-2 pr-4">Role</th>
            <th className="py-2 pr-4">Status</th>
            <th className="py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((j) => (
            <tr key={j.id ?? `${j.company}-${j.role}-${j.status}`}>
              <td className="py-2 pr-4">{j.company}</td>
              <td className="py-2 pr-4">{j.role}</td>
              <td className="py-2 pr-4">
                <span className="px-2 py-0.5 rounded-full ring-1 ring-[var(--ring)] bg-black/20">
                  {j.status}
                </span>
              </td>
              <td className="py-2">{j.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
