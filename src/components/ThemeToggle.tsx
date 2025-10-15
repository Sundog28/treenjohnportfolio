import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, cycle } = useTheme();
  const label = theme === "gold" ? "Gold" : theme === "goth" ? "Goth" : "Matrix";
  return (
    <button
      onClick={cycle}
      className="px-3 py-2 rounded bg-white/10 hover:bg-white/15 border border-white/10"
      title="Cycle theme"
    >
      Theme: {label}
    </button>
  );
}
