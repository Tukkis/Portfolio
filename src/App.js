import { useEffect, useState, useRef } from 'react';
import RowItem from './components/RowItem';
import './App.css'; // ← new CSS file

import CV_IMG from './images/CV_IMG.jpg'
import Helip_intro from './images/Helip_intro.png'

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const projects = [{
    name: 'Helip',
    text: 'An easy to use and beautiful location application.',
    longText: 'This is a long description of the Helip app. It helps you navigate and find locations easily.',
    image: Helip_intro,
  },
  {
    name: "Project Two",
    text: "Another project description.",
    longText: "This is a long description of Project Two. It's a feature-rich project with many possibilities.",
    image: Helip_intro,
  }]

  const handleScroll = () => {
    const scrollY = window.scrollY;
    /* const homeTop = homeRef.current.offsetTop; */
    const projectsTop = projectsRef.current.offsetTop;
    const contactTop = contactRef.current.offsetTop;

    const currentSection =
      scrollY >= contactTop - 200
        ? 'contact'
        : scrollY >= projectsTop - 200
        ? 'projects'
        : 'home';
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="portfolio-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <button
          onClick={() => scrollTo(homeRef)}
          className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
        >
          Home
        </button>
        <button
          onClick={() => scrollTo(projectsRef)}
          className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollTo(contactRef)}
          className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
        >
          Contact
        </button>
      </nav>

      {/* Home Section */}
      <section ref={homeRef} className="section home-section">
        <div className="home-content">
          <h1>Hi, I'm Tuukka Heinonen</h1>
          <p>
            Full-stack developer specialized in React and databases. Passionate about problem-solving,
            mentoring, and continuous learning. Currently finishing my BBA in Software Development at
            Haaga-Helia University with a strong academic track record and a submitted React Native thesis.
          </p>
          <img src={CV_IMG} alt="Profile pic"></img>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="section projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, i) => (
            <RowItem
              key={i}
              index={i}
              imageSrc={project.image}
              title={project.name}
              shortDescription={project.text}
              longDescription={project.longText}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="section contact-section">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p>You can reach me at:</p>
          <p><strong>Email:</strong> <a href="mailto:Tukkis96@outlook.com">Tukkis96@outlook.com</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/Tukkis" target="_blank" rel="noopener noreferrer">github.com/Tukkis</a></p>
        </div>
      </section>
    </div>
  );
};

export default App;
