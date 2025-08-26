/* eslint-disable react/prop-types */
import './MenuItem.css';

const MenuItem = (props) => (
  <div className='w-full my-4 mx-0 flex flex-col'>
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <p className="font-serif text-[#ACACAC] font-bold tracking-[0.04em] capitalize leading-[29.9px] text-[19px] sm:text-[20px] lg:text-[23px] ">{props.title}</p>
      </div>
      <div className="w-[90px] h-px bg-orange-400 my-0 mx-4" />
      <div className="flex justify-end items-end">
        <p className="font-serif text-[#ACACAC] font-bold tracking-[0.04em] capitalize leading-[29.9px] text-[19px] sm:text-[20px] lg:text-[23px]">{props.price}</p>
      </div>
    </div>
    <div className="w-full mt-1">
      <p className="font-sans text-[#ACACAC] font-normal tracking-[0.04em] capitalize leading-[28px] text-[12px] sm:text-[14px] lg:text-[16px]">{props.tags}</p>
    </div>
  </div>
);

export default MenuItem;
