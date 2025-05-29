import React from 'react';
import CV_IMG from '../images/CV_IMG.jpg';

const HomeSection = React.forwardRef((props, ref) => (
  <section ref={ref} className="section home-section">
    <div className="home-content">
      <h1>Hi, I'm Tuukka Heinonen</h1>
      <p>
        I’m a full-stack developer who’s all about learning and building. I’ve always been drawn to the creative and logical side of coding. I love how there’s always something new to figure out in development, and that’s what keeps me motivated. Outside of coding, I love gaming, working out, or just finding new things to dive into.
      </p>
      <img src={CV_IMG} alt="Profile pic" />
    </div>
  </section>
));

export default HomeSection;
