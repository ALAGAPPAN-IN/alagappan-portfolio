import { GraduationCap, MapPin, Code2, Zap } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#00d4ff]">01.</span>
          <span className="font-mono text-xs text-muted uppercase tracking-widest">about me</span>
          <div className="flex-1 h-px bg-[#1e2a3a]" />
        </div>

        <h2 className={`section-heading text-4xl sm:text-5xl font-extrabold mb-16 reveal ${visible ? 'visible' : ''}`}>
          Who <span className="gradient-text">I Am</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <p className="text-subtle text-lg leading-relaxed mb-6">
              I am currently pursuing{' '}
              <span className="text-[#00d4ff]">B.E Computer Science Engineering</span> at{' '}
              <span className="text-text font-medium">Sri Ramakrishna Institute of Technology</span>{' '}
              (2023–2027). I am passionate about web development and continuously improving my
              programming and problem-solving skills.
            </p>
            <p className="text-subtle leading-relaxed mb-8">
              I specialize in building modern, responsive web applications with a strong focus on
              clean code, performance, and user experience. I love learning new technologies and
              applying them to solve real-world problems.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <GraduationCap size={16} />, label: 'SRIT, Coimbatore', color: '#00d4ff' },
                { icon: <Code2 size={16} />, label: 'B.E CSE 2023–27', color: '#7c3aed' },
                { icon: <MapPin size={16} />, label: 'Karaikudi, Tamilnadu', color: '#10b981' },
                { icon: <Zap size={16} />, label: 'Full Stack Dev', color: '#f59e0b' },
              ].map((f, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl px-4 py-3 flex items-center gap-3 grad-border"
                >
                  <span style={{ color: f.color }}>{f.icon}</span>
                  <span className="font-mono text-xs text-subtle">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code block */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="rounded-2xl overflow-hidden border border-[#1e2a3a] bg-[#0d1117]">
              {/* Window bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e2a3a] bg-[#080b12]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="font-mono text-xs text-muted ml-2">alagappan.json</span>
              </div>
              <pre className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
<span className="text-[#4b5563]">{'{'}</span>{'\n'}
<span className="text-[#00d4ff]">  "name"</span><span className="text-[#4b5563]">: </span><span className="text-[#10b981]">"N. Alagappan"</span><span className="text-[#4b5563]">,</span>{'\n'}
<span className="text-[#00d4ff]">  "role"</span><span className="text-[#4b5563]">: </span><span className="text-[#10b981]">"Web Developer"</span><span className="text-[#4b5563]">,</span>{'\n'}
<span className="text-[#00d4ff]">  "college"</span><span className="text-[#4b5563]">: </span><span className="text-[#10b981]">"SRIT, CBE"</span><span className="text-[#4b5563]">,</span>{'\n'}
<span className="text-[#00d4ff]">  "year"</span><span className="text-[#4b5563]">: </span><span className="text-[#a78bfa]">2</span><span className="text-[#4b5563]">,</span>{'\n'}
<span className="text-[#00d4ff]">  "stack"</span><span className="text-[#4b5563]">: [</span>{'\n'}
<span className="text-[#10b981]">    "React"</span><span className="text-[#4b5563]">, </span><span className="text-[#10b981]">"Node.js"</span><span className="text-[#4b5563]">,</span>{'\n'}
<span className="text-[#10b981]">    "Angular"</span><span className="text-[#4b5563]">, </span><span className="text-[#10b981]">"MongoDB"</span>{'\n'}
<span className="text-[#4b5563]">  ],</span>{'\n'}
<span className="text-[#00d4ff]">  "available"</span><span className="text-[#4b5563]">: </span><span className="text-[#f59e0b]">true</span><span className="text-[#4b5563]">,</span>{'\n'}
<span className="text-[#00d4ff]">  "hobbies"</span><span className="text-[#4b5563]">: [</span><span className="text-[#10b981]">"Cricket"</span><span className="text-[#4b5563]">, </span><span className="text-[#10b981]">"Eating"</span><span className="text-[#4b5563]">]</span>{'\n'}
<span className="text-[#4b5563]">{'}'}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
