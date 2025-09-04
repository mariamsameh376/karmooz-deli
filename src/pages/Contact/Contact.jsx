import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ContactComponent from '../../components/ContactUs/ContactUs'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[100px]">   {/* padding-top عشان يسيب مساحة للناف بار */}
        <ContactComponent />
        <Footer />
      </div>
    </>
  )
}

export default Contact
