import { WeatherData, WeatherType } from '../types/weather';

// Mock weather data - in production, this would fetch from OpenWeatherMap API
const mockWeatherData: Record<string, WeatherData> = {
  'new york': {
    city: 'New York',
    country: 'US',
    temperature: 22,
    description: 'Partly cloudy',
    weatherType: 'clouds',
    humidity: 65,
    windSpeed: 12,
    feelsLike: 24,
    icon: '02d',
  },
  'newyork': {
    city: 'New York',
    country: 'US',
    temperature: 22,
    description: 'Partly cloudy',
    weatherType: 'clouds',
    humidity: 65,
    windSpeed: 12,
    feelsLike: 24,
    icon: '02d',
  },
  'london': {
    city: 'London',
    country: 'UK',
    temperature: 15,
    description: 'Light rain',
    weatherType: 'rain',
    humidity: 80,
    windSpeed: 8,
    feelsLike: 13,
    icon: '10d',
  },
  'tokyo': {
    city: 'Tokyo',
    country: 'JP',
    temperature: 28,
    description: 'Clear sky',
    weatherType: 'clear',
    humidity: 45,
    windSpeed: 5,
    feelsLike: 30,
    icon: '01d',
  },
  'moscow': {
    city: 'Moscow',
    country: 'RU',
    temperature: -5,
    description: 'Snow',
    weatherType: 'snow',
    humidity: 90,
    windSpeed: 15,
    feelsLike: -8,
    icon: '13d',
  },
  'dubai': {
    city: 'Dubai',
    country: 'AE',
    temperature: 35,
    description: 'Hot and sunny',
    weatherType: 'clear',
    humidity: 30,
    windSpeed: 10,
    feelsLike: 38,
    icon: '01d',
  },
  'paris': {
    city: 'Paris',
    country: 'FR',
    temperature: 18,
    description: 'Foggy',
    weatherType: 'mist',
    humidity: 85,
    windSpeed: 3,
    feelsLike: 16,
    icon: '50d',
  },
  'mumbai': {
    city: 'Mumbai',
    country: 'IN',
    temperature: 32,
    description: 'Humid and warm',
    weatherType: 'clouds',
    humidity: 78,
    windSpeed: 7,
    feelsLike: 36,
    icon: '02d',
  },
  'sydney': {
    city: 'Sydney',
    country: 'AU',
    temperature: 24,
    description: 'Sunny',
    weatherType: 'clear',
    humidity: 55,
    windSpeed: 14,
    feelsLike: 26,
    icon: '01d',
  },
  'berlin': {
    city: 'Berlin',
    country: 'DE',
    temperature: 12,
    description: 'Overcast',
    weatherType: 'clouds',
    humidity: 72,
    windSpeed: 9,
    feelsLike: 10,
    icon: '04d',
  },
  'los angeles': {
    city: 'Los Angeles',
    country: 'US',
    temperature: 26,
    description: 'Sunny',
    weatherType: 'clear',
    humidity: 40,
    windSpeed: 6,
    feelsLike: 28,
    icon: '01d',
  },
  'losangeles': {
    city: 'Los Angeles',
    country: 'US',
    temperature: 26,
    description: 'Sunny',
    weatherType: 'clear',
    humidity: 40,
    windSpeed: 6,
    feelsLike: 28,
    icon: '01d',
  },
  'chicago': {
    city: 'Chicago',
    country: 'US',
    temperature: 8,
    description: 'Windy',
    weatherType: 'clouds',
    humidity: 68,
    windSpeed: 22,
    feelsLike: 4,
    icon: '03d',
  },
  'miami': {
    city: 'Miami',
    country: 'US',
    temperature: 29,
    description: 'Thunderstorm',
    weatherType: 'storm',
    humidity: 85,
    windSpeed: 18,
    feelsLike: 34,
    icon: '11d',
  },
  'hyderabad': {
    city: 'Hyderabad',
    country: 'IN',
    temperature: 34,
    description: 'Hot and dry',
    weatherType: 'clear',
    humidity: 45,
    windSpeed: 8,
    feelsLike: 38,
    icon: '01d',
  },
  'riyadh': {
    city: 'Riyadh',
    country: 'SA',
    temperature: 42,
    description: 'Very hot and sunny',
    weatherType: 'clear',
    humidity: 15,
    windSpeed: 12,
    feelsLike: 46,
    icon: '01d',
  },
  'jeddah': {
    city: 'Jeddah',
    country: 'SA',
    temperature: 38,
    description: 'Hot and humid',
    weatherType: 'clear',
    humidity: 65,
    windSpeed: 14,
    feelsLike: 44,
    icon: '01d',
  },
  'taif': {
    city: 'Taif',
    country: 'SA',
    temperature: 28,
    description: 'Pleasant and mild',
    weatherType: 'clouds',
    humidity: 40,
    windSpeed: 6,
    feelsLike: 30,
    icon: '02d',
  },
};

export const searchWeather = async (city: string): Promise<WeatherData | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const normalizedCity = city.toLowerCase().trim().replace(/\s+/g, '');
  
  // First try exact match with spaces removed
  let weatherData = mockWeatherData[normalizedCity];
  
  // If not found, try with spaces
  if (!weatherData) {
    const cityWithSpaces = city.toLowerCase().trim();
    weatherData = mockWeatherData[cityWithSpaces];
  }
  
  // If still not found, try partial matching
  if (!weatherData) {
    const cityKeys = Object.keys(mockWeatherData);
    const partialMatch = cityKeys.find(key => 
      key.includes(normalizedCity) || normalizedCity.includes(key)
    );
    if (partialMatch) {
      weatherData = mockWeatherData[partialMatch];
    }
  }
  
  return weatherData || null;
};

export const getPopularCities = (): string[] => {
  return [
    'New York',
    'London', 
    'Tokyo',
    'Paris',
    'Dubai',
    'Moscow',
    'Mumbai',
    'Sydney',
    'Berlin',
    'Los Angeles',
    'Chicago',
    'Miami',
    'Hyderabad',
    'Riyadh',
    'Jeddah',
    'Taif'
  ];
};