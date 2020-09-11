import {GET_IVIVADATA, LOADING_IVIVADATA, DATA_LOADED} from '../actions/type.js';

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
                ivivadata: [...state.ivivadata, ...payload],
            }

        case DATA_LOADED:
            return {
                ...state,
                isLoading: false
            }

        default: 
            return state;
    }

}

export default ivivaReducer;