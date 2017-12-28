import { FETCH_WEATHER } from '../constants/ActionTypes';
import { ROOT_URL } from '../constants/index';
import axios from 'axios';

interface IFetchWeather {
    type: FETCH_WEATHER;
    weathers: any;
}

function fetchWeather(weathers: any) : IFetchWeather {
    return {
        type: FETCH_WEATHER,
        weathers: weathers
    };
}

function getWeatherData(city: string) {
    const url = `${ROOT_URL}&q=${city},cn`;
    return axios.get(url);
}

function fetch(city: string) {
    return dispatch => {
        dispatch(fetchWeather([]));
    return getWeatherData(city)
      .then(response => response.data)
      .then(data => dispatch(fetchWeather(data)))
    }
}

export function fetchNeeded(city: string) {
    return dispatch => dispatch(fetch(city));
}