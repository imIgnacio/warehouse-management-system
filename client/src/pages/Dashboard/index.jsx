import React from 'react';
import axiosInstance from '../../api';
import Navbar from '../../components/Navbar';
import { Container } from '@mui/system';

function Dashboard() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axiosInstance
      .get('/api/products')
      .then(res => setData(() => [...data, res.data]));
  }, []);

  return (
    <Container maxWidth={'xl'} disableGutters sx={{ paddingLeft: 10 }}>
      <Navbar />
    </Container>
  );
}

export default Dashboard;
