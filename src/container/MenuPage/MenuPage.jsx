import React from "react";

import { images } from "../../constants";

const MenuPage = () => {
  return (
    <div className="bg-[url(./assets/beer.png)] bg-center bg-cover w-max-screen h-screen bg-no-repeat bg-fixed">
        <img src = {images.logo} className="w-[15%] lg:w-[7%]" />
      <div className="py-16 px-8 sm:p-16 lg:py-16 lg:px-24 flex flex-col gap-10">
        <h1 className="text-white font-serif text-[45px] leading-[70px] lg:text-[64px] lg:leading-[83.2px] tracking-[0.04em] capitalize font-semiBold cursor-pointer decoration-2 underline-offset-4 hover:underline mt-24 lg:mt-12  2xl:mt-16 hover:text-orange-400 ease-in duration-200">Bar Menu</h1>
        <h1 className="text-white font-serif text-[45px] leading-[70px] lg:text-[64px] lg:leading-[83.2px] tracking-[0.04em] capitalize font-semiBold cursor-pointer decoration-2 underline-offset-4 hover:underline hover:text-orange-400 ease-in duration-200">Food Menu</h1>
        <h1 className="text-white font-serif text-[45px] leading-[70px] lg:text-[64px] lg:leading-[83.2px] tracking-[0.04em] capitalize font-semiBold cursor-pointer decoration-2 underline-offset-4 hover:underline hover:text-orange-400 ease-in duration-200">Desserts Menu</h1>
      </div>
    </div>
  );
};

export default MenuPage;
