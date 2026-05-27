import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function Education() {
  const { ref, visible } = useReveal()

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#7c3aed]">02.</span>
          <span className="font-mono text-xs text-muted uppercase tracking-widest">education</span>
          <div className="flex-1 h-px bg-[#1e2a3a]" />
        </div>

        <h2 className={`section-heading text-4xl sm:text-5xl font-extrabold mb-16 reveal ${visible ? 'visible' : ''}`}>
          My <span className="gradient-text">Education</span>
        </h2>

        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="relative pl-8 border-l-2 border-[#1e2a3a]">
            {/* Timeline dot */}
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#7c3aed] border-2 border-[#080b12] shadow-[0_0_20px_rgba(124,58,237,0.6)]" />

            <div className="glass-card grad-border rounded-2xl p-8 max-w-2xl">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-[#7c3aed15] border border-[#7c3aed30] flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-[#7c3aed]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-text mb-1">
                    B.E Computer Science Engineering
                  </h3>
                  <p className="text-[#7c3aed] font-medium mb-3">
                    Sri Ramakrishna Institute of Technology
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#00d4ff]" />
                      Aug 2023 — Jul 2027
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#00d4ff]" />
                      Coimbatore, Tamilnadu
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#1e2a3a] grid grid-cols-3 gap-4">
                {[
                  { label: 'Year', value: '2nd Year' },
                  { label: 'Batch', value: '2023–27' },
                  { label: 'Stream', value: 'CSE' },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <div className="font-display font-bold text-[#00d4ff]">{s.value}</div>
                    <div className="font-mono text-xs text-muted mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
