import React from 'react';
import { Navigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

function WithAuth({children}) {
  return (
    useLocalStorage('jwt') ? children : <Navigate to='/login' component />
  )
}

export default WithAuth