import * as React from 'react';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Map from '../common/Map';
import WeatherLineChart, { WeatherLineChartModel } from "../Weather/WeatherLineChart";

interface WeatherListProps {
    weathers: Array<any>;
}

interface WeatherState {}

export default class WeatherList extends React.Component<WeatherListProps, WeatherState> {
  render() {
    const weathers = this.props.weathers.filter((weather) => {
        return !!weather.city;
    });

    console.log('=================list===================');
    console.log(weathers);
    console.log('====================================');

    return (
        <div>
            <Table>
                <TableBody>
                    {weathers.map((weather, index) => {
                                const viewport = {
                                    latitude: weather.city.coord.lat,
                                    longitude: weather.city.coord.lon,
                                    zoom: 11,
                                    bearing: 0,
                                    pitch: 0,
                                    width: 200,
                                    height: 200
                                };
                                
                                const temperatures = toModel(weather.list);
                                return (
                                    <TableRow
                                        hover={true}
                                        key={index}
                                    >
                                        <TableCell>
                                            <Map viewport={viewport}/>
                                        </TableCell>
                                        <TableCell>
                                            <WeatherLineChart datas={getSevenDayWeathers(temperatures)} width={400} height={200}/>
                                        </TableCell>
                                    </TableRow>
                                );
                            }
                        )
                    }
                </TableBody>
            </Table>
        </div>
    );
  }
}

function toModel(list: Array<any>) : Array<WeatherLineChartModel>{
    return list.map<WeatherLineChartModel>(l => {
        let date = new Date(l.dt_txt);
        return new WeatherLineChartModel(date.getHours(), kelvinToCelsius(l.main.temp), date.toLocaleDateString());
    });
}

function getSevenDayWeathers(list: Array<WeatherLineChartModel>) : Array<WeatherLineChartModel> {
    return list.filter(l => {
        return l.date == 12;
    });
}

function kelvinToCelsius(kelvin: number) : number {
    return Math.round(kelvin - 273.15);
}