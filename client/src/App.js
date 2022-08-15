import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './assets/theme/index';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WithAuth from './hoc/withAuth';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Products from './pages/Products';
import CreateProducts from './pages/CreateProducts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <WithAuth>
                <Dashboard />
              </WithAuth>
            }
          />
          <Route
            path='/products'
            element={
              <WithAuth>
                <Products />
              </WithAuth>
            }
          />
          <Route
            path='/addProducts'
            element={
              <WithAuth>
                <CreateProducts />
              </WithAuth>
            }
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
