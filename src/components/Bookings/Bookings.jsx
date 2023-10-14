import React from 'react';
import { useBookings } from '../../context/BookingContextProvides';
import { useUser } from '../../context/UserContextProvider';

const Bookings = () => {
  const { current: bookings } = useBookings(); // Assuming useBookings provides access to booking data
  const user = useUser(); // Assuming useUser provides user information

  const formatBookingDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-screen bg-[#090909]">
      <div className="mx-auto w-screen max-h-max p-8 sm:p-32 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-orange-400 font-serif font-bold mb-4">Bookings</h1>

        {Array.isArray(bookings) && bookings.length > 0 ? (
          <div className="rounded-lg p-4 backdrop-blur-md">
            <table className="w-full table-fixed bg-[#090909] bg-opacity-30 rounded-lg shadow-md">
              <thead>
                <tr>
                  <th className="text-center font-serif lg:text-3xl bg-orange-400 p-2 lg:p-4 border border-orange-100">Name</th>
                  <th className="text-center font-serif lg:text-3xl bg-orange-400 p-2 lg:p-4 border border-orange-100">Phone Number</th>
                  <th className="text-center font-serif lg:text-3xl bg-orange-400 p-2 lg:p-4 border border-orange-100">Date of Booking</th>
                  <th className="text-center font-serif lg:text-3xl bg-orange-400 p-2 lg:p-4 border border-orange-100">Number of Guests</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={booking.$id} className='text-[#acacac]'>
                    <td className="border border-orange-100 text-center p-2 text-sm lg:text-base">{booking.name}</td>
                    <td className="border border-orange-100 text-center p-2 text-sm lg:text-base">{booking.phone}</td>
                    <td className="border border-orange-100 text-center p-2 text-sm lg:text-base">{formatBookingDate(booking.booking_date)}</td>
                    <td className="border border-orange-100 text-center p-2 text-sm lg:text-base">{booking.guests}</td>
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
            Only the first 10 bookings are shown. Use pagination for more results.
          </p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
