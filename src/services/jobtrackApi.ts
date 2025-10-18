// src/services/jobtrackApi.ts

export type Job = {
  id?: number;
  company: string;
  role: string;
  status: string;
  notes?: string;
};

const BASE_URL = "https://jobtrackapi.onrender.com";

// 🔍 Fetch all jobs
export async function listJobs(): Promise<Job[]> {
  const res = await fetch(`${BASE_URL}/jobs`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to load jobs: ${res.status}`);
  }
  return res.json();
}

// ➕ Add a new job
export async function addJob(job: Job): Promise<Job> {
  const res = await fetch(`${BASE_URL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  if (!res.ok) {
    throw new Error(`Failed to add job: ${res.status}`);
  }
  return res.json();
}
