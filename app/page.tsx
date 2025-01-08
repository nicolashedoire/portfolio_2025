'use client';
import React, { useEffect, useRef } from 'react';
import { Leaf, Mail, Github, Linkedin, ArrowRight, Sparkles, Code, Globe } from 'lucide-react';

function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="w-6 h-6 text-emerald-600" />
            <span className="text-xl font-medium">Nicolas Hedoire</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">À propos</a>
            <a href="#projects" className="text-gray-600 hover:text-emerald-600 transition-colors">Projets</a>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact</a>
            <a href="#contact" className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
              Me contacter
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 to-white"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          ></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Développeur Full Stack Créatif</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Créons ensemble des expériences numériques <span className="text-emerald-600">mémorables</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Spécialisé dans le développement d&apos;applications web modernes et performantes, 
              je combine créativité et expertise technique pour donner vie à vos projets.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors inline-flex items-center"
              >
                Voir mes projets
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-gray-200 rounded-full border-emerald-600 hover:text-emerald-600 transition-colors"
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
            <div className="group">
              <div className="mb-6 p-4 bg-emerald-50 rounded-2xl w-fit group-hover:bg-emerald-100 transition-colors">
                <Code className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Développement Web</h3>
              <p className="text-gray-600 leading-relaxed">
                Création d&apos;applications web modernes et réactives avec les dernières technologies.
              </p>
            </div>
            <div className="group">
              <div className="mb-6 p-4 bg-emerald-50 rounded-2xl w-fit group-hover:bg-emerald-100 transition-colors">
                <Globe className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Architecture Cloud</h3>
              <p className="text-gray-600 leading-relaxed">
                Conception et déploiement d&apos;infrastructures cloud évolutives et sécurisées.
              </p>
            </div>
            <div className="group">
              <div className="mb-6 p-4 bg-emerald-50 rounded-2xl w-fit group-hover:bg-emerald-100 transition-colors">
                <Sparkles className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Création d&apos;interfaces utilisateur intuitives et esthétiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="py-20 bg-gray-50" id="projects" ref={projectsRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Projets Récents</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez une sélection de mes projets les plus récents, illustrant mon expertise 
              en développement web et design d&apos;interface.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Eco-Track",
                desc: "Application de suivi d'empreinte carbone",
                img: "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80",
                tags: ["React", "Node.js", "PostgreSQL"]
              },
              {
                title: "Nature Connect",
                desc: "Plateforme de partage pour passionnés de nature",
                img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
                tags: ["Vue.js", "Firebase", "Tailwind"]
              },
              {
                title: "GreenWave",
                desc: "Solution e-commerce éco-responsable",
                img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80",
                tags: ["Next.js", "Stripe", "MongoDB"]
              },
              {
                title: "BioDiversity",
                desc: "Cartographie interactive de la biodiversité",
                img: "https://images.unsplash.com/photo-1500829243541-74b677fecc30?auto=format&fit=crop&q=80",
                tags: ["React", "MapBox", "Python"]
              }
            ].map((project, index) => (
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
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                  >
                    Voir le projet <ArrowRight className="ml-2 w-4 h-4" />
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
              Vous avez un projet en tête ? Je serais ravi d&apos;en discuter et de voir 
              comment je peux vous aider à le concrétiser.
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a 
                href="mailto:contact@jeandupont.fr" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="text-center">
              <a 
                href="mailto:contact@jeandupont.fr"
                className="px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors inline-flex items-center"
              >
                Démarrer une conversation
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="w-5 h-5 text-emerald-600" />
              <span className="font-medium">Nicolas Hedoire</span>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Nicolas Hedoire. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
