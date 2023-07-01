import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="bg-[#090909] flex justify-center items-center flex-col lg:flex-row pl-8 sm:pl-16 py-16 lg:pr-0 lg:pl-24">
      <div className="flex flex-1 justify-center items-start flex-col min-w-full lg:min-w-[500px] pr-8">
        <SubHeading title="Instagram" />
        <h1 className="text-orange-400 font-serif text-[45px] leading-[70px] lg:text-[64px] lg:leading-[83.2px] tracking-[0.04em] capitalize">
          Photo Gallery
        </h1>
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">
          Watch our social media doing tricks on you.
        </p>
        <button
          type="button"
          className="bg-[#F5EFDB] mt-4 text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none"
        >
          View More
        </button>
      </div>

      <div className="flex flex-1 max-w-full my-20 mx-0 lg:m-0 lg:max-w-[50%] relative">
        <div className="flex w-max overflow-x-scroll lg:overflow-x-hidden" ref={scrollRef}>
          {" "}
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="group flex justify-center items-center relative min-w-[240px] h-[320px] lg:min-w-[301px] lg:h-[447px] mr-8"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" className="w-full h-full object-cover opacity-100 ease-in duration-500 hover:opacity-40" />
              <BsInstagram className="absolute text-[#ACACAC] text-[2rem] opacity-0 group-hover:opacity-100 ease-in duration-500 cursor-pointer" />
            </div>
          ))}{" "}
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
    </div>
  );
};

export default Gallery;
