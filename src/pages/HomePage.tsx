import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Terminal, Server, Code } from 'lucide-react';

const HomePage: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in');
      }
    }, 500);
    
    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('animate-fade-in');
      }
    }, 1000);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300"></div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Github className="absolute text-blue-100 dark:text-blue-900 opacity-80" size={120} style={{ top: '15%', left: '10%', animation: 'float 8s ease-in-out infinite' }} />
        <Terminal className="absolute text-blue-100 dark:text-blue-900 opacity-80" size={80} style={{ top: '60%', left: '15%', animation: 'float 6s ease-in-out infinite 1s' }} />
        <Code className="absolute text-blue-100 dark:text-blue-900 opacity-80" size={100} style={{ top: '20%', right: '12%', animation: 'float 9s ease-in-out infinite 0.5s' }} />
        <Server className="absolute text-blue-100 dark:text-blue-900 opacity-80" size={90} style={{ top: '65%', right: '18%', animation: 'float 7s ease-in-out infinite 1.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 opacity-0 transition-opacity duration-1000"
        >
          <span className="text-blue-600 dark:text-blue-400">Mineral Processing</span> Engineer & 
          <span className="text-teal-600 dark:text-teal-400"> Developer</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 opacity-0 transition-opacity duration-1000 delay-300"
        >
          Specializing in Mineral processing, Python programming, Data Science and ML, Linux, ethical pentesting, server administration, and web development.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col md:flex-row gap-6 justify-center opacity-0 transition-opacity duration-1000 delay-500"
        >
          <a 
            href="#portfolio" 
            className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
          >
            View My Work
          </a>
          <a 
            href="https://github.com/AmirFaramarzpour/Database/blob/main/CV-ENG--AmirFaramarzpour-2025.pdf" 
            className="px-8 py-3 rounded-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/30 transition-colors"
          >
            Download My CV
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-gray-600 dark:text-gray-400" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;