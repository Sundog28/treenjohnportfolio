import { useMemo, useState } from 'react'
const FORMSPREE_ACTION = "https://formspree.io/f/xblawwqp"

export default function Contact() {
  const [message, setMessage] = useState(""), [name, setName] = useState(""), [email, setEmail] = useState("")
  const [gotcha, setGotcha] = useState(""), [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<string|null>(null), [error, setError] = useState<string|null>(null)
  const charCount = message.length, maxChars = 2000, tooLong = charCount > maxChars

  const onSubmit = useMemo(()=> {
    return async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault(); if(submitting) return; setSuccess(null); setError(null)
      if (tooLong) { setError(`Message too long (${charCount}/${maxChars}).`); return }
      if (!name.trim()||!email.trim()||!message.trim()) { setError('Please fill out all fields.'); return }
      if (gotcha.trim().length>0) { setSuccess('Thanks! (filtered)'); return }
      setSubmitting(true)
      try{
        const res = await fetch(FORMSPREE_ACTION, { method:'POST', headers:{Accept:'application/json','Content-Type':'application/json'}, body: JSON.stringify({ name,email,message,_subject:'Portfolio contact' }) })
        if(res.ok){ setSuccess('✅ Message sent — thanks! I’ll get back to you soon.'); setName(''); setEmail(''); setMessage('') }
        else { const data = await res.json().catch(()=>({})); setError((data as any)?.error || `Form error (HTTP ${res.status}).`) }
      }catch{ setError('Network error. Please try again.') } finally{ setSubmitting(false) }
    }
  }, [submitting, name, email, message, tooLong, charCount, gotcha])

  return (
    <section className="grid md:grid-cols-2 gap-6">
      <form onSubmit={onSubmit} className="panel p-6 space-y-3" noValidate>
        <h3 className="text-lg font-semibold">Contact</h3>
        {success && <div className="rounded-md border border-green-500/40 bg-green-500/10 text-green-200 px-3 py-2">{success}</div>}
        {error && <div className="rounded-md border border-red-500/40 bg-red-500/10 text-red-200 px-3 py-2">⚠️ {error}</div>}
        <label className="block text-sm">Name
          <input name="name" required value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full px-3 py-2 rounded bg-white/10 border border-white/20" placeholder="Jane Doe" />
        </label>
        <label className="block text-sm">Email
          <input name="email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full px-3 py-2 rounded bg-white/10 border border-white/20" placeholder="you@example.com" />
        </label>
        <label className="block text-sm">Message
          <textarea name="message" required rows={6} value={message} onChange={e=>setMessage(e.target.value)} className={`mt-1 w-full px-3 py-2 rounded bg-white/10 border ${tooLong?'border-red-400/70':'border-white/20'}`} placeholder="What's up?" maxLength={10000} />
          <div className={`mt-1 text-xs ${tooLong?'text-red-300':'text-white/60'}`}>{charCount}/{maxChars} {tooLong && '— too long'}</div>
        </label>
        <div className="hidden" aria-hidden="true"><label>Leave this field empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={gotcha} onChange={e=>setGotcha(e.target.value)} />
        </label></div>
        <button disabled={submitting} className="px-4 py-2 rounded bg-neon-cyan/20 hover:bg-neon-cyan/30 border border-neon-cyan/40 disabled:opacity-60">{submitting?'Sending…':'Send'}</button>
      </form>
      <div className="panel p-6 space-y-3">
        <h3 className="text-lg font-semibold">Links</h3>
        <ul className="space-y-2">
          <li><a className="text-neon-cyan hover:underline" href="https://github.com/Sundog28" target="_blank">GitHub</a></li>
          <li><a className="text-neon-cyan hover:underline" href="https://www.linkedin.com/in/john-treen-629a81159/" target="_blank">LinkedIn</a></li>
          <li><a className="text-neon-cyan hover:underline" href="mailto:treenjohnm@gmail.com">treenjohnm@gmail.com</a></li>
        </ul>
      </div>
    </section>
  )
}
