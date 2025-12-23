import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    console.log('=== Theme Effect Running ===');
    console.log('isDark state:', isDark);
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    const htmlElement = document.documentElement;
    console.log('Before update - classList:', htmlElement.classList.toString());
    
    if (isDark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    console.log('After update - classList:', htmlElement.classList.toString());
    console.log('Has dark class?', htmlElement.classList.contains('dark'));
  }, [isDark]);

  const toggleTheme = () => {
    console.log('🔄 Toggle clicked! Current isDark:', isDark, '-> Will become:', !isDark);
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
