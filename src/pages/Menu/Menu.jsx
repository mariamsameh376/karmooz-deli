import React from 'react'
import MenuDate from '../../components/MenuDate/MenuDate'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Menu = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[100px]">  {/* عشان المحتوى ما يختفيش تحت الناف بار */}
        <MenuDate />
        <Footer />
      </div>
    </>
  )
}

export default Menu
