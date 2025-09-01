import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-fixed">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="text-neutral-700 dark:text-neutral-300 leading-7"
        >
          I am a Full Stack Developer with 1.5 years of professional experience at EngageBay. Skilled in Java, Spring Boot, React.js, Kafka, and MongoDB, I also have strong expertise in cloud platforms (GCP, Azure, AWS) and DevOps practices (CI/CD, Docker, Kubernetes). I am passionate about building scalable applications, cloud-native deployments, and integrating AI-powered solutions with LLMs, RAG, and LangGraph.
        </motion.p>
      </div>
    </section>
  )
}