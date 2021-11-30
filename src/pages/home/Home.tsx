import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WeatherDisplayer } from '../../components/WeatherDisplayer';
import { AppStore, WeatherLocation } from '../../models/weather';
import WeatherActions  from '../../store/actions/weather_actions';

export const HomePage = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<WeatherLocation>({
    lat: 50.4501,
    lon: 30.5234,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      const { latitude, longitude } = location.coords;
      setLocation({
        lat: latitude,
        lon: longitude,
      });
    }, err => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    dispatch(WeatherActions.getWeatherData(location));
    // eslint-disable-next-line
  },[location]);

  const weatherState = useSelector<AppStore>(state => state.weather) as AppStore;

  if (!weatherState?.weather?.forecast) return null;

  return <div>
    <WeatherDisplayer
      city={weatherState?.weather?.city}
      days={weatherState?.weather?.forecast}
      onChangeLocation={(city) => setLocation({ city })}
    />
  </div>
}
