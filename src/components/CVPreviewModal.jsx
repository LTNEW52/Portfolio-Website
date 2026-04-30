import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiX, FiDownload } from 'react-icons/fi'

const CVPreviewModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/LabibTahmid_v2.pdf'
    link.download = 'LabibTahmid_v2.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-dark-200 rounded-2xl shadow-2xl max-w-2xl w-full p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Download CV
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Labib Tahmid - Curriculum Vitae
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-dark-300 rounded-lg transition-colors"
          >
            <FiX size={24} className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Content */}
        <div className="border-t dark:border-dark-300 pt-6">
          {/* CV Preview */}
          <div className="mb-6 bg-gray-100 dark:bg-dark-300 rounded-lg overflow-auto max-h-[600px]">
            <embed
              src="/LabibTahmid_v2.pdf"
              type="application/pdf"
              className="w-full h-full"
              style={{ height: '600px' }}
            />
          </div>
          
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700
                     text-white rounded-lg font-medium transition-colors duration-200 w-full justify-center"
          >
            <FiDownload size={20} />
            Download CV (PDF)
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default CVPreviewModal
