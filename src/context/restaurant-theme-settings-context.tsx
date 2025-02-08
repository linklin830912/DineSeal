"use client"
import { DEFAULT_RESTAURANT_THEME_SETTINGS } from '@/constant/default-back-office-settings';
import { RestaurantThemeSettings } from '@/model/theme/RestaurantThemeSettings';
import { themeSwitch } from '@/utils/themeHelper';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface RestaurantThemeSettingsState {
    restaurantThemeSettings: RestaurantThemeSettings,
    setRestaurantThemeSettings: (settings: RestaurantThemeSettings)=>void
}

// Create the context with an initial empty state
const RestaurantThemeSettingsContext = createContext<RestaurantThemeSettingsState>({
    restaurantThemeSettings: DEFAULT_RESTAURANT_THEME_SETTINGS,
    setRestaurantThemeSettings: () => { }
});

// Create a provider component
export const RestaurantThemeSettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [restaurantThemeSettings, setRestaurantThemeSettings] = useState<RestaurantThemeSettings>(DEFAULT_RESTAURANT_THEME_SETTINGS);

    useEffect(() => {
        // document.documentElement.setAttribute('data-theme', restaurantThemeSettings);
        // localStorage.setItem('theme', restaurantThemeSettings);
console.log("!!!REST", restaurantThemeSettings)
        const colorTHemeSettings = themeSwitch(restaurantThemeSettings.main.colorThemeEnum);
        Object.entries(colorTHemeSettings).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}`, value);
        })
        
    }, [restaurantThemeSettings]);
    
    return (
        <RestaurantThemeSettingsContext.Provider value={{
            restaurantThemeSettings: restaurantThemeSettings,
            setRestaurantThemeSettings: setRestaurantThemeSettings
        }}>
            {children}
        </RestaurantThemeSettingsContext.Provider>
    );
};

// Hook to use the Counter context
export const useRestaurantThemeSettings = (): RestaurantThemeSettingsState => {
  const context = useContext(RestaurantThemeSettingsContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};
