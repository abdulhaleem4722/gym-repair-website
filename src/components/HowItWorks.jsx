const steps = [
  ['Send your request', 'Tell us the machine and the problem.'],
  ['We confirm a visit', 'We call to set a time that suits you.'],
  ['Diagnose and fix', 'The technician repairs on site and tests the machine.'],
]

export default function HowItWorks() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="mb-6 font-display text-5xl font-bold">How a repair works</h2>
        <ol className="grid max-w-xl gap-5">
          {steps.map(([t, d], i) => (
            <li key={t} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent font-display text-3xl font-bold">
                {i + 1}
              </span>
              <div><b className="block text-lg">{t}</b>{d}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}