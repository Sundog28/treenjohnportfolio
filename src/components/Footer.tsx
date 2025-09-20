import React from "react";
import { Link } from "react-router-dom";
export default function Footer(){
  return (
    <footer className="border-t border-white/10 bg-[var(--bg)]/70 backdrop-blur relative z-10">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-[var(--text)]/70">© {new Date().getFullYear()} John Treen</p>
        <div className="flex gap-4 text-sm">
          <a href="https://github.com/Sundog28" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/john-treen-629a81159" target="_blank" rel="noreferrer">LinkedIn</a>
          <Link to="/downloads">Downloads</Link>
        </div>
      </div>
    </footer>
  );
}
