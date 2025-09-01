import { motion } from 'framer-motion'
import { SKILLS } from '../data/site'

function SkillGroup({ title, items }: { title: string, items: readonly string[] }) {
  return (
    <div className="card p-5">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="badge">{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-fixed">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-6"
        >
          Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillGroup title="Frontend" items={SKILLS.frontend} />
          <SkillGroup title="Backend" items={SKILLS.backend} />
          <SkillGroup title="Database" items={SKILLS.database} />
          <SkillGroup title="Cloud & DevOps" items={SKILLS.cloud} />
          <SkillGroup title="AI & Tools" items={SKILLS.ai} />
        </div>
      </div>
    </section>
  )
}