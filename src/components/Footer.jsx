import { FiGithub, FiLinkedin, FiMail, FiHeart, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFacebook, FaXTwitter, FaReddit, FaWhatsapp } from 'react-icons/fa6'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: 'labibtahmid93@gmail.com', href: 'mailto:labibtahmid93@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '+880 1521-738504', href: null },
    { icon: <FiMapPin />, label: 'Location', value: 'Bosila, Dhaka, PO 1207', href: null },
  ]

  const socialLinks = [
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/labib-tahmid-new52/', label: 'LinkedIn' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/8801521738504', label: 'WhatsApp' },
    { icon: <FiGithub />, href: 'https://github.com/LTNEW52', label: 'GitHub' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/labib.tahmid.881269', label: 'Facebook' },
    { icon: <FaXTwitter />, href: 'https://x.com/LabibT', label: 'X' },
    { icon: <FaReddit />, href: 'https://www.reddit.com/user/LTNEW52/', label: 'Reddit' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-dark-100 border-t border-gray-200 dark:border-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div>
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              LTNEW52
            </a>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
              Cybersecurity Analyst passionate about ethical hacking, OSINT, and web security. 
              Also pursuing applied research in Machine Learning and NLP for security applications.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-3">
                  <div className="text-primary-600 dark:text-primary-400 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 
                                 dark:hover:text-primary-400 transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-dark-300 rounded-lg 
                           flex items-center justify-center text-gray-600 dark:text-gray-400
                           hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-125 cursor-pointer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-300 text-left">
          <p className="text-white text-sm">
            © {currentYear} Labib Tahmid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
