import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiShield, FiAward } from 'react-icons/fi'

const About = () => {
  // Project data
  const projects = [
    { category: 'ml' },
    { category: 'security' },
    { category: 'security' },
    { category: 'security' },
    { category: 'web' },
  ]

  // Calculate stats dynamically
  const totalProjects = projects.length
  const mlProjects = projects.filter(p => p.category === 'ml').length
  const securityProjects = projects.filter(p => p.category === 'security').length
  const certifications = 4 // From your education section

  const stats = [
    { icon: <FiShield />, value: `${securityProjects}+`, label: 'Security Projects' },
    { icon: <FiAward />, value: `${certifications}`, label: 'Certifications' },
    { icon: <FiCode />, value: `${totalProjects}+`, label: 'Projects Completed' },
    { icon: <FiCpu />, value: `${mlProjects}+`, label: 'ML Projects' },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about me, my background, and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I am a Computer Science undergraduate from Green University of Bangladesh, 
                passionate about cybersecurity, ethical hacking, and machine learning. I'm actively 
                learning penetration testing, web security, and developing security tools while also 
                pursuing research in natural language processing and computer vision.
              </p>
              <p>
                My hands-on experience includes building Python-based OSINT tools (Apocrypha), 
                participating in CTF challenges, and learning about vulnerability assessment and 
                information security. I've earned certifications in Ethical Hacking and Endpoint 
                Security, and I'm committed to deepening my cybersecurity knowledge through practical 
                projects and continuous learning.
              </p>
              <p>
                Beyond security, I'm also exploring machine learning and NLP through academic research 
                and projects. I enjoy solving complex problems and combining technical skills with 
                creative approaches to develop secure and intelligent solutions.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Cybersecurity', 'Ethical Hacking', 'OSINT', 'Web Security', 'Python', 'Machine Learning'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 
                           dark:text-primary-400 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card p-6 text-center hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 
                              bg-primary-100 dark:bg-primary-900/30 text-primary-600 
                              dark:text-primary-400 rounded-xl">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
