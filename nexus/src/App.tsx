import React from 'react';
import { NavigationProvider } from './context/NavigationContext';
import GameLinkScreen from './components/GameLinkScreen';
import RegisterScreen from './components/RegisterScreen';
import TokenScreen from './components/TokenScreen';
import { useNavigation } from './context/NavigationContext';

const AppContent = () => {
  const { currentScreen } = useNavigation();
  
  switch (currentScreen) {
    case 'landing':
      return <GameLinkScreen />;
    case 'register':
      return <RegisterScreen />;
    case 'token':
      return <TokenScreen />;
    default:
      return <GameLinkScreen />;
  }
};

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;