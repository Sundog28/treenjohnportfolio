import React, { createContext, useContext, useLayoutEffect, useState } from 'react'
type Theme = 'day'|'night'
type Ctx = { theme:Theme; setTheme:(t:Theme)=>void; toggleTheme:()=>void; matrix:boolean; toggleMatrix:()=>void }
const ThemeCtx = createContext<Ctx|null>(null)

export const ThemeProvider: React.FC<{children:React.ReactNode}> = ({children})=>{
  const initialTheme = (():Theme=>{ try{ return (localStorage.getItem('theme') as Theme)||'day' }catch{ return 'day' } })()
  const initialMatrix = (():boolean=>{ try{ return localStorage.getItem('matrix')==='1' }catch{ return false } })()
  const [theme,setTheme] = useState<Theme>(initialTheme)
  const [matrix,setMatrix] = useState<boolean>(initialMatrix)

  useLayoutEffect(()=>{ try{ localStorage.setItem('theme',theme) }catch{}; const html=document.documentElement; if(theme==='night') html.classList.add('dark'); else html.classList.remove('dark') },[theme])
  useLayoutEffect(()=>{ try{ localStorage.setItem('matrix',matrix?'1':'0') }catch{}; document.body.dataset.matrix = matrix?'true':'false' },[matrix])

  return <ThemeCtx.Provider value={{theme,setTheme, toggleTheme:()=>setTheme(t=>t==='day'?'night':'day'), matrix, toggleMatrix:()=>setMatrix(m=>!m)}}>{children}</ThemeCtx.Provider>
}
export const useTheme=()=>{ const ctx=useContext(ThemeCtx); if(!ctx) throw new Error('useTheme must be used within ThemeProvider'); return ctx }
