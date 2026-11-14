import useShopParams from '../hooks/useShopParams'

export default function About() {
  const { shop, city } = useShopParams()
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-6xl font-bold">About {shop}</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-lg text-slate-700">
          <p>{shop} repairs and services fitness equipment for gyms, studios, and homes in {city} and the surrounding area.</p>
          <p>Our technicians work on treadmills, ellipticals, bikes, and strength machines from the major brands, so your equipment stays safe and ready to use.</p>
          <p>Replace this text with the owner's real story, years in business, and certifications.</p>
        </div>
        <div className="grid gap-4">
          {[['Reliable', 'We show up when we say we will.'],
            ['Honest', 'We tell you if a repair is not worth the cost.'],
            ['Careful', 'We test every machine before we leave.']].map(([t, d]) => (
            <div key={t} className="rounded-md border-2 border-ink bg-white p-5">
              <h3 className="font-display text-2xl font-bold">{t}</h3><p className="text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}