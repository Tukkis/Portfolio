import React from 'react';
import CV_IMG from '../images/CV_IMG.jpg';

const HomeSection = React.forwardRef((props, ref) => (
  <section ref={ref} className="section home-section">
    <div className="home-content">
      <h1>Hi, I'm Tuukka Heinonen</h1>
      <p>
        Full-stack developer specialized in React and databases. Passionate about problem-solving,
        mentoring, and continuous learning.
      </p>
      <img src={CV_IMG} alt="Profile pic" />
    </div>
  </section>
));

export default HomeSection;
