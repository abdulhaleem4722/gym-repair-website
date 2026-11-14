export default function Footer({ shop, city }) {
  return (
    <footer className="bg-ink py-8 text-[15px] text-slate-300">
      <div className="mx-auto max-w-5xl px-5">
        {shop} serving {city}. Sample design by Abdul Haleem.
      </div>
    </footer>
  )
}