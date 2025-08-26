import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
  duration: 1000,
  offset: 100,
});

import {images} from '../../constants'
import { SubHeading } from '../../components';

const Header = () => (
  <div className='bg-[#090909] flex flex-col lg:flex-row justify-start lg:gap-[200px] items-center min-h-screen py-16 px-8 sm:p-16 lg:py-16 lg:px-24' id='home'>
    <div className="flex flex-1 flex-col w-full items-start justify-center" data-aos="fade-right">
    {/* <div className="origin-top-left -rotate-90 text-white text-[18px] font-normal leading-loose tracking-wider">#Bar</div>
    <div className="origin-top-left -rotate-90 text-white text-[18px] font-normal leading-loose tracking-wider">#Gericht</div> */}
    <SubHeading title = 'Chase the new flavour'/>
    <h1 className='font-serif text-orange-400 font-bold tracking-[0.04em] uppercase leading-[60px] text-[40px] sm:leading-[77px] sm:text-[60px] 2xl:text-[90px] 2xl:leading-[117px]'>Where fine dining meets modern minimalism.</h1>
    <p className="font-sans my-8 mx-0 text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">Where elegance meets minimalism, and culinary secrets unfold. Embark on a mystical dining experience, reimagining the art of fine cuisine.</p>
    <button type='button' className='bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none ease-in duration-200 hover:bg-orange-400'>Explore Menu</button>
    </div>
    <div className="" data-aos="fade-left">
    <img src={images.welcome} alt="header_img" className='flex flex-1 xl:w-[60%] lg:2-[80%] justify-center items-center mt-5 ml-0 mr-0 mb-0 xl:ml-8'/>
    </div>
  </div>
);

export default Header;
