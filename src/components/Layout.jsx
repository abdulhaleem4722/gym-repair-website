import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import useShopParams from '../hooks/useShopParams'

const links = [['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/contact', 'Contact']]

export default function Layout() {
  const { shop, city, phone } = useShopParams()
  const { search, pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const tel = phone.replace(/[^+\d]/g, '')

  useEffect(() => { window.scrollTo(0, 0); setOpen(false) }, [pathname])

  const cls = ({ isActive }) =>
    `px-3 py-2 font-semibold ${isActive ? 'border-b-4 border-accent' : 'hover:text-steel'}`

  return (
    <div className="font-sans text-[17px] leading-relaxed">
      <div className="bg-ink py-2 text-center text-sm text-slate-300">
        Sample website design by Abdul Haleem for {shop}. Not a live site.
      </div>

      <header className="sticky top-0 z-20 border-b border-plate bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Link to={{ pathname: '/', search }} className="font-display text-3xl font-bold">{shop}</Link>
          <nav className="hidden items-center gap-2 md:flex">
            {links.map(([p, t]) => (
              <NavLink key={p} to={{ pathname: p, search }} end={p === '/'} className={cls}>{t}</NavLink>
            ))}
            <a href={`tel:${tel}`} className="ml-3 rounded bg-accent px-4 py-2 font-semibold">Call {phone}</a>
          </nav>
          <button className="rounded border-2 border-ink px-3 py-1 font-semibold md:hidden"
            onClick={() => setOpen(!open)} aria-expanded={open}>Menu</button>
        </div>
        {open && (
          <nav className="flex flex-col border-t border-plate px-5 pb-3 md:hidden">
            {links.map(([p, t]) => (
              <NavLink key={p} to={{ pathname: p, search }} end={p === '/'} className={cls}>{t}</NavLink>
            ))}
            <a href={`tel:${tel}`} className="mt-2 rounded bg-accent px-4 py-2 text-center font-semibold">Call {phone}</a>
          </nav>
        )}
      </header>

      <main><Outlet /></main>

      <footer className="bg-ink py-10 text-[15px] text-slate-300">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
          <div><div className="font-display text-2xl text-white">{shop}</div>Serving {city} and nearby.</div>
          <div className="flex flex-col gap-1">
            {links.map(([p, t]) => <Link key={p} to={{ pathname: p, search }} className="hover:text-white">{t}</Link>)}
          </div>
          <div>Phone: {phone}<br />Mon to Fri 8 am to 6 pm<br />Sat 9 am to 2 pm</div>
        </div>
      </footer>
    </div>
  )
}