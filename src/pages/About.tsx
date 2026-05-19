import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'

const SNOHOMISH = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1800&q=80&auto=format&fit=crop'
const OFFICE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop'

const regions = [
  { state: 'Washington', cities: 'Seattle · Tacoma · Bellevue · Everett · Snohomish · Spokane' },
  { state: 'Oregon', cities: 'Portland · Salem · Eugene · Bend' },
  { state: 'Idaho', cities: 'Boise · Coeur d’Alene · Idaho Falls' },
  { state: 'California', cities: 'Sacramento · San Francisco Bay · Los Angeles' },
  { state: 'Montana', cities: 'Bozeman · Missoula · Billings' },
]

export default function About() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={SNOHOMISH} alt="Pacific Northwest landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ink)]/85 via-[var(--color-ink)]/75 to-[var(--color-ink)]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32 text-[var(--color-cream)]">
          <div className="eyebrow text-[var(--color-bronze)] mb-4">About Buehler Capital</div>
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6 max-w-3xl">
            A lender built for operators, not committees.
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-cream-soft)] opacity-90 leading-relaxed max-w-2xl">
            Snohomish-based. Direct capital. Decisions made by the person you&rsquo;re talking to &mdash; not a black-box algorithm three time zones away.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[var(--color-cream)] border-b border-[rgba(10,22,40,0.08)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-10 lg:py-14 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {[
            { n: '10+', l: 'Years lending across the PNW' },
            { n: '$80M+', l: 'In funded loans to date' },
            { n: '11 days', l: 'Average close time' },
            { n: '94%', l: 'Of borrowers say they’d return' },
          ].map((s, i) => (
            <div key={i} className={`${i > 0 ? 'lg:border-l border-[rgba(10,22,40,0.08)] lg:pl-6' : ''}`}>
              <div className="serif text-3xl sm:text-4xl lg:text-5xl text-[var(--color-ink)] font-medium mb-2">{s.n}</div>
              <div className="text-xs sm:text-sm text-[var(--color-stone)] leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="aspect-[4/5] relative">
            <div className="absolute inset-0 bg-[var(--color-bronze)] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 opacity-30"></div>
            <img src={OFFICE} alt="Buehler Capital office" className="relative w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="eyebrow text-[var(--color-bronze)] mb-4">Our Story</div>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-[var(--color-ink)] mb-6">
            We started Buehler because the deals worth doing don&rsquo;t fit the bank&rsquo;s box.
          </h2>
          <div className="space-y-5 text-[var(--color-stone)] leading-relaxed">
            <p>
              Buehler Capital Funding LLC is a private money lender headquartered in Snohomish, Washington. We finance real estate investors, small business owners, and operators across the Pacific Northwest who need capital that moves at the speed of the deal.
            </p>
            <p>
              We&rsquo;re not a bank. We&rsquo;re not a fund of funds. We deploy our own capital plus that of a small group of long-standing private investors. Every loan is underwritten by the person you&rsquo;re talking to &mdash; not a committee.
            </p>
            <p>
              The borrowers who keep coming back to us share something: they don&rsquo;t want hand-holding, they want a yes or a no. We give them one fast, and when it&rsquo;s a yes, we close.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[var(--color-cream-soft)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-5">
              <div className="eyebrow text-[var(--color-bronze)] mb-3">How We Underwrite</div>
              <h2 className="heading-display text-3xl sm:text-4xl text-[var(--color-ink)]">
                Common sense over checkboxes.
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-10">
            {[
              { n: '01', t: 'The Asset', d: 'Does the property or business have real, defensible value? We look at comps, condition, market dynamics, and exit liquidity.' },
              { n: '02', t: 'The Operator', d: 'Does the borrower have a track record, a plan, and skin in the game? Experience matters more to us than a perfect credit score.' },
              { n: '03', t: 'The Exit', d: 'How does this loan get paid back? Sale, refinance, business cash flow. We want to know the path before we fund.' },
            ].map(s => (
              <div key={s.n}>
                <div className="serif text-4xl text-[var(--color-bronze)] mb-3">{s.n}</div>
                <div className="serif text-xl font-medium text-[var(--color-ink)] mb-2">{s.t}</div>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 mb-10">
          <div className="lg:col-span-5">
            <div className="eyebrow text-[var(--color-bronze)] mb-3">Where We Lend</div>
            <h2 className="heading-display text-3xl sm:text-4xl text-[var(--color-ink)] mb-4">
              Five states. One direct relationship.
            </h2>
            <p className="text-[var(--color-stone)] leading-relaxed">
              We lend across the Pacific Northwest and beyond &mdash; with deepest expertise in the Washington and Oregon markets we&rsquo;ve been working in for a decade.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-3">
            {regions.map(r => (
              <div key={r.state} className="border-b border-[rgba(10,22,40,0.08)] pb-3 flex items-start gap-4">
                <MapPin size={16} className="text-[var(--color-bronze)] mt-1 shrink-0" strokeWidth={1.5} />
                <div className="flex-1 min-w-0">
                  <div className="serif text-lg font-medium text-[var(--color-ink)]">{r.state}</div>
                  <div className="text-sm text-[var(--color-stone)]">{r.cities}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] text-[var(--color-cream)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 py-16 lg:py-20 text-center">
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-5">
            Bring us your deal.
          </h2>
          <p className="text-[var(--color-cream-soft)] opacity-80 mb-8 max-w-xl mx-auto">
            Two minutes to tell us about the deal. One business day to talk. Forty-eight hours to a term sheet.
          </p>
          <Link to="/apply" className="inline-flex items-center gap-2 bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-dark)] text-[var(--color-ink)] px-6 py-3 font-medium transition-colors">
            Start an Application <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
