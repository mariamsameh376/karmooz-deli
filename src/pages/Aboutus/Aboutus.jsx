import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[100px]">   {/* padding-top عشان يسيب مساحة للناف بار */}
        <About />
        <Footer />
      </div>
    </>
  )
}

export default Aboutus
