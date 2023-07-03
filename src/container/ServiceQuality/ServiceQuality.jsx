import React from "react";

import { images } from "../../constants";

const ServiceQuality = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#090909]">
      <div className="flex flex-col justify-center items-center mt-36">
        <h1 className="text-[#ACACAC] font-serif text-[18px] lg:text-[23px] font-bold capitalize leading-7 tracking-wider">
          Service Quality
        </h1>
        <img src={images.spoon} alt="spoon image" className="mt-1 mb-8" />
      </div>
      <h1 className="lg:w-[1128px] text-center font-serif text-orange-400 text-[40px] lg:text-[64px] font-semibold capitalize lg:leading-[82px] tracking-[0.04em] mb-10">We At Nostra are serving our customers for over a decade</h1>
      <p className="text-center lg:w-[868px] text-neutral-400 text-[16px] font-normal leading-7 tracking-wider mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugiat illum veniam voluptatum sunt inventore!</p>
      <div className="flex items-center justify-center gap-10 mb-40">
        <button
          type="button"
          className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none mt-8 ease-in duration-200 hover:bg-orange-400"
        >
          Read More
        </button>
        <button
          type="button"
          className="text-[#ACACAC] border border-orange-400 font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] cursor-pointer outline-none mt-8 ease-in duration-200 hover:opacity-50"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ServiceQuality;
