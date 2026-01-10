import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Cybersecurity',
      image: '/Cybersecurity.jpg',
      skills: ['Ethical Hacking', 'Penetration Testing', 'Web Exploitation', 'OSINT', 'Network Security']
    },
    {
      name: 'Programming',
      image: '/Programming.jpg',
      skills: ['Python', 'React', 'SQL', 'C', 'Assembly']
    },
    {
      name: 'Machine Learning',
      image: '/Machine learning.jpg',
      skills: ['Computer Vision (YOLO)', 'NLP', 'Machine Learning', 'Deep Learning']
    },
    {
      name: 'Tools & Technologies',
      image: '/Tools Technique.png',
      skills: ['Nmap', 'Wireshark', 'Burpsuite', 'Linux', 'Git']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and expertise
          </p>
        </motion.div>

        {/* Skill category cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-stretch overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-dark-200"
            >
              {/* Left side - Image */}
              <div className="w-2/5 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Right side - Content */}
              <div className="w-3/5 p-6 flex flex-col justify-start">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.name}
                </h3>
                
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-700 dark:text-gray-300 flex items-center"
                    >
                      <span className="text-primary-600 mr-3 text-lg">✓</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
