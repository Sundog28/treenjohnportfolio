import React from "react";
export default function Home(){
  return (
    <section>
      <h1 className="text-4xl font-extrabold mb-3">Hi, I’m <span style={{color:"var(--accent)"}}>John Treen</span></h1>
      <p className="text-white/80 max-w-2xl">
        Full-Stack & ML Engineer. I build clean React frontends, robust APIs, and pragmatic ML demos.
        Explore my <a href="/projects">projects</a>, check the <a href="/resume">resume</a>, or get in <a href="/contact">contact</a>.
      </p>
    </section>
  );
}
