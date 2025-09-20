import React,{useState} from "react";
import ResumeMini from "../resume/ResumeMini";
import ResumeFull from "../resume/ResumeFull";
import QR from "../components/QR";
export default function Resume(){
  const [view,setView]=useState<"mini"|"full">("mini");
  const miniPDF="/resume/John_Treen_Ultimate_Resume_Mini.pdf";
  const fullPDF="/resume/John_Treen_Ultimate_Resume_Full.pdf";
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Résumé</h2>
        <QR text={`https://treenjohnportfoliocom.vercel.app${fullPDF}`} label="Scan Full PDF"/>
      </div>
      <div className="flex gap-2 mb-4">
        <button className={`btn ${view==="mini"?"btn-primary":""}`} onClick={()=>setView("mini")}>Mini</button>
        <button className={`btn ${view==="full"?"btn-primary":""}`} onClick={()=>setView("full")}>Full</button>
      </div>
      <div className="card">{view==="mini"?<ResumeMini/>:<ResumeFull/>}</div>
      <div className="mt-6 flex gap-2">
        <a className="btn btn-primary" href={miniPDF} download>Mini (PDF)</a>
        <a className="btn" href={fullPDF} download>Full (PDF)</a>
      </div>
    </div>
  );
}
