import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Container } from '@mui/system';
import Sidebar from '../layouts/Sidebar';

function WithAuth({ children }) {
  return Cookies.get('jwt') !== undefined ? (
    <Container maxWidth={'xl'} disableGutters sx={{ paddingLeft: 10 }}>
      <Sidebar />
      {children}
    </Container>
  ) : (
    <Navigate to='/login' component />
  );
}

export default WithAuth;
