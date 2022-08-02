import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function WithAuth({ children }) {
  return Cookies.get('jwt') !== undefined ? (
    children
  ) : (
    <Navigate to='/login' component />
  );
}

export default WithAuth;
