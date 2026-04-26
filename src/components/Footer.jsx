import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-muted">
          © 2026 Verity AI, Inc.
        </span>
        <nav className="flex items-center gap-6">
          {[
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' },
            { label: 'Security', href: '#' },
            { label: 'hello@verity.ai', href: 'mailto:hello@verity.ai' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-xs text-muted hover:text-subtle transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </motion.footer>
  )
}
