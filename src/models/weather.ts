export interface AppStore {
  weather: {
    forecast: WeatherForecast[];
    city: string;
  };
}

export interface WeatherDay {
  clouds: number;
  datetime: string;
  temp: number;
  wind_spd: number;
  weather: {
    icon: string;
    code: number;
    description: string;
  };
  timestamp_local: string;
}

export interface WeatherForecast {
  city_name: string;
  lat: number;
  lon: number;
  data: WeatherDay[];
  clouds: number;
  datetime: string;
  temp: number;
  wind_spd: number;
  weather: {
    icon: string;
    code: number;
    description: string;
  };
  timestamp_local: string;
}

export interface WeatherLocation {
  city?: string;
  lon?: number;
  lat?: number;
}
