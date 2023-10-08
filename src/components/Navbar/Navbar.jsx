import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";

import images from "../../constants/images";
import { useUser } from "../../context/UserContextProvider";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init({
  duration: 1000,
  offset: 100,
});

import "./Navbar.css";

const Navbar = () => {
  const handleLoginClick = () => {
    if (user) {
      logout();
    }
  };
  const { current: user, logout } = useUser();
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="w-full flex justify-between items-center bg-[#090909] text-[#Acacac] lg:py-4 lg:px-8 p-4">
      <div className="flex justify-start items-center">
        <Link to="/">
          <img
            className="w-[110px] lg:w-[190px]"
            src={images.nostra}
            alt="app logo"
            data-aos="fade-down"
          />
        </Link>
      </div>
      <ul
        className="hidden lg:flex flex-1 justify-center items-center"
        data-aos="fade-down"
      >
        <li className="py-0 px-4 cursor-pointer hover:text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="py-0 px-4 cursor-pointer hover:text-white">
          <Link onMouseOver={() => import("../../pages/Aboutpage")} to="/about">
            About
          </Link>
        </li>
        <li className="py-0 px-4 cursor-pointer hover:text-white">
          <Link onMouseOver={() => import("../../pages/BarHome")} to="/bar">
            Bar
          </Link>
        </li>
        <li className="py-0 px-4 cursor-pointer hover:text-white">
          <Link
            onMouseOver={() => import("../../pages/Services")}
            to="/services"
          >
            Our Services
          </Link>
        </li>
        <li className="py-0 px-4 cursor-pointer hover:text-white">
          <a href="#awards">Awards</a>
        </li>
        <li className="py-0 px-4 cursor-pointer hover:text-white">
          <Link onMouseOver={() => import("../../pages/Contact")} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden xl:flex justify-end items-center">
        <Link
          onMouseOver={() => import("../../components/SignUp/Signup")}
          to={user ? "/" : "/userauth"}
          className="my-0 mx-4 ease-in duration-500 hover:border-b-orange-400 hover:text-white"
          data-aos="fade-down"
          onClick={handleLoginClick}
        >
          {user ? "Logout" : "Log In / Sign Up"}
        </Link>
        <div className="w-px h-[30px] bg-white" data-aos="fade-up" />
        <Link
          to="/profile"
          className="my-0 mx-4 ease-in duration-500 hover:border-b-orange-400 hover:text-white"
          data-aos="fade-down"
        >
          Book Table
        </Link>
      </div>
      <div className="md:flex lg:hidden" data-aos="fade-up">
        <GiHamburgerMenu
          color="#ACACAC"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div
            className="flex flex-col fixed w-full h-screen top-0 left-0 bg-[#090909] ease-in duration-500 z-5 lg:hidden z-30"
            data-aos="fade-down"
          >
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="hover:text-orange-400 cursor-pointer absolute top-5 right-5"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="">
              <li className="m-8 cursor-pointer text-orange-400 text-[32px] text-center font-serif hover:text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="m-8 cursor-pointer text-orange-400 text-[32px] text-center font-serif hover:text-white">
                <Link
                  onMouseOver={() => import("../../pages/Aboutpage")}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="m-8 cursor-pointer text-orange-400 text-[32px] text-center font-serif hover:text-white">
                <Link
                  onMouseOver={() => import("../../pages/BarHome")}
                  to="/bar"
                >
                  Bar
                </Link>
              </li>
              <li className="m-8 cursor-pointer text-orange-400 text-[32px] text-center font-serif hover:text-white">
                <Link
                  onMouseOver={() => import("../../pages/Services")}
                  to="/services"
                >
                  Our Services
                </Link>
              </li>
              <li className="m-8 cursor-pointer text-orange-400 text-[32px] text-center font-serif hover:text-white">
                <Link to="#awards">Awards</Link>
              </li>
              <li className="m-8 cursor-pointer text-orange-400 text-[32px] text-center font-serif hover:text-white">
                <Link
                  onMouseOver={() => import("../../pages/Contact")}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div
              className="font-serif text-orange-400 text-[23px] flex justify-center items-center"
              onClick={() => setToggleMenu(false)}
            >
              <Link
                onMouseOver={() => import("../../components/SignUp/Signup")}
                to={user ? "/" : "/userauth"}
                className="my-0 mx-4 ease-in duration-500 hover:border-b-orange-400"
                onClick={handleLoginClick}
              >
                {user ? "Logout" : "Log In / Sign Up"}
              </Link>
              <div className="w-px h-[30px] bg-white" />
              <Link
                to="/profile"
                className="my-0 mx-4 ease-in duration-500 hover:border-b-orange-400"
              >
                Book Table
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
