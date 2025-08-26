/* eslint-disable react/prop-types */
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
  offset: 100,
});

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="flex flex-1 justify-start items-start min-w-full my-4 mx-0 sm:min-w-[230px] sm:m-4">
    <img src={imgUrl} alt="awards" className="w-[50px] h-[50px]" />
    <div className="flex flex-col ml-4">
      <p className="font-serif text-[#ACACAC] font-bold tracking-[0.04em] capitalize leading-[29.9px] text-[21px] lg:text-[23px]">
        {title}
      </p>
      <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] uppercase text-[16px] leading-[28px]">
        {subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => (
  <div
    className="bg-[url('./assets/bg.png')] bg-center bg-cover bg-repeat bg-fixed flex justify-between items-center flex-col lg:flex-row min-h-screen py-16 px-8 sm:p-16 lg:py-16 lg:px-24"
    id="awards"
  >
    <div className="flex flex-1 w-full justify-center items-start flex-col" data-aos="fade-right">
      <SubHeading title="Awards & Recognition" />
      <h1 className="text-orange-400 font-serif text-[45px] leading-[70px] lg:text-[64px] lg:leading-[83.2px] tracking-[0.04em] capitalize">
        Our Laurels
      </h1>

      <div className="flex justify-start items-center flex-wrap mt-12">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="flex flex-1 w-full justify-center items-center mt-20 ml-0 mr-0 mb-0 lg:ml-8" data-aos="fade-left">
      <img
        src={images.laurels}
        alt="laurels image"
        className="w-full lg:w-[80%]"
      />
    </div>
  </div>
);

export default Laurels;
