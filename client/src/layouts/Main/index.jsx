import React from 'react';
import { Container } from '@mui/system';
import Sidebar from '../Sidebar';

function Main({ children }) {
  return (
    <Container maxWidth={'xl'} disableGutters sx={{ paddingLeft: 10 }}>
      <Sidebar />
      {children}
    </Container>
  );
}

export default Main;
