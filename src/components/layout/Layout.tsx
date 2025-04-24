import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;