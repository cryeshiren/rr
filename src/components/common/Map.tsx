import * as React from 'react';
import MapGL, { FlyToInterpolator, ControlPanel } from 'react-map-gl';
import { MAPBOX_TOKEN } from "../../constants/index";

interface MapProps {
  viewport: {
    latitude: number,
    longitude: number,
    zoom: number,
    bearing: number,
    pitch: number,
    width: number,
    height: number
  },
  containerComponent?: any
}

interface MapState {
  viewport: any
}

export default class Map extends React.Component<MapProps, MapState> {

  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _onViewportChange = viewport => this.setState({
    viewport: {...this.state.viewport, ...viewport}
  });

  _resize = () => this._onViewportChange({
    width: this.props.viewport.width || window.innerWidth,
    height: this.props.viewport.height || window.innerHeight
  });

  _goToViewport = ({longitude, latitude}) => {
    this._onViewportChange({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 3000
    });
  };

  render() {

    const {viewport} = this.state;

    return (
      <div>
        <MapGL
          {...viewport}
          mapStyle="mapbox://sprites/mapbox/bright-v8"
          onViewportChange={this._onViewportChange}
          dragToRotate={false}
          mapboxApiAccessToken={MAPBOX_TOKEN} />
      </div>
    );
  }

}
