import React from "react";
import { useState, useEffect } from "react";

import { images } from "../../constants";

import './reservation.css'

const Reservation = () => {
  const [name, setName] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const today = new Date();
    const nextDay = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const nextDayFormatted = nextDay.toISOString().split("T")[0];
    setDate(nextDayFormatted);

    setTime("20:00");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* <img src={images.logo} className="w-[146px] h-[146px] top-0 left-0 absolute" /> */}
      <div
        className="bg-[#090909] flex justify-center items-center flex-col"
        id="booking"
      >
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
            <div className="flex flex-1 flex-col lg:flex-row items-center justify-between gap-10 lg:mt-20">
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="bg-[#090909] text-[#ACACAC] border border-orange-300 font-serif rounded-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  id="numberOfPersons"
                  className="bg-[#090909] text-[#ACACAC] border border-orange-300 rounded-sm"
                  value={numberOfPersons}
                  onChange={(e) => setNumberOfPersons(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  id="date"
                  className="bg-[#090909] text-[#ACACAC] border border-orange-300 rounded-sm"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="time"
                  id="time"
                  className="bg-[#090909] text-[#ACACAC] border border-orange-300 rounded-sm"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="radio-button-container justify-center mt-8">
                <div className="radio-button">
                  <input
                    type="radio"
                    className="radio-button__input"
                    id="radio1"
                    name="radio-group"
                  />
                  <label className="radio-button__label" htmlFor="radio1">
                    <span className="radio-button__custom"></span>
                    Date Night
                  </label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    className="radio-button__input"
                    id="radio2"
                    name="radio-group"
                  />
                  <label className="radio-button__label" htmlFor="radio2">
                    <span className="radio-button__custom"></span>
                    Family Fun
                  </label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    className="radio-button__input"
                    id="radio3"
                    name="radio-group"
                  />
                  <label className="radio-button__label" htmlFor="radio3">
                    <span className="radio-button__custom"></span>
                    Romantic Ambience
                  </label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    className="radio-button__input"
                    id="radio4"
                    name="radio-group"
                  />
                  <label className="radio-button__label" htmlFor="radio4">
                    <span className="radio-button__custom"></span>
                    With Friends
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-14">
              <button
                type="submit"
                className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reservation;
