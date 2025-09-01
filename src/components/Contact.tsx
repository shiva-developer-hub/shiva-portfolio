import { useState } from 'react'
import { SITE } from '../data/site'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Placeholder handler - integrate with email service or backend
    setStatus('sent')
  }

  return (
    <section id="contact" className="section">
      <div className="container-fixed">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-6"
        >
          Contact
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card p-5">
            <h3 className="font-semibold mb-3">Reach me</h3>
            <ul className="grid gap-2 text-neutral-700 dark:text-neutral-300">
              <li>Email: <a href={`mailto:${SITE.email}`} className="text-brand-600 hover:underline">{SITE.email}</a></li>
              <li>LinkedIn: <a href={SITE.linkedin} target="_blank" className="text-brand-600 hover:underline">{SITE.linkedin}</a></li>
              <li>GitHub: <a href={SITE.github} target="_blank" className="text-brand-600 hover:underline">{SITE.github}</a></li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="card p-5 grid gap-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="name">Name</label>
              <input id="name" name="name" required className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" />
            </div>
            <div className="flex items-center gap-3">
              <button type="submit" className="btn-primary">Send</button>
              {status === 'sent' && <span className="text-sm text-green-600">Thanks! I'll get back to you soon.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}