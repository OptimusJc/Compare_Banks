import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Compare from './pages/Compare.tsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route index path='/' element={<App />} />
        <Route index path='/compare' element={<Compare />} />
      </Routes>
    </Router>
  </StrictMode>,
);
