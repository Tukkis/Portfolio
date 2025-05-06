import React from 'react';

const Navbar = ({ activeSection, scrollTo, refs }) => (
  <nav className="navbar">
    <button onClick={() => scrollTo(refs.homeRef)} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</button>
    <button onClick={() => scrollTo(refs.projectsRef)} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</button>
    <button onClick={() => scrollTo(refs.contactRef)} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</button>
  </nav>
);

export default Navbar;
