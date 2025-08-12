import React from 'react'
import Navbar from '../../components/Navbar/Navbar'; // المسار حسب مكان Navbar فعليًا
import Footer from '../../components/Footer/Footer'; // نفس الشيء
import ContactUs from'../../components/About/About';
import About from '../../components/About/About';

const Aboutus = () => {
    return (
        <>
        <Navbar/>
        <About/>
        <Footer/>
        </>
       )
     }
     

export default Aboutus
