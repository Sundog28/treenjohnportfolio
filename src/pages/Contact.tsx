import React, { useState } from "react";
export default function Contact(){
  const [sent, setSent] = useState(false);
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      {!sent ? (
        <form className="card max-w-xl" method="POST" action="https://formsubmit.co/treenjohnm@gmail.com" onSubmit={()=>setSent(true)}>
          <input type="hidden" name="_subject" value="Portfolio message" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <label className="block mb-3"><span className="text-sm text-white/70">Name</span>
            <input required name="name" className="mt-1 w-full px-3 py-2 rounded bg-white/10 border border-white/10"/>
          </label>
          <label className="block mb-3"><span className="text-sm text-white/70">Email</span>
            <input required type="email" name="email" className="mt-1 w-full px-3 py-2 rounded bg白/10 border border-white/10"/>
          </label>
          <label className="block mb-4"><span className="text-sm text-white/70">Message</span>
            <textarea required name="message" className="mt-1 w-full px-3 py-2 rounded bg-white/10 border border-white/10 h-32"/>
          </label>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      ) : <div className="card max-w-xl">Thanks — I’ll reply soon.</div>}
    </section>
  );
}
