// src/pages/JobTrackDemo.tsx
import React, { useEffect, useState, useMemo } from "react";
import JobForm from "../components/jobtrack/JobForm";
import JobList from "../components/jobtrack/JobList";
import { addJob, listJobs, type Job } from "../services/jobtrackApi";

const PRELOAD: Job[] = [
  { company: "Google", role: "Backend Engineer", status: "Applied", notes: "Referred" },
  { company: "Netflix", role: "Platform Engineer", status: "Phone Screen", notes: "Recruiter call completed" },
  { company: "AWS", role: "SDE II", status: "Interviewing", notes: "System design upcoming" },
];

export default function JobTrackDemo() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const preloadedOnce = useMemo(() => ({ value: false }), []);

  async function refresh() {
    setLoading(true);
    try {
      const data = await listJobs();

      // Preload examples if API is empty
      if (!preloadedOnce.value && data.length === 0) {
        preloadedOnce.value = true;
        for (const j of PRELOAD) await addJob(j);
        setJobs(await listJobs());
      } else {
        setJobs(data);
      }
      setError(null);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load jobs");
    } finally {
      setLoading(false);
    }
  }

  async function handleAdd(job: Job) {
    await addJob(job);
    await refresh();
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold mb-1">JobTrack API — Live Demo</h1>
        <p className="opacity-80">
          Add and track real job applications — powered by my Go backend on Render.
        </p>
      </header>

      <JobForm onSubmit={handleAdd} />
      
      {loading ? (
        <p className="opacity-70">Loading…</p>
      ) : error ? (
        <p className="text-red-400">Error: {error}</p>
      ) : (
        <JobList jobs={jobs} />
      )}

      <p className="text-xs opacity-60">
        ⚠ The free Render tier may sleep. If slow, wait a moment or refresh.
      </p>
    </section>
  );
}
