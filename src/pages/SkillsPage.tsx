import React, { useEffect, useRef } from 'react';

const SkillsPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          // Animate progress bars when section is visible
          const progressBars = document.querySelectorAll('.progress-bar');
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              (bar as HTMLElement).style.width = bar.getAttribute('data-width') || '0%';
            }, 100 * index);
          });
          
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

  const technicalSkills = [
    { name: "Data science and machine learning (NumPy, pandas, Seaborn, Matplotlib, SciPy, scikit-learn python libraries)", level: 95 },
    { name: "Web Development (JavaScript, TypeScript, CSS, HTML, Node.JS, React)", level: 90 },
    { name: "Linux Administration & Server Management", level: 85 },
    { name: "Network Security", level: 92 },
    { name: "Wireless security assessment (Network Discovery and Mapping, Traffic Analysis, Penetration Testing, Encryption Analysis)", level: 88 },
    { name: "Embedded Systems and IoT (Internet of Things, single-board computers (SBCs), Raspberry Pi modules, and motion sensors)", level: 90 },
  ];

  const softSkills = [
    { name: "Origin/ Sigma plot/ Microsoft Office", level: 95 },
    { name: "BIOVIA Materials Studio Software [DFT Simulation]", level: 95 },
    { name: "Datamine & Leapfrog Geo Software", level: 95 },
    { name: "Minitab Software", level: 95 },
    { name: "FIJI-Image J, OpenCV-python", level: 95 },
    { name: "X’pert High Score Software [XRD Patterns]", level: 95 },
    { name: "MODSIM, Design Expert, NiaFlow, JKSimMet Softwares", level: 95 },
    { name: "Easily Adaptable", level: 88 },
    { name: "Problem Solving", level: 95 },
    { name: "Technical Documentation", level: 90 },
    { name: "Project Management", level: 85 },
    { name: "Communication", level: 88 },
    { name: "Collaboration", level: 92 }, 
  ];

  const tools = [
    "Git", "VirtualBox", "SBC/Raspberry Pi", "Ubuntu/Kali Linux", "VS Code", "SublimeText", "Ollama", "LM Studio", "Wireshark",
    "Metasploit", "Burp Suite", "aircrack-ng", "Nmap", "Owasp ZAP", "Jupyter Notebook/Lab", "Prompt Engineering"
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Skills</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With expertise across multiple domains, I bring a diverse skill set to solve complex technical challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Comprehensive IT Skill Set</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-full progress-bar transition-all duration-1000 ease-out"
                      data-width={`${skill.level}%`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Mineral Processing Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-500 to-emerald-600 dark:from-teal-400 dark:to-emerald-500 rounded-full progress-bar transition-all duration-1000 ease-out"
                      data-width={`${skill.level}%`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;