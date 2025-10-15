import React from "react";
export default function Home(){
  return (
    <section className="relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Hi, I'm <span className="text-yellow-300">John Treen</span>
      </h1>
      <p className="text-white/80 max-w-2xl">
        Full-Stack & ML Engineer. I build clean React frontends, robust APIs, and pragmatic ML demos.
        Explore my <a className="text-yellow-300 underline" href="/projects">projects</a>, check the <a className="text-yellow-300 underline" href="/resume">resume</a>, or get in <a className="text-yellow-300 underline" href="/contact">contact</a>.
      </p>
    </section>
  );
}
