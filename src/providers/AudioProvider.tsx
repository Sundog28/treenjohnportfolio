import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
type Ctx = { volume:number; muted:boolean; setVolume:(v:number)=>void; toggleMute:()=>void; clickBeep:()=>void }
const AudioCtx = createContext<Ctx|null>(null)

export const AudioProvider: React.FC<{children:React.ReactNode}> = ({children})=>{
  const ctxRef = useRef<AudioContext|null>(null)
  const [muted,setMuted] = useState<boolean>(()=>localStorage.getItem('muted')==='1')
  const [volume,setVolume] = useState<number>(()=>Number(localStorage.getItem('volume')||'0.2'))
  const gain = useRef<GainNode|null>(null)
  const humOsc = useRef<OscillatorNode|null>(null)

  useEffect(()=>{
    ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    if(!ctxRef.current) return
    const ctx = ctxRef.current
    gain.current = ctx.createGain(); gain.current.gain.value = muted ? 0 : volume; gain.current.connect(ctx.destination)
    humOsc.current = ctx.createOscillator(); humOsc.current.type='sawtooth'; humOsc.current.frequency.value=40; humOsc.current.connect(gain.current); humOsc.current.start()
    return ()=>{ try{ humOsc.current?.stop(); ctx.close() }catch{} }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(()=>{ try{ localStorage.setItem('muted',muted?'1':'0'); localStorage.setItem('volume',String(volume)) }catch{}; if(gain.current) gain.current.gain.value = muted?0:volume },[muted,volume])

  const clickBeep = useMemo(()=>()=>{ const ctx=ctxRef.current; if(!ctx||muted) return; const o=ctx.createOscillator(), g=ctx.createGain(); o.type='square'; o.frequency.value=880; g.gain.value=0.15; o.connect(g); g.connect(ctx.destination); o.start(); setTimeout(()=>{try{o.stop()}catch{}},120)},[muted])

  return <AudioCtx.Provider value={{ volume, muted, setVolume, toggleMute:()=>setMuted(m=>!m), clickBeep }}>{children}</AudioCtx.Provider>
}
export const useAudio=()=>{ const ctx=useContext(AudioCtx); if(!ctx) throw new Error('useAudio must be used within AudioProvider'); return ctx }
