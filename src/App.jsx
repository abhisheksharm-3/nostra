import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Loader from "./components/Loader/Loader";

const Homepage = lazy(() => import("./pages/Homepage.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Aboutpage = lazy(() => import("./pages/Aboutpage.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const BarHome = lazy(() => import("./pages/BarHome.jsx"));
const Page404 = lazy(() => import("./pages/Page404.jsx"));
const Signup = lazy(() => import("./components/SignUp/Signup.jsx"));
const Thanks = lazy(() => import("./container/ThankYouPage/Thanks.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"))
const PreviousBookings = lazy(() => import("./pages/PreviousBookings"))

const App = () => (
  <div>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bar" element={<BarHome />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/userauth" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/previous-bookings" element={<PreviousBookings />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  </div>
);

export default App;
