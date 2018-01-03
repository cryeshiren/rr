import { FETCH_WEATHER } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

function weathers(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            console.log('==========reducer==========================');
            console.log(action.weathers);
            console.log(...state);
            console.log('====================================');
            return [
                action.weathers,
                ...state
            ];
        default:
            return state;
    }
}

const reducers = combineReducers({weathers});

export default reducers;