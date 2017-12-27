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
                        return (
                            <TableRow
                                hover={true}
                                key={index}
                            >
                                <TableCell>
                                    <Map latitude={weather.city.coord.lat} longitude={weather.city.coord.lon}/>
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
