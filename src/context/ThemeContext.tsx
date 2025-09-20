import React,{createContext,useContext,useEffect,useState} from "react";
type Theme="auto"|"day"|"night";
const C=createContext<{theme:Theme;setTheme:(t:Theme)=>void}>({theme:"auto",setTheme:()=>{}});
export const ThemeProvider:React.FC<{children:React.ReactNode}>=({children})=>{
  const [theme,setTheme]=useState<Theme>(()=>(localStorage.getItem("theme") as Theme)||"auto");
  useEffect(()=>{
    const prefersDark=window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current=theme==="auto"?(prefersDark?"night":"day"):theme;
    document.documentElement.setAttribute("data-theme",current);
    localStorage.setItem("theme",theme);
  },[theme]);
  return <C.Provider value={{theme,setTheme}}>{children}</C.Provider>;
};
export const useTheme=()=>useContext(C);
