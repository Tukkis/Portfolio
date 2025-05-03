import { useEffect, useState, useRef } from 'react';
import RowItem from './components/RowItem';
import './App.css'; // ← new CSS file

import CV_IMG from './images/CV_IMG.jpg'
import Helip_intro from './images/Helip_intro.png'
import NutriTracker_intro from './images/NutriTracker_intro.png'

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const projects = [
  {
    name: "NutriTracker",
    text: "A mobile app for planning and tracking nutrition using gamification.",
    longText:"NutriTracker is a mobile app that helps users plan and track their nutrition through simple tools and gamified challenges. The goal is to make healthy eating easier, more engaging, and rewarding.",
    features: [
      "Personalized nutrition plans",
      "Meal logging with progress tracking",
      "Gamified challenges tied to goals",
      "Cloud data storage with Firestore",
      "Tested for stability with Jest and RTL"
    ],
    technologies: [
      "React Native",
      "Expo",
      "Firestore",
      "Jest",
      "React Testing Library",
      "Agile Development",
      "Kanban"
    ],
    image: NutriTracker_intro,
  },
  {
    name: "Helip",
    text: "A mobile app that helps users find and explore sports facilities across Finland.",
    longText: "Helip is a mobile application that gives users a comprehensive view of sports facilities in Finland. It makes finding local exercise opportunities easier by integrating up-to-date data and offering user-friendly navigation and community-driven event features.",
    features: [
      "Comprehensive nationwide sports facility data from Lipas.fi",
      "Search and explore gyms, fields, swimming pools, and more",
      "Create and organize events at sports venues",
      "Location-aware suggestions based on user proximity",
      "User-friendly and intuitive interface for quick access to info",
      "Support for both Android and iOS platforms"
    ],
    technologies: [
      "React Native",
      "React",
      "Expo",
      "Firebase",
      "Lipas.fi API",
      "React Navigation",
      "AsyncStorage",
      "Gorhom Bottom Sheet",
      "React Native Elements",
      "React Native Paper",
      "React Native Maps",
      "Community Datetime Picker"
    ],
    image: Helip_intro, 
  }
]

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
            mentoring, and continuous learning. Currently finishing my Bachelor's in Software Development at
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
              features={project.features}
              technologies={project.technologies}
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
