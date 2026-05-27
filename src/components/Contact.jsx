import { useState } from 'react'
import { Mail, Phone, Github, Linkedin, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const { ref, visible } = useReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('swarnamala1947@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7c3aed] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#7c3aed]">08.</span>
          <span className="font-mono text-xs text-muted uppercase tracking-widest">contact</span>
        </div>

        <h2 className={`section-heading text-4xl sm:text-5xl font-extrabold mb-6 reveal ${visible ? 'visible' : ''}`}>
          Let's <span className="gradient-text">Connect</span>
        </h2>

        <p className={`text-subtle text-lg mb-12 max-w-xl mx-auto reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.1s' }}>
          Open to internships, collaborations, and learning opportunities. Let's build something amazing together.
        </p>

        {/* Contact cards */}
        <div className={`grid sm:grid-cols-2 gap-5 mb-10 reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}>
          {/* Email */}
          <div className="glass-card grad-border rounded-2xl p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff15] border border-[#00d4ff30] flex items-center justify-center">
                <Mail size={18} className="text-[#00d4ff]" />
              </div>
              <div>
                <p className="font-mono text-xs text-muted">Email</p>
                <p className="text-text text-sm font-medium">swarnamala1947@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:swarnamala1947@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#00d4ff] text-[#080b12] font-semibold text-sm hover:bg-[#22d8f5] transition-all glow-btn"
              >
                <Mail size={15} />
                Send Email
              </a>
              <button
                onClick={copyEmail}
                className="w-10 h-10 rounded-xl bg-[#00d4ff15] border border-[#00d4ff30] flex items-center justify-center text-[#00d4ff] hover:bg-[#00d4ff25] transition-all"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="glass-card grad-border rounded-2xl p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#10b98115] border border-[#10b98130] flex items-center justify-center">
                <Phone size={18} className="text-[#10b981]" />
              </div>
              <div>
                <p className="font-mono text-xs text-muted">Phone / WhatsApp</p>
                <p className="text-text text-sm font-medium">+91 8825899337</p>
              </div>
            </div>
            <a
              href="tel:+918825899337"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#10b98115] border border-[#10b98130] text-[#10b981] font-semibold text-sm hover:bg-[#10b98125] transition-all"
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className={`flex items-center justify-center gap-4 reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.3s' }}>
          {[
            { icon: <Github size={20} />, url: 'https://github.com/ALAGAPPAN-IN', label: 'GitHub', color: '#e6edf3' },
            { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/alagappan-n-24a385314', label: 'LinkedIn', color: '#0a66c2' },
            { icon: <MessageSquare size={20} />, url: 'https://www.hackerrank.com/profile/swarnamala1947', label: 'HackerRank', color: '#00ea64' },
            { icon: <ExternalLink size={20} />, url: 'https://leetcode.com/u/Alagappan2006/', label: 'LeetCode', color: '#ffa116' },
          ].map(s => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted hover:-translate-y-1 transition-all duration-300"
              style={{ '--hover-color': s.color }}
              onMouseEnter={e => e.currentTarget.style.color = s.color}
              onMouseLeave={e => e.currentTarget.style.color = ''}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
