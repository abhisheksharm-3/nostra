import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { images } from "../../constants";
const Signup = () => {
  const [showOtpForm, setShowOtpForm] = useState(false);

  const handleProceed = () => {
    setShowOtpForm(true);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#090909] h-screen flex items-center justify-center">
        <div className="flex flex-[1.2] flex-col lg:flex-row m-8 lg:m-24 lg:border border-gray-500">
          <div className="lg:w-3/5 bg-[url(./assets/signup2.jpg)] bg-center bg-cover bg-no-repeat w-max-screen">
            <h1 className="font-serif text-center text-orange-500 text-[40px] lg:text-[90px] font-bold capitalize leading-10 lg:leading-[75px] tracking-widest my-32 lg:my-48">
              Welcome to Nostra
            </h1>
          </div>
          <div className="lg:w-2/5 flex items-center justify-center flex-col bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            {showOtpForm ? (
              <>
                <h1 className="font-serif text-white text-[23px] font-bold capitalize leading-7 tracking-wider mt-16 mb-6 text-center">
                  Enter OTP
                </h1>
                <div className="flex flex-col items-center">
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    pattern="[0-9]{6}"
                    title="Please enter a valid 6-digit OTP"
                    placeholder="OTP (6 digits)"
                    className="bg-transparent border border-orange-400 font-serif py-2 px-4 text-[#ACACAC]"
                    required
                  />
                  <button
                    type="button"
                    className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none mt-8 ease-in duration-200 hover:bg-orange-400 mb-16 lg:mb-0"
                  >
                    Login
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="font-serif text-white text-[23px] font-bold capitalize leading-7 tracking-wider mt-16 mb-6 text-center">
                  Enter Your Mobile Number to Proceed
                </h1>
                <div className="flex flex-col items-center">
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit number"
                    placeholder="Mobile Number (10 digits)"
                    className="bg-transparent border border-orange-400 font-serif py-2 px-4 text-[#ACACAC]"
                    required
                  />
                  <button
                    type="button"
                    className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none mt-8 ease-in duration-200 hover:bg-orange-400 mb-16 lg:mb-0"
                    onClick={handleProceed}
                  >
                    Proceed
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
