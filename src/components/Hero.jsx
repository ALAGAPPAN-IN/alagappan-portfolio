import { useState, useEffect } from 'react'
import { Github, Linkedin, ArrowDown, Terminal, Sparkles } from 'lucide-react'

const roles = ['Web Developer', 'Full Stack Engineer', 'CSE Student', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      {/* Animated background orbs */}
      <div className="bg-orb w-[600px] h-[600px] bg-[#00d4ff] opacity-[0.04] top-[-200px] left-[-200px]" />
      <div className="bg-orb w-[500px] h-[500px] bg-[#7c3aed] opacity-[0.05] bottom-[-100px] right-[-100px]" />
      <div className="bg-orb w-[300px] h-[300px] bg-[#10b981] opacity-[0.04] top-[40%] right-[10%]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 pt-24 lg:pt-0">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b98115] border border-[#10b98130] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="font-mono text-xs text-[#10b981]">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-none tracking-tight">
            <span className="text-text">N. </span>
            <span className="gradient-text">Alagappan</span>
          </h1>

          {/* Role typewriter */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 h-10">
            <Terminal size={18} className="text-[#00d4ff]" />
            <span className="font-mono text-lg sm:text-xl text-[#00d4ff]">
              {displayed}<span className="cursor text-[#00d4ff]">|</span>
            </span>
          </div>

          {/* Bio */}
          <p className="text-subtle text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 font-body">
            Passionate web developer building fast, responsive experiences. Turning ideas into clean, scalable code — one commit at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/ALAGAPPAN-IN"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00d4ff] text-[#080b12] font-semibold font-body text-sm hover:bg-[#22d8f5] transition-all duration-300"
            >
              <Github size={18} />
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/alagappan-n-24a385314"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#7c3aed55] bg-[#7c3aed15] text-[#a78bfa] font-semibold font-body text-sm hover:border-[#7c3aed] transition-all duration-300"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
            {[
              { num: '7+', label: 'Certifications' },
              { num: '2+', label: 'Projects' },
              { num: '1', label: 'Internship' },
            ].map(s => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-[#00d4ff]">{s.num}</div>
                <div className="font-mono text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <div className="flex-shrink-0 relative">
          {/* Rotating dashed ring */}
          <svg
            className="absolute inset-0 w-full h-full profile-ring"
            viewBox="0 0 300 300"
            style={{ width: '100%', height: '100%' }}
          >
            <circle
              cx="150" cy="150" r="140"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              opacity="0.5"
            />
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>

          {/* Glow blob behind image */}
          <div className="absolute inset-8 blob bg-gradient-to-br from-[#00d4ff20] to-[#7c3aed20] rounded-full" />

          {/* Profile picture */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-[#00d4ff20] m-6 glow-accent">
            <div className="w-full h-full bg-gradient-to-br from-[#0d1117] to-[#111827] flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="N. Alagappan"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0d1117] border border-[#00d4ff30] px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap">
            <Sparkles size={14} className="text-[#00d4ff]" />
            <span className="font-mono text-xs text-[#00d4ff]">SRIT • CSE • 2027</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-[#00d4ff] transition-colors animate-bounce"
      >
        <span className="font-mono text-xs">scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
