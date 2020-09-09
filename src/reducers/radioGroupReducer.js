import {UPDATE_VALUE} from '../actions/type';

const initstate = {
    loadedValue: "10"
}

const radioGroupReducer = (state = initstate, action) => {
    const {type, payload} = action;

    switch(type) {
        case UPDATE_VALUE: 
            return {
                loadedValue: payload
            }

        default:
            return state;
    }
}
export default radioGroupReducer;