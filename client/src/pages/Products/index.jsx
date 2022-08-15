import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Grid,
} from '@mui/material';
import axiosInstance from '../../api';
import Navbar from '../../layouts/Navbar';
import ListLoading from '../../components/ListLoading';

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
          <TableContainer>
            <Table sx={{ minWidth: 1000, overflow: 'scroll' }}>
              <TableHead sx={{ backgroundColor: '#F0F0FA' }}>
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
                <ListLoading colSpan={5} />
              )}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default Products;
