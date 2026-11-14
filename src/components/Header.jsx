export default function Header({ shop, phone }) {
  return (
    <header className="border-b border-plate py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5">
        <div className="font-display text-3xl font-bold">{shop}</div>
        <a
          href={`tel:${phone.replace(/[^+\d]/g, '')}`}
          className="rounded bg-accent px-4 py-2 font-semibold"
        >
          Call {phone}
        </a>
      </div>
    </header>
  )
}