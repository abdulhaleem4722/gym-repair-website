import { useState } from 'react'

const field = 'mt-1 w-full rounded border border-slate-400 bg-white px-3 py-2'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}
      className="rounded-md border-2 border-ink bg-white p-6">
      <h2 className="mb-3 font-display text-3xl font-bold">Request a service call</h2>
      <label className="mt-3 block font-semibold">Name<input required className={field} /></label>
      <label className="mt-3 block font-semibold">Phone<input type="tel" required className={field} /></label>
      <label className="mt-3 block font-semibold">Email<input type="email" className={field} /></label>
      <label className="mt-3 block font-semibold">Equipment
        <select className={field}>
          <option>Treadmill</option><option>Elliptical</option><option>Exercise bike</option>
          <option>Cable / strength machine</option><option>Other</option>
        </select>
      </label>
      <label className="mt-3 block font-semibold">What is it doing?
        <textarea className={`${field} min-h-24`} placeholder="Error codes, noises, when it started" />
      </label>
      <button className="mt-5 w-full rounded bg-ink py-3 font-display text-2xl font-bold text-white hover:bg-steel">
        Request service
      </button>
      {sent && <p role="status" className="mt-3 font-semibold text-steel">Request received. We will call you to book a visit.</p>}
    </form>
  )
}