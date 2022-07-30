import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Container, Paper, Box, Typography, Input, Button } from '@mui/material';
import './styles.css';

function Login() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: (formData) => {
      axios.post('/api/user/login', {
        email: formik.values.email,
        password: formik.values.password,
      })
      .then(response => console.log(response))
    }
  });

  return (
    <Container maxWidth={false} sx={{display: 'flex', justifyContent: 'center', padding: '0 8px'}}>
      <Box mt={8}>
        <Paper elevation={2} sx={{width: '480px', height: '580px'}}>
          <form className='form' onSubmit={formik.handleSubmit}>
            <Typography variant='h3'>Login</Typography>
            <Box mt={4} />
            <Input
            fullWidth placeholder='Email'
            type='text'
            name='email'
            onChange={formik.handleChange}
            // error={formik.errors.email}
            value={formik.values.email}
            />
            <Box height={18} />
            <Input
            fullWidth placeholder='Password'
            type='password' name='password'
            onChange={formik.handleChange}
            // error={formik.errors.password}
            value={formik.values.password} />
            <Box mt={4} />
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <Button size='small' color='error'>Forgot Password</Button>
              <Button type='submit' size='large' variant='contained'>Log In</Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  )
}

export default Login