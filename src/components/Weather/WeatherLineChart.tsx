import * as React from 'react';
import LineChart, { Line, XAxis, YAxis } from 'recharts';


export class WeatherLineChartModel {
  constructor(date: string, temperature: number) {
    this.date = date;
    this.temperature = temperature;
  }
  date: string;
  temperature: number;
}

interface WeatherLineChartProps {
  datas: Array<WeatherLineChartModel>
  width: number,
  height: number
}


const data02 = [
  { name: 'Page A', uv: 300, pv: 2600, amt: 3400 },
  { name: 'Page B', uv: 400, pv: 4367, amt: 6400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  { name: 'Page G', uv: 189, pv: 4800, amt: 2400 },
];

export default class WeatherLineChart extends React.Component<WeatherLineChartProps, any> {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    console.log('====================================');
    console.log(this.state.datas);
    console.log(this.state.width);
    console.log(this.state.height);
    console.log('====================================');
    return (
        <div>
          <LineChart width={this.state.width} height={this.state.height} data={data02}>
              <Line dataKey="pv"/>
          </LineChart>
        </div>
    );
  }
}