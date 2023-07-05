import React from "react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { images, table } from "../../constants";

const InfoVideo = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="flex flex-col items-center justify-center bg-[#090909] lg:pb-32">
      <div className="flex flex-col justify-center items-center pt-20">
        <h1 className="text-[#ACACAC] font-serif text-[18px] lg:text-[23px] font-bold capitalize leading-7 tracking-wider">
          About Us
        </h1>
        <img src={images.spoon} alt="spoon image" className="mt-1 mb-8" />
      </div>
      <h1 className="lg:w-[1128px] text-center font-serif text-orange-400 text-[40px] lg:text-[64px] font-semibold capitalize lg:leading-[82px] tracking-[0.04em] mb-10">
        Happy Hours With us
      </h1>
      <p className="text-center lg:w-[868px] text-neutral-400 text-[16px] font-normal leading-7 tracking-wider pb-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        fugiat illum veniam voluptatum sunt inventore!
      </p>
      <div className="h-screen relative">
      <video
        ref={vidRef}
        src = {table}
        type="video/mp4"
        loop
        controls={false}
        muted
        className="w-full h-full object-cover"
      />
      <div className="flex justify-center items-center absolute inset-0 bg-black/60">
        <div
          className="flex justify-center items-center w-[100px] h-[100px] rounded-full border-2 border-orange-400 cursor-pointer"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill className="text-white text-3xl" />
          ) : (
            <BsFillPlayFill className="text-white text-3xl" />
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default InfoVideo;
