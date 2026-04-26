import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Scoping call',
    description:
      'We align on your model, deployment context, risk profile, and what a successful evaluation looks like.',
  },
  {
    number: '02',
    title: 'Evaluation design',
    description:
      'Our team designs a custom evaluation suite — benchmarks, adversarial prompts, and edge-case probes.',
  },
  {
    number: '03',
    title: 'Execution & analysis',
    description:
      'Structured testing with human and automated coverage. Every finding is documented and reproducible.',
  },
  {
    number: '04',
    title: 'Report & recommendations',
    description:
      'A clear, actionable report with severity ratings, evidence, and concrete mitigation guidance.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-32 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-subtle tracking-widest uppercase mb-4">How it works</p>
          <h2 className="font-serif text-4xl md:text-5xl text-text max-w-lg">
            From kickoff to{' '}
            <em style={{ fontStyle: 'italic' }} className="text-accent">clarity</em>.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="flex gap-10 py-8 border-b border-border group"
            >
              <div className="shrink-0 pt-0.5">
                <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors">
                  {step.number}
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 flex-1">
                <h3 className="font-sans text-base font-semibold text-text shrink-0 min-w-[160px]">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-subtle leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
