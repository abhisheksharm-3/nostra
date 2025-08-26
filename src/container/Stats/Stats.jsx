import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
  offset: 100,
});

import { images } from "../../constants";

const Stats = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#090909]">
      <div className="flex flex-col justify-center items-center pt-36" data-aos="fade-down">
        <h1 className="text-[#ACACAC] font-serif text-[18px] lg:text-[23px] font-bold capitalize leading-7 tracking-wider">
          Our History
        </h1>
        <img src={images.spoon} alt="spoon image" className="mt-1 mb-8" />
      </div>
      <h1 className="lg:w-[1128px] text-center font-serif text-orange-400 text-[40px] lg:text-[64px] font-semibold capitalize lg:leading-[82px] tracking-[0.04em] mb-10" data-aos="fade-down">
        Serving Customers for over a decade
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 pb-16">
        <div className="flex flex-col" data-aos="fade-left">
          <p className="text-center lg:text-left lg:w-[523px] text-neutral-400 text-[16px] font-normal leading-7 tracking-wider pb-8">
            Nostra, a decade-old fine dining establishment, continues to
            captivate customers with its minimal and modern ambiance,
            exceptional gastronomy, and impeccable service.
          </p>
          <img src={images.storefront} alt="store front" className="" />
        </div>
        <div className="flex flex-col gap-12">
          <img src={images.barfront} alt="bar front" data-aos="fade-down"/>
          <h1 className=" text-center lg:text-left font-serif text-orange-400 text-[30px] lg:text-[45px] font-semibold capitalize lg:leading-[62px] tracking-[0.04em]" data-aos="fade-up">
            Over the Years
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-16" data-aos="fade-up">
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className=" text-center font-serif text-orange-400 text-[30px] lg:text-[45px] font-semibold capitalize lg:leading-[62px] tracking-[0.04em]">
                30+
              </h1>
              <img src={images.spoon} alt="spoon image" className="w-[40%]" />
              <p className="font-serif w-[126px] text-white text-[32px] font-normal capitalize leading-10 tracking-widest text-center lg:text-left">
                {" "}
                Breakfast Options{" "}
              </p>
            </div>
            <img src={images.line} alt="" className="rotate-90 lg:rotate-0" />
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className=" text-center font-serif text-orange-400 text-[30px] lg:text-[45px] font-semibold capitalize lg:leading-[62px] tracking-[0.04em]">
                50+
              </h1>
              <img src={images.spoon} alt="spoon image" className="w-[40%]" />
              <p className="font-serif w-[126px] text-white text-[32px] font-normal capitalize leading-10 tracking-widest text-center lg:text-left">
                {" "}
                Dinner Options{" "}
              </p>
            </div>
            <img src={images.line} alt="" className="rotate-90 lg:rotate-0" />
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className=" text-center font-serif text-orange-400 text-[30px] lg:text-[45px] font-semibold capitalize lg:leading-[62px] tracking-[0.04em]">
                8+
              </h1>
              <img src={images.spoon} alt="spoon image" className="w-[40%]" />
              <p className="font-serif w-[126px] text-white text-[32px] font-normal capitalize leading-10 tracking-widest text-center lg:text-left">
                {" "}
                New Locations{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
