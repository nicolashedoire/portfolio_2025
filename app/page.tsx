'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  ArrowRight,
  LucideIcon 
} from 'lucide-react';
import { getThemeClasses, themes } from '@/app/constants';

// Types
type Service = {
  title: string;
  desc: string;
};

type Project = {
  title: string;
  desc: string;
  tags: string[];
  img: string;
};

type Theme = {
  name: string;
  icon: LucideIcon;
  tagline: string;
  title: string;
  highlight: string;
  description: string;
  serviceIcons: LucideIcon[];
  services: Service[];
  projects: Project[];
};

type ThemeKey = keyof typeof themes;

function Portfolio() {
  const [activeTheme, setActiveTheme] = useState<ThemeKey>('ocean');
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const currentTheme = themes[activeTheme];
  const ThemeIcon = currentTheme.icon;
  const classes = getThemeClasses(activeTheme);

  // Theme Selector Component
  const ThemeSelector = () => {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-100 p-4 flex gap-2 overflow-x-auto">
        {(Object.entries(themes) as [ThemeKey, Theme][]).map(([key, theme]) => {
          const ThemeIconComponent = theme.icon;
          return (
            <button
              key={key}
              onClick={() => setActiveTheme(key)}
              className={`px-4 py-2 rounded-full flex items-center space-x-2 whitespace-nowrap transition-colors ${
                activeTheme === key 
                  ? classes.primary + ' text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <ThemeIconComponent className="w-4 h-4" />
              <span>{theme.name}</span>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <ThemeSelector />

      {/* Navigation */}
      <nav className={`fixed w-full z-40 bg-white/80 backdrop-blur-md border-b ${classes.border} mt-16`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ThemeIcon className={`w-6 h-6 ${classes.text}`} />
            <span className="text-xl font-medium">{currentTheme.name}</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`text-gray-600 ${classes.textHover} transition-colors`}>À propos</a>
            <a href="#projects" className={`text-gray-600 ${classes.textHover} transition-colors`}>Projets</a>
            <a href="#contact" className={`text-gray-600 ${classes.textHover} transition-colors`}>Contact</a>
            <a href="#contact" className={`px-4 py-2 ${classes.background600} text-white rounded-full ${classes.backgroundHover700} transition-colors`}>
              Me contacter
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-36">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 bg-gradient-to-b ${classes.gradient} to-white`}></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("${classes.backgroundImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          ></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 ${classes.background} rounded-full ${classes.text} mb-6`}>
              <ThemeIcon className="w-4 h-4" />
              <span>{currentTheme.tagline}</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              {currentTheme.title} <span className={`${classes.text}`}>{currentTheme.highlight}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {currentTheme.description}
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#projects" 
                className={`px-8 py-4 ${classes.background600} text-white rounded-full ${classes.backgroundHover700} transition-colors inline-flex items-center`}
              >
                Découvrir nos solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className={`px-8 py-4 border ${classes.text} ${classes.border600} rounded-full ${classes.textHover} transition-colors`}
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {currentTheme.services.map((service, index) => {
              const ServiceIcon = currentTheme.serviceIcons[index];
              return (
                <div key={index} className="group">
                  <div className={`mb-6 p-4 ${classes.background} rounded-2xl w-fit group-hover:${classes.hoverBg} transition-colors`}>
                    <ServiceIcon className={`w-8 h-8 ${classes.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className={`py-20 ${classes.background}`} id="projects" ref={projectsRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Projets Innovants</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos dernières innovations et solutions adaptées à vos besoins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentTheme.projects.map((project, index) => (
              <div 
                key={index}
                className="project-card opacity-0 translate-y-10 transition-all duration-700 ease-out bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url("${project.img}")` }}
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 ${classes.background} ${classes.text} rounded-full text-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="#" 
                    className={`inline-flex items-center ${classes.text} ${classes.textHover}`}
                  >
                    En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Travaillons Ensemble</h2>
            <p className="text-gray-600 mb-8">
              Vous avez un projet ? Je serais ravi d&apos;explorer avec vous comment nous pouvons le concrétiser.
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a 
                href={`mailto:contact@${currentTheme.name.toLowerCase().replace(/\s+/g, '-')}.fr`}
                className={`flex items-center justify-center w-12 h-12 rounded-full ${classes.background} ${classes.text} ${classes.hoverBg} transition-colors`}
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                className={`flex items-center justify-center w-12 h-12 rounded-full ${classes.background} ${classes.text} ${classes.hoverBg} transition-colors`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                className={`flex items-center justify-center w-12 h-12 rounded-full ${classes.background} ${classes.text} ${classes.hoverBg} transition-colors`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="text-center">
              <a 
                href={`mailto:contact@${currentTheme.name.toLowerCase().replace(/\s+/g, '-')}.fr`}
                className={`px-8 py-4 ${classes.background600} ${classes.backgroundHover700} text-white rounded-full transition-colors inline-flex items-center`}
              >
                Démarrer une conversation
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${classes.background}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <ThemeIcon className={`w-5 h-5 ${classes.text}`} />
              <span className="font-medium">{currentTheme.name}</span>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {currentTheme.name}. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;