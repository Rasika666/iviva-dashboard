import {combineReducers} from 'redux';
import iviva from './ivivaReducer.js';


// combine all the reducers
const rootReducer =  combineReducers({
     iviva: iviva,
});

export default rootReducer;