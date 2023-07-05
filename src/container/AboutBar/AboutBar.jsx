import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const AboutBar = () => {
  return (
    <div className="relative bg-[url(./assets/bg.png)] bg-center bg-cover bg-no-repeat bg-fixed py-16 px-8 sm:p-16 lg:py-16 lg:px-24">
      <img
        src={images.logo}
        alt="logo"
        className="w-[15%] lg:w-[7%] absolute top-0 left-0"
      />
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-0">
        <div className="flex flex-col justify-end">
        <img src={images.bar2} alt="bar image" className="lg:h-[702px]"/>
        </div>
        <div className="flex flex-col justify-center items-start lg:pl-32">
          <img src={images.bar1} alt="bar image" className="mb-8"/>
          <SubHeading title="About Us" />
          <h1 className="font-serif w-max-screen lg:w-[600px] text-orange-300 text-[40px] lg:text-[64px] font-semibold capitalize lg:leading-[83.2px]">Food, Drinks, entertainment in one</h1>
          <p className="w-max-screen lg:w-[523px] text-neutral-400 text-[16px] font-normal leading-7 tracking-wider py-6">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button type="button" className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none w-max ease-in duration-200 hover:bg-orange-400">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutBar;
