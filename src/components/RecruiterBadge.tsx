import React from "react";
import { useRecruiter } from "../context/RecruiterContext";
export default function RecruiterBadge(){
  const { recruiterMode, setRecruiterMode } = useRecruiter();
  return <button className={`btn ${recruiterMode?"btn-primary":""}`} onClick={()=>setRecruiterMode(!recruiterMode)}>🧲 {recruiterMode?"Recruiter: ON":"Recruiter: OFF"}</button>;
}
