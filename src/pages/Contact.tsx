import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow text-[var(--color-bronze)] mb-3 sm:mb-4">Get In Touch</div>
            <h1 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-[var(--color-ink)] mb-5 sm:mb-6">
              We answer the phone.
            </h1>
            <p className="text-[var(--color-stone)] leading-relaxed mb-8 sm:mb-10">
              For a loan inquiry, the fastest path is the application. For everything else &mdash; broker questions, referrals, partner inquiries &mdash; reach us directly.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-[var(--color-bronze)] mt-1 shrink-0" strokeWidth={1.5} />
                <div className="min-w-0">
                  <div className="text-xs text-[var(--color-stone)] mb-0.5">Phone</div>
                  <a href="tel:4258767192" className="text-[var(--color-ink)] hover:text-[var(--color-bronze)]">(425) 876-7192</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-[var(--color-bronze)] mt-1 shrink-0" strokeWidth={1.5} />
                <div className="min-w-0">
                  <div className="text-xs text-[var(--color-stone)] mb-0.5">Email</div>
                  <a href="mailto:fritz@buehlercapitalfunding.com" className="text-[var(--color-ink)] hover:text-[var(--color-bronze)] break-all text-sm sm:text-base">fritz@buehlercapitalfunding.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[var(--color-bronze)] mt-1 shrink-0" strokeWidth={1.5} />
                <div className="min-w-0">
                  <div className="text-xs text-[var(--color-stone)] mb-0.5">Office</div>
                  <div className="text-[var(--color-ink)]">1869 17th Ave SE<br />Snohomish, WA 98290</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={18} className="text-[var(--color-bronze)] mt-1 shrink-0" strokeWidth={1.5} />
                <div className="min-w-0">
                  <div className="text-xs text-[var(--color-stone)] mb-0.5">Hours</div>
                  <div className="text-[var(--color-ink)]">Monday &ndash; Friday, 9:00 &ndash; 5:00 PT</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="bg-white border border-[rgba(10,22,40,0.08)] p-6 sm:p-8">
              {!sent ? (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <h2 className="serif text-xl sm:text-2xl font-medium text-[var(--color-ink)] mb-5 sm:mb-6">Send a message</h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="label">Name</label>
                      <input type="text" required className="input" />
                    </div>
                    <div>
                      <label className="label">Phone</label>
                      <input type="tel" className="input" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="label">Email</label>
                    <input type="email" required className="input" />
                  </div>
                  <div className="mb-6">
                    <label className="label">How can we help?</label>
                    <textarea required rows={5} className="input resize-none"></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="py-16 text-center">
                  <div className="serif text-3xl font-medium text-[var(--color-ink)] mb-3">Thanks &mdash; we got it.</div>
                  <p className="text-[var(--color-stone)]">We&rsquo;ll be in touch within one business day.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
