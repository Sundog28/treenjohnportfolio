import React from "react";
import { useTheme } from "../context/ThemeContext";
export default function ThemeToggle(){
  const { theme, setTheme } = useTheme();
  const next = theme==="auto"?"day":theme==="day"?"night":"auto";
  return <button className="btn" onClick={()=>setTheme(next)}>🌓 Theme: {theme}</button>;
}
