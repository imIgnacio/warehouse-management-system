import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Input,
  Button,
  Autocomplete,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '../../api';
import Navbar from '../../layouts/Navbar';
import './styles.css';

function NewSale() {
  const [products, setProducts] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  React.useEffect(() => {
    axiosInstance
      .get('/products')
      .then(res => setProducts(() => [...res.data.products]));
  });

  const formik = useFormik({
    initialValues: {
      _id: '',
      sellPrice: '',
      quantity: '',
    },
    validationSchema: Yup.object({
      sellPrice: Yup.number().required(),
      quantity: Yup.number().required().min(1),
    }),
    onSubmit: formData => {
      console.log(formData);
      // axiosInstance
      // .put(`/products/${formData._id}`, formData)
      // .then(response => console.log(response));
    },
  });

  React.useEffect(() => {
    formik.resetForm({
      values: {
        _id: selectedProduct?._id ?? '',
        sellPrice: selectedProduct?.sellPrice ?? '',
        quantity: '',
      },
    });
  }, [selectedProduct]);

  return (
    <>
      <Navbar title='New Sale' />
      <Grid
        container
        spacing={2}
        sx={{ padding: 2, display: 'flex', justifyContent: 'space-around' }}
      >
        <Grid item xs={4}>
          {products.length > 0 ? (
            <form id='form' onSubmit={formik.handleSubmit}>
              <Autocomplete
                options={products}
                getOptionLabel={option => option.name}
                isOptionEqualToValue={(option, value) =>
                  option._id === value._id
                }
                renderInput={params => (
                  <TextField {...params} variant='standard' label='Product' />
                )}
                onChange={(e, value) => {
                  setSelectedProduct(value);
                  formik.setFieldValue('product', value?._id ?? '');
                }}
              />
              <Box mt={4} />
              <Typography variant='h6'>Product Description</Typography>
              <Box mt={4} />
              <Box height={18} />
              <Input
                autoComplete='off'
                placeholder='Sell Price'
                type='text'
                name='sellPrice'
                onChange={formik.handleChange}
                value={formik.values.sellPrice}
                startAdornment={<Typography>$</Typography>}
                // error={formik.errors.sellPrice}
              />
              <Box height={18} />
              <Input
                autoComplete='off'
                placeholder='Quantity'
                type='text'
                name='quantity'
                onChange={formik.handleChange}
                value={formik.values.quantity}
                // error={formik.errors.quantity}
              />
              <Box height={18} />
              <Box mt={4} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <Button type='submit' size='large' variant='contained'>
                  Add To Cart
                </Button>
              </Box>
            </form>
          ) : (
            <Typography>Loading...</Typography>
          )}
        </Grid>
        <Grid item xs={4}>
          {products.length > 0 ? (
            <form id='form' onSubmit={formik.handleSubmit}>
              <Box mt={4} />
              <Typography variant='h6'>Sale Description</Typography>
              <Box mt={4} />
              <Box height={18} />
              <Input
                autoComplete='off'
                placeholder='Name'
                type='text'
                name='name'
                onChange={formik.handleChange}
                value={formik.values.name}
                // error={formik.errors.sellPrice}
              />
              <Box height={18} />
              <Input
                autoComplete='off'
                placeholder='Address'
                type='text'
                name='address'
                onChange={formik.handleChange}
                value={formik.values.address}
                // error={formik.errors.quantity}
              />
              <Box height={18} />
              <Input
                autoComplete='off'
                placeholder='Number'
                type='text'
                name='number'
                onChange={formik.handleChange}
                value={formik.values.number}
                // error={formik.errors.quantity}
              />
              <Box mt={4} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <Button type='submit' size='large' variant='contained'>
                  Create Order
                </Button>
              </Box>
            </form>
          ) : (
            <Typography>Loading...</Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default NewSale;
