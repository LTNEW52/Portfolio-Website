import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      id: 3,
      title: 'Apocrypha - Python-Based Reconnaissance Tool',
      company: 'Personal Project',
      location: 'Remote',
      period: '2025',
      description: [
        'Designed and developed a Python-based reconnaissance tool for automated information gathering',
        'Implemented modules for target enumeration and basic OSINT workflows',
        'Built modular architecture for easy extension and maintenance',
        'Part of a bigger module collection for penetration testing and ethical hacking',
      ],
      type: 'Personal Project',
    },
    {
      id: 1,
      title: 'Machine Learning & NLP Research Project (Thesis)',
      company: 'Green University of Bangladesh',
      location: 'Dhaka, Bangladesh',
      period: '2025 - Present',
      description: [
        'Conducting an applied research project focused on natural language processing using machine learning techniques',
        'Working on data preprocessing, model training, evaluation, and experimental analysis',
        'Using Python-based ML workflows for building and testing NLP models',
        'Collaborating with faculty advisors on research methodology and results',
      ],
      type: 'Research',
    },
    {
      id: 2,
      title: 'Electronic Component Detection - Computer Vision Project',
      company: 'AI / ML Workshop Project',
      location: 'Dhaka, Bangladesh',
      period: '2025',
      description: [
        'Developed an object detection system using YOLOv11 for electronic component recognition',
        'Participated in a hands-on workshop for practical AI/ML experience',
        'Gained practical experience in dataset preparation and annotation',
        'Performed model training, testing, and performance evaluation',
      ],
      type: 'Workshop',
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience & Projects</h2>
          <p className="section-subtitle">
            My hands-on experience and projects
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-900/30 rounded-full"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-100 shadow-lg z-10"></div>

                {/* Content */}
                <div className={`md:w-7/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-8 md:ml-0`}>
                  <div className="card p-6 hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm rounded-full font-medium">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                      {exp.company}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <FiCalendar />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
