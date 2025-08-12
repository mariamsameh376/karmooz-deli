import React from 'react'
import Navbar from '../../components/Navbar/Navbar'; // المسار حسب مكان Navbar فعليًا
import Footer from '../../components/Footer/Footer'; // نفس الشيء
import ContactComponent from '../../components/ContactUs/ContactUs';

const Contact = () => {
    return (
        <>
        <Navbar/>
        <ContactComponent />
        <Footer/>
        </>
       )
     }
     

export default Contact
