import React from "react";
import { useTheme } from "../context/ThemeContext";
export default function ThemeToggle(){
  const { theme, cycle } = useTheme();
  return (
    <button onClick={cycle} className="px-3 py-2 rounded border border-white/10 hover:bg-white/10">
      Theme: {theme === "gold" ? "Gold" : theme === "goth" ? "Goth" : "Matrix"}
    </button>
  );
}
