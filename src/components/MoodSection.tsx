import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Music, Activity, Shirt } from 'lucide-react';
import { MoodData } from '../types/weather';

interface MoodSectionProps {
  mood: MoodData;
}

const MoodSection: React.FC<MoodSectionProps> = ({ mood }) => {
  const handleMusicClick = () => {
    window.open(mood.music.url, '_blank');
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {/* Mood Card */}
      <motion.div
        className="bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/30 shadow-xl"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex items-center space-x-4 mb-4">
          <motion.div
            className="text-4xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {mood.emoji}
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-pink-300" />
              Today's Vibe
            </h3>
            <p className="text-white/90">{mood.vibe}</p>
          </div>
        </div>
      </motion.div>

      {/* Suggestions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Outfit Suggestion */}
        <motion.div
          className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start space-x-3">
            <Shirt className="h-5 w-5 text-purple-300 mt-1" />
            <div>
              <h4 className="text-white font-medium mb-2">Perfect Outfit</h4>
              <p className="text-white/80 text-sm">{mood.outfit}</p>
            </div>
          </div>
        </motion.div>

        {/* Activity Suggestion */}
        <motion.div
          className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start space-x-3">
            <Activity className="h-5 w-5 text-green-300 mt-1" />
            <div>
              <h4 className="text-white font-medium mb-2">Suggested Activity</h4>
              <p className="text-white/80 text-sm">{mood.activity}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Music Suggestion */}
      <motion.button
        onClick={handleMusicClick}
        className="w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center justify-center space-x-3">
          <Music className="h-6 w-6 text-purple-300" />
          <div className="text-center">
            <h4 className="text-white font-medium mb-1">Perfect Soundtrack</h4>
            <p className="text-white/80 text-sm">{mood.music.title}</p>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default MoodSection;