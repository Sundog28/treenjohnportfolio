// src/services/jobtrackApi.ts
export type Job = {
  id?: number;
  company: string;
  role: string;
  status: string;
  notes?: string;
};

const BASE =
  import.meta.env.VITE_JOBTRACK_API_URL?.replace(/\/+$/, '') ||
  'https://jobtrack-api.onrender.com';

async function json<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`${res.status} ${res.statusText} ${text}`.trim());
  }
  return res.json() as Promise<T>;
}

export async function health(): Promise<{ status: string }> {
  const res = await fetch(`${BASE}/healthz`, { cache: 'no-store' });
  return json(res);
}

export async function listJobs(): Promise<Job[]> {
  const res = await fetch(`${BASE}/jobs`, { cache: 'no-store' });
  return json(res);
}

export async function addJob(job: Job): Promise<Job> {
  const res = await fetch(`${BASE}/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(job),
  });
  return json(res);
}

export const JobTrackApi = { BASE, health, listJobs, addJob };
