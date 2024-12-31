import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='flex-grow p-4'>{children}</main>
      <Footer />
    </div>
  );
}
