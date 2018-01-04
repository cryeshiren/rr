import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import WeatherConainer from './containers/WeatherContainer';
import DoubanMovieContainer from './containers/DoubanMovieContainer';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    {/* <WeatherConainer /> */}
    <DoubanMovieContainer/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
