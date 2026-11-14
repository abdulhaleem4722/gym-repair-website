import useShopParams from '../hooks/useShopParams'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const { city, phone } = useShopParams()
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-6xl font-bold">Contact us</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <div className="space-y-1 text-lg">
            <p><b>Phone:</b> {phone}</p>
            <p><b>Service area:</b> {city} and nearby</p>
            <p><b>Hours:</b> Mon to Fri 8 am to 6 pm, Sat 9 am to 2 pm</p>
          </div>
          <iframe
            title="Map"
            loading="lazy"
            className="mt-6 h-80 w-full rounded-md border-2 border-ink"
            src={`https://www.google.com/maps?q=${encodeURIComponent(city)}&output=embed`}
          />
        </div>
        <ContactForm />
      </div>
    </div>
  )
}