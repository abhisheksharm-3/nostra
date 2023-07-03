import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Routes, Route, Link } from "react-router-dom";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="w-full flex justify-between items-center bg-[#090909] text-[#Acacac] lg:py-4 lg:px-8 p-4">
      <div className="flex justify-start items-center">
        <img
          className="w-[110px] lg:w-[190px]"
          src={images.nostra}
          alt="app logo"
        />
      </div>
      <ul className="hidden lg:flex flex-1 justify-center items-center">
        <li className="py-0 px-4 cursor-pointer hover:text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="py-0 px-4 cursor-pointer hover:text-white">
          <a href="#about">About</a>
        </li>
        <li className="py-0 px-4 cursor-pointer hover:text-white">
          <a href="#hmenu">Menu</a>
        </li>
        <li className="py-0 px-4 cursor-pointer hover:text-white">
          <Link to="/services">Our Services</Link>
        </li>
        <li className="py-0 px-4 cursor-pointer hover:text-white">
          <a href="#awards">Awards</a>
        </li>
        <li className="py-0 px-4 cursor-pointer hover:text-white">
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className="hidden xl:flex justify-end items-center">
        <a
          href="#login"
          className="my-0 mx-4 ease-in duration-500 hover:border-b-orange-400"
        >
          Log In / SignUp
        </a>
        <div className="w-px h-[30px] bg-white" />
        <a
          href="#booking"
          className="my-0 mx-4 ease-in duration-500 hover:border-b-orange-400"
        >
          Book Table
        </a>
      </div>
      <div className="md:flex lg:hidden">
        <GiHamburgerMenu
          color="#ACACAC"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="flex flex-col fixed w-full h-screen top-0 left-0 bg-[#090909] ease-in duration-500 z-5 lg:hidden " >
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
                <a href="#about">About</a>
              </li>
              <li className="m-8 cursor-pointer text-orange-400 text-[32px] text-center font-serif hover:text-white">
                <a href="#hmenu">Menu</a>
              </li>
              <li className="m-8 cursor-pointer text-orange-400 text-[32px] text-center font-serif hover:text-white">
                <Link to="/services">Our Services</Link>
              </li>
              <li className="m-8 cursor-pointer text-orange-400 text-[32px] text-center font-serif hover:text-white">
                <a href="#awards">Awards</a>
              </li>
              <li className="m-8 cursor-pointer text-orange-400 text-[32px] text-center font-serif hover:text-white">
                <a href="#contacts">Contact</a>
              </li>
            </ul>
            <div
              className="font-serif text-orange-400 text-[23px] flex justify-center items-center"
              onClick={() => setToggleMenu(false)}
            >
              <a
                href="#login"
                className="my-0 mx-4 ease-in duration-500 hover:border-b-orange-400"
              >
                Log In / SignUp
              </a>
              <div className="w-px h-[30px] bg-white" />
              <a
                href="#booking"
                className="my-0 mx-4 ease-in duration-500 hover:border-b-orange-400"
              >
                Book Table
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
