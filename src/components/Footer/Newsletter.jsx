import React from 'react';

import SubHeading from '../SubHeading/SubHeading';

import { images } from '../../constants';

import './Newsletter.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
  offset: 100,
});

const Newsletter = () => (
  <div className="py-8 px-0 lg:px-16 bg-[#090909] lg:border lg:border-orange-400">
    <div className="text-center">
    <div className='mb-4 flex flex-col items-center justify-center'>
    <p className="font-serif text-white font-bold tracking-[0.04em] uppercase leading-[30px] text-[19px] sm:text-[21px] 2xl:text-[37px] 2xl:leading-[67px]" data-aos="flip-up">Newsletter</p>
    <img src={images.spoon} alt='spoon image' />
  </div>
      <h1 className="text-[45px] leading-[70px] font-serif text-orange-400 lg:text-[64px] lg:leading-[83.2px] tracking-[0.04em] capitalize" data-aos="flip-up">Subscribe To Our Newsletter</h1>
      <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">And never miss latest Updates!</p>
    </div>
    <div className="flex justify-center items-center flex-col w-full lg:flex-row mt-12">
      <input type="email" placeholder="Enter your email address" className='w-full mb-8 lg:w-[620px] lg:mr-8 lg:mt-0 lg:mb-0 lg:ml-0 border border-orange-400 rounded-md bg-[#090909] text-base font-serif text-[#ACACAC] py-3 px-4 '/>
      <button type="button" className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none w-max ease-in duration-200 hover:bg-orange-400">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
