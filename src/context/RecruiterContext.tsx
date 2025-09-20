import React,{createContext,useContext,useState} from "react";
const C=createContext<{recruiterMode:boolean;setRecruiterMode:(v:boolean)=>void}>({recruiterMode:false,setRecruiterMode:()=>{}});
export const RecruiterProvider:React.FC<{children:React.ReactNode}>=({children})=>{
  const [recruiterMode,setRecruiterMode]=useState(false);
  return <C.Provider value={{recruiterMode,setRecruiterMode}}>{children}</C.Provider>;
};
export const useRecruiter=()=>useContext(C);
