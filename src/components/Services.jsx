const items = [
  ['Treadmills', 'Belts, motors, control boards, incline, and calibration.'],
  ['Ellipticals and bikes', 'Noise, resistance, pedal arms, and console faults.'],
  ['Strength machines', 'Cables, pulleys, upholstery, and adjustments.'],
  ['Gym service plans', 'Scheduled checks so equipment stays in use.'],
]

export default function Services() {
  return (
    <section className="border-y border-plate bg-white py-14">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="mb-6 font-display text-5xl font-bold">What we repair</h2>
        <div className="grid overflow-hidden rounded-md border-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([t, d]) => (
            <div key={t} className="border-b-2 border-r-2 border-ink bg-[#F2F4F5] p-5 -mb-0.5 -mr-0.5">
              <h3 className="mb-1 font-display text-2xl font-bold">{t}</h3>
              <p className="text-[15px] text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}