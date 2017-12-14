/**
 * Created by www.wuleba.com on 2016/9/28.
 */
"use strict";
var index_1 = require('../action/index');
function default_1(state, action) {
    if (state === void 0) { state = []; }
    console.log('Action received : ', action);
    switch (action.type) {
        case index_1.FETCH_WEATHER:
            return [action.payload.data].concat(state);
    }
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=weather_reducer.js.map