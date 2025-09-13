import { useEffect, useRef } from 'react'
export default function Parallax({children}:{children:React.ReactNode}){
  const ref=useRef<HTMLDivElement|null>(null)
  useEffect(()=>{ const el=ref.current!; const on=(e:MouseEvent)=>{ const rx=(e.clientX/innerWidth-.5)*6, ry=(e.clientY/innerHeight-.5)*-6; el.style.transform=`rotateY(${rx}deg) rotateX(${ry}deg)` }; addEventListener('mousemove',on); return ()=>removeEventListener('mousemove',on) },[])
  return <div ref={ref} className="transition-transform duration-300">{children}</div>
}
