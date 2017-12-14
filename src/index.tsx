/**
 * Created by www.wuleba.com on 2016/9/26.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReduxPromise from 'redux-promise';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import {App} from './component/app';
import Reducers from './reducer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(Reducers)}>
        <App/>
    </Provider>
), document.querySelector('.container'));