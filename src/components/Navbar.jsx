import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const links = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'internship', href: '#internship' },
  { label: 'certs', href: '#certificates' },
  { label: 'profiles', href: '#profiles' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#080b12]/90 backdrop-blur-xl border-b border-[#1e2a3a]' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#00d4ff15] border border-[#00d4ff30] flex items-center justify-center">
            <Code2 size={16} className="text-[#00d4ff]" />
          </div>
          <span className="font-mono text-sm text-[#00d4ff] font-medium">alagappan.dev</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">
              <span className="text-[#00d4ff66]">./</span>{l.label}
            </a>
          ))}
        </div>

        {/* Hire me */}
        <a
          href="mailto:swarnamala1947@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00d4ff15] border border-[#00d4ff30] text-[#00d4ff] font-mono text-xs hover:bg-[#00d4ff25] transition-all duration-300"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
          hire me
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-subtle hover:text-[#00d4ff] transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d1117]/95 backdrop-blur-xl border-b border-[#1e2a3a] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-subtle hover:text-[#00d4ff] transition-colors"
            >
              <span className="text-[#00d4ff44]">./</span>{l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
