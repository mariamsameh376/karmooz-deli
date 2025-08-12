import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // ✅ إضافة التوستر

import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';
import Aboutus from './pages/Aboutus/Aboutus';
import OrderType from './pages/OrderType';
import PickupMenu from './pages/PickupMenu';




const App = () => {
  return (
    <>
      {/* ✅ هذا يجعل إشعارات التوست تظهر في أي صفحة */}
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/order" element={<OrderType />} />
        <Route path="/order/menu" element={<PickupMenu />} />
       
        
       
      </Routes>
    </>
  );
};

export default App;