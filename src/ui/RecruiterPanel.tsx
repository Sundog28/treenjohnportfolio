import React, { useMemo } from "react";
import { useTheme } from "../providers/ThemeProvider";

const links = {
  resumeFull: "/resume/resume_full.pdf",
  resumeMini: "/resume/resume_mini.pdf",
  github: "https://github.com/Sundog28",
  linkedin: "https://www.linkedin.com/in/john-treen-629a81159/",
  email: "treenjohnm@gmail.com",
};

export default function RecruiterPanel() {
  const { theme } = useTheme();

  const glow = useMemo(
    () =>
      theme === "dark"
        ? "border-green-500 shadow-[0_0_20px_3px_rgba(0,255,0,0.6)]"
        : "border-cyan-400 shadow-[0_0_20px_3px_rgba(0,255,255,0.5)]",
    [theme]
  );

  const mailto = `mailto:${links.email}?subject=Interested in interviewing John Treen&body=Hi John,%0D%0A%0D%0AWe'd love to speak with you about a role.`;

  return (
    <aside
      className={`fixed right-4 bottom-4 z-50 rounded-xl border-2 ${glow} backdrop-blur
                  bg-black/50 text-white p-3 flex flex-col gap-2 w-[220px]`}
      aria-label="Recruiter quick actions"
    >
      <div className="text-sm font-semibold opacity-90 tracking-wide">Recruiter Toolkit</div>
      <div className="grid grid-cols-2 gap-2">
        <a className="btn" href={links.resumeFull} download>Full PDF</a>
        <a className="btn" href={links.resumeMini} download>Mini PDF</a>
        <a className="btn" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="col-span-2 btn" href={mailto}>Email Me</a>
      </div>
      <style>{`
        .btn {
          display:inline-flex;align-items:center;justify-content:center;
          padding:8px 10px;border-radius:10px;font-size:12px;font-weight:600;
          background: linear-gradient(90deg, rgba(0,255,255,.15), rgba(128,0,255,.15));
          border:1px solid rgba(255,255,255,.15);
          transition: transform .12s ease, box-shadow .12s ease, background .2s ease;
          text-decoration:none;color:white;
        }
        .btn:hover { transform: translateY(-1px); box-shadow: 0 0 14px rgba(0,255,255,.25); }
      `}</style>
    </aside>
  );
}
