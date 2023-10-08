import React from "react";
import { useUser } from "../context/UserContextProvider";
import { Navbar } from "../components";
import { Reservation } from "../container";
import { Footer } from "../container";
import { Link } from "react-router-dom";

const NoUpcomingBookingMessage = () => (
  <div className="bg-[#090909] text-white rounded-lg p-5 cursor-pointer hover:-translate-y-1 ease-in-out duration-700">
    <p className="text-lg font-semibold font-serif capitalize">
      No upcoming booking
    </p>
  </div>
);

const Profile = () => {
  const { current: user } = useUser();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white ">
      <Navbar />
      <div className="p-10 text-center bg-[url('./assets/404-1.jpg')] bg-cover bg-center">
        <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-20 w-screen">
          <div>
            <h2 className="text-4xl font-serif font-semibold mb-4">
              Welcome back,
            </h2>
            <h1 className="text-5xl text-orange-600 font-bold font-serif mb-8">
              {user ? user.name : ""}
            </h1>
          </div>
          <NoUpcomingBookingMessage />
        </div>
        {user && (
          <Link
            to="/previous-bookings"
            className="text-2xl text-orange-400 font-serif font-semibold hover:text-orange-600 ease-in-out duration-500 hover:underline"
          >
            View Your Previous Bookings
          </Link>
        )}
        <div className="bg-orange-400 w-20 h-2 mx-auto mt-4 mb-6"></div>
        <Reservation />
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
