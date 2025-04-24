import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}

const PortfolioPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
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

  // Sample portfolio items
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Mineral Vision",
      category: "Python, Image processing, Mineral Processing",
      description: "Python Image Processing and Object Detection Solution for Comprehensive Image Analysis.",
      image: "https://ik.imagekit.io/amirfaramarzpour/AMIR/Page-one.png?updatedAt=1736439468306",
      liveUrl: "https://github.com/AmirFaramarzpour/Database/blob/main/README-MineralVision.md",
      githubUrl: "https://wa.me/989116812737",
      technologies: ["Python", "Matplotlib", "Numpy", "YOLO v8", "OpenCV","Seaborn"]
    },
    {
      id: 2,
      title: "Phosphate Ore Processing by Flotation Method",
      category: "Book",
      description: "MR Samadzade Yazdi, A Faramarzpour, H Barzegar • Yazd University • 2021",
      image: "https://ik.imagekit.io/amirfaramarzpour/AMIR/Phosphate%20ore%20Processing%20-%20Final.jpg?updatedAt=1736439435215",
      liveUrl: "https://torob.com/p/8b3ab078-f5eb-45bf-adb1-2a15d25ba483/%D9%81%D8%B1%D8%A7%D9%88%D8%B1%DB%8C-%D8%B0%D8%AE%D8%A7%DB%8C%D8%B1-%D9%85%D8%B9%D8%AF%D9%86%DB%8C-%D9%81%D8%B3%D9%81%D8%A7%D8%AA-%D8%A8%D8%A7-%D8%B1%D9%88%D8%B4-%D9%81%D9%84%D9%88%D8%AA%D8%A7%D8%B3%DB%8C%D9%88%D9%86/",
      githubUrl: "https://mybooket.com/books/714b41fdeed40043/%D9%81%D8%B1%D8%A2%D9%88%D8%B1%DB%8C-%D8%B0%D8%AE%D8%A7%DB%8C%D8%B1-%D9%85%D8%B9%D8%AF%D9%86%DB%8C-%D9%81%D8%B3%D9%81%D8%A7%D8%AA-%D8%A8%D8%A7-%D8%B1%D9%88%D8%B4-%D9%81%D9%84%D9%88%D8%AA%D8%A7%D8%B3%DB%8C%D9%88%D9%86",
      technologies: []
    },
    {
      id: 3,
      title: "Fahrenheit Cafe Website",
      category: "Web Development",
      description: "Designed a React-based website showcasing dynamic interactivity and efficient state management, leveraging reusable components.",
      image: "https://ik.imagekit.io/amirfaramarzpour/AMIR/fahrenheit.png?updatedAt=1745510757869",
      liveUrl: "https://www.fahrenheitcafe.ir",
      githubUrl: "",
      technologies: ["Tailwind CSS", "JavaScript", "Node.js", "React", "git"]
    },
    {
      id: 4,
      title: "Pasha Breakfast Cafe Website",
      category: "Web Development",
      description: "crafted a static website using basic HTML, emphasizing foundational web development and simplicity.",
      image: "https://ik.imagekit.io/amirfaramarzpour/AMIR/pasha.png?updatedAt=1745511117164",
      liveUrl: "https://www.pasha-breakfast.ir",
      githubUrl: "",
      technologies: ["HTML", "CSS", "git"]
    },
    {
      id: 5,
      title: "Media Server",
      category: "DevOps",
      description: "Set up and maintained a media server for homelabs, enabling seamless streaming and centralized storage of media content. Ensured optimal performance through regular updates, efficient organization, and integration with automation tools.",
      image: "https://ik.imagekit.io/amirfaramarzpour/AMIR/emby.png?updatedAt=1745512157441",
      liveUrl: "https://ik.imagekit.io/amirfaramarzpour/AMIR/emby.png?updatedAt=1745512157441",
      githubUrl: "",
      technologies: ["Vue.js", "Go", "Docker", "Kubernetes", "Prometheus", "Grafana"]
    },
    {
      id: 6,
      title: "Pi Sensor",
      category: "Data Science, Machine Learning",
      description: "Implemented remote monitoring and image processing using a Raspberry Pi and camera module, enabling efficient data capture and analysis. Configured and managed the system via SSH for seamless setup and real-time reporting.",
      image: "https://ik.imagekit.io/amirfaramarzpour/AMIR/Screenshot%202025-04-24%20201757.png?updatedAt=1745513460420",
      liveUrl: "",
      githubUrl: "",
      technologies: ["Python", "Scikit-learn", "OpenCV", "SBCs", "Camera Module", "Raspberry Pi 5", "ssh", "Linux Server"]
    }
  ];

  const categories = ['all', ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Portfolio</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My projects across web development, data science, Mineral Processing, and more.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-blue-600 text-white dark:bg-blue-500' 
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 m-4">
                  <span className="px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={item.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a 
                    href={item.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;