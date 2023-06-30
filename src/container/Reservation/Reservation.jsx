import React from "react";
import { useState } from "react";

import { images } from "../../constants";

const Reservation = () => {
  const [name, setName] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* <img src={images.logo} className="w-[146px] h-[146px] top-0 left-0 absolute" /> */}
      <div className="bg-[#090909] flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center my-[100px] mx-[50px] px-8 py-12 bg-neutral-950 backdrop-blur shadow border border-orange-300 border-opacity-20">
          <h2 className="font-serif text-[#ACACAC] font-bold text-[20px] lg:text-[23px] capitalize leading-7 tracking-wider">
            Reservation
          </h2>
          <div className="mt-[10px] mb-[30px]">
            <img src={images.spoon} alt="spoon img" className="w-[45px]" />
          </div>
          <h3 className="text-center font-serif text-orange-400 text-[40px] lg:text-[64px] font-semibold capitalize lg:leading-10 tracking-wider lg:tracking-widest">
            Book a table
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-1 flex-col lg:flex-row items-center justify-center lg:mt-20">
              <div>
                <label htmlFor="name" className="text-[#ACACAC] font-serif">Name:</label>
                <input
                  type="text"
                  id="name"
                  className="bg-[#090909] text-[#ACACAC] border border-orange-300"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="numberOfPersons" className="text-[#ACACAC] font-serif">Number of Persons:</label>
                <input
                  type="number"
                  id="numberOfPersons"
                  className="bg-[#090909] text-[#ACACAC] border border-orange-300"
                  value={numberOfPersons}
                  onChange={(e) => setNumberOfPersons(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="date" className="text-[#ACACAC] font-serif">Date:</label>
                <input
                  type="date"
                  id="date"
                  className="bg-[#090909] text-[#ACACAC] border border-orange-300"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="time" className="text-[#ACACAC] font-serif">Time:</label>
                <input
                  type="time"
                  id="time"
                  className="bg-[#090909] text-[#ACACAC] border border-orange-300"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-14">
            <button type="submit" className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none">Book Now</button></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reservation;
