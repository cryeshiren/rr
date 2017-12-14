/**
 * Created by www.wuleba.com on 2016/9/26.
 */
"use strict";
var redux_1 = require('redux');
var weather_reducer_1 = require('./WeatherReducer');
var rootReducer = redux_1.combineReducers({
    weather: weather_reducer_1.default
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rootReducer;
//# sourceMappingURL=index.js.map