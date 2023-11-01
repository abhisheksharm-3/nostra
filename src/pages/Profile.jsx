import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContextProvider";
import { useBookings } from "../context/BookingContextProvides";
import { Navbar } from "../components";
import { Reservation } from "../container";
import { Footer } from "../container";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { current: user } = useUser();
  const { current: bookings } = useBookings();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [nextBookingDate, setNextBookingDate] = React.useState(null);
  React.useEffect(() => {
    // Find the next upcoming booking date
    const now = new Date();
    const upcomingBookings = bookings.filter(
      (booking) => new Date(booking.booking_date) > now
    );
    if (upcomingBookings.length > 0) {
      const nextBooking = upcomingBookings[0];
      const nextBookingDate = new Date(nextBooking.booking_date);
      setNextBookingDate(nextBookingDate);
    } else {
      setNextBookingDate(null);
    }
  }, [bookings]);
  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user, loading]);
  useEffect(() => {
    if (user === null && !loading) {
      navigate("/userauth"); // Redirect to the login page
    } else if (user) {
      setLoading(false); // User data has loaded
    }
  }, [user, navigate, loading]);
  const NoUpcomingBookingMessage = () => (
    <div className="bg-[#090909] text-white rounded-lg p-5 cursor-pointer hover:-translate-y-1 ease-in-out duration-700">
      <p className="text-lg font-semibold font-serif capitalize">
        {nextBookingDate ? (
          <span>
            Next booking:{" "}
            <span className="text-orange-400 font-bold text-xl">
              {nextBookingDate.toLocaleString()}
            </span>
          </span>
        ) : (
          "No recent booking"
        )}
      </p>
    </div>
  );

  const RefreshDetailsMessage = () => (
    <p className="text-lg text-red-600 font-bold tracking-widest mt-4">
      Logged In but not able to see your details? Try Refreshing!
    </p>
  );
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white ">
      <Navbar />
      <div className="p-10 text-center bg-[url('./assets/404-1.jpg')] bg-cover bg-center">
        <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-20 w-screen">
          <div>
            <h2 className="text-4xl font-serif font-semibold mb-4">
              Welcome back ,
            </h2>
            <h1 className="text-5xl text-orange-600 font-bold font-serif mb-8">
              {name}
            </h1>
          </div>
          <NoUpcomingBookingMessage />
        </div>
        {user && (<>
          <RefreshDetailsMessage />
          <Link
            to="/previous-bookings"
            className="text-2xl text-orange-400 font-serif font-semibold hover:text-orange-600 ease-in-out duration-500 hover:underline"
          >
            View Your Previous Bookings
          </Link>
          </>
        )}
        <div className="bg-orange-400 w-20 h-2 mx-auto mt-4 mb-6"></div>
        <Reservation />
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
