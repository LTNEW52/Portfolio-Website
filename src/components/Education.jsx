import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science and Engineering',
      institution: 'Green University of Bangladesh',
      location: 'Dhaka, Bangladesh',
      period: '2022 - 2026',
      gpa: 'CGPA: 3.55/4.00',
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Government Science College',
      location: 'Dhaka, Bangladesh',
      period: '2018 - 2020',
      gpa: 'GPA: 5.00/5.00',
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Monipur High School and College',
      location: 'Dhaka, Bangladesh',
      period: '2007 - 2018',
      gpa: 'GPA: 5.00/5.00',
    },
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic background and achievements
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                    {edu.institution}
                  </p>
                </div>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm rounded-full font-bold whitespace-nowrap">
                  {edu.gpa}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <FiCalendar />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <FiMapPin />
                  {edu.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
