import { SubHeading } from "../../components";
import { images } from "../../constants";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
  offset: 100,
});

const FindUs = () => (
  <div
    className="bg-[url('./assets/bg.png')] bg-center bg-cover bg-repeat bg-fixed flex justify-between items-center min-h-screen flex-col lg:flex-row py-16 px-8 sm:p-16 lg:py-16 lg:px-24"
    id="contact"
  >
    <div className="flex flex-1 w-full justify-center items-start flex-col " data-aos="fade-up">
      <SubHeading title="Contact" />
      <h1 className="text-orange-400 font-serif text-[45px] leading-[70px] lg:text-[64px] lg:leading-[83.2px] tracking-[0.04em] capitalize mb-12">
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p className="font-serif text-[#DCCA87] my-8 mx-0 font-bold tracking-[0.04em] capitalize leading-[29.9px] text-[21px] lg:text-[23px] ">
          Opening Hours
        </p>
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">
          Mon - Fri: 10:00 am - 02:00 am
        </p>
        <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">
          Sat - Sun: 10:00 am - 03:00 am
        </p>
      </div>
      <button
        type="button"
        className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none mt-8 ease-in duration-200 hover:bg-orange-400"
      >
        Visit Us
      </button>
    </div>

    <div className="flex flex-1 w-full justify-center items-center mt-20 lg:mt-0 lg:ml-8" data-aos="fade-down">
      <img src={images.findus} alt="finus_img" className="w-full lg:w-[80%]" />
    </div>
  </div>
);

export default FindUs;
