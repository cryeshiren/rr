/**
 * Created by www.wuleba.com on 2016/9/28.
 */

import * as React from 'react';

import {GoogleMapLoader, GoogleMap} from 'react-google-maps';

export default (props) => {
    return (
        <GoogleMapLoader
            containerElement={<div style={{height: "100%"}}/>}
            googleMapElement={<GoogleMap defaultZoom={10} defaultCenter={{ lat: props.lat, lng: props.lon }}></GoogleMap>}
        />
    );
}