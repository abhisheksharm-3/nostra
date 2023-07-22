import React from "react";
import { images } from "../../constants";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
  duration: 1000,
  offset: 100,
});

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="relative bg-[url(./assets/bg.png)] bg-center bg-cover bg-no-repeat bg-fixed flex justify-center items-center py-16 px-8 sm:p-16 lg:py-16 lg:px-24"
    id="about"
  >
    <div className="flex justify-center items w-full z-2 flex-col lg:flex-row">
      <div className="flex flex-1 justify-end items-end flex-col text-right" data-aos="fade-right">
        <h1 className="font-serif text-[#ACACAC] text-[45px] lg:text-[68px] leading-[70px] lg:leading-[83.2px] tracking-[0.04em] uppercase">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="w-[45px]" />
        <p className="my-8 mx-0 text-[#545454] font-sans font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">
          Indulge in Nostra's elegant and minimalist culinary experience, where
          flavors unfold untold stories. Enter our enchanting realm of masterful
          dishes, igniting your senses and creating lasting memories. Immerse
          yourself in our fine dining reimagined, where craftsmanship meets
          enigmatic allure. Welcome to Nostra, where every bite reveals a
          culinary journey like no other.
        </p>
        <button
          type="button"
          className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none ease-in duration-200 hover:bg-orange-400"
        >
          Know More
        </button>
      </div>
      <div className="flex justify-center items-center my-16 mx-0 lg:my-8 lg:mx-16" data-aos="fade-up">
        <img src={images.knife} alt="about_knife" className="h-[910px]"/>
      </div>
      <div className="flex flex-1 justify-start items-start text-left flex-col" data-aos="fade-left">
        <h1 className="font-serif text-[#ACACAC] text-[45px] lg:text-[68px] leading-[70px] lg:leading-[83.2px] tracking-[0.04em] uppercase">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="w-[45px]" />
        <p className="my-8 mx-0 text-[#545454] font-sans font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">
          Nostra's history is one of redefining fine dining with an air of
          intrigue. Our visionary team, driven by passion and creativity, crafts
          dishes that awaken the senses and tell a story. Join us on a journey
          of culinary exploration and experience the magic that is Nostra.
        </p>
        <button
          type="button"
          className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none ease-in duration-200 hover:bg-orange-400"
        >
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
