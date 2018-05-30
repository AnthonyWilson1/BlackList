import React from 'react';
import Chart from './Chart'
import Typography from '@material-ui/core/Typography';


const Complete = () => {
    return (
        <div style= {{textAlign: 'center'}}>   
            <Typography variant='display2'> Productivity</Typography> 
            <Chart/>
        </div>  
    )
  }

export default Complete