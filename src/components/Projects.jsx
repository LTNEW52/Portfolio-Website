import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder, FiGrid, FiList } from 'react-icons/fi'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Electronic Component Detection (YOLOv11)',
      description: 'Developed an object detection system using YOLOv11 for electronic component recognition. Implemented dataset preparation, model training, and performance evaluation. Built with Streamlit for easy interaction and visualization.',
      image: '/Electronic component.png',
      tags: ['Python', 'YOLOv11', 'Computer Vision', 'OpenCV', 'Streamlit'],
      category: 'ml',
      github: 'https://github.com/LTNEW52/Bondstein-Project-Electronic-Component-Detection',
      demo: null,
    },
    {
      id: 2,
      title: 'Apocrypha - OSINT Reconnaissance Tool',
      description: 'Designed and developed a comprehensive Python-based reconnaissance tool to automate information gathering tasks. Implemented modules for IP/MAC manipulation, domain intelligence, DNS reconnaissance, and web information gathering from a single CLI interface.',
      image: '/Apocrypha.jpg',
      tags: ['Python', 'OSINT', 'Cybersecurity', 'Automation', 'CLI'],
      category: 'security',
      github: 'https://github.com/LTNEW52/Apocrypha',
      demo: null,
    },
    {
      id: 3,
      title: 'Everything About CyberSecurity - CTF & Labs',
      description: 'Comprehensive collection of cybersecurity learning materials including Capture The Flag challenges (PicoCTF, Bandit, OverTheWire), Portswigger Academy labs, and penetration testing reports. Covers authentication, SQL injection, path traversal, and server-side vulnerabilities.',
      image: '/Everything about cyber.png',
      tags: ['Cybersecurity', 'CTF', 'Pentest', 'Web Security', 'Kali Linux'],
      category: 'security',
      github: 'https://github.com/LTNEW52/Everything-About-CyberSecurity',
      demo: null,
    },
    {
      id: 4,
      title: 'AES + RSA Encryption/Decryption',
      description: 'Educational project implementing hybrid encryption combining AES (symmetric) and RSA (asymmetric) cryptography. Hard-coded implementation to demonstrate encryption fundamentals, key generation, and secure communication principles.',
      image: '/AESRSA.png',
      tags: ['JavaScript', 'Cryptography', 'AES', 'RSA', 'Security'],
      category: 'security',
      github: 'https://github.com/LTNEW52/University-Projects/tree/main/Cyber%20Security%20Project',
      demo: null,
    },
    {
      id: 5,
      title: 'Aloghor - Bangla Book Club Platform',
      description: 'Full-stack MERN application for an online book club community. Features include book browsing, purchasing functionality, and member communication. Designed to promote reading culture and community engagement in Bengali-speaking audiences.',
      image: '/Aloghor.png',
      tags: ['MERN', 'React', 'Node.js', 'MongoDB', 'Community'],
      category: 'web',
      github: 'https://github.com/LTNEW52/University-Projects/tree/main/Aloghor',
      demo: null,
    },
  ]

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Machine Learning', value: 'ml' },
    { name: 'Security', value: 'security' },
    { name: 'Web', value: 'web' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === f.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-400'
              }`}
            >
              {f.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card overflow-hidden group`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FiFolder className="text-primary-600 dark:text-primary-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-300 text-gray-600 dark:text-gray-400 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* GitHub Link */}
                  {project.github && (
                    <div className="flex justify-center">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" 
                         className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium">
                        <FiGithub size={18} />
                        View on GitHub
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
