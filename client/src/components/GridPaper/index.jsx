import React from 'react';
import { Paper, Typography } from '@mui/material';

function GridPaper({ children, ...props }) {
  return (
    <Paper elevation={2} sx={{ height: 350 }}>
      <Typography padding={1}>{props.title}</Typography>
      {children}
    </Paper>
  );
}

export default GridPaper;
