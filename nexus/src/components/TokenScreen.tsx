import React from 'react';
import { motion } from 'framer-motion';
import StatusBar from './StatusBar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import BackButton from './BackButton';
import { useNavigation } from '../context/NavigationContext';

const TokenScreen: React.FC = () => {
  const { navigateTo } = useNavigation();
  const token = '15241578750190521'; // In a real app, this would be generated

  const handleDone = () => {
    navigateTo('landing');
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-between p-4 relative overflow-hidden">
      <ParticleBackground />
      
      <StatusBar />
      <BackButton />

      <motion.div 
        className="flex flex-col items-center gap-8 z-10 px-4 py-12 md:py-16 w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-white text-3xl font-medium font-cinzel text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Unique Token Generated
        </motion.h1>

        <motion.div
          className="w-full space-y-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div 
            className="w-full px-2.5 py-3 outline outline-2 outline-red-950 flex justify-center items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-white text-lg font-black font-cinzel tracking-[9px]">
              {token}
            </div>
          </motion.div>

          <motion.p
            className="text-center text-white text-2xl font-normal font-cinzel leading-loose"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Save in secure location
          </motion.p>

          <motion.button
            className="w-full px-2.5 py-3 bg-red-950 text-white text-2xl font-normal font-cinzel
                       hover:bg-red-900 transition-colors duration-300"
            onClick={handleDone}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Done
          </motion.button>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default TokenScreen;