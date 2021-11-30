import React from 'react';
import { AiFillCloud } from 'react-icons/ai';
import { FiWind } from 'react-icons/fi';
import css from './WeatherInfoCard.module.scss';

interface WeatherInfoCardProps {
  cityName: string;
  dayName: string;
  time: string;
  temperature: number;
  clouds: number;
  wind: number;
  text: string;
  icon: string;
}

export const WeatherInfoCard = ({
  icon,
  dayName,
  time,
  temperature,
  clouds,
  wind,
  cityName,
  text,
}: WeatherInfoCardProps) => {
  return (<div className={css.wrapper}>
    <div className={css.infoColumn}>
      <div className={css.cityNameTitle}>{cityName}</div>
      <div>{dayName}</div>
      <div>{time}</div>
    </div>
    <div className={css.infoColumn}>
      <div><AiFillCloud /> {clouds}%</div>
      <div><FiWind /> {wind}m/s</div>
      <div>{text}</div>
    </div>
    <div className={css.infoColumn}>
      <div>{temperature}&#8451;</div>
      <img src={icon} alt="" />
    </div>
  </div>)
}
