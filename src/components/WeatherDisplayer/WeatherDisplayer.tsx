import React, { useEffect, useState } from 'react';
import { WeatherDay } from '../../models/weather';
import { WeatherDayCard } from './WeatherDayCard';
import styles from './WeatherDisplayer.module.scss';
import { WeatherInfoCard } from './WeatherInfoCard/WeatherInfoCard';

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface WidgetProps {
  days: WeatherDay[];
  city: string;
  onChangeLocation: (location: string) => void;
}

export const WeatherDisplayer = ({ days = [], city, onChangeLocation }: WidgetProps) => {
  const [currentDay, setCurrentDay] = useState(days[0]);
  const [searchedValue, setSearchedValue] = useState<string>('');

  useEffect(() => {
    if (days?.length) {
      setCurrentDay(days[0]);
    }
  }, [days]);

  const handleInput = (input:any):void => {
    setSearchedValue(input?.target?.value);
    if (input?.key === 'Enter' && searchedValue?.length) {
      onChangeLocation(input?.target?.value);
      setSearchedValue('');
    }
  };

  return <div className={styles.wrapper}>
    <WeatherInfoCard
      dayName={DAY_NAMES[new Date(currentDay?.timestamp_local).getDay()]}
      time={`${new Date(currentDay?.timestamp_local).getHours()}:00`}
      icon={`https://www.weatherbit.io/static/img/icons/${currentDay?.weather.icon}.png`}
      temperature={currentDay?.temp}
      cityName={city}
      clouds={currentDay?.clouds}
      wind={currentDay?.wind_spd}
      text={currentDay?.weather?.description}
      />
    <div className={styles.dayList}>
      {days.map(el => (
        <WeatherDayCard
          onClick={() => setCurrentDay(el)}
          isActive={el?.timestamp_local === currentDay?.timestamp_local}
          key={el?.timestamp_local}
          dayName={DAY_NAMES[new Date(el?.timestamp_local).getDay()]}
          time={`${new Date(el?.timestamp_local).getHours()}:00`}
          icon={`https://www.weatherbit.io/static/img/icons/${el?.weather?.icon}.png`}
          temperature={el?.temp}
          />
      ))}
    </div>
    <div className={styles.cityInputWrapper}>
      <div className={styles.changeCityTitle}>
        Look for a weather in another city
      </div>
      <input onKeyDown={(key) => handleInput(key)} />
      <button onClick={() => searchedValue?.length && onChangeLocation(searchedValue)}>Search</button>
    </div>
  </div>
}
