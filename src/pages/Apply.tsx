import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Phone, Mail } from 'lucide-react'

type FormData = {
  loanType: string
  purchasePrice: string
  loanAmount: string
  propertyValue: string
  propertyType: string
  state: string
  experience: string
  creditRange: string
  fullName: string
  email: string
  phone: string
  // Business-loan branch
  businessPurpose: string
  monthlyRevenue: string
  timeInBusiness: string
  businessName: string
}

const loanTypes = [
  { id: 'fix-flip', label: 'Fix & Flip', desc: 'Buy, rehab, sell' },
  { id: 'dscr', label: 'DSCR / Rental', desc: 'Long-term rental hold' },
  { id: 'bridge', label: 'Bridge', desc: 'Short-term acquisition' },
  { id: 'cashout', label: 'Cash-Out Refi', desc: 'Pull equity from owned property' },
  { id: 'construction', label: 'New Construction', desc: 'Ground-up build' },
  { id: 'business', label: 'Business Lending', desc: 'Working capital, equipment, expansion' },
]


export default function Apply() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>({
    loanType: '',
    purchasePrice: '',
    loanAmount: '',
    propertyValue: '',
    propertyType: '',
    state: '',
    experience: '',
    creditRange: '',
    fullName: '',
    email: '',
    phone: '',
    businessPurpose: '',
    monthlyRevenue: '',
    timeInBusiness: '',
    businessName: '',
  })

  const update = (k: keyof FormData, v: string) => setData(d => ({ ...d, [k]: v }))

  const steps = ['Loan Type', 'The Deal', 'About You', 'Contact', 'Submitted']

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-[var(--color-cream-soft)] py-8 sm:py-12 lg:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Progress */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center justify-between mb-3">
            <div className="eyebrow text-[var(--color-bronze)]">Application</div>
            <div className="text-xs text-[var(--color-stone)]">Step {Math.min(step + 1, 5)} of 5</div>
          </div>
          <div className="flex gap-1.5">
            {steps.map((_, i) => (
              <div key={i} className={`h-1 flex-1 ${i <= step ? 'bg-[var(--color-ink)]' : 'bg-[rgba(10,22,40,0.12)]'}`}></div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[rgba(10,22,40,0.08)] p-6 sm:p-8 lg:p-12">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h1 className="heading-display text-3xl lg:text-4xl text-[var(--color-ink)] mb-3">What kind of capital do you need?</h1>
                <p className="text-[var(--color-stone)] mb-8">Pick the program that fits. Not sure? Pick the closest one and we&rsquo;ll match the deal to the right product.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {loanTypes.map(t => (
                    <button
                      key={t.id}
                      onClick={() => { update('loanType', t.id); setStep(1); }}
                      className={`text-left p-5 border transition-all ${data.loanType === t.id ? 'border-[var(--color-ink)] bg-[var(--color-cream-soft)]' : 'border-[rgba(10,22,40,0.12)] hover:border-[var(--color-ink)]'}`}
                    >
                      <div className="serif text-lg font-medium text-[var(--color-ink)] mb-1">{t.label}</div>
                      <div className="text-xs text-[var(--color-stone)]">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && data.loanType === 'business' && (
              <motion.div key="1-biz" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h1 className="heading-display text-3xl lg:text-4xl text-[var(--color-ink)] mb-3">Tell us about the business.</h1>
                <p className="text-[var(--color-stone)] mb-8">Business loans are structured to your revenue, time in business, and use of funds. Quick numbers below get us oriented.</p>

                <div className="space-y-5">
                  <div>
                    <label className="label">Use of funds</label>
                    <select value={data.businessPurpose} onChange={e => update('businessPurpose', e.target.value)} className="input">
                      <option value="">Select</option>
                      <option>Working capital</option>
                      <option>Equipment purchase</option>
                      <option>Expansion / new location</option>
                      <option>Bridge financing</option>
                      <option>Inventory</option>
                      <option>Real estate purchase (business property)</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">Loan amount requested</label>
                    <input type="text" placeholder="$250,000" value={data.loanAmount} onChange={e => update('loanAmount', e.target.value)} className="input" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label">Time in business</label>
                      <select value={data.timeInBusiness} onChange={e => update('timeInBusiness', e.target.value)} className="input">
                        <option value="">Select</option>
                        <option value="under-6mo">Under 6 months</option>
                        <option value="6-12mo">6 – 12 months</option>
                        <option value="1-3yr">1 – 3 years</option>
                        <option value="3-10yr">3 – 10 years</option>
                        <option value="10+yr">10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="label">Avg. monthly revenue</label>
                      <input type="text" placeholder="$45,000" value={data.monthlyRevenue} onChange={e => update('monthlyRevenue', e.target.value)} className="input" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-10">
                  <button onClick={() => setStep(0)} className="btn-secondary"><ArrowLeft size={16}/> Back</button>
                  <button onClick={() => setStep(2)} className="btn-primary" disabled={!data.businessPurpose || !data.loanAmount || !data.timeInBusiness}>Continue <ArrowRight size={16}/></button>
                </div>
              </motion.div>
            )}

            {step === 1 && data.loanType !== 'business' && (
              <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h1 className="heading-display text-3xl lg:text-4xl text-[var(--color-ink)] mb-3">Tell us about the deal.</h1>
                <p className="text-[var(--color-stone)] mb-8">Rough numbers are fine. We&rsquo;ll refine in underwriting.</p>

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label">Purchase price</label>
                      <input type="text" placeholder="$350,000" value={data.purchasePrice} onChange={e => update('purchasePrice', e.target.value)} className="input" />
                    </div>
                    <div>
                      <label className="label">{data.loanType === 'dscr' ? 'Property value' : 'After-repair value (ARV)'}</label>
                      <input type="text" placeholder="$525,000" value={data.propertyValue} onChange={e => update('propertyValue', e.target.value)} className="input" />
                    </div>
                  </div>
                  <div>
                    <label className="label">Loan amount requested</label>
                    <input type="text" placeholder="$280,000" value={data.loanAmount} onChange={e => update('loanAmount', e.target.value)} className="input" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label">Property type</label>
                      <select value={data.propertyType} onChange={e => update('propertyType', e.target.value)} className="input">
                        <option value="">Select</option>
                        <option>Single-family</option>
                        <option>2-4 unit</option>
                        <option>5+ unit multifamily</option>
                        <option>Mixed-use</option>
                        <option>Commercial</option>
                        <option>Land</option>
                      </select>
                    </div>
                    <div>
                      <label className="label">State</label>
                      <select value={data.state} onChange={e => update('state', e.target.value)} className="input">
                        <option value="">Select</option>
                        <option>Washington</option>
                        <option>Oregon</option>
                        <option>Idaho</option>
                        <option>California</option>
                        <option>Montana</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-10">
                  <button onClick={() => setStep(0)} className="btn-secondary"><ArrowLeft size={16}/> Back</button>
                  <button onClick={() => setStep(2)} className="btn-primary">Continue <ArrowRight size={16}/></button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h1 className="heading-display text-3xl lg:text-4xl text-[var(--color-ink)] mb-3">{data.loanType === 'business' ? 'A few more details.' : 'Tell us about you.'}</h1>
                <p className="text-[var(--color-stone)] mb-8">No credit pull. This helps Fritz understand the situation before he calls.</p>

                <div className="space-y-5">
                  {data.loanType === 'business' ? (
                    <div>
                      <label className="label">Business name</label>
                      <input type="text" placeholder="Acme Co." value={data.businessName} onChange={e => update('businessName', e.target.value)} className="input" />
                    </div>
                  ) : (
                    <div>
                      <label className="label">Investment experience</label>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {[
                          { id: 'none', label: 'First deal' },
                          { id: '1-3', label: '1–3 completed' },
                          { id: '4-9', label: '4–9 completed' },
                          { id: '10+', label: '10+ completed' },
                        ].map(e => (
                          <button
                            key={e.id}
                            onClick={() => update('experience', e.id)}
                            className={`p-3 text-sm border transition-all ${data.experience === e.id ? 'border-[var(--color-ink)] bg-[var(--color-cream-soft)]' : 'border-[rgba(10,22,40,0.12)] hover:border-[var(--color-ink)]'}`}
                          >
                            {e.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <div>
                    <label className="label">Credit score range</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'below-580', label: 'Below 580' },
                        { id: '580-659', label: '580–659' },
                        { id: '660-739', label: '660–739' },
                        { id: '740+', label: '740+' },
                      ].map(c => (
                        <button
                          key={c.id}
                          onClick={() => update('creditRange', c.id)}
                          className={`p-3 text-sm border transition-all ${data.creditRange === c.id ? 'border-[var(--color-ink)] bg-[var(--color-cream-soft)]' : 'border-[rgba(10,22,40,0.12)] hover:border-[var(--color-ink)]'}`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-10">
                  <button onClick={() => setStep(1)} className="btn-secondary"><ArrowLeft size={16}/> Back</button>
                  <button
                    onClick={() => setStep(3)}
                    className="btn-primary"
                    disabled={data.loanType === 'business' ? (!data.businessName || !data.creditRange) : (!data.experience || !data.creditRange)}
                  >
                    Continue <ArrowRight size={16}/>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h1 className="heading-display text-3xl lg:text-4xl text-[var(--color-ink)] mb-3">How can we reach you?</h1>
                <p className="text-[var(--color-stone)] mb-8">Fritz reviews every application personally and reaches out within one business day.</p>

                <div className="space-y-5">
                  <div>
                    <label className="label">Full name</label>
                    <input type="text" value={data.fullName} onChange={e => update('fullName', e.target.value)} className="input" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label">Email</label>
                      <input type="email" value={data.email} onChange={e => update('email', e.target.value)} className="input" />
                    </div>
                    <div>
                      <label className="label">Phone</label>
                      <input type="tel" value={data.phone} onChange={e => update('phone', e.target.value)} className="input" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-10">
                  <button onClick={() => setStep(2)} className="btn-secondary"><ArrowLeft size={16}/> Back</button>
                  <button onClick={() => setStep(4)} className="btn-primary" disabled={!data.fullName || !data.email}>
                    Submit Application <ArrowRight size={16}/>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="w-14 h-14 bg-[var(--color-ink)] flex items-center justify-center mb-6">
                  <Check size={28} className="text-[var(--color-bronze)]" strokeWidth={2.5} />
                </div>
                <div className="eyebrow text-[var(--color-bronze)] mb-3">Application Received</div>
                <h1 className="heading-display text-3xl lg:text-4xl text-[var(--color-ink)] mb-4">
                  Thanks, {data.fullName.split(' ')[0]}. Your deal is in front of Fritz.
                </h1>
                <p className="text-[var(--color-stone)] mb-8 leading-relaxed">
                  Every application is reviewed personally. Fritz will look at the deal, the property, and the situation, then reach out directly within one business day. If your deal doesn&rsquo;t fit a typical bank&rsquo;s box, you&rsquo;re in the right place.
                </p>

                <div className="border border-[rgba(10,22,40,0.08)] p-5 mb-8">
                  <div className="serif text-lg font-medium text-[var(--color-ink)] mb-3">What happens next</div>
                  <ol className="text-sm text-[var(--color-stone)] space-y-2 list-decimal pl-4">
                    <li>Confirmation email sent to <span className="text-[var(--color-ink)] font-medium">{data.email}</span></li>
                    <li>Fritz reviews your application personally</li>
                    <li>You get a call within one business day</li>
                    <li>If we move forward, a term sheet within 48 hours</li>
                  </ol>
                </div>

                <div className="bg-[var(--color-cream-soft)] p-5 mb-8">
                  <div className="text-sm text-[var(--color-stone)] leading-relaxed">
                    Have something time-sensitive? Skip the wait and call directly at <a href="tel:4258767192" className="text-[var(--color-ink)] font-medium underline underline-offset-2">(425) 876-7192</a>.
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="tel:4258767192" className="btn-primary"><Phone size={16}/> Call Fritz Now</a>
                  <a href="mailto:fritz@buehlercapitalfunding.com" className="btn-secondary"><Mail size={16}/> Email Directly</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
