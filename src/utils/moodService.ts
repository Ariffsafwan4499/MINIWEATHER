import { WeatherType, MoodData } from '../types/weather';

const moodMap: Record<WeatherType, MoodData> = {
  clear: {
    emoji: '😎',
    vibe: 'Soak up the sunshine and embrace the energy',
    outfit: 'Light t-shirt, sunglasses, and comfortable sneakers',
    activity: 'Perfect for a walk in the park or outdoor sports 🚴',
    music: {
      title: 'Sunny Chill Vibes',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd',
    },
  },
  rain: {
    emoji: '☔',
    vibe: 'Perfect for cozy indoor moments with chai & books',
    outfit: 'Umbrella, light jacket, and waterproof shoes',
    activity: 'Stay in and watch a movie or read a good book 🍿',
    music: {
      title: 'Rainy Day Lo-Fi',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6',
    },
  },
  snow: {
    emoji: '❄️',
    vibe: 'Time to get cozy and embrace the winter magic',
    outfit: 'Warm sweater, boots, and a thick coat',
    activity: 'Hot cocoa by the window or winter photography ☕',
    music: {
      title: 'Winter Chill',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DX4H7FFUM2osB',
    },
  },
  clouds: {
    emoji: '☁️',
    vibe: 'Feels like perfect nap weather, soft and dreamy',
    outfit: 'Light layers - cardigan and comfortable jeans',
    activity: 'Great for creative work or gentle outdoor strolls 🎨',
    music: {
      title: 'Cloudy Day Acoustics',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DX1s9knjP51Oa',
    },
  },
  mist: {
    emoji: '🌫️',
    vibe: 'Mysterious and contemplative atmosphere',
    outfit: 'Light jacket and layers for changing conditions',
    activity: 'Journal with a warm drink or meditative walk ☕',
    music: {
      title: 'Misty Morning Ambience',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DX3Ogo9pFvBkY',
    },
  },
  storm: {
    emoji: '⛈️',
    vibe: 'Raw energy in the air - time to feel alive',
    outfit: 'Stay indoors or wear protective rain gear',
    activity: 'Watch the storm from inside or listen to thunderstorms 🌩️',
    music: {
      title: 'Storm Sounds & Ambience',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j',
    },
  },
};

export const getMoodData = (weatherType: WeatherType): MoodData => {
  return moodMap[weatherType];
};