import {combineReducers} from 'redux';
import iviva from './ivivaReducer.js';
import radioGroupReducer from './radioGroupReducer';
import paginationReducer from './paginationReduce';

// combine all the reducers
const rootReducer =  combineReducers({
     iviva: iviva,
     radioGroup: radioGroupReducer,
     pagination: paginationReducer
});

export default rootReducer;