import { useState } from 'react'

export default function BeforeAfter({ before, after, label }) {
  const [pos, setPos] = useState(50)
  const [bad, setBad] = useState(false)

  return (
    <figure className="overflow-hidden rounded-xl border border-plate bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] select-none overflow-hidden bg-gradient-to-br from-slate-300 to-slate-200">
        {bad ? (
          <div className="absolute inset-0 grid place-items-center px-4 text-center text-sm font-semibold text-slate-500">
            Photo yahan aayegi
          </div>
        ) : (
          <>
            <img src={after} alt={`${label}, after`} onError={() => setBad(true)}
              className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <img src={before} alt={`${label}, before`} onError={() => setBad(true)}
                style={before === after ? { filter: 'grayscale(1) sepia(.35) contrast(.8) brightness(.65)' } : undefined}
                className="h-full w-full object-cover" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }}>
              <div className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-sm font-bold shadow-lg">
                &#8596;
              </div>
            </div>
            <span className="pointer-events-none absolute left-3 top-3 rounded bg-ink/90 px-2 py-0.5 text-xs font-semibold text-white">Before</span>
            <span className="pointer-events-none absolute right-3 top-3 rounded bg-accent px-2 py-0.5 text-xs font-semibold">After</span>
            <input type="range" min="0" max="100" value={pos} onChange={(e) => setPos(+e.target.value)}
              aria-label="Drag to compare before and after"
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
          </>
        )}
      </div>
      <figcaption className="p-4 font-semibold">{label}</figcaption>
    </figure>
  )
}