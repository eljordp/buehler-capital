import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-cream)] mt-16 sm:mt-20 lg:mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
        <div className="sm:col-span-2 md:col-span-2">
          <div className="serif text-xl sm:text-2xl font-medium mb-3">Buehler Capital Funding LLC</div>
          <p className="text-[var(--color-cream-soft)] opacity-80 text-sm leading-relaxed max-w-md">
            Private money, hard money, and business lending. Trusted decisions for real estate investors and business owners across the Pacific Northwest.
          </p>
        </div>
        <div>
          <div className="eyebrow text-[var(--color-bronze)] mb-3 sm:mb-4">Office</div>
          <div className="text-sm leading-relaxed text-[var(--color-cream-soft)]">
            1869 17th Ave SE<br />
            Snohomish, WA 98290<br />
            <a href="tel:4258767192" className="hover:text-white">(425) 876-7192</a>
          </div>
        </div>
        <div>
          <div className="eyebrow text-[var(--color-bronze)] mb-3 sm:mb-4">Hours</div>
          <div className="text-sm leading-relaxed text-[var(--color-cream-soft)] space-y-1">
            <div className="flex justify-between"><span>Mon&ndash;Fri</span><span>9&ndash;5</span></div>
            <div className="flex justify-between opacity-60"><span>Sat&ndash;Sun</span><span>Closed</span></div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-5 sm:py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-[var(--color-cream-soft)] opacity-60 text-center md:text-left">
          <div>&copy; {new Date().getFullYear()} Buehler Capital Funding LLC. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/apply" className="hover:opacity-100">Apply</Link>
            <Link to="/portal" className="hover:opacity-100">Employee Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
