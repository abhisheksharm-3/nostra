import React from "react";

import { images } from "../../constants";

const Testimonials = () => {
  return (
    <div className="bg-[#090909]">
      <div className="flex justify-end">
        <img
          src={images.logo}
          alt="logo"
          className="w-[15%] lg:w-[7%] ml-auto"
        />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h3 className="font-serif text-[#acacac] text-[23px] font-bold tracking-wider leading-7 mb-2">
          Testimony
        </h3>
        <img src={images.spoon} alt="spoon images" />
        <h1 className="text-orange-400 text-[38px] lg:text-[64px] font-semibold capitalize leading-10 tracking-widest font-serif mt-4">
          Happy Customers
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 place-content-center gap-18">
        <div className="py-16 px-8 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <img src={images.c1} alt="" />
            <div className="flex flex-col justify-center items-center lg:items-start mt-8 lg:mt-0 lg:ml-8">
              <p className="font-serif text-[#ACACAC] font-normal tracking-[0.04em] capitalize text-[16px] leading-[28px] text-center lg:text-left">
                Impeccable service, exquisite flavors, hidden gem. A culinary
                masterpiece that surpasses expectations. A must-visit for fine
                dining enthusiasts.
              </p>
              <h1 className="font-serif text-[32px] text-orange-400">
                Wade Warren
              </h1>
              <h3 className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] text-[16px] leading-[28px]">
                Sommelier
              </h3>
            </div>
          </div>
        </div>
        <div className="py-16 px-8 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <img src={images.c2} alt="" />
            <div className="flex flex-col justify-center items-center lg:items-start mt-8 lg:mt-0 lg:ml-8">
              <p className="font-serif text-[#ACACAC] font-normal tracking-[0.04em] capitalize text-[16px] leading-[28px] text-center lg:text-left">
                Nostra's captivating ambiance, exceptional service, and
                exquisite flavors make it a standout destination for discerning
                diners.
              </p>
              <h1 className="font-serif text-[32px] text-orange-400">
                Jane Cooper
              </h1>
              <h3 className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] text-[16px] leading-[28px]">
                Chef
              </h3>
            </div>
          </div>
        </div>
        <div className="px-8 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <img src={images.c3} alt="" />
            <div className="flex flex-col justify-center items-center lg:items-start mt-8 lg:mt-0 lg:ml-8">
              <p className="font-serif text-[#ACACAC] font-normal tracking-[0.04em] capitalize text-[16px] leading-[28px] text-center lg:text-left">
                Nostra redefines fine dining with its impeccable service,
                exquisite flavors, and an ambiance that enchants all who visit.
              </p>
              <h1 className="font-serif text-[32px] text-orange-400">
                Robert Fox
              </h1>
              <h3 className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] text-[16px] leading-[28px]">
                Chef
              </h3>
            </div>
          </div>
        </div>
        <div className="px-8 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <img src={images.c4} alt="" />
            <div className="flex flex-col justify-center items-center lg:items-start mt-8 lg:mt-0 lg:ml-8">
              <p className="font-serif text-[#ACACAC] font-normal tracking-[0.04em] capitalize text-[16px] leading-[28px] text-center lg:text-left">
                A hidden gem with impeccable service, delightful flavors, and an
                enchanting atmosphere that leaves a lasting impression.
              </p>
              <h1 className="font-serif text-[32px] text-orange-400">
                Brooklyn Simmons
              </h1>
              <h3 className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] text-[16px] leading-[28px]">
                Caterer
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
