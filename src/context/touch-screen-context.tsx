"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TouchScreenState {
    positionXs: number[];
    setPositionXs: (ps: number[]) => void;
    currentPossitionXIndex: number;
    setCurrentPossitionXIndex: (x: number) => void;
}

// Create the context with an initial empty state
const TouchScreenContext = createContext<TouchScreenState | undefined>(undefined);

// Create a provider component
export const TouchScreenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [positionXs, setPositionXs] = useState<number[]>([0]);
    const [currentPossitionXIndex, setCurrentPossitionXIndex] = useState<number>(0);
  return (
    <TouchScreenContext.Provider value={{
        positionXs: positionXs,
        setPositionXs: setPositionXs,
        currentPossitionXIndex: currentPossitionXIndex,
        setCurrentPossitionXIndex: setCurrentPossitionXIndex
    }}>
      {children}
    </TouchScreenContext.Provider>
  );
};

// Hook to use the Counter context
export const useTouchScreen = (): TouchScreenState => {
  const context = useContext(TouchScreenContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};
