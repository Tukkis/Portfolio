import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

import './App.css';

import Helip_intro from './images/Helip_intro.png';
import NutriTracker_intro from './images/NutriTracker_intro.png';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeFilters, setActiveFilters] = useState([]);

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const projects = [
    {
      name: "NutriTracker",
      text: "A mobile app for planning and tracking nutrition using gamification.",
      longText: "NutriTracker is a mobile app that helps users plan and track their nutrition through simple tools and gamified challenges.",
      features: [
        "Personalized nutrition plans",
        "Meal logging with progress tracking",
        "Gamified challenges tied to goals",
        "Cloud data storage with Firestore",
        "Tested for stability with Jest and RTL"
      ],
      keywords: [
        "React Native", "Mobile Development", "CI/CD", "Cloud Firestore", "Automated Testing", "Agile", "Kanban"
      ],
      image: NutriTracker_intro,
    },
    {
      name: "Helip",
      text: "A mobile app that helps users find and explore sports facilities across Finland.",
      longText: "Helip is a mobile application that gives users a comprehensive view of sports facilities in Finland...",
      features: [
        "Data from Lipas.fi",
        "Create events at venues",
        "Location-aware suggestions",
        "iOS & Android support"
      ],
      keywords: [
        "React Native", "API Integration", "Firebase", "Mobile UI/UX", "Geolocation", "Cross-Platform Development", "Agile"
      ],
      image: Helip_intro,
    },
    {
      name: "CLI Tool for GitHub Repo Management",
      text: "CLI tool that automates GitHub repo setup, forking, and configuration for MLOps use cases.",
      longText: "This tool automates the creation, configuration, and management of GitHub repositories tailored for MLOps workflows. It includes a repository setup module for initializing branches and secrets, and a forking module for duplicating and customizing repos under different organizations. It supports automation using GitHub CLI and GitHub Actions, with some manual steps involving environment and runner setup.",
      features: [
        "Automated repo creation with development/staging/production branches",
        "Forking existing repos under a custom organization name",
        "GitHub secrets setup via config file",
        "Support for GitHub CLI, GitHub Actions, and manual setup steps",
        "Instructions for both local and remote environment setups"
      ],
      keywords: [
        "CLI Development", "DevOps", "MLOps", "CI/CD", "GitHub Actions", "Python", "Shell Scripting", "Automation", "Linux"
      ],
      image: null // Add image if available
    },
    {
      name: "C++ CMS",
      text: "A general-purpose content management system built in C++.",
      longText: "This project is a fully-fledged CMS built using C++. It allows for content management, user authentication, and dynamic page rendering. The system is designed to be extensible and easily customizable for various content-driven websites.",
      features: [
        "Content management with an intuitive interface",
        "User authentication and role management",
        "Customizable templates for dynamic pages",
        "RESTful API support for external integrations",
        "Plugin architecture for extensibility"
      ],
      keywords: [
        "C++", "CMS", "Backend Development", "REST API", "Database Integration", "Plugin Architecture", "System Design", "Performance Optimization"
      ],
      image: null // Replace with an image if you have one
    }
  ];

  const allKeywords = Array.from(new Set(projects.flatMap(p => p.keywords)));

  const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-page">
      <Navbar
        activeSection={activeSection}
        scrollTo={scrollTo}
        refs={{ homeRef, projectsRef, contactRef }}
      />
      <HomeSection ref={homeRef} />
      <ProjectsSection
        ref={projectsRef}
        projects={projects}
        allKeywords={allKeywords}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <ContactSection ref={contactRef} />
    </div>
  );
};

export default App;
