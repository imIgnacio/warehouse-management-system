import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '../../components/Navbar';
import HistoricalPriceChart from '../../components/HistoricalPriceChart';
import StockChart from '../../components/StockChart';

function Dashboard() {
  return (
    <>
      <Navbar />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={8}>
          <HistoricalPriceChart />
        </Grid>
        <Grid item xs={4}>
          <StockChart />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
