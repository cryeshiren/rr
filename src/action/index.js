/**
 * Created by www.wuleba.com on 2016/9/26.
 */
"use strict";
var axios = require('axios');
var API_KEY = 'c97ef90f910baef4d7bacbf2ed057137';
var ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;
exports.FETCH_WEATHER = 'FETCH_WEATHER';
function fetchWeather(city) {
    var url = ROOT_URL + "&q=" + city + ",cn";
    var request = axios.get(url);
    console.log('Request : ', request);
    return ({
        type: exports.FETCH_WEATHER,
        payload: request
    });
}
exports.fetchWeather = fetchWeather;
//# sourceMappingURL=index.js.map