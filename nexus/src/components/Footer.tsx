import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.div 
      className="w-full h-14 mt-8 border-t border-white/20 backdrop-blur-md flex items-center justify-center z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <motion.div 
        className="w-32 h-[5px] bg-white/70 rounded-full"
        whileHover={{ width: 160, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Footer;