import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import logout from '../../utils/logout';

function Dashboard() {
  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get('/api/products', {
        headers: {
          Authorization: Cookies.get('jwt'),
        },
      })
      .then(res => console.log(res));
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}

export default Dashboard;
