import React from 'react';
import { motion } from 'framer-motion';

const StatusBar: React.FC = () => {
  // Get current time for the status bar
  const getCurrentTime = () => {
    const date = new Date();
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };
  
  const [time, setTime] = React.useState(getCurrentTime());
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="w-full flex justify-between items-center h-14 z-10"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-white text-base font-mono">{time}</div>
      <div className="flex gap-2">
        <div className="w-5 h-2 bg-white rounded-sm opacity-70" />
        <div className="w-4 h-3 bg-white opacity-70" />
        <div className="w-6 h-3 border border-white rounded opacity-70" />
      </div>
    </motion.div>
  );
};

export default StatusBar;