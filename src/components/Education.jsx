import { motion } from 'framer-motion'
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science and Engineering',
      institution: 'Green University of Bangladesh',
      location: 'Dhaka, Bangladesh',
      period: '2022 - 2026',
      description: 'Focusing on cybersecurity, machine learning, and computer vision. Working on thesis in NLP and ML. Active participant in security labs and AI workshops.',
      achievements: [
        'Thesis in Machine Learning & NLP Research',
        'Computer Vision Project using YOLOv11',
        'Developed Python-based security tools',
      ],
      gpa: 'CGPA: 3.55/4.00',
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Government Science College',
      location: 'Dhaka, Bangladesh',
      period: '2018 - 2020',
      description: 'Specialized in Science with focus on Mathematics, Physics, and Chemistry. Achieved perfect GPA.',
      achievements: [
        'Perfect GPA 5.00/5.00',
        'Science Group',
      ],
      gpa: 'GPA: 5.00/5.00',
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Monipur High School and College',
      location: 'Dhaka, Bangladesh',
      period: '2007 - 2018',
      description: 'Completed secondary education with excellent academic performance.',
      achievements: [
        'Perfect GPA 5.00/5.00',
      ],
      gpa: 'GPA: 5.00/5.00',
    },
  ]

  const certifications = [
    {
      name: 'Introduction to Security Course',
      issuer: 'Czech Technical University (CVUT)',
      date: 'Feb 2026',
      image: 'https://cybersecurity.bsy.fel.cvut.cz/certificates/2526-5b8d8267-4777-91a5-8c986cedb8a3.png',
      skills: 'Security Fundamentals, Cybersecurity, Network Defense',
      details: 'Completed the Introduction to Security Course offered by CVUT Stratosphere Laboratory, covering fundamental cybersecurity concepts, security principles, and practical defense strategies.',
    },
    {
      name: 'Endpoint Security',
      issuer: 'Cisco',
      date: 'Jan 2026',
      image: '/EndpointSecurityUpdate20260104-31-8eqp0z_page-0001.jpg',
      skills: 'Network Security, Threat Detection, Endpoint Protection',
      details: 'Learned how to protect devices and networks from threats. Covered malware detection and security strategies to keep systems safe.',
    },
    {
      name: 'Artificial Intelligence, Machine Learning & The IoT Bootcamp',
      issuer: 'Bondstein Technologies Limited',
      date: 'Nov 2025',
      image: '/Bondstein_page-0001.jpg',
      skills: 'Machine Learning, Deep Learning, IoT Development',
      details: 'Hands-on bootcamp where I worked with AI and machine learning models. Built projects combining AI with IoT devices in real scenarios.',
    },
    {
      name: 'Ethical Hacker',
      issuer: 'Cisco',
      date: 'Jul 2025',
      image: '/EthicalHackerUpdate20250723-30-fm0qea_page-0001.jpg',
      skills: 'Penetration Testing, Vulnerability Assessment, Ethical Hacking',
      details: 'Learned how to find security weaknesses in systems and test their defenses. Focused on ethical hacking and helping organizations stay secure.',
    },
  ]

  const awards = [
    {
      name: 'Dean Award',
      issuer: 'Green University of Bangladesh',
      date: 'Nov 2025',
      image: '/Dean Award_page-0001.jpg',
      skills: 'Academic Excellence',
      details: 'Recognition from my university for doing well in my studies and contributing to research projects. Shows consistent performance and dedication.',
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
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            My academic background and certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <FiBookOpen className="text-primary-600" />
              Academic Background
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm rounded-full font-medium">
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

            {/* Awards */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                <FiAward className="text-primary-600" />
                Awards
              </h3>
              <div className="grid gap-4">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card p-5 hover:-translate-y-1 flex items-center gap-4"
                  >
                    <a
                      href={award.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={award.image}
                        alt={award.name}
                        className="w-32 h-24 object-cover rounded-lg border border-gray-300 dark:border-dark-400 shadow-md hover:shadow-lg transition-shadow"
                      />
                    </a>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {award.name}
                      </h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {award.issuer} • {award.date}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {award.details}
                      </p>
                      <p className="text-xs text-primary-600 dark:text-primary-500 font-medium">
                        <span className="font-semibold">Skills:</span> {award.skills}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <FiAward className="text-primary-600" />
              Certifications
            </h3>
            <div className="grid gap-4 w-full">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-5 hover:-translate-y-1 flex items-center gap-4"
                >
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-32 h-24 object-cover rounded-lg border border-gray-300 dark:border-dark-400 shadow-md hover:shadow-lg transition-shadow"
                    />
                  </a>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {cert.issuer} • {cert.date}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {cert.details}
                    </p>
                    <p className="text-xs text-primary-600 dark:text-primary-500 font-medium">
                      <span className="font-semibold">Skills:</span> {cert.skills}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
