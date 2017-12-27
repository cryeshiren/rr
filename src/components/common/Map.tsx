import * as React from 'react';
import ReactMapGL from 'react-map-gl';
import { MAPBOX_TOKEN } from "../../constants/index";

interface MapProps {
  width?: number;
  height?: number;
  latitude: number;
  longitude: number;
}

interface MapState {}

export default class Map extends React.Component<MapProps, MapState> {
  render() {
    const {width, height, latitude, longitude} = this.props;
    return (
      <div>
        <ReactMapGL 
            width={!!width ? width : 200}
            height={!!height ? height : 200}
            latitude={latitude}
            longitude={longitude}
            zoom={8}
            mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </div>
    );
  }
}
