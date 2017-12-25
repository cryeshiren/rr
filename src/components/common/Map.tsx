import * as React from 'react';
import ReactMapGL from 'react-map-gl';

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
            width={!width ? 40 : width}
            height={!height ? 40 : height}
            latitude={latitude}
            longitude={longitude}
        />
      </div>
    );
  }
}
