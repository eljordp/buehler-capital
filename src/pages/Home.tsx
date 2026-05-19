import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Home as HomeIcon, Briefcase, ShieldCheck, Clock, HandshakeIcon, MapPin, Store } from 'lucide-react'
import Reveal from '../components/Reveal'

const HERO_RESIDENTIAL = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop'
const HERO_COMMERCIAL = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop'
const PROP_RE = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80&auto=format&fit=crop'
const PROP_BRIDGE = 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=900&q=80&auto=format&fit=crop'
const BIZ_RESTAURANT = 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=900&q=80&auto=format&fit=crop'
const COMMERCIAL_BLDG = 'https://images.unsplash.com/photo-1577760258779-e787a1733016?w=900&q=80&auto=format&fit=crop'
const PNW_LANDSCAPE = 'https://images.unsplash.com/photo-1502175353174-a7a44e84da10?w=1600&q=80&auto=format&fit=crop'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative z-10">
            <div className="eyebrow text-[var(--color-bronze)] mb-4 sm:mb-5">Private Money. Direct Lender.</div>
            <h1 className="heading-display text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-7xl text-[var(--color-ink)] mb-5 sm:mb-6">
              Capital that closes <span className="italic">when banks won&rsquo;t</span>.
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-stone)] leading-relaxed max-w-xl mb-7 sm:mb-8">
              Private money for real estate. Commercial and business funding for operators. We back the deal in front of us &mdash; not a credit-score formula. Direct decisions. Fast capital. No committee.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/apply" className="btn-primary">
                Start an Application <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-secondary">
                See Loan Programs
              </Link>
            </div>

            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
              <div>
                <div className="serif text-2xl sm:text-3xl font-medium text-[var(--color-ink)]">10+</div>
                <div className="text-[11px] sm:text-xs text-[var(--color-stone)] mt-1">Years lending</div>
              </div>
              <div>
                <div className="serif text-2xl sm:text-3xl font-medium text-[var(--color-ink)]">48hr</div>
                <div className="text-[11px] sm:text-xs text-[var(--color-stone)] mt-1">Term sheets</div>
              </div>
              <div>
                <div className="serif text-2xl sm:text-3xl font-medium text-[var(--color-ink)]">$2M+</div>
                <div className="text-[11px] sm:text-xs text-[var(--color-stone)] mt-1">Max loan size</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full">
              <div className="absolute inset-0 bg-[var(--color-bronze)] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 opacity-30"></div>
              <img src={HERO_RESIDENTIAL} alt="Pacific Northwest residential property" className="relative w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/70 to-transparent p-5 sm:p-6 lg:p-8">
                <div className="eyebrow text-[var(--color-bronze)] mb-2">Recently Funded</div>
                <div className="serif text-lg sm:text-xl lg:text-2xl text-[var(--color-cream)] font-medium mb-1">$425,000 &middot; Fix & Flip</div>
                <div className="text-xs sm:text-sm text-[var(--color-cream-soft)] opacity-80 flex items-center gap-1.5">
                  <MapPin size={13} /> Redmond, WA &middot; Closed in 11 days
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Funded Gallery */}
      <section className="bg-[var(--color-ink)] text-[var(--color-cream)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-10 items-end">
              <div className="lg:col-span-7">
                <div className="eyebrow text-[var(--color-bronze)] mb-3 sm:mb-4">Recently Funded</div>
                <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl">
                  Real deals. Real closes. Across the Pacific Northwest.
                </h2>
              </div>
              <div className="lg:col-span-5 text-[var(--color-cream-soft)] opacity-80 text-sm leading-relaxed">
                A snapshot of what we&rsquo;ve closed over the past 90 days. Property addresses redacted at borrower request.
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: BIZ_RESTAURANT, type: 'Working Capital', amount: '$185,000', loc: 'Everett, WA', days: '5 days', cat: 'Business' },
              { img: COMMERCIAL_BLDG, type: 'Commercial Acquisition', amount: '$750,000', loc: 'Tacoma, WA', days: '12 days', cat: 'Commercial RE' },
              { img: PROP_RE, type: 'Cash-Out Refi', amount: '$1.1M', loc: 'Seattle, WA', days: '9 days', cat: 'Real Estate' },
              { img: PROP_BRIDGE, type: 'Bridge Loan', amount: '$290,000', loc: 'Snohomish, WA', days: '7 days', cat: 'Real Estate' },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group">
                  <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                    <img src={p.img} alt={`${p.type} in ${p.loc}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 bg-[var(--color-ink)]/85 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase text-[var(--color-bronze)] px-2 py-1">{p.cat}</div>
                  </div>
                  <div className="eyebrow text-[var(--color-bronze)] mb-2">{p.type}</div>
                  <div className="serif text-xl sm:text-2xl font-medium mb-1">{p.amount}</div>
                  <div className="text-xs sm:text-sm text-[var(--color-cream-soft)] opacity-70 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {p.loc}</span>
                    <span className="opacity-50">&middot;</span>
                    <span>Closed in {p.days}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 mb-10 sm:mb-14">
            <div className="lg:col-span-5">
              <div className="eyebrow text-[var(--color-bronze)] mb-3 sm:mb-4">Who We Serve</div>
              <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-[var(--color-ink)]">
                Three borrowers. One direct lender.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-[var(--color-stone)] leading-relaxed">
                We back real estate investors, commercial property owners, and operating businesses across the Pacific Northwest. If the deal makes sense, we make it work &mdash; bank-friendly or not.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: HomeIcon,
              eyebrow: 'Real Estate Investors',
              title: 'For the operators flipping, holding, and refinancing.',
              copy: 'Fast capital for the people moving real assets. Whether you&rsquo;re rehabbing your first project or scaling a portfolio.',
              programs: ['Fix & Flip', 'DSCR Rental', 'Bridge', 'Cash-Out Refinance']
            },
            {
              icon: Store,
              eyebrow: 'Commercial Real Estate',
              title: 'For income-producing property &mdash; large and small.',
              copy: 'Acquisition, refinance, and value-add capital for retail, office, mixed-use, and multifamily assets.',
              programs: ['Commercial Acquisition', 'Multifamily', 'Mixed-Use', 'Value-Add Bridge']
            },
            {
              icon: Briefcase,
              eyebrow: 'Business Owners',
              title: 'For the operators running the businesses.',
              copy: 'Working capital, equipment, expansion, and bridge funding for businesses with real revenue and a real plan.',
              programs: ['Working Capital', 'Equipment Financing', 'Expansion / New Location', 'Inventory & Bridge']
            },
          ].map(({ icon: Icon, eyebrow, title, copy, programs }, i) => (
            <Reveal key={eyebrow} delay={i * 0.1}>
              <div className="bg-white border border-[rgba(10,22,40,0.08)] p-6 sm:p-8 hover:border-[var(--color-ink)] transition-colors group flex flex-col h-full">
                <div className="w-12 h-12 bg-[var(--color-cream-soft)] flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[var(--color-bronze)]" strokeWidth={1.5} />
                </div>
                <div className="eyebrow text-[var(--color-bronze)] mb-3">{eyebrow}</div>
                <h3 className="serif text-lg sm:text-xl font-medium text-[var(--color-ink)] mb-3 leading-snug">{title}</h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed mb-5 flex-1">{copy}</p>
                <div className="pt-4 border-t border-[rgba(10,22,40,0.08)]">
                  <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-stone)] mb-2">Programs</div>
                  <ul className="space-y-1.5 text-xs text-[var(--color-ink)]">
                    {programs.map(t => (
                      <li key={t} className="flex items-start gap-2"><span className="text-[var(--color-bronze)]">&bull;</span>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative text-[var(--color-cream)] overflow-hidden">
        <div className="absolute inset-0">
          <img src={PNW_LANDSCAPE} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[var(--color-ink)]/92"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-12">
            <div className="lg:col-span-5">
              <div className="eyebrow text-[var(--color-bronze)] mb-3 sm:mb-4">How It Works</div>
              <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl">
                Four steps from application to wire.
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {[
              { n: '01', t: 'Apply', d: 'Tell us about the deal in two minutes online. No credit pull, no commitment.' },
              { n: '02', t: 'Term Sheet', d: 'Direct response with loan amount, rate, and terms within 48 hours.' },
              { n: '03', t: 'Underwriting', d: 'Appraisal, title, and docs. We coordinate everything from inside the portal.' },
              { n: '04', t: 'Close', d: 'Funds wired at closing. Most deals close in 10–14 days.' },
            ].map(s => (
              <div key={s.n}>
                <div className="serif text-4xl sm:text-5xl text-[var(--color-bronze)] mb-3 sm:mb-4">{s.n}</div>
                <div className="serif text-lg sm:text-xl font-medium mb-2">{s.t}</div>
                <p className="text-sm text-[var(--color-cream-soft)] opacity-80 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[var(--color-cream-soft)]">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24 text-center">
          <Reveal>
            <div className="eyebrow text-[var(--color-bronze)] mb-4 sm:mb-5">Our Philosophy</div>
            <h2 className="heading-display text-3xl sm:text-4xl lg:text-6xl text-[var(--color-ink)] mb-6 sm:mb-8 leading-tight">
              Inclusive, <span className="italic">not exclusive</span>.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--color-stone)] leading-relaxed max-w-3xl mx-auto mb-4 sm:mb-5">
              Every borrower starts with a conversation, not a checklist. We look at the deal in front of us and the operator standing behind it.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--color-stone)] leading-relaxed max-w-3xl mx-auto">
              The loan we can&rsquo;t write today is often the relationship that brings us back the deal we want most tomorrow. No story too small. No situation too unusual. Bring us what you&rsquo;ve got.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Buehler */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow text-[var(--color-bronze)] mb-3 sm:mb-4">Why Buehler</div>
            <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-[var(--color-ink)] mb-5 sm:mb-6">
              You talk to the lender. <span className="italic">Always.</span>
            </h2>
            <p className="text-[var(--color-stone)] leading-relaxed mb-7 sm:mb-8">
              We&rsquo;re a small shop on purpose. No call centers, no offshore underwriters, no broker chain. When you call, you reach the person making the decision on your loan.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-[var(--color-ink)] font-medium border-b border-[var(--color-ink)] pb-0.5 hover:text-[var(--color-bronze)] hover:border-[var(--color-bronze)]">
              Talk to us directly <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: ShieldCheck, title: 'Direct Lender', copy: 'Our capital. Our decisions. No middlemen.' },
              { icon: Clock, title: 'Fast', copy: '48-hour term sheets. 10–14 day closes.' },
              { icon: HandshakeIcon, title: 'Common Sense', copy: 'We underwrite the deal and the operator.' },
              { icon: Building2, title: 'Local', copy: 'Snohomish-based. We know the Pacific NW market.' },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="bg-[var(--color-cream-soft)] p-5 sm:p-6">
                <Icon size={22} className="text-[var(--color-bronze)] mb-3" strokeWidth={1.5} />
                <div className="serif text-lg font-medium text-[var(--color-ink)] mb-1.5">{title}</div>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-cream-soft)] border-t border-[rgba(10,22,40,0.08)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20 text-center">
          <Reveal>
            <div className="eyebrow text-[var(--color-bronze)] mb-4 sm:mb-5">Ready When You Are</div>
            <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-[var(--color-ink)] mb-5 sm:mb-6">
              Tell us about your situation.
            </h2>
            <p className="text-[var(--color-stone)] mb-7 sm:mb-8 max-w-xl mx-auto">
              Whether it&rsquo;s a property, a commercial deal, or a business that needs capital, we want to hear it. One business day to talk. Forty-eight hours to a term sheet.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/apply" className="btn-primary">
                Start an Application <ArrowRight size={16} />
              </Link>
              <a href="tel:4258767192" className="btn-secondary">
                Call (425) 876-7192
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
