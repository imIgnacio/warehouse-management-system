import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import UserIcon from '../../components/UserIcon';

function Navbar(props) {
  return (
    <Box
      sx={{
        height: '100px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#F0F0FA',
        alignItems: 'center',
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant='h6' sx={{ fontWeight: 700 }}>
          {props.title}
        </Typography>
      </Box>
      <Box sx={{ padding: 2 }}>
        <UserIcon />
      </Box>
    </Box>
  );
}

export default Navbar;
