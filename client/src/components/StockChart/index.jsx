import React from 'react';
import { Skeleton } from '@mui/material';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';
import axiosInstance from '../../api';
import GridPaper from '../GridPaper';

function StockChart() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axiosInstance
      .get('/products/stock')
      .then(res => setData(() => [...data, res.data]));
  }, []);

  return data.length > 0 ? (
    <GridPaper title='Stock Chart'>
      <VictoryChart
        domainPadding={{ x: 20 }}
        animate={{ duration: 500 }}
        width={data[0].total < 6 ? data[0].total * 95 : 570}
      >
        <VictoryBar
          style={{ data: { fill: '#583AE3', width: 20 } }}
          data={data[0].products.map((element, index) => ({
            x: element.name,
            y: element.stock,
          }))}
        />
        <VictoryAxis style={{ tickLabels: { fontSize: 12 } }} />
        <VictoryAxis
          dependentAxis
          label='Stock'
          style={{
            axisLabel: { fontSize: 15, padding: 30 },
            tickLabels: { fontSize: 12 },
          }}
        />
      </VictoryChart>
    </GridPaper>
  ) : (
    <Skeleton animation='wave' variant='rounded' height={350} />
  );
}

export default StockChart;
