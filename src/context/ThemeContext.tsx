import React, { createContext, useContext, useEffect, useState } from "react";
type Theme = "gold" | "goth" | "matrix";
type Ctx = { theme: Theme; setTheme: (t: Theme) => void; cycle: () => void };
const C = createContext<Ctx>({ theme: "gold", setTheme: () => {}, cycle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => (localStorage.getItem("theme") as Theme) || "gold");
  const setTheme = (t: Theme) => { setThemeState(t); localStorage.setItem("theme", t); };
  const cycle = () => setTheme(theme === "gold" ? "goth" : theme === "goth" ? "matrix" : "gold");

  useEffect(() => {
    document.body.classList.remove("theme-gold","theme-goth","theme-matrix");
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return <C.Provider value={{ theme, setTheme, cycle }}>{children}</C.Provider>;
}
export const useTheme = () => useContext(C);
