import React from "react";

import { images } from "../../constants";

const ReachFile = () => {
  return (
    <div className="relative bg-[url(./assets/bg.png)] bg-center bg-cover bg-no-repeat bg-fixed flex justify-center items-center py-16 px-8 sm:p-16 lg:py-16 lg:px-24 gap-10">
      <form className="px-8">
        <div className="flex flex-col flex-1 lg:w-[635px] lg:h-[300px] gap-6 justify-center mb-8 lg:mb-0">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            className="bg-transparent border border-orange-400 font-serif py-2 px-4"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="bg-transparent border border-orange-400 font-serif py-2 px-4"
            required
          />

          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="bg-transparent border border-orange-400 font-serif py-2 px-4"
            rows={6}
            required
          />
        </div>
        <div className="flex items-center justify-center lg:block">
          <button
            type="submit"
            className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none ease-in duration-200 hover:bg-orange-400"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="hidden lg:flex flex-1 justify-center items-center ">
        <img src={images.laurels} alt="Contact" className="w-[90%]" />
      </div>
    </div>
  );
};

export default ReachFile;
