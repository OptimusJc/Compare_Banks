import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Compare from '../pages/Compare';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/compare' element={<Compare />} />
          <Route index path='/about' element={<About />} />
          <Route index path='/login' element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}
