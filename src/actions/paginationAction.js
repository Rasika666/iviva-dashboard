import {UPDATE_PAGE} from './type';

export const updatePage = (dispatch, page) => {
    
    dispatch({
        type: UPDATE_PAGE,
        payload: page
    })
}