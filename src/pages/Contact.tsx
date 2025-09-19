export default function Contact() {
  return (
    <section className="page">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p>Email: <a href="mailto:treenjohnm@gmail.com" className="link">treenjohnm@gmail.com</a></p>
      <form action="https://formspree.io/f/yourformid" method="POST" className="mt-4 space-y-3 max-w-md">
        <input type="text" name="name" placeholder="Your Name" className="border p-2 w-full rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="border p-2 w-full rounded" required />
        <textarea name="message" placeholder="Your Message" className="border p-2 w-full rounded" required />
        <div className="flex gap-2">
          <button type="submit" className="btn btn-primary">Send</button>
          <button
            type="button"
            className="btn"
            onClick={() => navigator.clipboard.writeText('treenjohnm@gmail.com')}>
            Copy Email
          </button>
        </div>
      </form>
      <div className="mt-4 space-x-4">
        <a className="link" href="https://github.com/Sundog28" target="_blank">GitHub</a>
        <a className="link" href="http://linkedin.com/in/john-treen-629a81159" target="_blank">LinkedIn</a>
        <a className="link" href="https://Sundog28.github.io" target="_blank">Portfolio</a>
      </div>
    </section>
  )
}
