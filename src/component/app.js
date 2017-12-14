/**
 * Created by www.wuleba.com on 2016/9/26.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var search_bar_1 = require('../container/SearchBar');
var weather_list_1 = require('../container/WeatherList');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(search_bar_1.default, null), React.createElement(weather_list_1.default, null)));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=app.js.map