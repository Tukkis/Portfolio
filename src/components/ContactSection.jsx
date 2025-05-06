import React from 'react';

const ContactSection = React.forwardRef((props, ref) => (
  <section ref={ref} className="section contact-section">
    <h2 className="section-title">Contact</h2>
    <div className="contact-content">
      <p>You can reach me at:</p>
      <p><strong>Email:</strong> <a href="mailto:Tukkis96@outlook.com">Tukkis96@outlook.com</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/Tukkis" target="_blank" rel="noopener noreferrer">github.com/Tukkis</a></p>
    </div>
  </section>
));

export default ContactSection;
