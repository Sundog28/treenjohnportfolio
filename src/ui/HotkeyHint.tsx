import { useEffect, useState } from 'react'
export default function HotkeyHint(){
  const [open,setOpen]=useState(false)
  useEffect(()=>{ const on=(e:KeyboardEvent)=>{ if(e.key==='?') setOpen(o=>!o); if(e.key==='Escape') setOpen(false)}; addEventListener('keydown',on); return ()=>removeEventListener('keydown',on)},[])
  return (
    <div className="fixed right-4 bottom-4 z-40">
      <button onClick={()=>setOpen(o=>!o)} className="panel px-3 py-2 rounded-full" title="Keyboard shortcuts (press ?)">❔</button>
      {open && (
        <div className="mt-2 w-64 panel p-3 border border-white/15 bg-black/60 backdrop-blur-md">
          <div className="font-semibold mb-1">Shortcuts</div>
          <ul className="text-white/80 space-y-1 text-sm">
            <li><kbd className="px-1 bg-white/10 rounded border border-white/20">T</kbd> Toggle Day/Night</li>
            <li><kbd className="px-1 bg-white/10 rounded border border-white/20">M</kbd> Toggle Matrix</li>
            <li><kbd className="px-1 bg-white/10 rounded border border-white/20">?</kbd> This help</li>
          </ul>
          <button className="mt-3 w-full px-3 py-2 rounded bg-white/10 hover:bg-white/20 border border-white/15" onClick={()=>setOpen(false)}>Close</button>
        </div>
      )}
    </div>
  )
}
