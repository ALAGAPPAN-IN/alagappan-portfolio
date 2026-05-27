import { Briefcase, Calendar, Building2, CheckCircle } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const highlights = [
  'Built full-stack web application using React, Node.js, and MongoDB',
  'Implemented RESTful APIs and database schema design',
  'Collaborated with team members in Agile development environment',
  'Demonstrated self-motivated attitude and rapid learning of new skills',
]

export default function Internship() {
  const { ref, visible } = useReveal()

  return (
    <section id="internship" className="py-28 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#10b981] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#10b981]">05.</span>
          <span className="font-mono text-xs text-muted uppercase tracking-widest">experience</span>
          <div className="flex-1 h-px bg-[#1e2a3a]" />
        </div>

        <h2 className={`section-heading text-4xl sm:text-5xl font-extrabold mb-16 reveal ${visible ? 'visible' : ''}`}>
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="glass-card grad-border rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#10b98115] to-transparent p-8 border-b border-[#1e2a3a]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#10b98115] border border-[#10b98130] flex items-center justify-center">
                    <Building2 size={24} className="text-[#10b981]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-text">Full Stack Development Intern</h3>
                    <p className="text-[#10b981] font-medium mt-0.5">Newmak Technology, Tamilnadu</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b98115] border border-[#10b98130] w-fit">
                  <Calendar size={13} className="text-[#10b981]" />
                  <span className="font-mono text-xs text-[#10b981]">Jun 2025 — Jun 2025</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-subtle leading-relaxed mb-8">
                Worked on full-stack web application development using modern web technologies and improved
                teamwork and development skills at Newmak Technology, a software development company
                in Tamilnadu.
              </p>

              <h4 className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Key Highlights</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#10b981] mt-0.5 flex-shrink-0" />
                    <span className="text-subtle text-sm">{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#1e2a3a] flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'REST APIs', 'Git', 'Agile'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
