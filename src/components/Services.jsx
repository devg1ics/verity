import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="2" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="11" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="11" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Safety Audits',
    description: 'End-to-end behavioral assessment against established safety benchmarks.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Red-Teaming',
    description: 'Adversarial probing to surface failure modes before deployment.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 17L10 3l7 14H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="10" y1="10" x2="10" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Alignment Review',
    description: 'Verify model behavior aligns with stated values and intended use cases.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4h12v9H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 13v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Bias & Fairness',
    description: 'Systematic evaluation of disparate impact across demographic groups.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L2 7v6l8 5 8-5V7L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 2v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Capability Evals',
    description: 'Structured tests to map the true capability frontier of your model.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1h-2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 3h6v4H7V3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 11h8M6 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Compliance Reports',
    description: 'Audit-ready documentation for regulatory and enterprise requirements.',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="py-32 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-subtle tracking-widest uppercase mb-4">What we do</p>
          <h2 className="font-serif text-4xl md:text-5xl text-text max-w-lg">
            Evaluation services for{' '}
            <em style={{ fontStyle: 'italic' }} className="text-accent">serious</em> teams.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="bg-bg p-8 flex flex-col gap-4 hover:bg-surface transition-colors group"
            >
              <div className="text-subtle group-hover:text-accent transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="font-sans text-base font-semibold text-text mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-subtle leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
