import { FETCH_WEATHER } from '../constants/ActionTypes';
import { ROOT_URL } from '../constants/index';
import axios from 'axios';

interface IFetchWeather {
    type: FETCH_WEATHER;
    weathers: any;
}

export function fetchWeather(city: string) : IFetchWeather {
    return {
        type: FETCH_WEATHER,
        weathers: getWeatherData(city)
    };
}

function getWeatherData(city: string) {
    const url = `${ROOT_URL}&q=${city},cn`;
    const request = axios.get(url)
        .catch(function(error) {
            console.log(error);
            return '';
        });
    console.log(request);
    return request;
}