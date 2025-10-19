import React, { useState } from "react";

interface Job {
  id: number;
  company: string;
  role: string;
  status: string;
}

export default function JobTrackDemo() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const addJob = () => {
    if (!company.trim() || !role.trim()) return;
    setJobs([...jobs, { id: Date.now(), company: company.trim(), role: role.trim(), status }]);
    setCompany("");
    setRole("");
    setStatus("Applied");
  };

  return (
    <div className="min-h-screen bg-black text-green-300 p-8">
      <h1 className="text-4xl font-bold mb-4">🧪 JobTrack API — Demo UI</h1>
      <p className="opacity-80 mb-6">Add job applications and track their progress.</p>

      <div className="bg-neutral-950 border border-green-700 p-4 rounded mb-4">
        <h2 className="text-xl font-bold mb-2">Add Job</h2>
        <input
          className="px-3 py-2 bg-neutral-900 border border-green-700 rounded text-white mb-2 w-full"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          className="px-3 py-2 bg-neutral-900 border border-green-700 rounded text-white mb-2 w-full"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <select
          className="px-3 py-2 bg-neutral-900 border border-green-700 rounded text-white mb-4 w-full"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Applied</option>
          <option>Interviewing</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <button
          onClick={addJob}
          className="px-4 py-2 bg-green-500 hover:bg-green-400 rounded text-black font-bold w-full"
        >
          Add Job
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">📄 Job Applications</h2>
        {jobs.length === 0 ? (
          <p className="opacity-50">No jobs added yet.</p>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="bg-neutral-950 p-4 rounded mb-2 border border-green-700">
              <p>
                <strong>{job.company}</strong> — {job.role}
              </p>
              <p className="text-sm opacity-70">{job.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
