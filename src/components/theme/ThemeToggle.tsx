'use client';

import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const userPreference = localStorage.getItem('darkMode');

    if (userPreference !== null) {
      setIsDark(userPreference === 'true');
      if (userPreference === 'true') {
        document.documentElement.classList.add('dark');
      }
      else {
        document.documentElement.classList.remove('dark');
      }
    }
    else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      setIsDark(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
      else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white z-50 shadow-lg"
    >
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
