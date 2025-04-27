import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface SubmitButtonProps {
  onClick: () => void;
  success?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, success }) => {
  return (
    <motion.button
      className="w-full py-3 bg-red-950 text-white text-xl font-cinzel rounded-md
                relative overflow-hidden transition-all duration-300
                hover:bg-red-900 active:scale-95 shadow-lg"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-transparent"
        initial={{ x: '100%' }}
        whileHover={{ x: '0%' }}
        transition={{ duration: 0.4 }}
      />
      
      {success ? (
        <motion.div 
          className="flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <CheckCircle className="mr-2 h-5 w-5" />
          <span>Success</span>
        </motion.div>
      ) : (
        <span>Submit</span>
      )}
    </motion.button>
  );
};

export default SubmitButton;