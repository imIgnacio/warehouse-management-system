import React from 'react';
import axiosInstance from '../../api';
import { Button, Drawer, Paper } from '@mui/material';
import { useNavigate } from 'react-router';
import Navbar from '../../components/Navbar';
import logout from '../../utils/logout';
import { Container } from '@mui/system';

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axiosInstance
      .get('/api/products')
      .then(res => setData(() => [...data, res.data]));
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container maxWidth={'xl'} disableGutters sx={{ paddingLeft: 10 }}>
      <Navbar />
      <Button onClick={handleLogout}>Logout</Button>
    </Container>
  );
}

export default Dashboard;
