import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
  offset: 100,
});

import { images } from "../../constants";

const BarHeader = () => {
  return (
    <div className="relative bg-[url(./assets/bg.png)] bg-center bg-cover bg-no-repeat bg-fixed flex justify-center items-center py-16 px-8 sm:p-16 lg:py-16 lg:px-24">
      <h1 className="absolute font-serif top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-white text-[55px] lg:text-[160px] font-bold capitalize tracking-widest z-10">
        On the Rocks
      </h1>
      <img src={images.bar} alt="bar image" className="z-0 ab" data-aos="fade-down"/>
    </div>
  );
};

export default BarHeader;
