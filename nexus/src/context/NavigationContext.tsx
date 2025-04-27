import React, { createContext, useContext, useState } from 'react';

type Screen = 'landing' | 'register' | 'token';

interface NavigationContextType {
  currentScreen: Screen;
  navigateTo: (screen: Screen) => void;
  goBack: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screenHistory, setScreenHistory] = useState<Screen[]>(['landing']);

  const navigateTo = (screen: Screen) => {
    setScreenHistory(prev => [...prev, screen]);
  };

  const goBack = () => {
    setScreenHistory(prev => {
      if (prev.length <= 1) return prev;
      const newHistory = [...prev];
      newHistory.pop();
      return newHistory;
    });
  };

  return (
    <NavigationContext.Provider 
      value={{ 
        currentScreen: screenHistory[screenHistory.length - 1],
        navigateTo,
        goBack
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};