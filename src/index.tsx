import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import WeatherConainer from "./containers/WeatherConainer";
import reducers from './reducers/WeatherReducer';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <WeatherConainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
