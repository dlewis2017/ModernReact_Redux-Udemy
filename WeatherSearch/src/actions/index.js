import axios from 'axios';

const API_KEY = '54f5ea7a96c12228b27b6d2aaa8f23f0'; //for open weather map
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; //keep action types consistant

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us` //static US country code
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
