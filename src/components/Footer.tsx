import React from "react"

export default function Footer(){
  return (
    <footer className="relative z-10 mt-12 border-t border-white/10">
      <div className="container mx-auto px-4 py-6 text-sm text-white/70">
        © {new Date().getFullYear()} John Treen — treenjohnm@gmail.com — LinkedIn: /in/john-treen-629a81159
      </div>
    </footer>
  )
}
