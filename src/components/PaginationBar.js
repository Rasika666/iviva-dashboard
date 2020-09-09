import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


function PaginationBar() {
    return (
        <Pagination count={10} color="primary" />
    )
}

export default PaginationBar;
