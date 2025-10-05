import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ParticleBackground from "./components/ParticleBackground"

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground/>
      <NavBar/>
      <main className="flex-1 container mx-auto px-4 py-8 relative z-10">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
