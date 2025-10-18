// src/pages/JobTrackDemo.tsx
import React, { useEffect, useState } from 'react';
import HudFrame from '../components/hud/HudFrame';
import JobForm from '../components/jobtrack/JobForm';
import JobList from '../components/jobtrack/JobList';
import { JobTrackApi, Job } from '../services/jobtrackApi';

export default function JobTrackDemo() {
  const [ok, setOk] = useState<boolean | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  async function refresh(){
    try{ setLoading(true);
      const data = await JobTrackApi.listJobs(); setJobs(data); setErr(null);
    }catch(e:any){ setErr(e.message||'Failed to fetch jobs'); }
    finally{ setLoading(false); }
  }

  useEffect(()=>{ (async()=>{
    try{ const h=await JobTrackApi.health(); setOk(h.status==="ok"); }catch{ setOk(false); }
    await refresh();
  })(); },[]);

  return (
    <div className="space-y-6">
      <div className="text-sm text-emerald-300/80">
        API: <code className="rounded bg-neutral-900/70 px-2 py-0.5 ring-1 ring-emerald-500/30">{JobTrackApi.BASE}</code>{" "}
        <span className={ok===null?"opacity-70":ok?"text-emerald-400":"text-red-300"}>
          {ok===null?"• checking…": ok?"• healthy":"• unavailable"}
        </span>
      </div>

      <HudFrame title="JobTrack — Interactive Demo" accent="emerald">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <div className="text-emerald-200/90">Add Job</div>
            <JobForm onAdded={()=>refresh()}/>
          </div>
          <div className="space-y-3">
            <div className="text-emerald-200/90">Latest Jobs</div>
            {err && <div className="rounded-md bg-red-900/40 p-3 text-red-200 ring-1 ring-red-400/40">{err}</div>}
            <JobList jobs={jobs} loading={loading}/>
          </div>
        </div>
      </HudFrame>
    </div>
  );
}
