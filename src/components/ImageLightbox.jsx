import React from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { X } from 'lucide-react';

    const ImageLightbox = ({ imageUrl, altText, onClose }) => {
      if (!imageUrl) return null;

      return (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-3xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()} 
            >
              <img src={imageUrl} alt={altText} className="w-full h-full object-contain" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/75 rounded-full p-2 transition-colors"
                aria-label="Close image viewer"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      );
    };

    export default ImageLightbox;