import React from "react";
import { images } from "../../constants";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Poison = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const hover = ["Beer", "Wine", "Cocktail"];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center w-max-screen py-24 bg-[#090909]">
        <h2 className="text-[#ACACAC] font-serif text-[18px] lg:text-[23px] font-bold capitalize leading-7 tracking-wider">
          Wide Range to Choose from
        </h2>
        <img src={images.spoon} alt="spoon image" className="pt-2 pb-6" />
        <h1 className="lg:w-[1128px] text-center font-serif text-orange-400 text-[40px] lg:text-[64px] font-semibold capitalize lg:leading-[82px] tracking-[0.04em] mb-10">
          What&apos;s Your Poison?
        </h1>

        <div className="flex flex-1 max-w-full my-10 mx-0 relative lg:hidden">
          <div className="flex w-max overflow-x-scroll snap-x" ref={scrollRef}>
            {" "}
            {[images.beerbar, images.wine, images.cocktail].map(
              (image, index) => (
                <div
                  className="group flex justify-center items-center relative min-w-[240px] h-[320px] lg:min-w-[301px] lg:h-[447px] mx-14 snap-center"
                  key={`gallery_image-${index + 1}`}
                >
                  <img
                    src={image}
                    alt="gallery_image"
                    className="w-full h-full object-cover opacity-100 ease-in duration-500 hover:opacity-40"
                  />
                  <p className="absolute font-serif font-bold text-[#ACACAC] text-[2rem] opacity-0 group-hover:opacity-100 ease-in duration-500 cursor-pointer">
                    {hover[index]}
                  </p>
                </div>
              )
            )}{" "}
          </div>
          <div className="w-full flex justify-between items-center py-0 px-4 absolute bottom-[5%]">
            <BsArrowLeftShort
              className="text-orange-400  text-[2rem] cursor-pointer bg-[#090909] rounded-md hover:text-[#ACACAC]"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="text-orange-400  text-[2rem] cursor-pointer bg-[#090909] rounded-md hover:text-[#ACACAC]"
              onClick={() => scroll("right")}
            />
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-8 mt-16 lg:mb-[93px]">
          <div className="group relative">
            <img
              src={images.beerbar}
              alt="beer"
              className="border border-orange-400 w-full h-full object-cover opacity-100 ease-in duration-500 hover:opacity-40"
            />

            <p className="text-[#fffefe] font-serif font-bold text-[20px] lg:text-[45px] absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 ease-in duration-500 cursor-pointer">
              Beer
            </p>
          </div>
          <div className="group relative">
            <img
              src={images.wine}
              alt="wine"
              className="border border-orange-400 w-full h-full object-cover opacity-100 ease-in duration-500 hover:opacity-40"
            />

            <p className="text-[#fffefe] font-serif font-bold text-[20px] lg:text-[45px] absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 ease-in duration-500 cursor-pointer">
              Wine
            </p>
          </div>
          <div className="group relative">
            <img
              src={images.cocktail}
              alt="cocktail"
              className="border border-orange-400 w-full h-full object-cover opacity-100 ease-in duration-500 hover:opacity-40"
            />

            <p className="text-[#fffefe] font-serif font-bold text-[20px] lg:text-[45px] absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 ease-in duration-500 cursor-pointer">
              Cocktail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poison;
