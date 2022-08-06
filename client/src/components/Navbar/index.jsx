import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Navbar() {
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
      <Box sx={{ margin: '16px' }}>
        <Typography>Dashboard</Typography>
      </Box>
      <Box sx={{ margin: '16px' }}>
        <Typography>User</Typography>
      </Box>
    </Box>
  );
}

export default Navbar;
