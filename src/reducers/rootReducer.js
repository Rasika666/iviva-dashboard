import {combineReducers} from 'redux';
import iviva from './ivivaReducer.js';
import radioGroupReducer from './radioGroupReducer';

// combine all the reducers
const rootReducer =  combineReducers({
     iviva: iviva,
     radioGroup: radioGroupReducer
});

export default rootReducer;