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
      'x-rapidapi-key': '7c9aed37cdmsh967642cddb01f2ep15e8efjsn670aa6bc97c1'
    }
  };

  return axios.get<WeatherForecast>('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly', options);
}
