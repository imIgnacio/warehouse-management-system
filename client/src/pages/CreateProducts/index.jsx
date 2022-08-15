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

function Products() {
  const [categories, setCategories] = React.useState([]);
  const formik = useFormik({
    initialValues: {
      name: '',
      stock: '',
      buyPrice: '',
      sellPrice: '',
      description: '',
      category: '',
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
        .post(
          '/api/users/login',
          {
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        )
        .then(response => console.log(response));
    },
  });

  React.useEffect(() => {
    axiosInstance.get('/categories').then(res => setCategories(res.data));
  }, []);

  console.log(categories);

  return (
    <>
      <Navbar title='Create Products' />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={4}>
          {categories.length > 0 ? (
            <form className='form' onSubmit={formik.handleSubmit}>
              <Typography variant='h6'>Create a new Product</Typography>
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
                // error={formik.errors.password}
                value={formik.values.buyPrice}
              />
              <Box height={18} />
              <Input
                autoComplete='off'
                placeholder='Sell Price'
                type='text'
                name='sellPrice'
                onChange={formik.handleChange}
                // error={formik.errors.password}
                value={formik.values.sellPrice}
              />
              <Box height={18} />
              <Input
                multiline
                autoComplete='off'
                placeholder='Description'
                type='text'
                name='description'
                onChange={formik.handleChange}
                // error={formik.errors.password}
                value={formik.values.description}
              />
              <Box height={18} />
              <Autocomplete
                options={categories}
                getOptionLabel={category => category.name}
                renderOption={(props, option) => (
                  <Box
                    component='li'
                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    {option.name}
                  </Box>
                )}
                renderInput={params => (
                  <TextField {...params} label='Category' />
                )}
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

export default Products;
