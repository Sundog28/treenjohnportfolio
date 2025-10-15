import React, { useState } from "react";
export default function Contact(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [msg,setMsg] = useState("");
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form className="card max-w-xl">
        <label className="block mb-3">
          <span className="text-sm text-white/70">Name</span>
          <input className="mt-1 w-full px-3 py-2 rounded bg-white/10 border border-white/10" value={name} onChange={e=>setName(e.target.value)} />
        </label>
        <label className="block mb-3">
          <span className="text-sm text-white/70">Email</span>
          <input className="mt-1 w-full px-3 py-2 rounded bg-white/10 border border-white/10" value={email} onChange={e=>setEmail(e.target.value)} />
        </label>
        <label className="block mb-4">
          <span className="text-sm text-white/70">Message</span>
          <textarea className="mt-1 w-full px-3 py-2 rounded bg-white/10 border border-white/10 h-32" value={msg} onChange={e=>setMsg(e.target.value)} />
        </label>
        <button type="button" onClick={()=>alert("Thanks!")} className="btn btn-primary">Send</button>
      </form>
    </section>
  );
}
