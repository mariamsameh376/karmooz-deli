// src/components/Banner.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative">
      {/* خلفية البانر */}
      <div 
       className="h-screen px-4 sm:px-12 relative overflow-hidden flex items-center"

        style={{
          backgroundImage: 'url(/assets/KarmoozDeli_Hero_2880x2304.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* طبقة التظليل */}
        <div className="absolute inset-0 bg-[#221101]/60 z-0" />

        {/* المحتوى */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="text-[#F9B93E] font-montserrat text-lg uppercase tracking-wider">
            Welcome to
          </span>

          <h1 className="text-[#F9B93E] text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat mt-2">
            KARMOOZ DELI
          </h1>

        

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/menu"
              className="bg-[#F9B93E] hover:bg-[#DD8E3E] text-[#221101] px-6 py-3 rounded-full font-medium transition">
              View Menu
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
