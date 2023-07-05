import React from 'react';
import { images } from "../../constants";

const Map = () => {
  return (
    <div className='relative flex justify-center items-center w-screen h-[360px] lg:h-screen bg-[#090909]'>
      <img src={images.map} alt="map" className='lg:w-[70%]' />
      <img src={images.logo} alt="logo" className='absolute bottom-0 right-0 w-[15%] lg:w-[7%] mr-4 mb-4' />
    </div>
  );
};

export default Map;
