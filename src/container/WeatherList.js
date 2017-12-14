/**
 * Created by www.wuleba.com on 2016/9/28.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var chart_1 = require('../component/Chart');
var google_map_1 = require('../component/GoogleMap');
var WeatherList = (function (_super) {
    __extends(WeatherList, _super);
    function WeatherList() {
        _super.apply(this, arguments);
    }
    WeatherList.prototype.renderWeather = function (cityData) {
        var name = cityData.city.name;
        var temps = cityData.list.map(function (weather) { return weather.main.temp - 273.15; });
        var pressures = cityData.list.map(function (weather) { return weather.main.pressure; });
        var humidities = cityData.list.map(function (weather) { return weather.main.humidity; });
        // const lat = cityData.city.coord.lat;
        // const lon = cityData.city.coord.lon;
        var _a = cityData.city.coord, lat = _a.lat, lon = _a.lon;
        return (React.createElement("tr", {key: name}, React.createElement("td", null, React.createElement(google_map_1.default, {lat: lat, lon: lon})), React.createElement("td", null, React.createElement(chart_1.default, {data: temps, color: "orange", units: "°C"})), React.createElement("td", null, React.createElement(chart_1.default, {data: pressures, color: "green", units: "hPa"})), React.createElement("td", null, React.createElement(chart_1.default, {data: humidities, color: "black", units: "%"}))));
    };
    WeatherList.prototype.render = function () {
        return (React.createElement("table", {className: "table table-hover"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("td", null, "城市"), React.createElement("td", null, "温度 (°C)"), React.createElement("td", null, "气压 (hPa)"), React.createElement("td", null, "湿度 (%)"))), React.createElement("tbody", null, this.props.weather.map(this.renderWeather))));
    };
    return WeatherList;
}(React.Component));
// function mapStateToProps(state) {
//     return ({weather: state.weather});
// }
function mapStateToProps(_a) {
    var weather = _a.weather;
    return ({ weather: weather });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(WeatherList);
//# sourceMappingURL=weather_list.js.map