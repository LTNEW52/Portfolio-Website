import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      id: 0,
      title: 'Cybersecurity Analyst Intern',
      company: 'Bengal Infosec Limited',
      location: 'Dhaka, Bangladesh',
      period: '04/2026 - Present',
      description: [
        'Developed foundational knowledge in networking and cybersecurity concepts including OSI, ARP, subnetting, routing, VLANs, DNS, DHCP, NAT, proxying, reverse proxying, and load balancing',
        'Gained practical exposure to network infrastructure and security technologies such as routers, switches, firewalls, IDS, and IPS',
        'Performed Cisco Packet Tracer lab exercises covering static routing, RIP, DHCP, VLANs, subinterfaces, and ACL-based traffic filtering',
        'Currently strengthening Linux fundamentals with emphasis on Ubuntu Server, command-line utilities, and Linux file systems',
      ],
      type: 'Internship',
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
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional experience and internships
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full max-w-4xl mx-auto">
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
                className="relative flex flex-col gap-8 w-full"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-100 shadow-lg z-10"></div>

                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-full">
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
