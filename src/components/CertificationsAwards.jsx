import { motion } from 'framer-motion'
import { FiAward, FiGlobe } from 'react-icons/fi'

const CertificationsAwards = () => {
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

  const languages = [
    {
      name: 'Bengali',
      level: 'Native/Bilingual',
      proficiency: 100,
      description: 'Native speaker with complete fluency and cultural understanding'
    },
    {
      name: 'English',
      level: 'Fluent',
      proficiency: 90,
      description: 'Professional proficiency in technical communication and documentation'
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certifications & Awards</h2>
          <p className="section-subtitle">
            Professional certifications and recognition of excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 auto-rows-max">
          {/* Certifications */}
          <div className="space-y-6 h-full">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <FiAward className="text-primary-600" />
              Certifications
            </h3>
            <div className="grid gap-4 w-full">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
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

          {/* Awards & Languages */}
          <div className="space-y-6 flex flex-col h-full">
            {/* Awards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <FiAward className="text-primary-600" />
                Awards
              </h3>
              <div className="grid gap-4">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.name}
                    initial={{ opacity: 0, x: 20 }}
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

            {/* Languages */}
            <div className="space-y-6 flex-1 pt-6 border-t border-gray-200 dark:border-dark-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <FiGlobe className="text-primary-600" />
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card p-4 flex flex-col items-center gap-3"
                  >
                    <img 
                      src={lang.name === 'Bengali' ? '/languages-bengali.svg' : '/languages-english.svg'} 
                      alt={lang.name} 
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-gray-600 dark:text-gray-400 text-center leading-tight">
                      {lang.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-semibold rounded-full">
                      {lang.level === 'Native/Bilingual' ? 'Native' : 'Fluent'}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationsAwards
