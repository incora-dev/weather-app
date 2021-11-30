import { call, put, takeEvery } from 'redux-saga/effects';
import { getWeather } from '../../api/weatherApi';
import actionTypes from '../types/weather_types';

function* getWeatherData(action) {
  const { data } = action;
  const weatherDataResponse = yield call(getWeather, data);
  if (weatherDataResponse?.status === 200) {
    yield put({
      type: actionTypes.SET_WEATHER_DATA,
      data: weatherDataResponse?.data,
    });
  }
}

export default function* agreementSaga() {
  yield takeEvery(actionTypes.GET_WEATHER_DATA, getWeatherData);
}
