export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  description: string;
  weatherType: WeatherType;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  icon: string;
}

export type WeatherType = 'clear' | 'rain' | 'snow' | 'clouds' | 'mist' | 'storm';

export interface MoodData {
  emoji: string;
  vibe: string;
  outfit: string;
  activity: string;
  music: {
    title: string;
    url: string;
  };
}