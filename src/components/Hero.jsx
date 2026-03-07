import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useState } from 'react'
import CVPreviewModal from './CVPreviewModal'

const Hero = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false)
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image - Large Square */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex-shrink-0 group"
          >
            <div className="w-72 sm:w-80 md:w-96 lg:w-[420px] h-96 sm:h-[480px] md:h-[550px] lg:h-[600px] rounded-2xl overflow-hidden border-4 border-transparent group-hover:border-primary-500 shadow-2xl transition-all duration-300">
              <img
                src="/profile1.jpeg"
                alt="Labib Tahmid"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2 text-lg">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-gray-900 dark:text-white">Labib</span> <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Tahmid</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              ML & NLP Researcher | Computer Vision Developer | Cybersecurity Enthusiast
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => setIsCVModalOpen(true)}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <FiDownload />
                View & Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="mailto:labibtahmid93@gmail.com"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-300 text-gray-700 
                         dark:text-gray-300 hover:bg-primary-600 hover:text-white 
                         transition-all duration-300 hover:-translate-y-1"
              >
                <FiMail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/labib-tahmid-new52/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-300 text-gray-700 
                         dark:text-gray-300 hover:bg-primary-600 hover:text-white 
                         transition-all duration-300 hover:-translate-y-1"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="https://wa.me/8801521738504"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-300 text-gray-700 
                         dark:text-gray-300 hover:bg-primary-600 hover:text-white 
                         transition-all duration-300 hover:-translate-y-1"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://github.com/LTNEW52"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-300 text-gray-700 
                         dark:text-gray-300 hover:bg-primary-600 hover:text-white 
                         transition-all duration-300 hover:-translate-y-1"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.facebook.com/labib.tahmid.881269"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-300 text-gray-700 
                         dark:text-gray-300 hover:bg-primary-600 hover:text-white 
                         transition-all duration-300 hover:-translate-y-1"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <FiArrowDown className="animate-bounce" size={20} />
          </a>
        </motion.div>
      </div>

      {/* CV Preview Modal */}
      <CVPreviewModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </section>
  )
}

export default Hero
