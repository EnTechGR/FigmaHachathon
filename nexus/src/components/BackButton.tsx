import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const BackButton: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <motion.button
      className="absolute top-16 left-4 text-white p-2 rounded-full 
                 hover:bg-white/10 transition-colors z-20"
      onClick={goBack}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ArrowLeft size={24} />
    </motion.button>
  );
};

export default BackButton;