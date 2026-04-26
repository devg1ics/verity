import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: '$4,800',
    period: 'per audit',
    description: 'For early-stage teams validating a single model or use case.',
    features: [
      'Safety & alignment audit',
      'Standardized benchmark suite',
      'Written findings report',
      'Up to 3 evaluation dimensions',
      'Email support',
    ],
    featured: false,
    cta: 'Get started',
  },
  {
    name: 'Professional',
    price: '$14,000',
    period: 'per audit',
    description: 'For teams shipping AI products that require rigorous due diligence.',
    features: [
      'Everything in Starter',
      'Custom evaluation suite',
      'Red-teaming session',
      'Bias & fairness evaluation',
      'Up to 6 evaluation dimensions',
      'Dedicated evaluator',
      'Remediation review call',
    ],
    featured: true,
    cta: 'Request audit',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For organizations with ongoing evaluation needs or regulatory requirements.',
    features: [
      'Everything in Professional',
      'Continuous monitoring',
      'Compliance documentation',
      'Regulatory mapping (EU AI Act, NIST)',
      'Unlimited dimensions',
      'Priority SLA',
      'Quarterly re-evaluations',
    ],
    featured: false,
    cta: 'Contact us',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-subtle tracking-widest uppercase mb-4">Pricing</p>
          <h2 className="font-serif text-4xl md:text-5xl text-text max-w-md">
            Straightforward,{' '}
            <em style={{ fontStyle: 'italic' }} className="text-accent">transparent</em>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className={`bg-bg p-8 flex flex-col ${
                plan.featured ? 'outline outline-1 outline-accent outline-offset-0 relative z-10' : ''
              }`}
            >
              {plan.featured && (
                <span className="font-mono text-xs text-accent tracking-wider uppercase mb-4">
                  Most popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="font-sans text-sm font-semibold text-text mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="font-serif text-4xl text-text">{plan.price}</span>
                  <span className="font-mono text-xs text-subtle">{plan.period}</span>
                </div>
                <p className="font-sans text-xs text-subtle leading-relaxed">{plan.description}</p>
              </div>

              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="font-mono text-accent text-xs mt-0.5 shrink-0">✓</span>
                    <span className="font-sans text-xs text-subtle">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`font-sans text-sm font-medium px-6 py-2.5 text-center transition-colors ${
                  plan.featured
                    ? 'bg-accent text-bg hover:bg-accent/90'
                    : 'border border-border text-text hover:border-muted'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
