/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Theme, ThemeContextType } from '../types/theme';
import { account } from '../config/appwrite';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Try to get theme from localStorage first
    const savedTheme = localStorage.getItem('mmg-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Default to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const syncToAppwrite = useCallback(async (newTheme: Theme) => {
    try {
      const user = await account.get();
      if (user) {
        await account.updatePrefs({ theme: newTheme });
      }
    } catch (error) {
      // User not logged in or Appwrite not configured - that's okay
      console.log('Theme sync to Appwrite skipped:', error);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('mmg-theme', theme);
    
    // Try to sync to Appwrite preferences (non-blocking)
    syncToAppwrite(theme);
  }, [theme, syncToAppwrite]);

  const toggleTheme = () => {
    setThemeState((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
