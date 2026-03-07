import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: 'BTTC - A Bangla Tri-class Text Corpus for Spam, Ham, and Promotional Messages',
      authors: 'Labib Tahmid, Istiak Abedin, Kawsar Ahmed, Zinedin Hassan Chowdhury, Babe Sultana',
      year: 2026,
      doi: '10.17632/5wrm959d6f.1',
      url: 'https://doi.org/10.17632/5wrm959d6f.1',
      publishedDate: 'March 5, 2026',
      type: 'Dataset',
      institution: 'Green University of Bangladesh',
      description: 'A comprehensive Bangla dataset containing 10,283 unique labeled messages for spam detection, phishing identification, and linguistic analysis. Features a tri-class classification system (HAM, PROMO, SPAM) with messages from SMS and Telegram sources.',
      categories: ['NLP', 'Machine Learning', 'Data Science', 'Bangla Language'],
      license: 'CC BY 4.0',
    },
  ]

  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle">
            Research publications and datasets contributed to academia
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-8 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header with type badge */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {pub.type}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {pub.publishedDate}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {pub.authors}
                  </p>
                </div>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  <FiExternalLink size={18} />
                  View
                </a>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {pub.description}
              </p>

              {/* Categories and DOI */}
              <div className="flex flex-col md:flex-row gap-6 pt-6 border-t border-gray-200 dark:border-dark-300">
                <div className="flex-1">
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-2 font-semibold">
                    Categories
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pub.categories.map((category) => (
                      <span
                        key={category}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-2 font-semibold">
                    License & DOI
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="text-gray-500 dark:text-gray-400">License:</span> {pub.license}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 break-all">
                      <span className="text-gray-500 dark:text-gray-400">DOI:</span> {pub.doi}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
