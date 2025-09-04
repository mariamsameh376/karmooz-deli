import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="relative bg-[#DD8E3E] border-t-8 border-[#79411A]/30 text-[#221101] font-[Montserrat] shadow-[0_-25px_50px_-12px] shadow-[#79411A]/30 pt-16 pb-8 px-6 md:px-20 mt-16">

      {/* Top Decoration Bar */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4">
        <div className="h-[6px] bg-gradient-to-r from-transparent via-[#DD8E3E]/50 to-transparent shadow-[0_0_20px] shadow-[#DD8E3E]/30" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-sm relative z-10">
        {/* About */}
        <div>
          <h2 className="text-[#221101] font-semibold mb-4 tracking-wide text-lg">Social</h2>


        <div className="flex gap-4 mt-6">
  <a
    href="https://www.facebook.com/share/1CF6CND74n/?mibextid=wwXIfr
"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#221101] text-[#F9B93E] p-2 rounded-full hover:bg-[#F9B93E] hover:text-[#221101] transition"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.instagram.com/karmoozdeli?igsh=MXBneHo4a2x6dmEyYg%3D%3D&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#221101] text-[#F9B93E] p-2 rounded-full hover:bg-[#F9B93E] hover:text-[#221101] transition"
  >
    <FaInstagram />
  </a>
</div>
            </div>

        {/* Logo */}
        <div className="flex flex-col items-center justify-center text-center relative group">
          <div className="absolute -inset-4 bg-[#F9B93E]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img src="/logo.png" alt="Karmooz Deli Logo" className="w-60 object-contain mb-1 hover:rotate-3 transition" />
          <h3 className="text-5xl -mt-3 text-[#221101] font-[Impact]  tracking-wide">KARMOOZ</h3>
          <p className="text-3xl text-[#221101] font-[Montserrat] -mt-1 tracking-wide">DELI</p>

        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-[#221101] font-semibold mb-4 tracking-wide text-lg">CONTACT US</h2>
          <ul className="text-[#221101]/80 space-y-3">
            <li className="flex items-start gap-2">
              <MdLocationOn className="text-lg mt-1" />
              <span>614 18th Ave N,Nashville,TN 37203</span>
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-lg" />
              <span>(615) 810 2558</span>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Decoration Line */}
      <div className="mt-10 border-t border-[#79411A]/30 pt-4 text-center text-[#221101]/70 text-xs tracking-wide">
        <span>© 2025 Karmooz Deil. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
