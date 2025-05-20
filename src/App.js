import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

import './App.css';

import CLI_intro from './images/CLI_intro.png';
import DTIntra_intro from './images/DTIntra_intropng.png';
import Helip_intro from './images/Helip_intro.png';
import Libary_intro from './images/Library_intro.png';
import NutriTracker_intro from './images/NutriTracker_intro.png';
import PyCalc_intro from './images/PyCalc_intro.png';

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
        "React Native", "Mobile Development", "Firebase", "CI/CD", "Automated Testing", "Algorithms"
      ],
      image: NutriTracker_intro
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
        "React Native", "Mobile Development", "Firebase", "Geolocation", "API Integration"  
      ],
      image: Helip_intro
    },
    {
      name: "CLI Tool for GitHub Repo Management",
      text: "CLI tool that automates GitHub repo setup, forking, and configuration for MLOps use cases.",
      longText: "This tool automates the creation, configuration, and management of GitHub repositories tailored for MLOps workflows...",
      features: [
        "Automated repo creation with development/staging/production branches",
        "Forking existing repos under a custom organization name",
        "GitHub secrets setup via config file",
        "Support for GitHub CLI, GitHub Actions, and manual setup steps",
        "Instructions for both local and remote environment setups"
      ],
      keywords: [
        "CLI", "DevOps", "MLOps", "CI/CD", "GitHub Actions", "Python", "Shell Scripting", "Automation", "Linux"
      ],
      image: CLI_intro
    },
    {
      name: "C++ CMS",
      text: "A general-purpose content management system built in C++.",
      longText: "This project is a fully-fledged CMS built using C++. It allows for content management, user authentication, and dynamic page rendering...",
      features: [
        "Content management with an intuitive interface",
        "User authentication and role management",
        "Customizable templates for dynamic pages",
        "RESTful API support for external integrations",
        "Plugin architecture for extensibility"
      ],
      keywords: [
        "C++", "CMS", "Backend Development", "REST API", "Database Integration", "System Design", "Performance Optimization"
      ],
      image: null
    },
    {
      name: "Java Library App",
      text: "A library management application built with Java featuring CRUD operations for books, users, and genres.",
      longText: "This Java-based application is designed to manage a library system...",
      features: [
        "CRUD functionality for books, users, and genres",
        "Thymeleaf-based user interface for managing data",
        "RESTful API endpoints for external interaction",
        "Spring Boot framework for rapid development",
        "Relational database integration (e.g., H2, PostgreSQL, MySQL)",
        "Validation and error handling for all inputs",
        "Modular architecture for scalability"
      ],
      keywords: [
        "Java", "Spring Boot", "Thymeleaf", "REST API", "Backend Development", "Database Integration"
      ],
      image: Libary_intro
    },
    {
      name: "DT Academy Intra",
      text: "An internal web system for students and teachers with role-based features.",
      longText: "DT Academy Intra is an internal portal built for student and teacher use. It allows students to clock in/out, manage personal projects, and receive news updates. Teachers can monitor activity and manage content. The project used a Kotlin backend and React frontend, with communication via REST APIs. Led as a full project lead.",
      features: [
        "Role-based access for students and teachers",
        "Daily clock-in/out system",
        "Personal project submissions",
        "Newsfeed for updates and announcements",
        "RESTful API communication between frontend and backend"
      ],
      keywords: [
        "Full-Stack Development", "Kotlin", "React", "REST API", "Project Leadership", "Web App"
      ],
      image: DTIntra_intro
    },
    {
      name: "Python Binary Calculator",
      text: "A binary calculator for performing basic arithmetic operations in Python.",
      longText: "This Python-based binary calculator allows users to input two binary numbers and perform addition, subtraction, multiplication, or division. The result is returned as a binary string. The project reinforces bitwise operation understanding and binary number handling in Python.",
      features: [
        "Supports addition, subtraction, multiplication, and division",
        "Accepts binary input and returns binary output",
        "Validates user input for binary format",
        "Command-line based interface"
      ],
      keywords: [
        "CLI", "Python", "Bitwise Operations", "Algorithms"
      ],
      image: PyCalc_intro
    }
  ]

  const allKeywords = Array.from(
    new Set(projects.flatMap(p => p.keywords))
  ).sort();

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
