import React from "react"

export default function ThemeToggle(){
  const [theme, setTheme] = React.useState<string>(()=>localStorage.getItem("jt-theme") || "day")
  React.useEffect(()=>{
    const attr = theme === "day" ? "" : theme
    if(attr) document.documentElement.setAttribute("data-theme", attr)
    else document.documentElement.removeAttribute("data-theme")
    localStorage.setItem("jt-theme", theme)
  },[theme])
  return (
    <select className="bg-transparent ring-1 ring-[var(--ring)] rounded px-2 py-1"
      value={theme} onChange={(e)=>setTheme(e.target.value)}>
      <option value="day">Gold (Day)</option>
      <option value="goth">Goth (Night)</option>
      <option value="matrix">Matrix</option>
    </select>
  )
}
