import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Compare from './pages/Compare';
import About from './pages/About';
import Login from './pages/Login';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route index path='/' element={<App />} />
        <Route index path='/compare' element={<Compare />} />
        <Route index path='/about' element={<About />} />
        <Route index path='/login' element={<Login />} />
      </Routes>
    </Router>
    <Footer />
  </StrictMode>,
);
