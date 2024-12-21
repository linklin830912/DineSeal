"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ThemeSettingsState {
    themeSettings: string,
    setThemeSettings: (themeSettings:'light' | 'dark')=>void
}

// Create the context with an initial empty state
const ThemeSettingsContext = createContext<ThemeSettingsState | undefined>(undefined);

// Create a provider component
export const ThemeSettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [themeSettings, setThemeSettings] = useState<'light' | 'dark'>('light');

    useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeSettings);
    localStorage.setItem('theme', themeSettings);
    }, [themeSettings]);
    
    return (
        <ThemeSettingsContext.Provider value={{
            themeSettings: themeSettings,
            setThemeSettings: setThemeSettings
        }}>
            {children}
        </ThemeSettingsContext.Provider>
    );
};

// Hook to use the Counter context
export const useThemeSettings = (): ThemeSettingsState => {
  const context = useContext(ThemeSettingsContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};
