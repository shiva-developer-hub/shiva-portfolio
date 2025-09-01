import { motion } from 'framer-motion'
import { SITE } from '../data/site'

export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="container-fixed grid lg:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            {SITE.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg text-neutral-700 dark:text-neutral-300"
          >
            {SITE.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-neutral-600 dark:text-neutral-400"
          >
            {SITE.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 flex gap-3"
          >
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="justify-self-center w-40 h-40 sm:w-52 sm:h-52 rounded-full ring-4 ring-brand-500/20 bg-gradient-to-br from-brand-500/20 to-brand-700/10 flex items-center justify-center text-5xl"
          aria-label="Shiva avatar placeholder"
        >
          👨‍💻
        </motion.div>
      </div>
    </section>
  )
}