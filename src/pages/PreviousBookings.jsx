import { Navbar } from "../components";
import { Footer } from "../container";
import Bookings from "../components/Bookings/Bookings";

const PreviousBookings = () => {
  return (
    <div className="">
      <Navbar />
      <Bookings />
      <Footer />
    </div>
  );
};

export default PreviousBookings;
