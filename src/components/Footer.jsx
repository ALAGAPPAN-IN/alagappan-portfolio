import { Heart, Code2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2a3a] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <Code2 size={14} className="text-[#00d4ff]" />
          <span>© 2026 N. Alagappan</span>
          <span className="text-[#1e2a3a]">•</span>
          <span>Portfolio Website</span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
          <span>Built with</span>
          <Heart size={12} className="text-[#ef4444] fill-[#ef4444]" />
          <span>using React + Vite + Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
