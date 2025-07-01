import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { WeatherData } from './types/weather';
import { searchWeather } from './utils/weatherService';
import { getMoodData } from './utils/moodService';
import WeatherBackground from './components/WeatherBackground';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import MoodSection from './components/MoodSection';
import EmptyState from './components/EmptyState';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const weatherData = await searchWeather(city);
      if (weatherData) {
        setWeather(weatherData);
      } else {
        setError(`Weather data not found for "${city}". Try another city!`);
        setWeather(null);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setWeather(null);
    } finally {
      setIsLoading(false);
    }
  };

  const moodData = weather ? getMoodData(weather.weatherType) : null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <WeatherBackground weatherType={weather?.weatherType || 'clear'} />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <motion.header
          className="text-center py-8 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sparkles className="h-8 w-8 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Mini Weather Snapshot
            </h1>
            <Sparkles className="h-8 w-8 text-yellow-300" />
          </div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Your Daily Weather, Mood, Outfit & Activity — All in One Beautiful Glance
          </p>
        </motion.header>

        {/* Search Bar */}
        <div className="px-4 mb-8">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Error State */}
        {error && (
          <motion.div
            className="mx-4 mb-8 p-4 bg-red-500/20 backdrop-blur-md rounded-2xl border border-red-300/30"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white text-center">{error}</p>
          </motion.div>
        )}

        {/* Main Content */}
        <div className="px-4 pb-8">
          {weather && moodData ? (
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Weather Card */}
              <WeatherCard weather={weather} />
              
              {/* Mood Section */}
              <MoodSection mood={moodData} />
            </div>
          ) : !isLoading && !error && (
            <div className="max-w-2xl mx-auto">
              <EmptyState />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;