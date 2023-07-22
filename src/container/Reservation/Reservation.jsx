import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { Thanks } from "../";
import "./reservation.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Reservation = () => {
  const [name, setName] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [formError, setFormError] = useState("");

  const User = {
    userName: name,
    guests: numberOfPersons,
    visiting: date,
    time: time,
  };

  useEffect(() => {
    const today = new Date();
    const nextDay = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const nextDayFormatted = nextDay.toISOString().split("T")[0];
    setDate(nextDayFormatted);

    setTime("20:00");
  }, []);

  const handleSubmit = () => {
    // Validation checks
    if (name.length < 2) {
      setFormError("Name should be at least 2 characters long.");
      return;
    }

    if (numberOfPersons > 12) {
      setFormError("Number of persons should be less than 13.");
      return;
    }

    const selectedDate = new Date(date);
    const now = new Date();

    if (selectedDate < now) {
      setFormError("Date should not be in the past.");
      return;
    }

    const selectedTime = new Date(`2000-01-01T${time}`);
    const minTime = new Date(`2000-01-01T09:00`);
    const maxTime = new Date(`2000-01-01T23:00`);

    if (selectedTime < minTime || selectedTime > maxTime) {
      setFormError("Time should be between 9 AM and 11 PM.");
      return;
    }

    // Form is valid, submit the form
    setFormError("");
    // TODO: Add your form submission logic here
    console.log("Form submitted successfully");
  };

  const selectedDate = new Date(date);
  const now = new Date();
  const selectedTime = new Date(`2000-01-01T${time}`);
  const minTime = new Date(`2000-01-01T09:00`);
  const maxTime = new Date(`2000-01-01T23:00`);

  const isSubmitDisabled =
    name.length < 2 ||
    numberOfPersons > 12 ||
    selectedDate < now ||
    selectedTime < minTime ||
    selectedTime > maxTime;

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
          <h3 className="text-center font-serif text-orange-400 text-[40px] lg:text-[64px] font-semibold capitalize lg:leading-10 tracking-wider lg:tracking-widest" data-aos="flip-up">
            Book a table
          </h3>
          <div>
            <form>
              <div className="flex flex-1 flex-col lg:flex-row items-center justify-between gap-10 lg:mt-20">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="bg-[#090909] text-[#ACACAC] border border-orange-300 font-serif rounded-sm text-center"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    id="numberOfPersons"
                    className="bg-[#090909] text-[#ACACAC] border border-orange-300 rounded-sm text-center"
                    value={numberOfPersons}
                    onChange={(e) => setNumberOfPersons(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="date"
                    id="date"
                    className="bg-[#090909] font-serif text-[#ACACAC] border border-orange-300 rounded-sm"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="time"
                    id="time"
                    className="bg-[#090909] font-serif text-[#ACACAC] border border-orange-300 rounded-sm"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="radio-button-container flex-wrap justify-center mt-8">
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

              {formError && <p className="text-red-500 mt-2">{formError}</p>}

              <div className="flex justify-center items-center mt-14">
                <Link to="/thanks" state={User}>
                  <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    onClick={handleSubmit}
                    className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none ease-in duration-200 hover:bg-orange-400"
                  >
                    Book Now
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
