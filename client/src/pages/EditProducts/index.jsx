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

function EditProducts() {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  React.useEffect(() => {
    axiosInstance
      .get('/products')
      .then(res => setProducts(() => [...res.data.products]));

    axiosInstance
      .get('/categories')
      .then(res => setCategories(() => [...res.data.categories]));
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      stock: '',
      buyPrice: '',
      sellPrice: '',
      description: '',
      _id: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      stock: Yup.number().required(),
      buyPrice: Yup.number().required(),
      sellPrice: Yup.number().required(),
      description: Yup.string().max(512),
      category: Yup.string().required(),
    }),
    onSubmit: formData => {
      axiosInstance
        .put(`/products/${formData._id}`, formData)
        .then(response => console.log(response));
    },
  });

  React.useEffect(() => {
    formik.resetForm({
      values: {
        name: selectedProduct?.name ?? '',
        stock: selectedProduct?.stock ?? '',
        buyPrice: selectedProduct?.buyPrice ?? '',
        sellPrice: selectedProduct?.sellPrice ?? '',
        description: selectedProduct?.description ?? '',
        _id: selectedProduct?._id ?? '',
      },
    });
  }, [selectedProduct]);

  return (
    <>
      <Navbar title='Edit Products' />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={4}>
          {products.length > 0 ? (
            <form className='edit-form' onSubmit={formik.handleSubmit}>
              <Autocomplete
                options={products}
                getOptionLabel={option => option.name}
                renderInput={params => (
                  <TextField {...params} variant='standard' label='Product' />
                )}
                onChange={(e, value) => {
                  setSelectedProduct(value);
                  formik.setFieldValue('product', value?._id ?? '');
                }}
              />
              <Box mt={4} />
              <Typography variant='h6'>Edit Product</Typography>
              <Box mt={4} />
              <Input
                autoComplete='off'
                placeholder='Name'
                type='text'
                name='name'
                onChange={formik.handleChange}
                value={formik.values.name}
                // error={formik.errors.name}
              />
              <Box height={18} />
              <Input
                autoComplete='off'
                placeholder='Stock'
                type='text'
                name='stock'
                onChange={formik.handleChange}
                value={formik.values.stock}
                // error={formik.errors.stock}
              />
              <Box height={18} />
              <Input
                autoComplete='off'
                placeholder='Buy Price'
                type='text'
                name='buyPrice'
                onChange={formik.handleChange}
                value={formik.values.buyPrice}
                // error={formik.errors.buyPrice}
              />
              <Box height={18} />
              <Input
                autoComplete='off'
                placeholder='Sell Price'
                type='text'
                name='sellPrice'
                onChange={formik.handleChange}
                value={formik.values.sellPrice}
                // error={formik.errors.sellPrice}
              />
              <Box height={18} />
              <Input
                multiline
                autoComplete='off'
                placeholder='Description'
                type='text'
                name='description'
                onChange={formik.handleChange}
                value={formik.values.description}
                // error={formik.errors.description}
              />
              <Box height={18} />
              <Autocomplete
                options={categories}
                getOptionLabel={option => option.name}
                renderInput={params => (
                  <TextField {...params} variant='standard' label='Category' />
                )}
                onChange={(e, value) =>
                  formik.setFieldValue('category', value?._id ?? '')
                }
                value={formik.va}
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
                  Create
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

export default EditProducts;
