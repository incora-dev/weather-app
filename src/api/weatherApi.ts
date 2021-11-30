import axios from 'axios';
import { WeatherForecast } from '../models/weather';

export const getWeather = (location: { lon: number, lat: number, city: string }) => {
  const { lon, lat, city } = location;

  let options = {
    params: {
      city,
      lat,
      lon,
      units: 'metric',
    },
    headers: {
      'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
      'x-rapidapi-key': 'fa7d93a9ddmshdcfaad790337bc9p1a08c9jsn918fbdcc2aaa'
    }
  };

  return axios.get<WeatherForecast>('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly', options);
}
