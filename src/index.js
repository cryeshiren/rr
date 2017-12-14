/**
 * Created by www.wuleba.com on 2016/9/26.
 */
"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var ReduxPromise = require('redux-promise');
var react_redux_1 = require('react-redux');
var redux_1 = require('redux');
var app_1 = require('./component/app');
var reducers_1 = require('./reducer');
var createStoreWithMiddleware = redux_1.applyMiddleware(ReduxPromise)(redux_1.createStore);
ReactDOM.render((React.createElement(react_redux_1.Provider, {store: createStoreWithMiddleware(reducers_1.default)}, React.createElement(app_1.App, null))), document.querySelector('.container'));
//# sourceMappingURL=index.js.map