import actionTypes from '../types/weather_types';

const getWeatherData = (data: any) => {
  return {
    type: actionTypes.GET_WEATHER_DATA,
    data,
  };
};

const SetWeatherData = (data: any) => ({
  type: actionTypes.SET_WEATHER_DATA,
  data,
});

const weatherActions = {
  getWeatherData,
  SetWeatherData,
};

export default weatherActions;
