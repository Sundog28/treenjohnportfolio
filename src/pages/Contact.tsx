import React,{useState} from "react";
export default function Contact(){
  const [sent,setSent]=useState(false);
  const onSubmit:React.FormEventHandler<HTMLFormElement>=(e)=>{
    e.preventDefault(); const d=new FormData(e.currentTarget);
    const subject=encodeURIComponent(`[Portfolio] ${d.get("subject")}`);
    const body=encodeURIComponent(`From: ${d.get("name")} <${d.get("email")}>\n\n${d.get("message")}`);
    window.location.href=`mailto:treenjohnm@gmail.com?subject=${subject}&body=${body}`; setSent(true);
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <form onSubmit={onSubmit} className="card space-y-3 max-w-xl">
        <input name="name" required placeholder="Your name" className="px-3 py-2 rounded bg-card ring-1 ring-white/10 w-full"/>
        <input name="email" required type="email" placeholder="you@example.com" className="px-3 py-2 rounded bg-card ring-1 ring-white/10 w-full"/>
        <input name="subject" required placeholder="Subject" className="px-3 py-2 rounded bg-card ring-1 ring-white/10 w-full"/>
        <textarea name="message" required rows={6} placeholder="Message..." className="px-3 py-2 rounded bg-card ring-1 ring-white/10 w-full"></textarea>
        <button className="btn btn-primary" type="submit">Send</button>
        {sent && <p className="text-xs text-[var(--text)]/70">Your email client should open. If not, email me at treenjohnm@gmail.com.</p>}
      </form>
    </div>
  );
}
