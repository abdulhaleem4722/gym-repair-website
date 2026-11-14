import { useState } from 'react'

const field = 'mt-1 w-full rounded border border-slate-400 bg-white px-3 py-2'

export default function Hero({ city }) {
  const [sent, setSent] = useState(false)

  return (
    <section className="py-12">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-[1.15fr_.85fr]">
        <div>
          <h1 className="font-display text-6xl font-bold leading-none md:text-8xl">
            Treadmill down? We fix it fast.
          </h1>
          <p className="mt-5 max-w-md text-xl text-slate-600">
            Repair and service for gyms, studios, and home gyms in {city} and nearby.
          </p>
          <div className="mt-7 h-2.5 max-w-xs bg-[repeating-linear-gradient(135deg,#F2C230_0_14px,#16212B_14px_28px)]" />
        </div>

        <form
          id="book"
          onSubmit={(e) => { e.preventDefault(); setSent(true) }}
          className="rounded-md border-2 border-ink bg-white p-6"
        >
          <h2 className="mb-3 font-display text-3xl font-bold">Request a service call</h2>
          <label className="mt-3 block font-semibold">Name
            <input required className={field} />
          </label>
          <label className="mt-3 block font-semibold">Phone
            <input type="tel" required className={field} />
          </label>
          <label className="mt-3 block font-semibold">Equipment
            <select className={field}>
              <option>Treadmill</option>
              <option>Elliptical</option>
              <option>Exercise bike</option>
              <option>Cable / strength machine</option>
              <option>Other</option>
            </select>
          </label>
          <label className="mt-3 block font-semibold">What is it doing?
            <textarea className={`${field} min-h-20`} placeholder="Error codes, noises, when it started" />
          </label>
          <button className="mt-5 w-full rounded bg-ink py-3 font-display text-2xl font-bold text-white hover:bg-steel">
            Request service
          </button>
          {sent && (
            <p role="status" className="mt-3 font-semibold text-steel">
              Request received. We will call you to book a visit.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}