import { EDUCATION } from '../data/site'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-fixed">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-6"
        >
          Education
        </motion.h2>

        <div className="card p-5">
          <ul className="grid gap-3">
            {EDUCATION.map((e, i) => (
              <li key={i} className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium">{e.title}</p>
                  {e.school && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{e.school}</p>
                  )}
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap">{e.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}