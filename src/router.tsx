import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Recruiter from "./pages/Recruiter";
import Downloads from "./pages/Downloads";
import NotFound from "./pages/NotFound";

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/recruiter" element={<Recruiter/>}/>
      <Route path="/downloads" element={<Downloads/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}
