import * as React from 'react';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Map from '../common/Map';

interface WeatherListProps {
    weathers: Array<any>;
}

interface WeatherState {}

export default class WeatherList extends React.Component<WeatherListProps, WeatherState> {
  render() {
    return (
      <div>
          <TableBody>
            {this.props.weathers.map((weather, index) => 
                    <TableRow
                        hover={true}
                        key={index}
                    >
                        <TableCell>
                            <Map latitude={weather.latitude} longitude={weather.longitude}/>
                        </TableCell>
                    </TableRow>
                )
            };
          </TableBody>
      </div>
    );
  }
}
