import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { Button } from '@mui/base';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';



function MainPage() {

  return (
    <>
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 4,
          width: 300,
          height: 200,
        },
      }}
    >
      <Paper variant="outlined"><Link to='potion'>CLICK</Link></Paper>
      <Paper variant="outlined"/>
    </Box>
  </>
  );
}
export default MainPage;