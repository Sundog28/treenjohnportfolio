import React, { useEffect, useState } from "react";

type Props = { username: string; repos: string[] };

type User = { followers: number; public_repos: number };
type Repo = { name: string; stargazers_count: number; pushed_at: string };

export default function GitHubStats({ username, repos }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [repoData, setRepoData] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const [u, allRepos] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`).then(r => r.json()),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`).then(r => r.json()),
        ]);
        setUser({ followers: u.followers ?? 0, public_repos: u.public_repos ?? 0 });
        const wanted = new Set(repos.map(r => r.toLowerCase()));
        const filtered = (Array.isArray(allRepos) ? allRepos : []).filter((r: any) =>
          wanted.has(String(r.name || "").toLowerCase())
        );
        setRepoData(filtered);
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [username, repos]);

  if (loading) return <div className="opacity-70">Loading GitHub activity…</div>;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card">
        <div className="label">Followers</div>
        <div className="value">{user?.followers ?? 0}</div>
      </div>
      <div className="card">
        <div className="label">Public Repos</div>
        <div className="value">{user?.public_repos ?? 0}</div>
      </div>
      <div className="card md:col-span-1 md:hidden"></div>

      <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {repoData.map((r) => (
          <a key={r.name} className="repo" href={`https://github.com/${username}/${r.name}`} target="_blank" rel="noreferrer">
            <div className="font-semibold">{r.name}</div>
            <div className="text-sm opacity-80">⭐ {r.stargazers_count} • Updated {new Date(r.pushed_at).toLocaleDateString()}</div>
          </a>
        ))}
      </div>

      <style>{`
        .card{
          border:1px solid rgba(255,255,255,.15);
          border-radius:14px;padding:14px;background:rgba(0,0,0,.3);
          box-shadow: inset 0 0 30px rgba(0,255,255,.05);
        }
        .label{font-size:12px;opacity:.7}
        .value{font-size:28px;font-weight:800}
        .repo{
          display:block;border:1px solid rgba(255,255,255,.15);
          border-radius:14px;padding:12px;background:rgba(0,0,0,.25);
          transition: transform .12s ease, box-shadow .12s ease;
        }
        .repo:hover{ transform: translateY(-2px); box-shadow: 0 0 18px rgba(0,255,255,.18) }
      `}</style>
    </div>
  );
}
