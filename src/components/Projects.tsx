import { motion } from 'framer-motion'
import { PROJECTS } from '../data/site'

function ProjectCard({ title, description, tech, github, demo }: (typeof PROJECTS)[number]) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="card p-5 flex flex-col"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-700 dark:text-neutral-300">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map(t => <span key={t} className="badge">{t}</span>)}
      </div>
      <div className="mt-4 flex gap-3">
        <a href={github} target="_blank" rel="noopener" className="btn-ghost">GitHub</a>
        <a href={demo} target="_blank" rel="noopener" className="btn-primary">Live Demo</a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-fixed">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}