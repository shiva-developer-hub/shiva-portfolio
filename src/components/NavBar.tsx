import { useState } from 'react'
import { SITE } from '../data/site'
import { FiGithub, FiLinkedin, FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 dark:border-neutral-800/60 backdrop-blur bg-white/70 dark:bg-neutral-950/70">
      <nav className="container-fixed flex items-center justify-between h-16">
        <a href="#hero" className="font-semibold tracking-tight">{SITE.name}</a>
        <button className="sm:hidden p-2" onClick={() => setOpen(o => !o)} aria-label="Toggle Menu">
          <span className="i-ph-list" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <ul className="hidden sm:flex items-center gap-6 text-sm">
          <li><a href="#about" className="hover:text-brand-600">About</a></li>
          <li><a href="#skills" className="hover:text-brand-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-brand-600">Projects</a></li>
          <li><a href="#experience" className="hover:text-brand-600">Experience</a></li>
          <li><a href="#education" className="hover:text-brand-600">Education</a></li>
          <li><a href="#contact" className="hover:text-brand-600">Contact</a></li>
          <li>
            <button onClick={toggle} className="btn-ghost" aria-label="Toggle theme">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
              <span className="sr-only">Toggle theme</span>
            </button>
          </li>
          <li className="flex gap-3">
            <a href={SITE.github} target="_blank" className="hover:text-brand-600" aria-label="GitHub"><FiGithub /></a>
            <a href={SITE.linkedin} target="_blank" className="hover:text-brand-600" aria-label="LinkedIn"><FiLinkedin /></a>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="sm:hidden border-t border-neutral-200 dark:border-neutral-800">
          <div className="container-fixed py-3">
            <div className="flex items-center justify-between mb-3">
              <div />
              <button onClick={toggle} className="btn-ghost" aria-label="Toggle theme">
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </button>
            </div>
            <ul className="grid gap-3 text-sm">
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
              <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
              <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
              <a href="#education" onClick={() => setOpen(false)}>Education</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
              <div className="flex gap-4 pt-2">
                <a href={SITE.github} target="_blank" className="hover:text-brand-600" aria-label="GitHub"><FiGithub /></a>
                <a href={SITE.linkedin} target="_blank" className="hover:text-brand-600" aria-label="LinkedIn"><FiLinkedin /></a>
              </div>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}