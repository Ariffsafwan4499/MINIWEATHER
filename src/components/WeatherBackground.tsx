import React from 'react';
import { motion } from 'framer-motion';
import { WeatherType } from '../types/weather';

interface WeatherBackgroundProps {
  weatherType: WeatherType;
}

const WeatherBackground: React.FC<WeatherBackgroundProps> = ({ weatherType }) => {
  const getBackgroundClass = () => {
    switch (weatherType) {
      case 'clear':
        return 'bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400';
      case 'rain':
        return 'bg-gradient-to-br from-gray-600 via-blue-700 to-blue-900';
      case 'snow':
        return 'bg-gradient-to-br from-blue-100 via-white to-blue-200';
      case 'clouds':
        return 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600';
      case 'mist':
        return 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500';
      case 'storm':
        return 'bg-gradient-to-br from-gray-800 via-gray-900 to-black';
      default:
        return 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600';
    }
  };

  const renderWeatherAnimation = () => {
    switch (weatherType) {
      case 'rain':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-8 bg-blue-200 opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
                animate={{
                  y: ['0vh', '100vh'],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        );
      case 'snow':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-80"
                style={{
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: ['0vh', '100vh'],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        );
      case 'clear':
        return (
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 bg-yellow-300 rounded-full opacity-50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`fixed inset-0 -z-10 ${getBackgroundClass()}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {renderWeatherAnimation()}
    </motion.div>
  );
};

export default WeatherBackground;