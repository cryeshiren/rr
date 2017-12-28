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
                                            <WeatherLineChart datas={temperatures} width={200} height={200}/>
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
        return new WeatherLineChartModel(l.dt_txt, l.main.temp);
    });
}
