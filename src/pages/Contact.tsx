import React from "react";
import CyberBackground from "../components/CyberBackground";

export default function Contact() {
  return (
    <section className="relative overflow-hidden">
      <CyberBackground />

      <div className="page">
        <div className="glow-frame fade-in-up">
          <div className="glow-inner card p-10">
            <p className="text-sm tracking-widest uppercase text-white/60">Contact</p>
            <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Let’s Connect</h1>

            <p className="mt-3 max-w-2xl text-white/75">
              I’m open to remote junior and entry-level full-stack, backend, and ML-adjacent software roles.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="card p-6">
                <h2 className="text-xl font-semibold">Direct Contact</h2>
                <div className="mt-4 space-y-3 text-white/75">
                  <p>Email: <a href="mailto:treenjohnm@gmail.com">treenjohnm@gmail.com</a></p>
                  <p>GitHub: <a href="https://github.com/Sundog28" target="_blank" rel="noreferrer">github.com/Sundog28</a></p>
                  <p>LinkedIn: <a href="https://www.linkedin.com/in/john-treen-629a81159/" target="_blank" rel="noreferrer">linkedin.com/in/john-treen-629a81159</a></p>
                </div>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-semibold">Status</h2>
                <div className="mt-4 space-y-2 text-white/75">
                  <p>• Open to remote roles</p>
                  <p>• Junior / entry-level full-stack opportunities</p>
                  <p>• Backend roles with Go are especially interesting</p>
                  <p>• Available immediately</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="mailto:treenjohnm@gmail.com">Email Me</a>
              <a className="btn" href="https://github.com/Sundog28" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href="https://www.linkedin.com/in/john-treen-629a81159/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}