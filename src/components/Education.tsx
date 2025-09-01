import { CERTIFICATIONS, EDUCATION } from '../data/site'
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
          Education & Certifications
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card p-5">
            <h3 className="font-semibold mb-3">Education</h3>
            <ul className="grid gap-2">
              {EDUCATION.map((e, i) => (
                <li key={i} className="text-neutral-700 dark:text-neutral-300">
                  {e.title} — {e.year}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold mb-3">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((c) => (
                <span key={c} className="badge">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}