import React, { useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { images } from "../../constants";
import { v4 as uuidv4 } from 'uuid';
import {account} from "../../appwrite/appwriteConfig"
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false); // State to toggle between signup and login
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const numberInputRef = useRef(null);

  const handleProceed = () => {
    setShowLogin(!showLogin); // Toggle between signup and login
    if (numberInputRef.current) {
      numberInputRef.current.value = "";
    }
  };

  const handleSignup = async(e) => {
    e.preventDefault();
    if (email && name && password) {
      const promise = await account.create(
        uuidv4(),
        email, password, name
      )
      console.log(promise)

      promise.then(
        function(response){
          console.log(response)
          navigate("/profile")
        },
        function(error){
          alert(error.message)
        }
      )
      // You can update your state or perform further actions as needed
    } else {
      console.error("Please fill in all fields.");
    }
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    if (email && password) {
      const promise = await account.createEmailSession(email, password)
      console.log(promise)
      navigate("/profile")
      // You can update your state or perform further actions as needed
    } else {
      console.error("Please enter both email and password.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#090909] h-screen flex items-center justify-center">
        <div className="flex flex-[1.2] flex-col lg:flex-row m-8 lg:m-24 lg:border border-gray-500">
          <div className="lg:w-3/5 bg-[url(./assets/signup2.jpg)] bg-center bg-cover bg-no-repeat w-max-screen">
            <h1 className="font-serif text-center text-orange-500 text-[40px] lg:text-[90px] font-bold capitalize leading-10 lg:leading-[75px] tracking-widest my-32 lg:my-48">
              Welcome to Nostra
            </h1>
          </div>
          <div className="lg:w-2/5 flex items-center justify-center flex-col bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            {showLogin ? (
              <>
                <h1 className="font-serif text-white text-[23px] font-bold capitalize leading-7 tracking-wider mt-16 mb-6 text-center">
                  Login
                </h1>
                <div className="flex flex-col items-center">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="bg-transparent border border-orange-400 font-serif py-2 px-4 text-[#ACACAC]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="bg-transparent border border-orange-400 font-serif py-2 px-4 text-[#ACACAC] mt-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none mt-8 ease-in duration-200 hover:bg-orange-400"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
                <p className="mt-4 cursor-pointer text-blue-500" onClick={handleProceed}>
                  Not registered? Sign up here.
                </p>
              </>
            ) : (
              <>
                <h1 className="font-serif text-white text-[23px] font-bold capitalize leading-7 tracking-wider mt-16 mb-6 text-center">
                  Sign Up
                </h1>
                <div className="flex flex-col items-center">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="bg-transparent border border-orange-400 font-serif py-2 px-4 text-[#ACACAC]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="bg-transparent border border-orange-400 font-serif py-2 px-4 text-[#ACACAC] mt-4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="bg-transparent border border-orange-400 font-serif py-2 px-4 text-[#ACACAC] mt-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none mt-8 ease-in duration-200 hover:bg-orange-400"
                    onClick={handleSignup}
                  >
                    Sign Up
                  </button>
                </div>
                <p className="mt-4 cursor-pointer text-blue-500" onClick={handleProceed}>
                  Already registered? Log in here.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
