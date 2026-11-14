import { Link, useLocation } from 'react-router-dom'
import { services, brands } from '../data'

export default function Services() {
  const { search } = useLocation()
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-6xl font-bold">Our services</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(([t, d]) => (
          <div key={t} className="rounded-md border-2 border-ink bg-white p-6">
            <h2 className="mb-2 font-display text-2xl font-bold">{t}</h2>
            <p className="text-slate-600">{d}</p>
          </div>
        ))}
      </div>
      <h2 className="mb-3 mt-14 font-display text-4xl font-bold">Brands we service</h2>
      <div className="flex flex-wrap gap-x-8 gap-y-2 font-display text-2xl font-semibold text-steel">
        {brands.map((b) => <span key={b}>{b}</span>)}
      </div>
      <Link to={{ pathname: '/contact', search }} className="mt-10 inline-block rounded bg-ink px-6 py-3 font-semibold text-white">
        Request a service call
      </Link>
    </div>
  )
}