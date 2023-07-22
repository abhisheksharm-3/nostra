import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
  offset: 100,
});


const Footer = () => (
  <div className="py-16 px-8 sm:p-16 lg:py-16 lg:px-24 w-full relative z-[1] flex justify-start items-center flex-col bg-[#090909] pb-8 sm:pt-0" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="w-full flex justify-between flex-col lg:flex-row sm:p-0 lg:items-start mt-20 lg:py-0 lg:px-8" data-aos="fade-up">
      <div className="flex flex-1 flex-col w-full lg:w-0 my-8 mx-0 lg:m-4 text-center">
        <h1 className="font-serif text-[#ACACAC] font-normal tracking-[0.04em] capitalize text-[32px] leading-[41.6px] mb-4">Contact Us</h1>
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">+1 212-344-1230</p>
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">+1 212-555-1230</p>
      </div>

      <div className="flex flex-1 flex-col justify-center items-center w-full lg:w-0 my-8 mx-0 lg:m-4 text-center">
        <img src={images.nostra} alt="footer_logo" className='w-[210px] mb-3'/>
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="w-[45px] mt-[15]" />
        <div className="mt-2 flex">
          <FiFacebook className='text-[#acacac] m-2 text-[24px] cursor-pointer hover:text-orange-400'/>
          <FiTwitter className='text-[#acacac] m-2 text-[24px] cursor-pointer hover:text-orange-400'/>
          <FiInstagram className='text-[#acacac] m-2 text-[24px] cursor-pointer hover:text-orange-400'/>
        </div>
      </div>

      <div className="flex flex-1 flex-col w-full lg:w-0 my-8 mx-0 lg:m-4 text-center">
        <h1 className="font-serif text-[#ACACAC] font-normal tracking-[0.04em] capitalize text-[32px] leading-[41.6px] mb-4">Working Hours</h1>
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">Monday-Friday:</p>
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px] mb-12">09:00 am - 12:00 am</p>
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">Saturday-Sunday:</p>
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="mt-12">
      <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px] text-center">2023 Nostra. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
