import React from 'react';
import { Grid } from '@mui/material';
import HistoricalPriceChart from '../../components/HistoricalPriceChart';
import StockChart from '../../components/StockChart';

function Dashboard() {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={6}>
        <HistoricalPriceChart />
      </Grid>
      <Grid item xs={6}>
        <StockChart />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
