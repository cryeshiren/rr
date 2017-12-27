import { FETCH_WEATHER } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

function weathers(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        console.log('====================================');
        console.log(action.weathers);
        console.log('====================================');
            return [
                ...state,
                action.weathers
            ];
        default:
            return state;
    }
}

const reducers = combineReducers({weathers});

export default reducers;