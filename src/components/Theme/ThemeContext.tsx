import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

export const ThemeContext = createContext<{ theme: string, toggleTheme: () => void }>({ theme: 'dark', toggleTheme: () => { } });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const toggleTheme = () => {
    // Toggling is disabled
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-xl bg-white/5 border border-white/10 text-[var(--text-primary)] hover:bg-white/10 transition-all group"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'dark' ? <Sun size={18} className="text-brand-green" /> : <Moon size={18} className="text-brand-green" />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
