import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './assets/theme/index';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import PrivateRoutes from './routes/PrivateRoutes';
import routes from './routes/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            {routes.map((element, index) => (
              <Route
                key={index}
                path={element.path}
                element={React.createElement(element.Component)}
              />
            ))}
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
