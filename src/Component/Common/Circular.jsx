import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const CircularIndeterminate = () => {
  return (
    <Box sx={{ display: 'flex' , width: "100%" , alignItems:"center" , justifyContent:"center" , height: "100%" , marginTop: "2rem"}}>
      <CircularProgress color='inherit'/>
    </Box>
  );
}

export default CircularIndeterminate;

