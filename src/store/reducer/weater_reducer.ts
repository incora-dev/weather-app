import { combineReducers } from 'redux';
import actionTypes from '../types/weather_types';

const initialState = {
  weather: {
    city: null,
    forecast: [],
  },
};

const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_WEATHER_DATA:
      return {
        ...state,
        weather: {
          city: action?.data?.city_name,
          forecast: action?.data?.data,
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>
