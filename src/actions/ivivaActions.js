import {DATA_LOADED, GET_IVIVADATA, LOADING_IVIVADATA} from './type'


export const getivivadata = (dispatch, max, last) => {

	dispatch({
		type: LOADING_IVIVADATA
	})

  fetch(`/ivivdata/?max=${max}&last=${last}`)
	.then(res => res.json())
	.then(data => {
		dispatch({
			type: GET_IVIVADATA,
			payload: data
		})
	})
	.catch(err => console.log(err))

}

export const dataLoaded = (dispatch) => {
	dispatch({
		type: DATA_LOADED
	})
}