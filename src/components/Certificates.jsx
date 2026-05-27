import { Award, ExternalLink } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const certs = [
  {
    title: 'Angular',
    issuer: 'Infosys Springboard',
    date: 'March 9, 2026',
    color: '#dd1b16',
    bg: 'rgba(221,27,22,0.08)',
    border: 'rgba(221,27,22,0.25)',
    emoji: '🔺',
    verify: 'https://verify.onwingspan.com',
  },
  {
    title: 'HTML5 – The Language',
    issuer: 'Infosys Springboard',
    date: 'March 7, 2026',
    color: '#e34f26',
    bg: 'rgba(227,79,38,0.08)',
    border: 'rgba(227,79,38,0.25)',
    emoji: '🌐',
    verify: 'https://verify.onwingspan.com',
  },
  {
    title: 'CSS3',
    issuer: 'Infosys Springboard',
    date: 'March 7, 2026',
    color: '#1572b6',
    bg: 'rgba(21,114,182,0.08)',
    border: 'rgba(21,114,182,0.25)',
    emoji: '🎨',
    verify: 'https://verify.onwingspan.com',
  },
  {
    title: 'Twitter Bootstrap',
    issuer: 'Infosys Springboard',
    date: 'March 9, 2026',
    color: '#7952b3',
    bg: 'rgba(121,82,179,0.08)',
    border: 'rgba(121,82,179,0.25)',
    emoji: '⚡',
    verify: 'https://verify.onwingspan.com',
  },
  {
    title: 'TypeScript',
    issuer: 'Infosys Springboard',
    date: 'March 7, 2026',
    color: '#3178c6',
    bg: 'rgba(49,120,198,0.08)',
    border: 'rgba(49,120,198,0.25)',
    emoji: '📘',
    verify: 'https://verify.onwingspan.com',
  },
  {
    title: 'Programming Constructs',
    issuer: 'MathWorks (MATLAB)',
    date: 'Feb 6, 2026',
    color: '#e16619',
    bg: 'rgba(225,102,25,0.08)',
    border: 'rgba(225,102,25,0.25)',
    emoji: '📊',
    verify: null,
  },
  {
    title: 'Vectors & Matrices',
    issuer: 'MathWorks (MATLAB)',
    date: 'Feb 6, 2026',
    color: '#e16619',
    bg: 'rgba(225,102,25,0.08)',
    border: 'rgba(225,102,25,0.25)',
    emoji: '🧮',
    verify: null,
  },
  {
    title: 'Full Stack Internship',
    issuer: 'Newmak Technology',
    date: 'Jun 16, 2025',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    emoji: '🏆',
    verify: null,
  },
]

export default function Certificates() {
  const { ref, visible } = useReveal()

  return (
    <section id="certificates" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#f59e0b]">06.</span>
          <span className="font-mono text-xs text-muted uppercase tracking-widest">certifications</span>
          <div className="flex-1 h-px bg-[#1e2a3a]" />
        </div>

        <h2 className={`section-heading text-4xl sm:text-5xl font-extrabold mb-4 reveal ${visible ? 'visible' : ''}`}>
          My <span className="gradient-text">Certificates</span>
        </h2>
        <p className="text-subtle mb-16 font-body">Continuous learning through verified courses and programs.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c, i) => (
            <div
              key={c.title}
              className={`cert-card rounded-2xl p-5 reveal ${visible ? 'visible' : ''}`}
              style={{
                background: c.bg,
                border: `1px solid ${c.border}`,
                transitionDelay: `${i * 0.06}s`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.border}` }}
                >
                  {c.emoji}
                </div>
                {c.verify && (
                  <a
                    href={c.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-[#00d4ff] transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <h3 className="font-display font-bold text-sm text-text mb-1">{c.title}</h3>
              <p className="font-mono text-xs mb-3" style={{ color: c.color }}>{c.issuer}</p>
              <div className="flex items-center gap-1.5">
                <Award size={11} className="text-muted" />
                <span className="font-mono text-xs text-muted">{c.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
