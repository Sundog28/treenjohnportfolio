import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import RecruiterBadge from "./RecruiterBadge";
const NavBar:React.FC=()=> {
  const active=({isActive}:{isActive:boolean})=>"px-3 py-2 rounded-md "+(isActive?"bg-card text-white ring-1 ring-[var(--ring)]":"text-[var(--text)]/80 hover:text-[var(--text)]");
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-[var(--bg)]/70 border-b border-white/5">
      <nav className="container mx-auto px-4 py-3 flex items-center gap-3">
        <Link to="/" className="font-semibold text-lg">John Treen</Link>
        <div className="hidden md:flex items-center gap-1">
          <NavLink className={active} to="/">Home</NavLink>
          <NavLink className={active} to="/skills">Skills</NavLink>
          <NavLink className={active} to="/projects">Projects</NavLink>
          <NavLink className={active} to="/resume">Résumé</NavLink>
          <NavLink className={active} to="/contact">Contact</NavLink>
          <NavLink className={active} to="/downloads">Downloads</NavLink>
          <NavLink className={active} to="/recruiter">Recruiter</NavLink>
        </div>
        <div className="ml-auto flex gap-2"><RecruiterBadge/><ThemeToggle/></div>
      </nav>
    </header>
  );
}
export default NavBar;
