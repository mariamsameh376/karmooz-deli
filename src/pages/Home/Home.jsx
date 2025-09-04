import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import MenuSection from '../../components/MenuSection/MenuSection'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[100px]">   {/* padding-top عشان نسيب مكان للناف بار */}
        <Banner />
        <MenuSection />
        <Footer />
      </div>
    </>
  )
}


export default Home
