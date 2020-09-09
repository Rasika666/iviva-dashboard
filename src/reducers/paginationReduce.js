import {UPDATE_PAGE, RESET_PAGE} from '../actions/type';

const initstate = {
    page: 1
}

const panigationReducer = (state = initstate, action) => {
    const {type, payload} = action;

    switch(type) {
        case UPDATE_PAGE: 
            return {
                page: payload
            }

        case RESET_PAGE:
            return {
                page: 1
            }

        default: 
            return state;
    }

}

export default panigationReducer;