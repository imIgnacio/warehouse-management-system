import React from 'react';
import { Skeleton } from '@mui/material';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';
import axiosInstance from '../../api';
import GridPaper from '../GridPaper';

function StockChart() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axiosInstance
      .get('/products')
      .then(res => setData(() => [...data, res.data]));
  }, []);

  return data.length > 0 ? (
    <GridPaper>
      <VictoryChart
        domainPadding={{ x: 20 }}
        animate={{ duration: 500 }}
        width={data[0].total * 90}
      >
        <VictoryBar
          style={{ data: { fill: '#583AE3', width: 20, fontSize: 12 } }}
          data={data[0].products.map((element, index) => ({
            x: element.name.split(' ').join(''),
            y: element.stock,
          }))}
        />
        <VictoryAxis style={{ tickLabels: { fontSize: 12 } }} />
        <VictoryAxis
          dependentAxis
          label='Stock'
          style={{ axisLabel: { fontSize: 15, padding: 30 } }}
        />
      </VictoryChart>
    </GridPaper>
  ) : (
    <Skeleton animation='wave' variant='rounded' height={350} />
  );
}

export default StockChart;
