import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
  offset: 100,
});

import { MenuItem } from "../../components";
import { data, images } from "../../constants";

const SpecialMenu = () => (
  <div className="bg-[#090909] flex flex-col jusify-center items-center py-16 px-8 sm:p-16 lg:py-16 lg:px-24" id="menu">
    <div className="mb-8 text-center" data-aos="fade-down">
    <div className='mb-4 flex flex-col items-center justify-center'>
    <p className="font-serif text-white font-bold tracking-[0.04em] uppercase leading-[30px] text-[19px] sm:text-[21px] 2xl:text-[37px] 2xl:leading-[67px]">Modern Fine Dining Revelations</p>
    <img src={images.spoon} alt='spoon image' />
  </div>
      <h1 className="text-orange-400 font-serif text-[45px] leading-[70px] lg:text-[64px] lg:leading-[83.2px] tracking-[0.04em] capitalize">Today&apos;s Special</h1>
    </div>

    <div className="w-full my-8 mx-0 flex justify-center lg:items-start flex-col items-center lg:flex-row">
      <div className="flex justify-center items-center flex-1 w-full flex-col" data-aos="fade-right">
        <p className="font-serif font-semibold text-[#ACACAC] text-[35px] leading-[48.5px] sm:text-[45px]  sm:leading-[58.5px] tracking-[0.04em]">Wine & Beer</p>
        <div className="flex flex-col my-8 mx-0 w-full">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="w-full sm:w-[410px] sm:my-12 sm:mx-0 lg:my-0 lg:mx-8 " data-aos="fade-up">
        <img src={images.menu} alt="menu image" className="w-full h-auto" />
      </div>
      <div className="flex justify-center items-center flex-1 w-full flex-col" data-aos="fade-left">
        <p className="font-serif font-semibold text-[#ACACAC] text-[35px] leading-[48.5px] sm:text-[45px]  sm:leading-[58.5px] tracking-[0.04em]">Cocktails</p>
        <div className="flex flex-col my-8 mx-0 w-full">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="mt-4" data-aos="fade-up">
      <button
        type="button"
        className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none ease-in duration-200 hover:bg-orange-400"
      >
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
