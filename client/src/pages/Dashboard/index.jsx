import React from 'react';
import axiosInstance from '../../api';
import Navbar from '../../components/Navbar';

function Dashboard() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axiosInstance
      .get('/api/products')
      .then(res => setData(() => [...data, res.data]));
  }, []);

  return <Navbar />;
}

export default Dashboard;
