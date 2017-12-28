import { FETCH_WEATHER } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

function weathers(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
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