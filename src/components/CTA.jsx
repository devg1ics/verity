import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="py-40 border-b border-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs text-subtle tracking-widest uppercase mb-8">
            Get started
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text mb-10 leading-tight">
            Build AI you can{' '}
            <em style={{ fontStyle: 'italic' }} className="text-accent">
              defend
            </em>
            .
          </h2>
          <p className="font-sans text-sm text-subtle mb-12 max-w-sm mx-auto leading-relaxed">
            Schedule a 30-minute scoping call. We'll tell you exactly what an evaluation
            would cover and what you'd walk away with.
          </p>
          <a
            href="mailto:hello@verity.ai"
            className="inline-block font-sans text-sm font-medium px-10 py-3.5 bg-accent text-bg hover:bg-accent/90 transition-colors"
          >
            Book a Scoping Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
