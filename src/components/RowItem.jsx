import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './RowItem.css';

const RowItem = ({ index, imageSrc, title, shortDescription, longDescription, features, keywords, githubLink, demoLink, }) => {
  const isEven = index % 2 === 0;
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const itemRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!itemRef.current) return;

      const rect = itemRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;
      const rowY = rect.top + rect.height / 2;
      const distanceFromCenter = Math.abs(centerY - rowY);

      if (distanceFromCenter > windowHeight * 0.27) {
        setOpacity(0.2);
      } else {
        setOpacity(1);
      }
    };

    handleScroll(); 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={itemRef}
      className={`row-item ${isOpen ? 'expanded-row' : ''}`}
      style={{
        flexDirection: isEven ? 'row' : 'row-reverse',
        opacity,
        transition: 'opacity 0.3s ease',
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="image-wrapper">
        <div
          className="slanted-overlay"
          style={{
            clipPath: isEven
              ? 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)'
              : 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        >
          <img src={imageSrc} alt="Row" className="main-image" />
        </div>
      </div>

      <div className="text-content">
        <h3 className="title">{title}</h3>
        <p>{shortDescription}</p>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="expanded"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0 } }} 
              transition={{ duration: 0.4 }}
              className="expandable-content"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0 } }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                }}
              >
                {longDescription}
              </motion.p>

              {features?.length > 0 && (
                <motion.ul
                  className="feature-list"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0 } }} 
                  transition={{
                    delay: 0.35,
                    duration: 0.3,
                  }}
                >
                  {features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </motion.ul>
              )}

              {keywords?.length > 0 && (
                <motion.div
                  className="tech-stack"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0 } }}
                  transition={{
                    delay: 0.5,
                    duration: 0.3,
                  }}
                >
                  <h4>Keywords:</h4>
                  <div className="tech-badges">
                    {keywords.map((keyword, idx) => (
                      <span key={idx} className="tech-badge">{keyword}</span>
                    ))}
                  </div>
                </motion.div>
              )}
              <motion.div 
                className="link-buttons"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0 } }}
                transition={{
                  delay: 0.6,
                  duration: 0.3,
                }}
              >
                <div
                  className={`link-button ${!githubLink ? 'disabled' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (githubLink) window.open(githubLink, '_blank', 'noopener,noreferrer');
                  }}
                >
                  GitHub
                  {!githubLink && <span className="unavailable-overlay">Private</span>}
                </div>

                <div
                  className={`link-button demo ${!demoLink ? 'disabled' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (demoLink) window.open(demoLink, '_blank', 'noopener,noreferrer');
                  }}
                >
                  Live Demo
                  {!demoLink && <span className="unavailable-overlay">Unavailable</span>}
                </div>
              </motion.div>
            </motion.div>
            
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RowItem;