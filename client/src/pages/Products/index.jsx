import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Skeleton,
  Paper,
  Grid,
} from '@mui/material';
import axiosInstance from '../../api';
import Navbar from '../../layouts/Navbar';

function Products() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axiosInstance
      .get('/products')
      .then(res => setData(() => [...data, res.data]));
  }, []);

  return (
    <>
      <Navbar title='Products' />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }}>
              <TableHead>
                <TableRow>
                  <TableCell align='left'>Product</TableCell>
                  <TableCell align='left'>Stock</TableCell>
                  <TableCell align='left'>Buy Price</TableCell>
                  <TableCell align='left'>Sell Price</TableCell>
                  <TableCell align='left'>Description</TableCell>
                </TableRow>
              </TableHead>
              {data.length > 0 ? (
                <TableBody>
                  {data[0].products.map((element, index) => (
                    <TableRow hover key={index}>
                      <TableCell>{element.name}</TableCell>
                      <TableCell>{element.stock}</TableCell>
                      <TableCell>{`$ ${element.buyPrice}`}</TableCell>
                      <TableCell>{`$ ${element.sellPrice}`}</TableCell>
                      <TableCell>{element.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : (
                <Skeleton variant='rounded' animation='wave' height={20} />
              )}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default Products;
