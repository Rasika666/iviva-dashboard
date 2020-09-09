import {UPDATE_VALUE, RESET_PAGE} from './type';

export const updateLoadingValue = (dispatch, value) => {

    dispatch({
        type: RESET_PAGE
    })
    
    dispatch({
        type: UPDATE_VALUE,
        payload: value
    })
}