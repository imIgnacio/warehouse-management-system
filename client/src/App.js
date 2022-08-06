import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WithAuth from './hoc/withAuth';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { ThemeProvider } from '@mui/material';
import { theme } from './assets/theme/index';

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
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
