import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-6 mt-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Shiva — Full Stack Developer
      </footer>
    </div>
  )
}