import {UPDATE_VALUE} from './type';

export const updateLoadingValue = (dispatch, value) => {
    
    dispatch({
        type: UPDATE_VALUE,
        payload: value
    })
}