import { useReveal } from '../hooks/useReveal'

const skills = [
  {
    name: 'HTML5',
    icon: '🌐',
    color: '#e34f26',
    bg: 'rgba(227,79,38,0.1)',
    border: 'rgba(227,79,38,0.3)',
    level: 90,
  },
  {
    name: 'CSS3',
    icon: '🎨',
    color: '#1572b6',
    bg: 'rgba(21,114,182,0.1)',
    border: 'rgba(21,114,182,0.3)',
    level: 85,
  },
  {
    name: 'Bootstrap',
    icon: '⚡',
    color: '#7952b3',
    bg: 'rgba(121,82,179,0.1)',
    border: 'rgba(121,82,179,0.3)',
    level: 80,
  },
  {
    name: 'Angular',
    icon: '🔺',
    color: '#dd1b16',
    bg: 'rgba(221,27,22,0.1)',
    border: 'rgba(221,27,22,0.3)',
    level: 75,
  },
  {
    name: 'TypeScript',
    icon: '📘',
    color: '#3178c6',
    bg: 'rgba(49,120,198,0.1)',
    border: 'rgba(49,120,198,0.3)',
    level: 70,
  },
  {
    name: 'JavaScript',
    icon: '✨',
    color: '#f7df1e',
    bg: 'rgba(247,223,30,0.1)',
    border: 'rgba(247,223,30,0.3)',
    level: 80,
  },
  {
    name: 'PHP',
    icon: '🐘',
    color: '#777bb4',
    bg: 'rgba(119,123,180,0.1)',
    border: 'rgba(119,123,180,0.3)',
    level: 70,
  },
  {
    name: 'MySQL',
    icon: '🗄️',
    color: '#4479a1',
    bg: 'rgba(68,121,161,0.1)',
    border: 'rgba(68,121,161,0.3)',
    level: 75,
  },
  {
    name: 'Web Dev',
    icon: '🛠️',
    color: '#00d4ff',
    bg: 'rgba(0,212,255,0.1)',
    border: 'rgba(0,212,255,0.3)',
    level: 85,
  },
  {
    name: 'MATLAB',
    icon: '📊',
    color: '#e16619',
    bg: 'rgba(225,102,25,0.1)',
    border: 'rgba(225,102,25,0.3)',
    level: 65,
  },
]

export default function Skills() {
  const { ref, visible } = useReveal()

  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#00d4ff]">03.</span>
          <span className="font-mono text-xs text-muted uppercase tracking-widest">tech stack</span>
          <div className="flex-1 h-px bg-[#1e2a3a]" />
        </div>

        <h2 className={`section-heading text-4xl sm:text-5xl font-extrabold mb-4 reveal ${visible ? 'visible' : ''}`}>
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p className="text-subtle mb-16 font-body">Technologies I work with to build great experiences.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`skill-card glass-card rounded-2xl p-5 text-center cursor-default reveal ${visible ? 'visible' : ''}`}
              style={{
                borderColor: skill.border,
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              <div
                className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center text-2xl mb-3"
                style={{ background: skill.bg, border: `1px solid ${skill.border}` }}
              >
                {skill.icon}
              </div>
              <p className="font-display font-semibold text-sm text-text mb-2">{skill.name}</p>

              {/* Progress bar */}
              <div className="h-1 bg-[#1e2a3a] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: visible ? `${skill.level}%` : '0%',
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                    transitionDelay: `${i * 0.05 + 0.3}s`,
                  }}
                />
              </div>
              <p className="font-mono text-xs text-muted mt-1">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
