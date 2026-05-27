import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    number: '01',
    title: 'Cricket Management System',
    description:
      'Developed a full-stack cricket management system using PHP and MySQL to manage teams, players, and match details. Features include player registration, team management, live score tracking, and match statistics.',
    tags: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Web Development'],
    color: '#00d4ff',
    gradient: 'from-[#00d4ff15] to-transparent',
    icon: '🏏',
    github: 'https://github.com/ALAGAPPAN-IN',
    live: null,
  },
  {
    number: '02',
    title: 'Healthcare Conversation AI',
    description:
      'AI-powered healthcare conversation assistant with chatbot interaction and modern interface. Provides instant medical query responses, symptom checking, and health guidance through an intuitive conversational UI.',
    tags: ['AI', 'Chatbot', 'Healthcare', 'Web Dev'],
    color: '#10b981',
    gradient: 'from-[#10b98115] to-transparent',
    icon: '🏥',
    github: 'https://github.com/ALAGAPPAN-IN',
    live: 'https://healthcare-conversation-ai.onrender.com',
  },
]

export default function Projects() {
  const { ref, visible } = useReveal()

  return (
    <section id="projects" className="py-28 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#7c3aed] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#7c3aed]">04.</span>
          <span className="font-mono text-xs text-muted uppercase tracking-widest">projects</span>
          <div className="flex-1 h-px bg-[#1e2a3a]" />
        </div>

        <h2 className={`section-heading text-4xl sm:text-5xl font-extrabold mb-16 reveal ${visible ? 'visible' : ''}`}>
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`project-card glass-card grad-border rounded-2xl overflow-hidden reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${p.gradient} p-8 border-b border-[#1e2a3a]`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0d1117] border border-[#1e2a3a] flex items-center justify-center text-3xl">
                    {p.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-[#0d1117] border border-[#1e2a3a] flex items-center justify-center text-muted hover:text-text hover:border-[#00d4ff44] transition-all"
                    >
                      <Github size={16} />
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                        style={{ background: `${p.color}20`, border: `1px solid ${p.color}44`, color: p.color }}
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <span className="font-mono text-xs" style={{ color: p.color }}>
                  project_{p.number}
                </span>
                <h3 className="font-display text-2xl font-bold text-text mt-1">{p.title}</h3>
              </div>

              {/* Card body */}
              <div className="p-8">
                <p className="text-subtle leading-relaxed mb-6">{p.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all"
                    style={{ color: p.color }}
                  >
                    <ExternalLink size={14} />
                    View Live Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
