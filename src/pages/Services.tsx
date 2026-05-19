import { Link } from 'react-router-dom'
import { ArrowRight, Home, Building2, Briefcase, RefreshCw, Wrench, Hammer } from 'lucide-react'

const programs = [
  {
    icon: Hammer,
    name: 'Fix & Flip',
    rate: '9.99% – 11.99%',
    ltv: 'Up to 90% LTC / 75% ARV',
    term: '6 – 24 months',
    size: '$100K – $2M',
    desc: 'Acquisition and rehab financing for single-family and small multifamily investors. Interest-only, no prepayment penalty.',
  },
  {
    icon: Home,
    name: 'DSCR / Rental',
    rate: '7.49% – 9.49%',
    ltv: 'Up to 80% LTV',
    term: '30 years',
    size: '$100K – $2M',
    desc: 'Long-term financing on stabilized rental properties qualified by property cash flow. No tax returns, no W-2s, no income docs.',
  },
  {
    icon: Building2,
    name: 'Bridge / Transitional',
    rate: '10.49% – 12.99%',
    ltv: 'Up to 70% LTV',
    term: '6 – 18 months',
    size: '$250K – $2M',
    desc: 'Short-term capital to acquire, reposition, or season a property before refinancing into long-term debt.',
  },
  {
    icon: RefreshCw,
    name: 'Cash-Out Refinance',
    rate: '9.49% – 11.49%',
    ltv: 'Up to 70% LTV',
    term: '12 – 36 months',
    size: '$150K – $2M',
    desc: 'Pull equity from owned investment property to fund the next acquisition or expansion.',
  },
  {
    icon: Wrench,
    name: 'New Construction',
    rate: '10.99% – 12.99%',
    ltv: 'Up to 85% LTC',
    term: '12 – 24 months',
    size: '$250K – $2M',
    desc: 'Ground-up construction loans for experienced builders and developers. Draw-based funding.',
  },
  {
    icon: Briefcase,
    name: 'Business Lending',
    rate: 'Custom',
    ltv: 'Asset-backed',
    term: '6 months – 5 years',
    size: '$50K – $2M',
    desc: 'Working capital, equipment, and expansion financing for established businesses with real revenue and a real plan.',
  },
]

export default function Services() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12">
        <div className="eyebrow text-[var(--color-bronze)] mb-3 sm:mb-4">Loan Programs</div>
        <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-[var(--color-ink)] mb-5 sm:mb-6 max-w-3xl">
          Capital for every stage of the deal.
        </h1>
        <p className="text-base sm:text-lg text-[var(--color-stone)] max-w-2xl leading-relaxed">
          Six programs covering the full lifecycle &mdash; from acquisition and rehab through long-term hold or sale. Rates and terms below are typical ranges. Final pricing depends on the deal.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6">
          {programs.map(p => (
            <div key={p.name} className="bg-white border border-[rgba(10,22,40,0.08)] p-6 sm:p-8 hover:border-[var(--color-ink)] transition-colors">
              <div className="flex items-start gap-4 sm:gap-5 mb-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[var(--color-cream-soft)] flex items-center justify-center shrink-0">
                  <p.icon size={22} className="text-[var(--color-bronze)]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="serif text-xl sm:text-2xl font-medium text-[var(--color-ink)] mb-1">{p.name}</h3>
                  <p className="text-sm text-[var(--color-stone)] leading-relaxed">{p.desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4 sm:gap-x-6 pt-5 border-t border-[rgba(10,22,40,0.08)] text-sm">
                <div>
                  <div className="text-xs text-[var(--color-stone)] mb-0.5">Rate</div>
                  <div className="text-[var(--color-ink)] font-medium">{p.rate}</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-stone)] mb-0.5">Leverage</div>
                  <div className="text-[var(--color-ink)] font-medium">{p.ltv}</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-stone)] mb-0.5">Term</div>
                  <div className="text-[var(--color-ink)] font-medium">{p.term}</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-stone)] mb-0.5">Loan size</div>
                  <div className="text-[var(--color-ink)] font-medium">{p.size}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-cream-soft)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20 text-center">
          <h2 className="heading-display text-3xl sm:text-4xl text-[var(--color-ink)] mb-5 sm:mb-6">
            Not sure which fits?
          </h2>
          <p className="text-[var(--color-stone)] mb-7 sm:mb-8 max-w-xl mx-auto">
            Apply in two minutes. We&rsquo;ll match the deal to the right program and send back a term sheet.
          </p>
          <Link to="/apply" className="btn-primary">
            Start an Application <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
