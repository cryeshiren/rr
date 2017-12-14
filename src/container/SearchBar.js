/**
 * Created by www.wuleba.com on 2016/9/28.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var redux_1 = require('redux');
var react_redux_1 = require('react-redux');
var index_1 = require('../action/index');
var SearchBar = (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        _super.call(this, props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    SearchBar.prototype.onInputChange = function (event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    };
    SearchBar.prototype.onFormSubmit = function (event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    };
    SearchBar.prototype.render = function () {
        var _this = this;
        return (React.createElement("form", {className: "input-group", onSubmit: this.onFormSubmit}, React.createElement("input", {type: "text", className: "form-control", placeholder: "请输入城市名称，以便查询未来5日天气情况，例如：Beijing", value: this.state.term, onChange: function (event) { return _this.onInputChange(event); }}), React.createElement("span", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-secondary"}, "查询"))));
    };
    return SearchBar;
}(React.Component));
function mapDispatchToPros(dispatch) {
    return (redux_1.bindActionCreators({ fetchWeather: index_1.fetchWeather }, dispatch));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(null, mapDispatchToPros)(SearchBar);
//# sourceMappingURL=search_bar.js.map