import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sparkles } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <motion.div
      className="text-center py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="mx-auto w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Cloud className="h-12 w-12 text-white/70" />
      </motion.div>
      
      <h2 className="text-2xl font-bold text-white mb-4">
        Your Daily Weather Vibe Awaits
      </h2>
      
      <div className="flex items-center justify-center space-x-2 mb-6">
        <Sparkles className="h-5 w-5 text-yellow-300" />
        <p className="text-white/80">
          Search for any city to discover your weather mood
        </p>
        <Sparkles className="h-5 w-5 text-yellow-300" />
      </div>
      
      <div className="space-y-2 text-white/60">
        <p className="flex items-center justify-center space-x-2">
          <span>🌡️</span>
          <span>Real-time weather</span>
        </p>
        <p className="flex items-center justify-center space-x-2">
          <span>😎</span>
          <span>Mood interpretation</span>
        </p>
        <p className="flex items-center justify-center space-x-2">
          <span>👕</span>
          <span>Smart suggestions</span>
        </p>
      </div>
    </motion.div>
  );
};

export default EmptyState;