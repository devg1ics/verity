import { motion } from 'framer-motion'

const scores = [
  { label: 'Safety', score: 87, status: 'pass', color: '#a855f7' },
  { label: 'Alignment', score: 74, status: 'review', color: '#f59e0b' },
  { label: 'Bias & Fairness', score: 91, status: 'pass', color: '#a855f7' },
  { label: 'Capability Bounds', score: 62, status: 'fail', color: '#ef4444' },
  { label: 'Compliance', score: 88, status: 'pass', color: '#a855f7' },
]

const statusColors = {
  pass: { bg: 'bg-accent/10', text: 'text-accent', label: 'Pass' },
  review: { bg: 'bg-orange-400/10', text: 'text-orange-400', label: 'Review' },
  fail: { bg: 'bg-red-400/10', text: 'text-red-400', label: 'Fail' },
}

function AuditCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="border border-border bg-surface p-8"
    >
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">Audit Report</p>
          <h3 className="font-sans text-base font-semibold text-text">GPT-Meridian-7B</h3>
          <p className="font-mono text-xs text-subtle mt-1">v2.3.1 · April 2026</p>
        </div>
        <span className="font-mono text-xs px-2.5 py-1 border border-border text-subtle">
          FINAL
        </span>
      </div>

      <div className="flex flex-col gap-5">
        {scores.map((item) => {
          const st = statusColors[item.status]
          return (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-xs text-subtle">{item.label}</span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-text">{item.score}</span>
                  <span className={`font-mono text-xs px-2 py-0.5 ${st.bg} ${st.text}`}>
                    {st.label}
                  </span>
                </div>
              </div>
              <div className="h-px bg-border overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.score}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="absolute top-0 left-0 h-full"
                  style={{ backgroundColor: item.color, height: '1px' }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
        <span className="font-mono text-xs text-subtle">Overall Score</span>
        <span className="font-serif text-2xl text-accent">80.4</span>
      </div>
    </motion.div>
  )
}

export default function ReportPreview() {
  return (
    <section className="py-32 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="font-mono text-xs text-subtle tracking-widest uppercase mb-6">Deliverable</p>
            <h2 className="font-serif text-4xl md:text-5xl text-text mb-6 leading-tight">
              Reports built for{' '}
              <em style={{ fontStyle: 'italic' }} className="text-accent">action</em>,<br />
              not filing.
            </h2>
            <p className="font-sans text-sm text-subtle leading-relaxed mb-8 max-w-sm">
              Every Verity audit produces a structured report with scored dimensions,
              evidence-backed findings, and tiered recommendations your engineering team
              can act on immediately.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Dimension-level scoring with evidence',
                'Severity-classified finding log',
                'Remediation guidance with priority tiers',
                'Retest protocol for resolved issues',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="font-mono text-accent text-xs mt-0.5">—</span>
                  <span className="font-sans text-sm text-subtle">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <AuditCard />
        </div>
      </div>
    </section>
  )
}
