export default function Hours() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="mb-6 font-display text-5xl font-bold">Hours</h2>
        <div className="grid max-w-sm grid-cols-[auto_1fr] gap-x-6 gap-y-1">
          <span>Mon to Fri</span><span>8:00 am to 6:00 pm</span>
          <span>Saturday</span><span>9:00 am to 2:00 pm</span>
        </div>
      </div>
    </section>
  )
}