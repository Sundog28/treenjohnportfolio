import { Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Recruiter from "./pages/Recruiter";

export default function App(){
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/recruiter" element={<Recruiter/>}/>
      </Route>
    </Routes>
  );
}
