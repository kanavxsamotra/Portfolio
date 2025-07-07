import React, { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
        
        <main>
          <section id="home">
            <HeroSection />
          </section>
          
          <section id="about">
            <AboutSection />
          </section>
          
          <section id="skills">
            <SkillsSection />
          </section>
          
          <section id="projects">
            <ProjectsSection />
          </section>
          
          <section id="achievements">
            <AchievementsSection />
          </section>
          
          <section id="contact">
            <ContactSection />
          </section>
        </main>

        <footer className="py-8 px-6 text-center border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-400">
              © 2024 Kanav Samotra. All rights reserved. | Built with passion for DevOps excellence
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;