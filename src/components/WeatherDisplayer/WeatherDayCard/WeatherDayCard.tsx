import React from 'react';
import cn from 'classnames';
import css from './WeatherDayCard.module.scss';

interface WeatherDayCardProps {
  dayName: string;
  icon: string;
  time: string;
  temperature: number;
  isActive: boolean;
  onClick: () => void;
}

export const WeatherDayCard = ({ dayName, icon, temperature, time, isActive, onClick }: WeatherDayCardProps) => {
  return (
    <div onClick={onClick} className={cn(css.card, { [css.active]: isActive })}>
      <div className={css.cardDay}>{dayName}</div>
      <div className={css.cardDayTime}>{time}</div>
      <img src={icon} alt="" />
      <div>{temperature}&#8451;</div>
    </div>
  );
}
