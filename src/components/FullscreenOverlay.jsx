import { motion } from 'framer-motion';
import './FullscreenOverlay.css';

const FullscreenOverlay = ({ title, longDescription, onClose }) => {
  return (
    <motion.div
      className="fullscreen-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="overlay-content"
        onClick={(e) => e.stopPropagation()} // prevent closing on content click
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{title}</h2>
        <p>{longDescription}</p>
      </motion.div>
    </motion.div>
  );
};

export default FullscreenOverlay;
