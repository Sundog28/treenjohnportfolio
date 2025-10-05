import React from "react"
import { NavLink } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

export default function NavBar(){
  const link = "px-3 py-2 rounded hover:bg-white/10"
  const active = ({isActive}:{isActive:boolean}) => isActive ? link+" bg-white/10" : link
  return (
    <nav className="sticky top-0 z-20 backdrop-blur bg-black/30 text-sm">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <div className="font-bold text-lg">JT ▸ Portfolio</div>
        <div className="flex gap-2">
          <NavLink to="/" className={active}>Home</NavLink>
          <NavLink to="/skills" className={active}>Skills</NavLink>
          <NavLink to="/projects" className={active}>Projects</NavLink>
          <NavLink to="/resume" className={active}>Resume</NavLink>
          <NavLink to="/contact" className={active}>Contact</NavLink>
          <NavLink to="/recruiter" className={active}>Recruiter</NavLink>
          <NavLink to="/downloads" className={active}>Downloads</NavLink>
        </div>
        <div className="ml-auto"><ThemeToggle/></div>
      </div>
    </nav>
  )
}
