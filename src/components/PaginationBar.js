import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import {useSelector, useDispatch} from 'react-redux';
import {updatePage} from '../actions/paginationAction'

function PaginationBar() {

    const loaded_data = useSelector(state => state.radioGroup.loadedValue);
    const page = useSelector(state => state.pagination.page);
    const dispatch = useDispatch();

    const max_data = 250;

    const pagination_size = Math.round(max_data / loaded_data) + 1;

    const handleChange = (event, value) => {
        updatePage(dispatch, value);
    }

    return (
        <Pagination count={pagination_size} color="primary" onChange={handleChange} page={page}/>
    )
}

export default PaginationBar;
