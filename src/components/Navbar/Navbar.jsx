import React, { useState } from 'react';
import { GiForkKnifeSpoon } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

import {
  HiHome,
  HiViewGrid,
  HiPhone,
  HiShoppingCart,
  HiKey,
  HiMenu,
  HiX,
  HiInformationCircle 
} from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className='bg-[#DD8E3E] border-b-8 border-[#79411A]/30 shadow-[#79411A]/30 fixed top-0 left-0 w-full z-50 shadow-[0_25px_50px_-12px] font-[Montserrat] group/nav'>
        
        {/* Top decoration */}
        <div className=' w-full max-w-7xl px-4'>
          <div className='h-[4px] bg-gradient-to-r from-transparent via-[#DD8E3E]/50 to-transparent shadow-[0_0_15px] shadow-[#DD8E3E]/30'/>
          <div className='flex justify-between px-6'>
            <GiForkKnifeSpoon className='text-[#DD8E3E]/40 -mt-3 -ml-2 rotate-45' size={28} />
            <GiForkKnifeSpoon className='text-[#DD8E3E]/40 -mt-3 -mr-2 rotate-45' size={28} />
          </div>
        </div>

        <div className='max-w-7x1 mx-auto px-4 relative'>
          <div className='flex justify-between items-center h-14 md:h-16 lg:h-18'>

            {/* Logo Section */}
            <div className='flex-shrink-0 flex items-center space-x-2 group relative md:-translate-x-4 lg:-translate-x-6 ml-0 md:ml-2'>
              <div className='absolute -inset-4 bg-[#DD8E3E]/10 rounded-full blur-xl opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300' />
              
              {/* اللوجو كرابط للصفحة الرئيسية */}
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src={logo}
                  alt="Karmooz Deli Logo"
                  className='h-24 md:h-28 lg:h-32 -mt-3 object-contain transition-all group-hover:rotate-12 hover:drop-shadow-[0_0_15px] hover:drop-shadow-[#F9B93E]/50'
                />
              </NavLink>

              <NavLink to="/" className="flex flex-col items-center relative ml-2 max-w-[160px] md:max-w-[200px] lg:max-w-none z-10">
                <span className='text-[#221101] font-[Impact] text-2xl md:text-3xl lg:text-4xl tracking-wide'>KARMOOZ</span>
                <span className='text-[#221101] font-[Montserrat] text-sm md:text-base lg:text-lg -mt-1 tracking-wide'>DELI</span>
              </NavLink>
            </div>

            {/* Desktop Links */}
            <div className='hidden md:flex space-x-6 items-center text-[#F9B93E] font-semibold text-lg'>
              <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-full transition border ${isActive ? 'border-[#F9B93E] bg-[#79411A]/20' : 'border-[#DD8E3E] hover:bg-[#79411A]/20'}`}>
                <HiHome className="text-[#F9B93E]" />
                Home
              </NavLink>
              <NavLink to="/menu" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-full transition ${isActive ? 'bg-[#79411A]/20 text-[#F9B93E]' : 'hover:text-[#F9B93E]'}`}>
                <HiViewGrid className="text-[#F9B93E]" />
                Menu
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-full transition ${isActive ? 'bg-[#79411A]/20 text-[#F9B93E]' : 'hover:text-[#F9B93E]'}`}>
                <HiPhone className="text-[#F9B93E]" />
                Contact
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-full transition ${isActive ? 'bg-[#79411A]/20 text-[#F9B93E]' : 'hover:text-[#F9B93E]'}`}>
                <HiInformationCircle className="text-[#F9B93E]" />
                About Us
              </NavLink>

              <NavLink
                to="/order"
                className="flex items-center gap-2 bg-gradient-to-r from-[#DD8E3E] to-[#F9B93E] text-black px-6 py-2 rounded-full shadow-lg hover:scale-105 transition"
              >
                <GiForkKnifeSpoon />
                Order Online
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#F9B93E] text-3xl focus:outline-none">
                {isMobileMenuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden flex flex-col bg-[#221101] py-4 space-y-4 px-6 text-[#F9B93E] font-semibold text-lg">
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                <HiHome className="text-[#F9B93E]" />
                Home
              </NavLink>
              <NavLink to="/menu" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                <HiViewGrid className="text-[#F9B93E]" />
                Menu
              </NavLink>
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                <HiPhone className="text-[#F9B93E]" />
                Contact
              </NavLink>
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                <HiInformationCircle className="text-[#F9B93E]" />
                About Us
              </NavLink>
              <a
                href="/order"
                className="flex items-center gap-2 bg-gradient-to-r from-[#DD8E3E] to-[#F9B93E] text-black px-6 py-2 rounded-full shadow-lg hover:scale-105 transition"
              >
                <GiForkKnifeSpoon />
                Order Online
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
