import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Search } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  image?: string; // Add the new property with optional type
}

const ProjectsPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Mocked repository data (would normally fetch from GitHub API)
  const mockRepositories: Repository[] = [
    {
      id: 1,
      name: "Mineral Vision",
      image: "https://ik.imagekit.io/amirfaramarzpour/AMIR/Page-one.png?updatedAt=1736439468306", // Replace with your image URL or file path
      description: "Python Image Processing and Object Detection Solution for Comprehensive Image Analysis. [Contact Me]",
      html_url: "https://wa.me/989116812737",
      language: "Python",
      stargazers_count: 2,
      forks_count: 0,
    },
  
    {
      id: 2,
      name: "Mind Mate",
      description: "This is an AI assistant web application built using Flask. It leverages various AI capabilities to interact with users, providing support, answering questions, brainstorming ideas, and more.",
      html_url: "https://github.com/AmirFaramarzpour/MindMate",
      language: "Python, Flask, HTML, CSS",
      stargazers_count: 0,
      forks_count: 0
    },
    {
      id: 3,
      name: "Multimedia HUB",
      description: "This project is a file hosting server management tool. It allows users to start and stop a file hosting service, manage user accounts, and list connected devices. It also includes a web-based file hosting service built with Flask.",
      html_url: "https://github.com/AmirFaramarzpour/MultimediaHUB",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0
    },
    {
      id: 4,
      name: "ConnectPlus [Free-Version]",
      description: "ConnectPlus is a robust server framework that effectively handles the management of HTTP and Socket servers, user administration, and performance monitoring in a seamless and efficient way. This application features a visually appealing and user-friendly interface, and it now includes the ability to integrate with OpenAI via an API key, providing an assistant within the server for enhanced functionality.",
      html_url: "https://github.com/AmirFaramarzpour/ConnectPlus",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0
    },
    {
      id: 5,
      name: "Real-time Human Pose Detection with Notifications",
      description: "This project is a real-time human pose detection application using a webcam, built with OpenCV, MediaPipe, and CustomTkinter. It includes features like Telegram notifications and voice alerts when a human pose is detected.",
      html_url: "https://github.com/AmirFaramarzpour/pose-detection",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0
    },
    {
      id: 6,
      name: "Ollama chat hub",
      description: "This code provides a GUI for interacting with different AI models, including Llama3.2, phi3, mistral, qwen2.5, and starcoder2, allowing users to input prompts, generate responses, and convert text to speech.",
      html_url: "https://github.com/AmirFaramarzpour/ollama-chat-hub",
      language: "Python, API, FLASK",
      stargazers_count: 41,
      forks_count: 9
    },
    {
      id: 6,
      name: "EasyPFD [Process Flow Diagram]",
      description: "Easy PFD Draw- Simple yet practical python application for mineral processors.",
      html_url: "https://github.com/AmirFaramarzpour/EasyPFD",
      language: "Python",
      stargazers_count: 41,
      forks_count: 9
    }
  ];

  useEffect(() => {
    // Simulate API fetch with slight delay
    const fetchRepositories = async () => {
      setLoading(true);
      try {
        // In a real app, you would fetch from GitHub API here
        // const response = await fetch('https://api.github.com/users/username/repos');
        // const data = await response.json();
        
        // Using mock data instead
        setTimeout(() => {
          setRepositories(mockRepositories);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError("Failed to fetch repositories");
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

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

  const filteredRepositories = repositories.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = filter === 'all' || repo.language === filter;
    
    return matchesSearch && matchesFilter;
  });

  const languages = Array.from(new Set(repositories.map(repo => repo.language)));

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">GitHub Projects</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Check out my open-source projects and contributions on GitHub. These repositories showcase my technical skills and problem-solving approaches.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search repositories..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            {languages.map((language) => (
              <button
                key={language}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  filter === language 
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}
                onClick={() => setFilter(language)}
              >
                {language}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500 dark:text-red-400">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepositories.length > 0 ? (
              filteredRepositories.map((repo) => (
                <div 
                  key={repo.id}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white truncate">
                        {repo.name}
                      </h3>
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                        aria-label="View repository"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 h-12 overflow-hidden">
                      {repo.description || "No description available"}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full">
                        {repo.language}
                      </span>
                      <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
                          </svg>
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                          </svg>
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-3 bg-gray-100 dark:bg-gray-600">
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                    >
                      View Repository <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12 text-gray-500 dark:text-gray-400">
                No repositories found matching your criteria.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;