import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StatusBar from './StatusBar';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import { useNavigation } from '../context/NavigationContext';

const GameLinkScreen: React.FC = () => {
  const [gameLink, setGameLink] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { navigateTo } = useNavigation();

  const handleSubmit = () => {
    if (!gameLink.trim()) {
      setError('Please enter a valid game link');
      return;
    }
    
    if (gameLink.length < 6) {
      setError('Game link must be at least 6 characters');
      return;
    }
    
    setError('');
    setSuccess(true);
    
    // Navigate to register screen after successful submission
    setTimeout(() => {
      navigateTo('register');
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-between p-4 relative overflow-hidden">
      <ParticleBackground />
      
      <StatusBar />

      <motion.div 
        className="flex flex-col items-center gap-6 z-10 px-4 py-12 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-white text-5xl font-normal leading-tight font-cinzel text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Game Link
        </motion.h1>

        <motion.h2 
          className="text-white text-4xl font-normal font-cinzel leading-[53px] text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Welcome Outcast
        </motion.h2>

        <motion.p 
          className="text-white text-2xl font-normal font-inter leading-loose text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Prove Your Worth
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="w-full max-w-xs"
        >
          <InputField 
            value={gameLink} 
            onChange={(e) => {
              setGameLink(e.target.value);
              if (error) setError('');
              if (success) setSuccess(false);
            }}
            error={error}
            placeholder="Enter your game link"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="w-full max-w-xs"
        >
          <SubmitButton onClick={handleSubmit} success={success} />
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default GameLinkScreen;