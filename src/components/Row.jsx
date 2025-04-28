import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import './Row.css';  // Import the CSS file for custom styles

export default function Row({ index, data }) {
  const controls = useAnimation();
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="row"
    >
      {/* Header */}
      <h2 className="row-header">{data.name}</h2>

      {/* Content */}
      <div className={`row-content ${isEven ? "" : "row-reverse"}`}>
        {/* Text */}
        <div className="row-text">{data.text}</div>

        {/* Image */}
        <div className="row-image-container">
          <img
            src={data.image}
            alt={data.name}
            className="row-image"
          />
        </div>
      </div>
    </motion.div>
  );
}