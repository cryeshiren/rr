import * as React from 'react';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Map from '../common/Map';

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

                        return (
                            <TableRow
                                hover={true}
                                key={index}
                            >
                                <TableCell>
                                    <Map viewport = {viewport}/>
                                </TableCell>
                            </TableRow>
                        )
                    }
                )
            }
            </TableBody>
          </Table>
      </div>
    );
  }
}
