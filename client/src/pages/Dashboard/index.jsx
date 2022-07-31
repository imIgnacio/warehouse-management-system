import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import logout from '../../utils/logout';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  return (
    <Button onClick={handleLogout}>Logout</Button>
  )

}

export default Dashboard