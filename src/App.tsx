import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ResearchPage from './pages/ResearchPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import AchievementsPage from './pages/AchievementsPage';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Layout>
        <div id="Home" className="scroll-mt-16"><HomePage /></div>
        <div id="About" className="scroll-mt-16"><AboutPage /></div>
        <div id="Skills" className="scroll-mt-16"><SkillsPage /></div>
        <div id="Projects" className="scroll-mt-16"><ProjectsPage /></div>
        <div id="Research" className="scroll-mt-16"><ResearchPage /></div>
        <div id="Portfolio" className="scroll-mt-16"><PortfolioPage /></div>
        <div id="Certificates" className="scroll-mt-16"><AchievementsPage /></div>
        <div id="Contact" className="scroll-mt-16"><ContactPage /></div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;