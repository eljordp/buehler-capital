import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Lock, ArrowLeft } from 'lucide-react'

export default function PortalLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <section className="min-h-screen bg-[var(--color-ink)] text-[var(--color-cream)] flex flex-col">
      <div className="px-6 lg:px-10 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-sm text-[var(--color-cream-soft)] hover:text-white">
          <ArrowLeft size={16} /> Back to site
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[var(--color-bronze)] flex items-center justify-center text-[var(--color-ink)] serif text-base font-semibold">B</div>
          <div className="serif text-base font-medium">Buehler Capital</div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="w-14 h-14 bg-white/5 border border-white/10 mx-auto flex items-center justify-center mb-5">
              <Lock size={22} className="text-[var(--color-bronze)]" strokeWidth={1.5} />
            </div>
            <div className="eyebrow text-[var(--color-bronze)] mb-3">Employee Portal</div>
            <h1 className="heading-display text-3xl text-[var(--color-cream)] mb-3">Sign in to your account</h1>
            <p className="text-sm text-[var(--color-cream-soft)] opacity-70">Authorized Buehler Capital staff only.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); navigate('/portal/dashboard'); }} className="space-y-4">
            <div>
              <label className="label text-[var(--color-cream-soft)]">Work email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@buehlercapitalfunding.com"
                className="input bg-white/5 border-white/15 text-[var(--color-cream)] placeholder-white/30"
              />
            </div>
            <div>
              <label className="label text-[var(--color-cream-soft)]">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input bg-white/5 border-white/15 text-[var(--color-cream)] placeholder-white/30"
              />
            </div>
            <button type="submit" className="w-full bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-dark)] text-[var(--color-ink)] py-3 font-medium transition-colors">
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-xs text-[var(--color-cream-soft)] opacity-60 hover:opacity-100">Forgot password?</a>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-[var(--color-cream-soft)] opacity-50">
              Demo &mdash; click Sign In with anything to view the dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
