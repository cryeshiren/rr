/**
 * Created by www.wuleba.com on 2016/9/28.
 */

import * as React from 'react';

import {FETCH_WEATHER} from '../action/index';

export default function (state = [], action) {
    console.log('Action received : ', action);
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
    }
    return state;
}
