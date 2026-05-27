import { ExternalLink, Code, Github, Linkedin } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const profiles = [
  {
    name: 'LeetCode',
    handle: '@Alagappan2006',
    desc: 'Data structures & algorithms practice',
    url: 'https://leetcode.com/u/Alagappan2006/',
    color: '#ffa116',
    bg: 'rgba(255,161,22,0.08)',
    border: 'rgba(255,161,22,0.25)',
    emoji: '🧩',
  },
  {
    name: 'HackerRank',
    handle: '@swarnamala1947',
    desc: 'Coding challenges & skill assessments',
    url: 'https://www.hackerrank.com/profile/swarnamala1947',
    color: '#00ea64',
    bg: 'rgba(0,234,100,0.08)',
    border: 'rgba(0,234,100,0.25)',
    emoji: '⭐',
  },
  {
    name: 'GitHub',
    handle: '@ALAGAPPAN-IN',
    desc: 'Open source projects & contributions',
    url: 'https://github.com/ALAGAPPAN-IN',
    color: '#e6edf3',
    bg: 'rgba(230,237,243,0.05)',
    border: 'rgba(230,237,243,0.15)',
    emoji: '🐙',
  },
  {
    name: 'LinkedIn',
    handle: 'alagappan-n-24a385314',
    desc: 'Professional network & career updates',
    url: 'https://www.linkedin.com/in/alagappan-n-24a385314',
    color: '#0a66c2',
    bg: 'rgba(10,102,194,0.08)',
    border: 'rgba(10,102,194,0.3)',
    emoji: '💼',
  },
]

export default function CodingProfiles() {
  const { ref, visible } = useReveal()

  return (
    <section id="profiles" className="py-28 relative">
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-[#00d4ff] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#00d4ff]">07.</span>
          <span className="font-mono text-xs text-muted uppercase tracking-widest">coding profiles</span>
          <div className="flex-1 h-px bg-[#1e2a3a]" />
        </div>

        <h2 className={`section-heading text-4xl sm:text-5xl font-extrabold mb-16 reveal ${visible ? 'visible' : ''}`}>
          Find Me <span className="gradient-text">Online</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profiles.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl p-6 block transition-all duration-300 hover:-translate-y-2 reveal ${visible ? 'visible' : ''}`}
              style={{
                background: p.bg,
                border: `1px solid ${p.border}`,
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${p.color}15`, border: `1px solid ${p.border}` }}
                >
                  {p.emoji}
                </div>
                <ExternalLink
                  size={15}
                  className="text-muted group-hover:text-text transition-colors mt-1"
                  style={{ color: p.color }}
                />
              </div>

              <h3 className="font-display font-bold text-text mb-1">{p.name}</h3>
              <p className="font-mono text-xs mb-3" style={{ color: p.color }}>{p.handle}</p>
              <p className="text-subtle text-sm leading-relaxed">{p.desc}</p>

              {/* Hover line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
