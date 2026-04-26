import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-text text-xl tracking-tight">
          Verity
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="font-sans text-sm text-subtle hover:text-text transition-colors">
            Services
          </a>
          <a href="#process" className="font-sans text-sm text-subtle hover:text-text transition-colors">
            Process
          </a>
          <a href="#pricing" className="font-sans text-sm text-subtle hover:text-text transition-colors">
            Pricing
          </a>
          <a
            href="#contact"
            className="font-sans text-sm font-medium px-4 py-1.5 border border-accent text-accent hover:bg-accent hover:text-bg transition-colors"
          >
            Request Audit
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
