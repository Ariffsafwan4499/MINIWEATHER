import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Droplets, Wind, Eye } from 'lucide-react';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <motion.div
      className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">
          {weather.city}, {weather.country}
        </h2>
        <p className="text-white/80 text-lg capitalize">{weather.description}</p>
      </div>

      <div className="flex items-center justify-center mb-8">
        <motion.div
          className="text-6xl font-bold text-white mr-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {Math.round(weather.temperature)}°
        </motion.div>
        <div className="text-white/80">
          <p className="text-sm">Feels like</p>
          <p className="text-xl font-semibold">{Math.round(weather.feelsLike)}°</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <motion.div
          className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center space-x-3">
            <Droplets className="h-5 w-5 text-blue-300" />
            <div>
              <p className="text-white/80 text-sm">Humidity</p>
              <p className="text-white font-semibold">{weather.humidity}%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center space-x-3">
            <Wind className="h-5 w-5 text-green-300" />
            <div>
              <p className="text-white/80 text-sm">Wind</p>
              <p className="text-white font-semibold">{weather.windSpeed} km/h</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;