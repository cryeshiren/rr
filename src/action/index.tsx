/**
 * Created by www.wuleba.com on 2016/9/26.
 */

import * as axios from 'axios';

const API_KEY = 'c97ef90f910baef4d7bacbf2ed057137';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},cn`;
    const request = axios.get(url);
    console.log('Request : ', request);
    return ({
        type: FETCH_WEATHER,
        payload: request
    });
}