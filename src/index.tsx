import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import WeatherConainer from './containers/WeatherConainer';
import reducers from './reducers/WeatherReducer';
import thunkMiddleware from 'redux-thunk';

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <WeatherConainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
