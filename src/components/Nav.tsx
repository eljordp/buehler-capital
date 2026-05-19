import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="border-b border-[rgba(10,22,40,0.08)] bg-[var(--color-cream)] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[var(--color-ink)] flex items-center justify-center text-[var(--color-cream)] serif text-base sm:text-lg font-semibold">
            B
          </div>
          <div className="leading-tight">
            <div className="serif text-base sm:text-lg font-medium text-[var(--color-ink)]">Buehler Capital</div>
            <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[var(--color-stone)]">Funding LLC</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-[var(--color-ink)]' : 'text-[var(--color-stone)] hover:text-[var(--color-ink)]'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/portal" className="text-sm font-medium text-[var(--color-stone)] hover:text-[var(--color-ink)]">
            Portal
          </Link>
          <Link to="/apply" className="btn-primary text-sm">
            Apply for Funding
          </Link>
        </nav>

        <button className="md:hidden p-2 -mr-2 text-[var(--color-ink)]" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[rgba(10,22,40,0.08)] bg-[var(--color-cream)]">
          <div className="px-5 sm:px-6 py-5 flex flex-col gap-4">
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-base font-medium text-[var(--color-ink)] py-1">
                {l.label}
              </Link>
            ))}
            <Link to="/portal" onClick={() => setOpen(false)} className="text-base font-medium text-[var(--color-ink)] py-1">Portal</Link>
            <Link to="/apply" onClick={() => setOpen(false)} className="btn-primary text-sm justify-center mt-1">
              Apply for Funding
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
