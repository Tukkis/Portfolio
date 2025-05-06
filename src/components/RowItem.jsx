import React, { useState, useEffect, useRef } from 'react';
import './RowItem.css';

const RowItem = ({ index, imageSrc, title, shortDescription, longDescription, features, keywords }) => {
  const isEven = index % 2 === 0;
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const itemRef = useRef(null);

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
        setOpacity(0.2);
      } else {
        setOpacity(1);
      }
    };

    handleScroll(); // Run once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        ref={(el) => {
          itemRef.current = el; 
        }}
        className={`row-item ${isOpen ? 'expanded-row' : ''}`}
        style={{
          flexDirection: isEven ? 'row' : 'row-reverse',
          opacity,
          transition: 'opacity 0.3s ease, height 0.4s ease',
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
          <h3>{title}</h3>
          <p>{isOpen ? longDescription : shortDescription}</p>
          {isOpen && features?.length > 0 && (
            <ul className="feature-list">
              {features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
          )}
          {isOpen && keywords?.length > 0 && (
            <div className="tech-stack">
              <h4>Keywords:</h4>
              <div className="tech-badges">
                {keywords.map((keyword, idx) => (
                  <span key={idx} className="tech-badge">{keyword}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RowItem;
