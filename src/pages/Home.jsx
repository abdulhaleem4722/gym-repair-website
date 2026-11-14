import { Link, useLocation } from 'react-router-dom'
import useShopParams from '../hooks/useShopParams'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import Gallery from '../components/Gallery'
import { services, brands, stats, heroImage } from '../data'

export default function Home() {
  const { city, phone } = useShopParams()
  const { search } = useLocation()
  const to = (pathname) => ({ pathname, search })
  const delay = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img src={heroImage} alt=""
          onError={(e) => { e.currentTarget.style.display = 'none' }}
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50 motion-safe:animate-slow-zoom" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute -right-24 top-10 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:py-32 lg:grid-cols-[1.3fr_.7fr]">
          <div>
            <span style={delay(0)}
              className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1 text-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" /> Serving {city}
            </span>
            <h1 style={delay(120)}
              className="mt-5 animate-fade-up font-display text-6xl font-bold leading-[0.95] md:text-8xl">
              Treadmill down?<br /><span className="text-accent">We fix it fast.</span>
            </h1>
            <p style={delay(240)} className="mt-6 max-w-xl animate-fade-up text-xl text-slate-300">
              Professional repair and service for gyms, studios, and home gyms in {city} and nearby.
            </p>
            <div style={delay(360)} className="mt-9 flex animate-fade-up flex-wrap gap-3">
              <Link to={to('/contact')}
                className="rounded bg-accent px-7 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30">
                Request a service call
              </Link>
              <Link to={to('/services')}
                className="rounded border-2 border-white/80 px-7 py-3.5 font-semibold transition hover:bg-white hover:text-ink">
                See services
              </Link>
            </div>
          </div>

          <div style={delay(480)}
            className="animate-fade-up rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-md">
            <p className="text-sm uppercase tracking-widest text-slate-300">Call for a quote</p>
            <p className="mt-1 font-display text-4xl font-bold">{phone}</p>
            <ul className="mt-5 space-y-2 text-slate-200">
              {['Clear quotes before work starts', 'On-site repair at your gym or home', 'Every machine tested before we leave'].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-xs font-bold text-ink">&#10003;</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-white/20 pt-4 text-sm text-slate-300">Mon to Fri 8 am to 6 pm, Sat 9 am to 2 pm</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-accent">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
          {stats.map(([label, n, suffix]) => (
            <div key={label} className="text-center">
              <div className="font-display text-5xl font-bold"><CountUp to={n} suffix={suffix} /></div>
              <div className="text-sm font-semibold uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="font-semibold uppercase tracking-widest text-steel">What we do</p>
            <h2 className="mb-10 font-display text-5xl font-bold md:text-6xl">Repairs that keep you running</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map(([t, d], i) => (
              <Reveal key={t} delay={i * 120}>
                <div className="h-full rounded-xl border border-plate bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-ink hover:shadow-xl">
                  <div className="font-display text-5xl font-bold text-accent">0{i + 1}</div>
                  <h3 className="mb-2 mt-2 font-display text-3xl font-bold">{t}</h3>
                  <p className="text-slate-600">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link to={to('/services')} className="mt-8 inline-block font-semibold underline underline-offset-4">View all services</Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal><h2 className="mb-12 font-display text-5xl font-bold md:text-6xl">How it works</h2></Reveal>
          <div className="grid gap-10 md:grid-cols-3">
            {[['Send your request', 'Tell us the machine and the problem by phone or form.'],
              ['We confirm a visit', 'We call back and book a time that suits you.'],
              ['Fixed and tested', 'The technician repairs on site and tests the machine.']].map(([t, d], i) => (
              <Reveal key={t} delay={i * 140}>
                <div className="grid h-14 w-14 place-items-center rounded-full bg-accent font-display text-3xl font-bold text-ink">{i + 1}</div>
                <h3 className="mt-4 font-display text-3xl font-bold">{t}</h3>
                <p className="mt-1 text-slate-300">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="font-semibold uppercase tracking-widest text-steel">Our work</p>
            <h2 className="mb-2 font-display text-5xl font-bold md:text-6xl">Before and after</h2>
            <p className="mb-8 text-slate-600">Drag the slider on any photo to compare.</p>
          </Reveal>
          <Gallery />
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-y border-plate bg-white py-10">
        <p className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-slate-500">Brands we service</p>
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee font-display text-4xl font-semibold text-steel motion-reduce:animate-none">
            {[...brands, ...brands].map((b, i) => <span key={i} className="px-8">{b}</span>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5">
          <h2 className="max-w-xl font-display text-5xl font-bold leading-none">Machine out of order? Book a visit today.</h2>
          <Link to={to('/contact')} className="rounded bg-ink px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-xl">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}