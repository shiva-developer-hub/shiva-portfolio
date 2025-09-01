import { EXPERIENCE } from '../data/site'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-fixed">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-6"
        >
          Experience
        </motion.h2>

        <div className="grid gap-6">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="card p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{exp.role} – {exp.company}</h3>
                <span className="text-sm text-neutral-500">{exp.period}</span>
              </div>
              <ul className="mt-3 grid gap-2 list-disc pl-5">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="text-neutral-700 dark:text-neutral-300">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}