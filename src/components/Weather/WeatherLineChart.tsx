import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


export class WeatherLineChartModel {
  constructor(date: number, temperature: number, dateText: string) {
    this.date = date;
    this.temperature = temperature;
    this.dateText = dateText;
  }
  date: number;
  temperature: number;
  dateText: string
}

interface WeatherLineChartProps {
  datas: Array<WeatherLineChartModel>
  width: number,
  height: number
}

export default class WeatherLineChart extends React.Component<WeatherLineChartProps, any> {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    console.log('====================================');
    console.log(this.state);
    console.log('====================================');
    return (
        <div>
          <LineChart width={this.state.width} height={this.state.height} data={this.state.datas}>
            <XAxis dataKey="dateText"/>
            <YAxis />
            <Line dataKey="temperature"/>
            <Tooltip/>
          </LineChart>
        </div>
    );
  }
}