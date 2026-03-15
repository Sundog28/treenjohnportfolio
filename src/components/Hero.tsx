export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-2xl border border-white/10 bg-[var(--panel)] p-8 shadow-lg">
        <p className="text-sm opacity-80">Full-Stack • ML • Go • React</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          John Treen
          <span className="block text-2xl font-semibold opacity-90 md:text-3xl">
            Full-Stack & ML Engineer
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-90">
          I build fast, accessible web apps, production APIs, and practical ML demos.
          Clean UI, reliable backend, and deployable results.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/projects"
            className="rounded-xl px-5 py-3 font-semibold bg-[var(--accent)] text-black hover:opacity-90 transition"
          >
            View Projects
          </a>

          <a
            href="/resume"
            className="rounded-xl px-5 py-3 font-semibold border border-white/15 hover:bg-white/5 transition"
          >
            Resume
          </a>

          <a
            href="/recruiter"
            className="rounded-xl px-5 py-3 font-semibold border border-white/15 hover:bg-white/5 transition"
          >
            Recruiter Mode
          </a>
        </div>
      </div>
    </section>
  );
}