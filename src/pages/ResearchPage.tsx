import React, { useEffect, useRef } from 'react';
import { FileText, ExternalLink, BookOpen, Award } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  journal: string;
  year: number;
  authors: string;
  abstract: string;
  url: string;
  citations: number;
}

const ResearchPage: React.FC = () => {
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

  // Mock publications data
  const publications: Publication[] = [
    {
      id: 1,
      title: "Calcite in froth flotation-A review",
      journal: "Journal of Materials Research and Technology 19, 1231-1241",
      year: 2022,
      authors: "A Faramarzpour, MRS Yazdi, B Mohammadi, SC Chelgani",
      abstract: "As a review article, this study generally discussed the existing challenges in detail and provided suggestions for future investigation in calcite flotation.",
      url: "https://doi.org/10.1016/j.jmrt.2022.05.106",
      citations: 34
    },
    {
      id: 2,
      title: "[Book] Phosphate Ore Processing by Flotation Method",
      journal: "Yazd University",
      year: 2021,
      authors: "MR Samadzade Yazdi, A Faramarzpour, H Barzegar",
      abstract: "",
      url: "https://opac.nlai.ir/opac-prod/bibliographic/8442492",
      citations: 0
    },
    {
      id: 3,
      title: "Recovery of valuable phosphate mineral from tailing dams of Esfordi phosphate processing plant through flotation studies",
      journal: "8th Iranian Mining Engineering Conference, 803-810",
      year: 2020,
      authors: "A Faramarzpour et al.",
      abstract: "",
      url: "",
      citations: 0
    },
    {
      id: 4,
      title: "A Mineral liberation study of the Esfordi green phosphate rock",
      journal: "8th Iranian Mining Engineering Conference, 278-285",
      year: 2020,
      authors: "A Faramarzpour et al.",
      abstract: "",
      url: "",
      citations: 0
    },
    {
      id: 5,
      title: "Investigating the possibility of iron concentrate recovery from wet tailing dams of Esfordi phosphate complex",
      journal: "8th Iranian Mining Engineering Conference, 362-369",
      year: 2020,
      authors: "A Faramarzpour et al.",
      abstract: "",
      url: "",
      citations: 0
    },
    {
      id: 6,
      title: "Estimating carrying capacity in pilot column flotation cells of Esfordi phosphate plant",
      journal: "8th Iranian Mining Engineering Conference, 212-218",
      year: 2020,
      authors: "A Faramarzpour et al.",
      abstract: "",
      url: "",
      citations: 0
    },
    {
      id: 7,
      title: "Electrochemical cyanidation leaching of Mouteh gold ore through applying external potentials",
      journal: "8th Iranian Mining Engineering Conference, 219-224",
      year: 2020,
      authors: "A Faramarzpour et al.",
      abstract: "",
      url: "",
      citations: 0
    },
    {
      id: 8,
      title: "•	Feasibility of cathodic protection implementation in grinding process to reduce grinding medium consumption (pellets)",
      journal: "The 2nd Iranian Conference of Green Mining & Mine Industry",
      year: 2019,
      authors: "A Faramarzpour et al.",
      abstract: "",
      url: "",
      citations: 0
    }

  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Research & Publications</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my academic contributions and research papers in the fields of mineral processing.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10 mb-16">
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
              <FileText size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">8</h3>
            <p className="text-gray-600 dark:text-gray-300">Publications</p>
          </div>
          
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">34</h3>
            <p className="text-gray-600 dark:text-gray-300">Citations</p>
          </div>
          

        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Recent Publications</h3>
            <a 
              href="https://scholar.google.com/citations?user=rAaf5VoAAAAJ&hl=en" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              Google Scholar <ExternalLink size={16} />
            </a>
          </div>
          
          <div className="space-y-8">
            {publications.map((pub) => (
              <div key={pub.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {pub.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  <span className="font-medium">{pub.authors}</span> • {pub.journal} • {pub.year}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {pub.abstract}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
                    Citations: {pub.citations}
                  </span>
                  <a 
                    href={pub.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Read Paper <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 rounded-xl shadow-md p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Interested in collaboration?</h3>
              <p className="mb-0">I'm always open to research collaborations and joint publications.</p>
            </div>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPage;