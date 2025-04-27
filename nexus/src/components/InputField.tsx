import React from 'react';
import { motion } from 'framer-motion';

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ 
  value, 
  onChange, 
  error, 
  placeholder,
  type = "text"
}) => {
  return (
    <div className="w-full mb-2">
      <motion.div
        className={`relative w-full overflow-hidden rounded-md ${
          error ? 'border-red-500' : 'border-red-900'
        }`}
        whileTap={{ scale: 0.99 }}
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 bg-neutral-900 text-white text-lg border border-red-900/50 rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent
                    transition-all duration-300 placeholder-gray-500
                    shadow-[0px_0px_18.7px_1px_rgba(113,17,0,1.00)]"
        />
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 -z-10 bg-red-900/20 blur-md opacity-30"></div>
      </motion.div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1 ml-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default InputField;