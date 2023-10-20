import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../../constants/images";
import { useUser } from "../../context/UserContextProvider";
import PropTypes from "prop-types";
AOS.init({
  duration: 1000,
  offset: 100,
});

const DesktopMenuItem = ({ to, label, onMouseOver }) => (
  <li className="py-0 px-4 cursor-pointer hover:text-white">
    <Link onMouseOver={onMouseOver} to={to}>
      {label}
    </Link>
  </li>
);

const MobileMenuItem = ({ to, label, onMouseOver }) => (
  <li className="m-8 cursor-pointer text-orange-400 text-[32px] text-center font-serif hover:text-white list-none">
    <Link onMouseOver={onMouseOver} to={to}>
      {label}
    </Link>
  </li>
);

const DesktopView = ({ user, handleLoginClick }) => (
  <>
    <ul
      className="hidden xl:flex flex-1 justify-center items-center"
      data-aos="fade-down"
    >
      <DesktopMenuItem to="/" label="Home" />
      <DesktopMenuItem
        to="/about"
        label="About"
        onMouseOver={() => import("../../pages/Aboutpage")}
      />
      <DesktopMenuItem
        to="/bar"
        label="Bar"
        onMouseOver={() => import("../../pages/BarHome")}
      />
      <DesktopMenuItem
        to="/services"
        label="Our Services"
        onMouseOver={() => import("../../pages/Services")}
      />
      <li className="py-0 px-4 cursor-pointer hover:text-white">
        <a href="#awards">Awards</a>
      </li>
      <DesktopMenuItem
        to="/contact"
        label="Contact"
        onMouseOver={() => import("../../pages/Contact")}
      />
    </ul>
    <div className="hidden xl:flex justify-end items-center">
      <Link
        to={user ? "/" : "/userauth"}
        className="my-0 mx-4 ease-in duration-500 hover:text-white"
        data-aos="fade-down"
        onClick={handleLoginClick}
      >
        {user ? "Logout" : "Log In / Sign Up"}
      </Link>
      <div className="w-px h-[30px] bg-white" data-aos="fade-up" />
      <Link
        to="/profile"
        className="my-0 mx-4 ease-in duration-500 hover:text-white"
        data-aos="fade-down"
      >
        Book Table
      </Link>
    </div>
  </>
);

const MobileView = ({ user, handleLoginClick, setToggleMenu }) => (
  <div
    className="flex flex-col fixed w-full h-screen top-0 left-0 bg-[#090909] ease-in duration-500 z-5 xl:hidden z-30"
    data-aos="fade-down"
  >
    <MdOutlineRestaurantMenu
      fontSize={27}
      className="hover:text-orange-400 cursor-pointer absolute top-5 right-5"
      onClick={() => setToggleMenu(false)}
    />
    <MobileMenuItem to="/" label="Home" />
    <MobileMenuItem
      to="/about"
      label="About"
      onMouseOver={() => import("../../pages/Aboutpage")}
    />
    <MobileMenuItem
      to="/bar"
      label="Bar"
      onMouseOver={() => import("../../pages/BarHome")}
    />
    <MobileMenuItem
      to="/services"
      label="Our Services"
      onMouseOver={() => import("../../pages/Services")}
    />
    <li className="m-8 cursor-pointer text-orange-400 text-[32px] text-center font-serif hover:text-white list-none">
      <a href="#awards">Awards</a>
    </li>
    <MobileMenuItem
      to="/contact"
      label="Contact"
      onMouseOver={() => import("../../pages/Contact")}
    />
    <div
      className="font-serif text-orange-400 text-[27px] flex justify-center items-center gap-2 m-8"
      onClick={() => setToggleMenu(false)}
    >
      <Link
        to={user ? "/" : "/userauth"}
        className="my-0 mx-4 ease-in duration-200 hover:text-white border-b-orange-400"
        onClick={handleLoginClick}
      >
        {user ? "Logout" : "Log In / Sign Up"}
      </Link>
      <div className="w-px h-[30px] bg-white" />
      <Link
        to="/profile"
        className="my-0 mx-4 ease-in duration-200 hover:text-white hover:border-b-orange-400"
      >
        Book Table
      </Link>
    </div>
  </div>
);

DesktopMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func,
};

MobileMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func,
};

DesktopView.propTypes = {
  user: PropTypes.object,
  handleLoginClick: PropTypes.func,
};

MobileView.propTypes = {
  user: PropTypes.object,
  handleLoginClick: PropTypes.func,
  setToggleMenu: PropTypes.func,
};

const Navbar = () => {
  const { current: user, logout } = useUser();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLoginClick = () => {
    if (user) {
      logout();
    }
  };

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

      <DesktopView user={user} handleLoginClick={handleLoginClick} />

      <div className="md:flex xl:hidden" data-aos="fade-up">
        <GiHamburgerMenu
          color="#ACACAC"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <MobileView
            user={user}
            handleLoginClick={handleLoginClick}
            setToggleMenu={setToggleMenu}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
