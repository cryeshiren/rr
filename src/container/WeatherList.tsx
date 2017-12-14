/**
 * Created by www.wuleba.com on 2016/9/28.
 */

import * as React from 'react';

import {connect} from 'react-redux';

import Chart from '../component/chart';
import GoogleMap from '../component/GoogleMap';

interface IWeatherListProps {
    weather: any;
}

interface IWeatherListState {

}

class WeatherList extends React.Component<IWeatherListProps,IWeatherListState> {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp - 273.15);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        // const lat = cityData.city.coord.lat;
        // const lon = cityData.city.coord.lon;

        const {lat, lon} = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lat={lat} lon={lon}/>
                </td>
                <td>
                    <Chart className="weather-chart" data={temps} color="orange" units="°C"/>
                </td>
                <td>
                    <Chart className="weather-chart" data={pressures} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart className="weather-chart" data={humidities} color="black" units="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <td>城市</td>
                    <td>温度 (°C)</td>
                    <td>气压 (hPa)</td>
                    <td>湿度 (%)</td>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state) {
//     return ({weather: state.weather});
// }

function mapStateToProps({weather}) {
    return ({weather});
}

export default connect<any,any,any>(mapStateToProps)(WeatherList);