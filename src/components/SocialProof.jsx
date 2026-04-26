import { motion } from 'framer-motion'

const companies = [
  'Archon Labs',
  'Meridian AI',
  'Tessellate',
  'Orbis Systems',
  'Crestline Tech',
]

export default function SocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border-y border-border py-8"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <p className="font-mono text-xs text-muted tracking-widest uppercase whitespace-nowrap shrink-0">
            Trusted by
          </p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-12">
            {companies.map((name) => (
              <span key={name} className="font-mono text-sm text-muted hover:text-subtle transition-colors cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
