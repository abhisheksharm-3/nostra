import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { useBookings } from "../../context/BookingContextProvides";
import { useUser } from "../../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { current: bookings, remove } = useBookings();
  const navigate = useNavigate();
  const user = useUser();

  const formatBookingDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDelete = (bookingId) => {
    remove(bookingId);
  };

  const handleView = (booking) => {
    const [datePart, timePartWithMillis] = booking.booking_date.split("T");
    const [timePart] = timePartWithMillis.split(".");
    navigate("/thanks", {
      state: {
        origin: "/previous-bookings",
        userName: user.current.name,
        guests: booking.guests,
        visiting: datePart,
        time: timePart,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-5xl text-orange-400 font-serif font-bold mb-8">
          Bookings
        </h1>

        {Array.isArray(bookings) && bookings.length > 0 ? (
          <div className="rounded-lg overflow-hidden font-serif">
            <table className="w-full bg-[#090909] bg-opacity-30 rounded-lg shadow-md">
              <thead>
                <tr>
                  <th className="py-2 text-center text-lg bg-orange-400 border-b border-orange-100">
                    Name
                  </th>
                  <th className="py-2 text-center text-lg bg-orange-400 border-b border-orange-100">
                    Phone Number
                  </th>
                  <th className="py-2 text-center text-lg bg-orange-400 border-b border-orange-100">
                    Date of Booking
                  </th>
                  <th className="py-2 text-center text-lg bg-orange-400 border-b border-orange-100">
                    Number of Guests
                  </th>
                  <th className="py-2 text-center text-lg bg-orange-400 border-b border-orange-100">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.$id} className="text-[#acacac]">
                    <td className="py-2 text-center border-b border-orange-100">
                      {booking.name}
                    </td>
                    <td className="py-2 text-center border-b border-orange-100">
                      {booking.phone}
                    </td>
                    <td className="py-2 text-center border-b border-orange-100">
                      {formatBookingDate(booking.booking_date)}
                    </td>
                    <td className="py-2 text-center border-b border-orange-100">
                      {booking.guests}
                    </td>
                    <td className="py-2 text-center border-b border-orange-100">
                      <button
                        onClick={() => handleDelete(booking.$id)}
                        className="text-red-500 hover:text-red-700 mr-2"
                      >
                        <FaTrash />
                      </button>
                      <button
                        onClick={() => handleView(booking)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-white">No booking history exists.</p>
        )}

        {bookings.length > 10 && (
          <p className="text-orange-400 mt-4">
            Only the first 10 bookings are shown. Use pagination for more
            results.
          </p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
