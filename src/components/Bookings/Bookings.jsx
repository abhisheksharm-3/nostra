import React, { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { useBookings } from "../../context/BookingContextProvides";
import { useUser } from "../../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { current: bookings, remove } = useBookings();
  const navigate = useNavigate();
  const user = useUser();

  const itemsPerPage = 10; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bookings.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-[#090909] text-white font-serif">
      <div className="container mx-auto p-8">
        <h1 className="text-5xl text-orange-400 font-bold mb-8">Bookings</h1>

        {Array.isArray(currentItems) && currentItems.length > 0 ? (
          <div className="rounded-lg overflow-hidden">
            <table className="w-full bg-[#090909] bg-opacity-30 rounded-lg shadow-md">
              <thead>
                <tr>
                  <th className="py-3 text-center text-lg bg-orange-400 border-b border-orange-100">
                    Name
                  </th>
                  <th className="py-3 text-center text-lg bg-orange-400 border-b border-orange-100">
                    Phone Number
                  </th>
                  <th className="py-3 text-center text-lg bg-orange-400 border-b border-orange-100">
                    Date of Booking
                  </th>
                  <th className="py-3 text-center text-lg bg-orange-400 border-b border-orange-100">
                    Number of Guests
                  </th>
                  <th className="py-3 text-center text-lg bg-orange-400 border-b border-orange-100">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((booking) => (
                  <tr key={booking.$id} className="text-[#acacac]">
                    <td className="py-3 text-center border-b border-orange-100">
                      {booking.name}
                    </td>
                    <td className="py-3 text-center border-b border-orange-100">
                      {booking.phone}
                    </td>
                    <td className="py-3 text-center border-b border-orange-100">
                      {formatBookingDate(booking.booking_date)}
                    </td>
                    <td className="py-3 text-center border-b border-orange-100">
                      {booking.guests}
                    </td>
                    <td className="py-3 text-center border-b border-orange-100">
                      <button
                        onClick={() => handleDelete(booking.$id)}
                        className="text-red-500 hover:text-red-700 mx-2"
                      >
                        <FaTrash />
                      </button>
                      <button
                        onClick={() => handleView(booking)}
                        className="text-blue-500 hover:text-blue-700 mx-2"
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

        {bookings.length > itemsPerPage && (
          <div className="flex justify-center mt-4">
            {Array.from({
              length: Math.ceil(bookings.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-orange-400 text-black"
                    : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
