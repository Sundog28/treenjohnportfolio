import { useAudio } from '../providers/AudioProvider'
export default function SoundControls(){
  const { muted, toggleMute, volume, setVolume } = useAudio()
  return (
    <div className="flex items-center gap-2">
      <button onClick={toggleMute} className="px-2 py-1 rounded bg-white/10 border border-white/15">{muted?'🔇':'🔊'}</button>
      <input title="volume" type="range" min="0" max="1" step="0.01" value={volume} onChange={(e)=>setVolume(Number(e.target.value))}/>
    </div>
  )
}
