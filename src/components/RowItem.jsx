import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import FullscreenOverlay from './FullscreenOverlay';
import './RowItem.css';

const RowItem = ({ index, imageSrc, title, shortDescription, longDescription }) => {
  const isEven = index % 2 === 0;
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const itemRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Combine inView and custom ref
  useEffect(() => {
    const handleScroll = () => {
      if (!itemRef.current) return;

      const rect = itemRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;
      const rowY = rect.top + rect.height / 2;

      const distanceFromCenter = Math.abs(centerY - rowY);

      if (distanceFromCenter > windowHeight * 0.27) {
        setOpacity(0.7);
      } else {
        setOpacity(1);
      }
    };

    handleScroll(); // Run once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto close overlay if out of view
  useEffect(() => {
    if (!inView && isOpen) {
      setIsOpen(false);
    }
  }, [inView, isOpen]);

  return (
    <>
      <div
        ref={(el) => {
          ref(el); // For useInView
          itemRef.current = el; // For scroll tracking
        }}
        className="row-item"
        style={{
          display: 'flex',
          flexDirection: isEven ? 'row' : 'row-reverse',
          opacity,
          transition: 'opacity 0.3s ease',
        }}
        onClick={() => setIsOpen(true)}
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
          <h3>{title}</h3>
          <p>{shortDescription}</p>
        </div>
      </div>

      {isOpen && (
        <FullscreenOverlay
          title={title}
          longDescription={longDescription}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default RowItem;
