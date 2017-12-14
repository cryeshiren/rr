/**
 * Created by www.wuleba.com on 2016/9/28.
 */
"use strict";
var React = require('react');
var react_google_maps_1 = require('react-google-maps');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (props) {
    return (React.createElement(react_google_maps_1.GoogleMapLoader, {containerElement: React.createElement("div", {style: { height: "100%" }}), googleMapElement: React.createElement(react_google_maps_1.GoogleMap, {defaultZoom: 10, defaultCenter: { lat: props.lat, lng: props.lon }})}));
};
//# sourceMappingURL=google_map.js.map