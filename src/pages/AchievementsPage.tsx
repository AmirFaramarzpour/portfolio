import React, { useEffect, useRef } from 'react';
import { Award, Bookmark, Calendar, ExternalLink } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  category: string;
  issuer: string;
  date: string;
  description: string;
  certificateUrl?: string;
}

const AchievementsPage: React.FC = () => {
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

  // Sample achievements data
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "IBM Data Science Orientation",
      category: "Certification",
      issuer: "Coursera",
      date: "2025",
      description: "This badge earner has a good understanding of why data science, artificial intelligence (AI) and machine learning are revolutionizing the way people do business and research around the world. They have general knowledge on what data science is today.",
      certificateUrl: "https://www.credly.com/badges/86cbdb28-7a0c-4199-94cd-4338e6c574e0/print"
    },
    {
      id: 2,
      title: "IBM Machine Learning with Python (V2)",
      category: "Certification",
      issuer: "Coursera",
      date: "2025",
      description: "The badge earner has a good understanding of implementing machine learning (ML) models, including when to use ML techniques such as regression, classification, clustering, and dimensionality reduction. They can use different machine learning libraries in Python, mainly scikit-learn and NumPy, to generate, evaluate, validate, and apply different types of ML algorithms like decision trees, linear and logistic regression, k-means, KNN, DBSCAN, SVM, PCA, t-SNE, UMAP, and hierarchical clustering.",
      certificateUrl: "https://www.credly.com/go/UEx4BWdL"
    },
    {
      id: 3,
      title: "Python for Data Science and Machine Learning Bootcamp",
      category: "Certification",
      issuer: "Udemy",
      date: "2024",
      description: "This certificate above verifies that Amir Faramarzpour Darzini successfully completed the course Python for Data Science and Machine Learning Bootcamp on 08/08/2024 as taught by Jose Portilla, Pierian Training on Udemy. ",
      certificateUrl: "https://www.udemy.com/certificate/UC-b9b65cce-1148-4246-9aeb-a87b840723b0/"
    },
    {
      id: 4,
      title: "The complete python bootcamp from zero to hero in python",
      category: "Certification",
      issuer: "Udemy",
      date: "2024",
      description: "This certificate above verifies that Amir Faramarzpour Darzini successfully completed the course The Complete Python Bootcamp From Zero to Hero in Python on 07/19/2024 as taught by Jose Portilla, Pierian Training on Udemy. ",
      certificateUrl: "https://www.udemy.com/certificate/UC-4317b726-eb87-4d71-ac27-7e8490b76fa6/"
    },
    {
      id: 5,
      title: "Health, safety and environment",
      category: "Certification",
      issuer: "Faculty of Chemical and Polymer Engineering, Yazd University",
      date: "2020",
      description: ""
    },
    {
      id: 6,
      title: "HSC Chemistry software",
      category: "Certification",
      issuer: "Faculty of mining and metallurgical Engineering, Yazd University",
      date: "2020-12",
      description: "HSC Chemistry software enables advanced thermodynamic calculations, reaction equilibrium analysis, and phase diagram generation. It supports process simulation, material property analysis, and environmental footprint estimation. Ideal for research, development, and optimization in chemical and mineral processing industries",
      certificateUrl: ""
    },
    {
      id: 6,
      title: "X’pert High Score",
      category: "Certification",
      issuer: "Yazd university Ceramic-Tile Research Center",
      date: "2019",
      description: "X'Pert HighScore is a software tool designed for analyzing X-ray diffraction (XRD) data. It is widely used in materials science and crystallography for tasks such as phase identification, Rietveld refinement, and cluster analysis. The software provides advanced features for processing powder diffraction patterns and supports comprehensive crystallographic analysis.",
      certificateUrl: ""
    }
  ];

  const certifications = achievements.filter(achievement => achievement.category === 'Certification');
  const otherAchievements = achievements.filter(achievement => achievement.category !== 'Certification');

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Certificates </h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of certifications and recognitions that highlight my expertise and contributions in various fields.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Award size={20} className="text-blue-600 dark:text-blue-400" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div 
                      key={cert.id}
                      className="p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors cursor-pointer"
                      onClick={() => document.getElementById(`achievement-${cert.id}`)?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <h4 className="font-medium text-gray-800 dark:text-white">{cert.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 rounded-xl shadow-md p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">Want to collaborate?</h3>
                <p className="mb-4 opacity-90">I'm always open to discussing new projects and opportunities.</p>
                <a 
                  href="#contact" 
                  className="block w-full py-2 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium transition-colors text-center"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                id={`achievement-${achievement.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap md:flex-nowrap items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    {achievement.category === 'Certification' ? (
                      <Award size={24} />
                    ) : achievement.category === 'Publication' ? (
                      <Bookmark size={24} />
                    ) : (
                      <Award size={24} />
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{achievement.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={16} className="mr-1" />
                        {achievement.date}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
                        {achievement.category}
                      </span>
                      <span className="ml-3 text-gray-600 dark:text-gray-300">{achievement.issuer}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{achievement.description}</p>
                    
                    {achievement.certificateUrl && (
                      <a 
                        href={achievement.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                      >
                        View Certificate <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsPage;