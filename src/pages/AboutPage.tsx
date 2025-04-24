import React, { useEffect, useRef } from 'react';
import { Code, Server, Database, Shield, Terminal, MonitorSmartphone } from 'lucide-react';

const AboutPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const expertiseAreas = [
    {
      icon: <Database size={40} />,
      title: "Mineral Processing",
      description: "Solid background in mineral processing technologies and optimization techniques for ore processing operations."
    },
    {
      icon: <MonitorSmartphone size={40} />,
      title: "IT & System Administration",
      description: "Experienced in managing IT systems, software troubleshooting, and system optimization."
    },
    {
      icon: <Terminal size={40} />,
      title: "Linux Administration",
      description: "Proficient in Linux system administration, shell scripting, and server management."
    },
    {
      icon: <Shield size={40} />,
      title: "Ethical Pentesting",
      description: "Driven by an insatiable passion for ethical hacking and cybersecurity innovation, I thrive on discovering vulnerabilities and unlocking solutions that strengthen system defenses."
    },
    {
      icon: <Code size={40} />,
      title: "Python Programming",
      description: "Python developer with expertise in data analysis, Data visualization, automation, and application development."
    },
    {
      icon: <Server size={40} />,
      title: "Server & Network Admin",
      description: "Experienced in server configuration, network management."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I truly enjoy finding solutions to challenging issues, especially when researching the intricate processes involved in mineral extraction. Making the mining industry greener than it has ever been is something else that interests me. I've demonstrated that I can think creatively, solve problems sustainably, and manage several projects at once. I'm amiable, adaptable, and a productive team player.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 mx-auto group-hover:scale-110 transform transition-transform">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 text-center">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 dark:bg-gray-700 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Education</h3>
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 mt-2"></div>
                <div className="w-0.5 h-full bg-blue-600 dark:bg-blue-400 ml-1.5 mt-1"></div>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-white">Master's Degree - Mining engineering, mineral processing </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                Yazd University. Sep 2017 – Mar 2020
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 mt-2"></div>
                <div className="w-0.5 h-full bg-blue-600 dark:bg-blue-400 ml-1.5 mt-1"></div>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-white">Bachelor's Degree- Mining Engineering</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                Yazd University. Sep 2013 – Sep 2017

                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 mt-2"></div>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-white">Research interests</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                Applying Python programming and machine learning techniques, integrated with computer vision, to develop practical sensor solutions for mineral processing plants, aligning with the Industry 4.0 framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;