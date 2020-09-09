import {GET_IVIVADATA} from './type'


export const getivivadata = (dispatch, max, last) => {
	
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