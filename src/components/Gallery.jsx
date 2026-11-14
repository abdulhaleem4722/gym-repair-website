import { useState } from 'react'
import BeforeAfter from './BeforeAfter'
import { gallery } from '../data'

const tabs = ['All', 'Treadmills', 'Ellipticals & bikes', 'Strength']

export default function Gallery() {
  const [tab, setTab] = useState('All')
  const items = tab === 'All' ? gallery : gallery.filter((g) => g.category === tab)

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`rounded-full border-2 border-ink px-5 py-2 font-semibold transition ${
              tab === t ? 'bg-ink text-white' : 'hover:bg-accent'
            }`}>
            {t}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((g) => (
          <BeforeAfter key={g.id} before={g.before} after={g.after} label={g.label} />
        ))}
      </div>
    </div>
  )
}