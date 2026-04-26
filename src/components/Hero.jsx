import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function DotGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(200,240,96,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage:
          'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
      }}
    />
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <DotGrid />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="font-mono text-xs text-subtle tracking-widest uppercase mb-8">
            AI Evaluation & Safety
          </motion.p>

          <motion.h1
            variants={item}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-text leading-tight mb-8"
          >
            Know what your{' '}
            <br className="hidden md:block" />
            AI{' '}
            <em className="font-serif-italic text-accent not-italic" style={{ fontStyle: 'italic' }}>
              actually
            </em>{' '}
            does.
          </motion.h1>

          <motion.p variants={item} className="font-sans text-base md:text-lg text-subtle max-w-xl mx-auto mb-12 leading-relaxed">
            Independent audits, red-teaming, and alignment assessments for AI systems
            that matter.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="font-sans text-sm font-medium px-8 py-3 bg-accent text-bg hover:bg-accent/90 transition-colors"
            >
              Request an Audit
            </a>
            <a
              href="#services"
              className="font-sans text-sm font-medium px-8 py-3 border border-border text-text hover:border-muted transition-colors"
            >
              See Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
