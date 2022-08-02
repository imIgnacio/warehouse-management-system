import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WithAuth from './hoc/withAuth';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
