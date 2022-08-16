import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
import Main from '../../layouts/Main';

function PrivateRoutes() {
  return Cookies.get('jwt') ? (
    <Main>
      <Outlet />
    </Main>
  ) : (
    <Navigate to='/login' />
  );
}

export default PrivateRoutes;
