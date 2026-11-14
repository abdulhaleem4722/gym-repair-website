const brands = ['Life Fitness', 'Precor', 'NordicTrack', 'Matrix', 'Cybex', 'Sole']

export default function Brands() {
  return (
    <section className="border-y border-plate bg-white py-14">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="mb-6 font-display text-5xl font-bold">Brands we service</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-2 font-display text-2xl font-semibold text-steel">
          {brands.map((b) => <span key={b}>{b}</span>)}
        </div>
      </div>
    </section>
  )
}