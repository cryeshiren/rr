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
  render() {
    return (
        <div>
          <LineChart width={this.props.width} height={this.props.height} data={this.props.datas}>
            <XAxis dataKey="dateText"/>
            <YAxis />
            <Line dataKey="temperature"/>
            <Tooltip/>
          </LineChart>
        </div>
    );
  }
}