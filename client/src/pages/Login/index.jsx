import React from 'react'
import { Container, Paper, Box, Typography, Input, Button } from '@mui/material';
import './styles.css';

function Login() {

  return (
    <Container maxWidth={false} sx={{display: 'flex', justifyContent: 'center', padding: '0 8px'}}>
      <Box mt={8}>
        <Paper elevation={2} sx={{width: '480px', height: '580px'}}>
          <form className='form'>
            <Typography variant='h3'>Login</Typography>
            <Box mt={4} />
            <Input fullWidth placeholder='Email' type='text' />
            <Box height={18} />
            <Input fullWidth placeholder='Password' type='password' />
            <Box mt={4} />
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <Button size='small' color='error'>Forgot Password</Button>
              <Button size='large' variant='contained'>Log In</Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  )
}

export default Login