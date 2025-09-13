import { useEffect, useState } from 'react'
export default function BootScreen(){
  const [done,setDone]=useState(false)
  useEffect(()=>{ const t=setTimeout(()=>setDone(true),1400); return ()=>clearTimeout(t)},[])
  if(done) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black">
      <div className="text-center">
        <div className="text-neon-cyan text-2xl font-bold">BOOTING...</div>
        <div className="mt-4 w-64 h-2 bg-white/10 rounded overflow-hidden">
          <div className="h-full bg-neon-cyan animate-[pulse_1.4s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  )
}
