import {GET_IVIVADATA, LOADING_IVIVADATA} from '../actions/type.js';

const initstate = {
    isLoading: null,
    ivivadata: []
}

const ivivaReducer = (state = initstate, action) => {

    const {type, payload} = action;

    switch(type) {
        case LOADING_IVIVADATA:
            return {
                ...state,
                isLoading: true
            }   

        case GET_IVIVADATA:
            return {
                ...state,
                ivivadata: payload,
                isLoading: false
            }

        default: 
            return state;
    }

}

export default ivivaReducer;