import React from 'react'
import { Bar } from "react-chartjs-2";
import {useSelector} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress'

function Graph({data_obj}) {
  

  const isloading = useSelector(state => state.iviva.isLoading);

const data = {
  labels: Object.keys(data_obj),
  datasets: [
    {
      label: "count",
      data: Object.values(data_obj),
      fill: true,
      backgroundColor: "rgba(0, 209, 255,0.5)",
      borderColor: "rgba(75,192,192,1)"
    }
    
  ]
};

  const bar = (<Bar data={data} 
    options= {{
        maintainAspectRatio : true,
        responsive: true
    }}
  />);

    return (
      <>
        {!isloading ? bar : <CircularProgress />}
      </>
    )
}

export default Graph
