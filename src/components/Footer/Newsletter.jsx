import React from 'react';

import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className="py-8 px-0 lg:px-16 bg-[#090909] lg:border lg:border-orange-400">
    <div className="text-center">
      <SubHeading title="Newsletter" />
      <h1 className="text-[45px] leading-[70px] font-serif text-orange-400 lg:text-[64px] lg:leading-[83.2px] tracking-[0.04em] capitalize">Subscribe To Our Newsletter</h1>
      <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">And never miss latest Updates!</p>
    </div>
    <div className="flex justify-center items-center flex-col w-full lg:flex-row mt-12">
      <input type="email" placeholder="Enter your email address" className='w-full mb-8 lg:w-[620px] lg:mr-8 lg:mt-0 lg:mb-0 lg:ml-0 border border-orange-400 rounded-md bg-[#090909] text-base font-serif text-[#ACACAC] py-3 px-4 '/>
      <button type="button" className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none w-max ease-in duration-200 hover:bg-orange-400">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
