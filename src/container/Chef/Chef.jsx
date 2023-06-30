import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="bg-[url(./assets/bg.png)] bg-center bg-cover bg-repeat bg-fixed lg:flex lg:justify-between lg:items-center min-h-screen py-16 px-8 sm:p-16 lg:py-16 lg:ox-24">
    <div className="flex flex-1 w-full items-center justify-start mb-20 lg:mr-8">
      <img src={images.chef} alt="chef image" className="w-[100%] lg:w-[80%]" />
    </div>
    <div className="flex flex-1 w-full justify-center items-start flex-col">
      <SubHeading title="Chef's Word" />
      <h1 className="text-orange-400 font-serif text-[45px] leading-[70px] lg:text-[64px] lg:leading-[83.2px] tracking-[0.04em] capitalize">
        What we believe in
      </h1>

      <div className="flex flex-col w-full mt-4 lg:mt-20">
        <div className="flex justify-start items-end">
          <img
            src={images.quote}
            alt="quote image"
            className="w-12 h-10 mb-[39px] ml-1 mr-1 mt-0 lg:mr-4 lg:mb-4 lg:ml-0"
          />
          <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] capitalize text-[14px] sm:text-[16px] leading-[28px]">
            At Nostra, we curate a culinary journey that transcends
            expectations.
          </p>
        </div>
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] capitalize text-[14px] sm:text-[16px] leading-[28px]">
          With each dish, I aim to ignite excitement and create lasting
          memories. Surrender to the artistry on your plate and explore the
          boundless possibilities of gastronomy with us.
        </p>
      </div>

      <div className="w-full mt-12">
        <p className="font-serif text-orange-400 font-normal text-[32px] leading-[41.6px] tracking-[0.04em] capitalize">
          Kevin Luo
        </p>
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] capitalize text-[14px] sm:text-[16px] leading-[28px]">
          Chef & Founder
        </p>
        <img
          src={images.sign}
          alt="sign_image"
          className="w-[80%] sm:w-[250px] mt-12"
        />
      </div>
    </div>
  </div>
);

export default Chef;
