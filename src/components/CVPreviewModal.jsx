import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiX, FiDownload } from 'react-icons/fi'

const CVPreviewModal = ({ isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadPDF = async () => {
    setIsDownloading(true)
    try {
      const { jsPDF } = await import('jspdf')
      const img = new Image()
      img.onload = () => {
        const pdf = new jsPDF({
          orientation: img.width > img.height ? 'landscape' : 'portrait',
          unit: 'mm',
          format: 'a4'
        })
        
        // Calculate dimensions to fit A4 while maintaining aspect ratio
        const pageWidth = pdf.internal.pageSize.getWidth()
        const pageHeight = pdf.internal.pageSize.getHeight()
        const imgAspect = img.width / img.height
        
        let imgWidth, imgHeight
        
        if (pageWidth / pageHeight > imgAspect) {
          // Image is taller than page aspect ratio
          imgHeight = pageHeight
          imgWidth = imgHeight * imgAspect
        } else {
          // Image is wider than page aspect ratio
          imgWidth = pageWidth
          imgHeight = imgWidth / imgAspect
        }
        
        // Center the image on the page
        const x = (pageWidth - imgWidth) / 2
        const y = (pageHeight - imgHeight) / 2
        
        pdf.addImage(img, 'PNG', x, y, imgWidth, imgHeight)
        pdf.save('Labib_Tahmid_CV.pdf')
        setIsDownloading(false)
      }
      img.src = '/CV.png'
    } catch (error) {
      console.error('Error downloading CV:', error)
      setIsDownloading(false)
    }
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
            <img
              src="/CV.png"
              alt="Labib Tahmid CV"
              className="w-full h-auto object-contain"
            />
          </div>
          
          <button
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400
                     text-white rounded-lg font-medium transition-colors duration-200 w-full justify-center"
          >
            <FiDownload size={20} />
            {isDownloading ? 'Downloading...' : 'Download CV (PDF)'}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default CVPreviewModal
