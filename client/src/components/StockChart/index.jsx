import { Typography } from '@mui/material';
import React from 'react';
import { VictoryChart, VictoryBar } from 'victory';
import axiosInstance from '../../api';
import GridPaper from '../GridPaper';

function StockChart() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axiosInstance
      .get('/api/products')
      .then(res => setData(() => [...data, res.data]));
  }, []);

  return data.length > 0 ? (
    <GridPaper>
      <VictoryChart>
        <VictoryBar
          data={data[0].products.map((element, index) => ({
            x: element.name,
            y: element.stock,
          }))}
        />
      </VictoryChart>
    </GridPaper>
  ) : (
    <Typography>Loading...</Typography>
  );
}

export default StockChart;
