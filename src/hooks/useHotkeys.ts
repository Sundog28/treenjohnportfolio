import { useEffect } from 'react'
export function useHotkey(key:string, handler:(e:KeyboardEvent)=>void){
  useEffect(()=>{ const on=(e:KeyboardEvent)=>{ if(e.key.toLowerCase()===key.toLowerCase()) handler(e) }; addEventListener('keydown',on); return ()=>removeEventListener('keydown',on) },[key,handler])
}
