"use client"
import { CustomerSettingsThemeEnum } from '@/model/CustomerSettings';
import { themeSwitch } from '@/utils/themeHelper';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Commenting } from '@/model/Commenting';
import { Restaurant } from '@/model/Restaurant';
export enum MemoryLaneStateEnum { 
    BrowseComments,
    EditComment,
    ReadComment
}

interface MemoryLaneState {
    state: MemoryLaneStateEnum
    setState: (state: MemoryLaneStateEnum) => void
    restaurant: Restaurant | undefined,
    setRestaurant: (restaurant: Restaurant | undefined) => void,
    commentings?: Commenting[] | undefined
    setCommentings: (comments: Commenting[]) => void
    diaryId: number,
    setDiaryId: (diaryId: number) => void
    theme: ThemeSettings
    setTheme:(theme: ThemeSettings) => void
}

// Create the context with an initial empty state
const MemoryLaneStateContext = createContext<MemoryLaneState | undefined>(undefined);

// Create a provider component
export const MemoryLaneStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<MemoryLaneStateEnum>(MemoryLaneStateEnum.BrowseComments);
  const [restaurant, setRestaurant] = useState<Restaurant | undefined>();
  const [commentings, setCommentings] = useState<Commenting[]>([]);
  const [diaryId, setDiaryId] = useState<number>(-1);
  const initTheme = themeSwitch(CustomerSettingsThemeEnum.LIGHT);
  const [theme, setTheme] = useState<ThemeSettings>(initTheme);

  useEffect(() => {
    const storedRestaurantData = localStorage.getItem('restaurant');
    const storedCommentingsData = localStorage.getItem('commentings');
    const storedDiaryIdData = localStorage.getItem('diaryId');
    if (storedRestaurantData) {
      setRestaurant(JSON.parse(storedRestaurantData) as Restaurant);
    }
    if (storedCommentingsData) { 
      setCommentings(JSON.parse(storedCommentingsData) as Commenting[]);
    }
    if (storedDiaryIdData) { 
      setDiaryId(JSON.parse(storedDiaryIdData) as number);
    }
  }, []);

  useEffect(() => { 
    if (restaurant) { 
      localStorage.setItem('restaurant', JSON.stringify(restaurant));
    }
  }, [restaurant])

  useEffect(() => { 
    if (commentings) { 
      console.log("commentings.length", commentings.length);
      localStorage.setItem('commentings', JSON.stringify(commentings));
    }
  }, [commentings])

  useEffect(() => { 
    if (diaryId) {
      localStorage.setItem('diaryId', JSON.stringify(diaryId));
    }
  }, [commentings])
  
  return (
    <MemoryLaneStateContext.Provider value={{
      state: state,
      setState: setState,
      restaurant: restaurant,
      setRestaurant: setRestaurant,
      commentings: commentings,
      setCommentings: setCommentings,
      diaryId: diaryId,
      setDiaryId: setDiaryId,
      theme: theme,
      setTheme: setTheme,
    }}>
      {children}
    </MemoryLaneStateContext.Provider>
  );
};

export const useMemoryLaneState = (): MemoryLaneState => {
  const context = useContext(MemoryLaneStateContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};
